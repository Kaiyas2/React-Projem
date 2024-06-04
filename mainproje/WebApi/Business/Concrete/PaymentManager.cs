using Business.Abstract;
using Core.Utilities.Results;
using DataAccesss.Abstract;
using DataAccesss.Concrete.EntityFramework;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Business.Concrete
{
    public class PaymentManager : IPaymentService
    {
        private IPaymentDal _paymentdal;

        public PaymentManager(IPaymentDal paymentdal)
        {
            _paymentdal = paymentdal;
        }

        public IResult add(Payment payment)
        {
            try
            {
               _paymentdal.Add(payment);
                return new SuccessResult("Ödeme Yöntemi Kaydedildi");
            }
            catch (Exception ex)
            {

                return new ErrorResult("Ödeme Yöntemi Kaydedilmedi");
            }
        }
    }
}
