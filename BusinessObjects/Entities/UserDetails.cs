using BusinessObjects.Identity;
using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObjects.Entities
{
    public class UserDetails
    {
        [Key]
        public int? Id { get; set; }
        public string IdUser { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public long Account_No { get; set; }
        public long Phone_No { get; set; }
        public bool Active { get; set; }
        public string Photo { get; set; }
    }
}
