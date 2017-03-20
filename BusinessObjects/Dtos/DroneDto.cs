using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObjects
{
    public class DroneDto
    {

        public int? Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public int Price { get; set; }
        [Required]
        public bool Advertise { get; set; }
        public string BigImage { get; set; }
        public string OneImage { get; set; }
        public string TwoImage { get; set; }
    }
}
