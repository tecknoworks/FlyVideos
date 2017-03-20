using BusinessObjects.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObjects.Dtos
{
    public class UserDto
    {
        public virtual string Email { get; set; }
        public virtual string Id { get; set; }
        public virtual string PhoneNumber { get; set; }
        public virtual string UserName { get; set; }
        public virtual string Password { get; set; }
        public UserDetails UserDtails { get; set; }
    }
}
