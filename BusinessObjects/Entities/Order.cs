using BusinessObjects;
using BusinessObjects.Entities;
using BusinessObjects.Identity;
using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObjects
{
    public class Order
    {
        [Key]
        public int? Id { get; set; }
        public string UserId { get; set; }
        public DateTime OrderDate { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public long Phone_No { get; set; }
        public DateTime? RentalPeriod1 { get; set; }
        public DateTime? RentalPeriod2 { get; set; }
        public float Tariff { get; set; }
        public bool Active { get; set; }
        public virtual ApplicationUser User { get; set; }
        public virtual ICollection<Drone> Drones { get; set; }
    }
}
