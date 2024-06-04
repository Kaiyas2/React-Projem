using Entities.Concrete;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccesss.Concrete.EntityFramework.Contexts
{
    public class ProjeContext:DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=DESKTOP-QT294S4\\MSSQLSERVER02;Initial Catalog=proje.db;Integrated Security=True; TrustServerCertificate=True; UID=dbo;");
        }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Cities> Cities { get; set; }
        public DbSet<Policy> Policies { get; set; }
        public DbSet<Network> Network { get; set; }
        public DbSet<Payment> Payment { get; set; }


    }
}
