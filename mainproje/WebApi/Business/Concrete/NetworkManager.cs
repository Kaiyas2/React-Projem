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
    public class NetworkManager : INetworkService
    {
       private INetworkDal _networkdal;

        public NetworkManager(INetworkDal networkdal)
        {
            _networkdal = networkdal;
        }

        public IResult add(Network network)
        {
            try
            {
                _networkdal.Add(network);
                return new SuccessResult("Network Kaydedildi");
            }
            catch (Exception ex) {

                return new ErrorResult("Network Kaydedilmedi");
            }
              
        }
        public IDataResult<List<Network>> GetList()
        {
            return new SuccessDataResult<List<Network>>(_networkdal.GetList().ToList());
        }
    }
}
