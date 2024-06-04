using Core.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Concrete
{
    public class Payment:IEntity
    {
        [Key]
        public float customerCardNo { get; set; }
        public string customerCardName { get; set; } = string.Empty;
        public int cardCvv { get; set; }



    }
}
