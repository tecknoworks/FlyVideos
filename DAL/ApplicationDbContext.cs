using BusinessObjects;
using BusinessObjects.Entities;
using BusinessObjects.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext()
            : base("MainConnection")
        {
            this.Configuration.LazyLoadingEnabled = true;
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<ApplicationDbContext, DAL.Migrations.Configuration>("MainConnection"));
        }

        public DbSet<Drone> Drones { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Accessory> Accessories { get; set; }
        public DbSet<UserDetails> UserDetails { get; set; }
       
        public DbSet<Client> Clients { get; set; }
        public DbSet<RefreshToken> RefreshTokens { get; set; }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        //    modelBuilder.Entity<Drone>()
        //       .HasMany<Order>(s => s.Orders)
        //       .WithMany(c => c.Drones)
        //       .Map(cs =>
        //       {
        //           cs.MapLeftKey("DroneRefId");
        //           cs.MapRightKey("OrderRefId");
        //           cs.ToTable("DroneOrder");
        //       });

        }
    }
}
