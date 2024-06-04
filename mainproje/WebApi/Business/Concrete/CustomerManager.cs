using Business.Abstract;
using Core.Utilities.Results;
using DataAccesss.Abstract;
using DataAccesss.Concrete.EntityFramework;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Concrete
{
    public class CustomerManager : ICustomerService
    {
        private ICustomerDal _customerDal;


        public CustomerManager(ICustomerDal customerDal)
        {
            _customerDal = customerDal;
        }
        public IResult add(Customer customer)
        {
            try
            {
              _customerDal.Add(customer);
            return new SuccessResult("Müşteri Başarıyla Kaydedildi");
            }
            catch (Exception ex)
            {
                return new ErrorResult("Müşteri Kaydedilemedi");
            }
           
        }

        public IDataResult<Customer> GetById(double customerTc)
        {
            return new SuccessDataResult<Customer>(_customerDal.Get(p=>p.customerTc==customerTc)); 
        }

        public IDataResult< List<Customer>> GetList()
        {
            return new SuccessDataResult<List<Customer>>(_customerDal.GetList().ToList());     
        }
    }
}
