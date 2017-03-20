using BusinessObjects;
using BusinessObjects.Dtos;
using BusinessObjects.Entities;
using BusinessObjects.Identity;
using Contract.Providers;
using ImlpRepository.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Providers
{
    public class UserDetailsProvider : IUserDetailsProvider
    {
        private IRepository<UserDetails> _detailsRepository { get; set; }
        private IRepository<ApplicationUser> _userRepository { get; set; }
        public UserDetailsProvider(IRepository<UserDetails> detailsRepository, IRepository<ApplicationUser> userRepository)
        {
            _detailsRepository = detailsRepository;
            _userRepository = userRepository;
        }

        public IEnumerable<UserDetailsDto> GetAll()
        {
            var result = _detailsRepository.GetAll().ToUserDetailsDtos();
            return result;
        }

        public UserDetailsDto GetById(int id)
        {
            var result = _detailsRepository.GetById(id);
            UserDetailsDto rezz = UserDetailsMapper.ToUserDetailsDto(result);
            return rezz;
        }

        public UserDetailsDto GetByIdUser(string id)
        {
            var result = _userRepository.GetById(id);
            var drones = result.Orders.SelectMany(it => it.Drones).ToDroneDtos().ToList();;
            var rez = result.UserDtails;
            UserDetailsDto userDetails = UserDetailsMapper.ToUserDetailsDto(rez);
            userDetails.Drones = drones;
            return userDetails;
        }

        public void Delete(int id)
        {
            _detailsRepository.Delete(id);
            _detailsRepository.Save();
        }

        public void Update(UserDetailsDto dto)
         { 
            var dbUser = _userRepository.GetById(dto.IdUser);
            UserDetails entity = _detailsRepository.GetById(dbUser.UserDtails.Id);
            UserDetails entity1 = UserDetailsMapper.FromUserDetailsDto(dto, entity);

            _detailsRepository.Update(entity1);
            _detailsRepository.Save();
        }

        public string UploadPhoto(string userId)
        {
            var dbUser = _userRepository.GetById(userId);
            var userDetails = _detailsRepository.GetById(dbUser.UserDtails.Id);
            userDetails.Photo = "/locker/" + dbUser.UserName + ".jpg"; ;

            _detailsRepository.Update(userDetails);
            _detailsRepository.Save();

            return dbUser.UserName;
        }

        public UserDetailsDto GetByUsername(string username)
        {
            var dbUsers = _userRepository.GetAll().Where(it => it.Email.Contains(username));
            UserDetailsDto userDetails = null;
            foreach (var dbUser in dbUsers)
            {
                var drones = dbUser.Orders.SelectMany(it => it.Drones).ToDroneDtos().ToList(); ;
                var rez = dbUser.UserDtails;
                userDetails = UserDetailsMapper.ToUserDetailsDto(rez);
                userDetails.Drones = drones;
            }
            
            return userDetails;
        }
    }
}

