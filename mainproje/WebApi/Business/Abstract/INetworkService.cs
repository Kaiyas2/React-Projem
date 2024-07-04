using Core.Utilities.Results;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Abstract
{
    public interface INetworkService
    {
        IDataResult<List<Network>> GetList();
        IResult add(Network network);

        IDataResult<Network> GetById(int Network_Id);

    }
}
