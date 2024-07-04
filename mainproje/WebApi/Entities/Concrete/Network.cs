using Core.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Concrete
{
    public class Network:IEntity
    {
        [Key]
        public int Network_Id { get; set; }
        public string Network_Name { get; set; }
        public double Bedel { get; set; }

    }
}
