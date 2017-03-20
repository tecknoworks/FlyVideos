using BusinessObjects.Dtos;
using BusinessObjects.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObjects
{
   public static class UserDetailsMapper
    {
        public static UserDetails FromUserDetailsDto(UserDetailsDto dto,UserDetails entity)
        {
            
            entity.IdUser = dto.IdUser;
            entity.FirstName = dto.FirstName;
            entity.LastName = dto.LastName;
            entity.Address = dto.Address;
            entity.City = dto.City;
            entity.Country = dto.Country;
            entity.Account_No = dto.Account_No;
            entity.Phone_No = dto.Phone_No;
            entity.Photo = "/locker/" + dto.FileName + ".jpg";

            return entity;
        }

        public static UserDetailsDto ToUserDetailsDto(UserDetails entity)
        {
            var dto = new UserDetailsDto();
            dto.IdUser = entity.IdUser;
            dto.FirstName = entity.FirstName;
            dto.LastName = entity.LastName;
            dto.Address = entity.Address;
            dto.City = entity.City;
            dto.Country = entity.Country;
            dto.Account_No = entity.Account_No;
            dto.Phone_No = entity.Phone_No;

            return dto;
        }

        public static IEnumerable<UserDetailsDto> ToUserDetailsDtos(this IEnumerable<UserDetails> entities)
        {
            var results = entities.Select(it =>
            new UserDetailsDto()
            {
                IdUser = it.IdUser,
                FirstName = it.FirstName,
                LastName = it.LastName,
                Address = it.Address,
                City = it.City,
                Country = it.Country,
                Account_No = it.Account_No,
                Phone_No = it.Phone_No
            });

            return results;
        }
    }
}
