using BusinessObjects.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contract.Providers
{
    public interface IUserDetailsProvider
    {
        IEnumerable<UserDetailsDto> GetAll();
        UserDetailsDto GetById(int id);
        void Update(UserDetailsDto userdet);
        void Delete(int id);
        UserDetailsDto GetByIdUser(string id);
        string UploadPhoto(string userId);
        UserDetailsDto GetByUsername(string username);
    }
}
