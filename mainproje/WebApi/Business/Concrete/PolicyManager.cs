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
    public class PolicyManager : IPolicyService
    {
      private  IPolicyDal _policyDal;

        public PolicyManager(IPolicyDal policyDal)
        {
            _policyDal = policyDal;
        }

        public IResult add(Policy policy)
        {
            try
            {
                _policyDal.Add(policy);
                return new SuccessResult("Poliçe Kaydedildi");
            }
            catch (Exception ex)
            {

                return new ErrorResult("Poliçe Kaydedilmedi");
            }
        }

        public IDataResult<List<Policy>> GetList()
        {
            return new SuccessDataResult<List<Policy>>(_policyDal.GetList().ToList());
        }

        public IDataResult<Policy> GetById(double customerTc)
        {
            return new SuccessDataResult<Policy>(_policyDal.Get(p => p.customerTc == customerTc));
        }
    }
}
