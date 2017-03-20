using BusinessObjects.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObjects
{
    public class Drone
    {

        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Price { get; set; }
        public bool Advertise { get; set; }
        public bool Active { get; set; }
        public string BigImage { get; set; }
        public string OneImage { get; set; }
        public string TwoImage { get; set; }
        public virtual ICollection<Order> Orders { get; set; }

    }
}
