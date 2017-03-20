using BL.Providers;
using BusinessObjects;
using BusinessObjects.Entities;
using BusinessObjects.Identity;
using Contract.Providers;
using FlyVideos.Controllers;
using ImlpRepository.Repository;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Practices.Unity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FlyVideos
{ 
   
    public class DIContainer
    {
        private static DIContainer _instance;
        private UnityContainer Container;

        private DIContainer()
        {
            Container = new UnityContainer();
        }
        
        public static DIContainer GetInstance()
        {
            if (_instance == null)
            {
                _instance = new DIContainer();
                _instance.RegisterTypes(_instance);
            }

            return _instance;
        }

        private void RegisterTypes(DIContainer instance)
        {
            Register<IDroneProvider, DroneProvider>();
            Register<IRepository<Drone>, Repository<Drone>>();
            Register<IOrderProvider, OrderProvider>();
            Register<IRepository<Order>, Repository<Order>>();
            Register<IRepository<Accessory>, Repository<Accessory>>();
            Register<IAccessoryProvider, AccessoryProvider>();
            Register<IUserDetailsProvider, UserDetailsProvider>();
            Register<IRepository<UserDetails>, Repository<UserDetails>>();
            Register<IUserProvider, UserProvider>();
            Register<IRepository<ApplicationUser>, Repository<ApplicationUser>>();
        }
      
        public void Register<Interface, Implementation>() where Implementation : Interface
        {
            Container.RegisterType<Interface, Implementation>();
        }
       
        public Interface Resolve<Interface>()
        {
            return Container.Resolve<Interface>();
        }
    }
}