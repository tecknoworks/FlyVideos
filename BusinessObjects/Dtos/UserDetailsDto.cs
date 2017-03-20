using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObjects.Dtos
{
    public class UserDetailsDto
    {
        public string IdUser { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string Country { get; set; }
        [Required]
        public long Account_No { get; set; }
        [Required]
        public long Phone_No { get; set; }
        public string FileName { get; set; }
        public IList<DroneDto> Drones { get; set; }

        public UserDetailsDto()
        {
            Drones = new List<DroneDto>();
        }
    }
}
