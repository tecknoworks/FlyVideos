using BusinessObjects;
using BusinessObjects.Dtos;
using BusinessObjects.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contract.Providers
{
    public interface IUserProvider
    {
       void AddUserDetails(ApplicationUser user);
    }
}
