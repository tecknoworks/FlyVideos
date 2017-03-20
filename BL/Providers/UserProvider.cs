using BusinessObjects;
using BusinessObjects.Dtos;
using BusinessObjects.Entities;
using BusinessObjects.Identity;
using Contract.Providers;
using DAL;
using ImlpRepository.Repository;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace BL.Providers
{
    public class UserProvider : IUserProvider
    {

        private IRepository<ApplicationUser> _userRepository { get; set; }
        public UserProvider(IRepository<ApplicationUser> userRepository)
        {
            _userRepository = userRepository;
        }
        public void AddUserDetails(ApplicationUser user)
        {
            var dbUser = _userRepository.GetById(user.Id);
            dbUser.UserDtails = new UserDetails();
            dbUser.UserDtails.IdUser = user.Id;;
            _userRepository.Save();
        }
    }
}
