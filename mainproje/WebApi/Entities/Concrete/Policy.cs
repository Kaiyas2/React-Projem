using Core.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Concrete
{
    public class Policy:IEntity
    {
        [Key]

       
        public double customerTc { get; set; }
        public string customerName { get; set; } = string.Empty;
        public double customerNumber { get; set; }
        public string customerMail { get; set; } = string.Empty;
        public string customerAdress { get; set; } = string.Empty;
        public string customerGender { get; set; } = string.Empty;
        public string customerFamilyMember { get; set; } = string.Empty;
        public string customer_city { get; set; } = string.Empty;
        public int customer_age { get; set; }
        public DateOnly customerBirth { get; set; }

        public DateOnly cardSkt { get; set; }

        public double customerCardNo { get; set; }
        public string customerCardName { get; set; } = string.Empty;
        public int cardCvv { get; set; }





    }
}
