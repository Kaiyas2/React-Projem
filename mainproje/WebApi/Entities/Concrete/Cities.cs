using Core.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Concrete
{
    public class Cities:IEntity
    {
        [Key]
        public int City_id { get; set; }
        public string City_name { get; set; }

    }
}
