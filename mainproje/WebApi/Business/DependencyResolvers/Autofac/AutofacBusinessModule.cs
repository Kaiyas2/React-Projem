using Autofac;
using Business.Abstract;
using Business.Concrete;
using DataAccesss.Abstract;
using DataAccesss.Concrete.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.DependencyResolvers.Autofac
{
    public class AutofacBusinessModule:Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<CustomerManager>().As<ICustomerService>();
            builder.RegisterType<EfCustomerDal>().As<ICustomerDal>();

            builder.RegisterType<PolicyManager>().As<IPolicyService>();
            builder.RegisterType<EfPolicyDal>().As<IPolicyDal>();

            builder.RegisterType<CitiesManager>().As<ICityService>();
            builder.RegisterType<EfCityDal>().As<ICityDal>();

            builder.RegisterType<NetworkManager>().As<INetworkService>();
            builder.RegisterType<EfNetworkDal>().As<INetworkDal>();

            builder.RegisterType<PaymentManager>().As<IPaymentService>();
            builder.RegisterType<EfPaymentDal>().As<IPaymentDal>();
        }
    }
}
