using Core.Utilities.Results;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Abstract
{
    public interface ICustomerService
    {
         IDataResult<List<Customer>> GetList();
        IResult add(Customer customer);
        IDataResult<Customer> GetById(double customerTc);

    }
}
