using Core.Utilities.Results;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Abstract
{
    public interface IPolicyService
    {
        IDataResult<List<Policy>> GetList();

        IDataResult<Policy> GetById(double customerTc);

        IResult add(Policy policy);
    }
}
