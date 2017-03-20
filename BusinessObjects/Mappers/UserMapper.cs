using BusinessObjects.Dtos;
using BusinessObjects.Entities;
using BusinessObjects.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObjects
{
    public static class UserMapper
    {
        public static ApplicationUser FromUserDto(UserDto dto)
        {
            ApplicationUser entity = new ApplicationUser();
            entity.UserDtails = dto.UserDtails;
            entity.UserName = dto.UserName;
            entity.Email = dto.Email;
            entity.PhoneNumber = dto.PhoneNumber;
            entity.Id = dto.Id;

            return entity;
        }

        public static UserDto ToUserDto(ApplicationUser entity)
        {
            var dto = new UserDto();

            dto.UserDtails = entity.UserDtails;
            dto.Id = entity.Id;
            dto.UserName = entity.UserName;
            dto.PhoneNumber = entity.PhoneNumber;
            dto.Email = entity.Email;

            return dto;
        }

        public static IEnumerable<UserDto> ToUserDtos(this IEnumerable<ApplicationUser> entities)
        {
            var results = entities.Select(it =>
            new UserDto()
            {
                UserDtails = it.UserDtails,
                UserName = it.UserName,
                Id = it.Id,
                PhoneNumber = it.PhoneNumber,
                Email = it.Email
            });

            return results;
        }
    }
}
