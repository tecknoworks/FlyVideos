using BusinessObjects.Entities;
using BusinessObjects.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObjects
{
    public class OrderDto
    {
        public int? Id { get; set; }
        [Required]
        public string UserId { get; set; }
        public DateTime OrderDate { get; set; }
        [Required]
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public long Phone_No { get; set; }
        public DateTime? RentalPeriod1 { get; set; }
        [Required]
        public DateTime? RentalPeriod2 { get; set; }
        [Required]
        public float Tariff { get; set; }
        public List<int> DroneIds { get; set; }
    }
}
