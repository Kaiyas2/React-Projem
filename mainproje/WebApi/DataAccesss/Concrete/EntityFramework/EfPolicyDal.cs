﻿using Core.DataAccess.EntityFramework;
using DataAccesss.Abstract;
using DataAccesss.Concrete.EntityFramework.Contexts;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccesss.Concrete.EntityFramework
{
    public class EfPolicyDal:EfEntityRepositoryBase<Policy,ProjeContext>,IPolicyDal
    {

    }
}
