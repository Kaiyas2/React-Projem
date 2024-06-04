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
    public class CitiesManager:ICityService
    {
       private ICityDal _citydal;

       

        public CitiesManager(ICityDal citydal)
        {
            _citydal = citydal;
        }

        public IResult add(Cities cities)
        {
            try
            {
                _citydal.Add(cities);
                return new SuccessResult("Müşteri Başarıyla Kaydedildi");
            }
            catch (Exception ex)
            {
                return new ErrorResult("Müşteri Kaydedilemedi");
            }

        }

      

        public IDataResult<List<Cities>> GetList()
        {
            return new SuccessDataResult<List<Cities>>(_citydal.GetList().ToList());
        }
    }
}
