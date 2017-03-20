using Contract.Providers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FlyVideos.Controllers
{
    public class HomeController : Controller
    {
        protected DIContainer DIContainer;
        private IDroneProvider _provider;
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";
            DIContainer = DIContainer.GetInstance();
            this._provider = this.DIContainer.Resolve<IDroneProvider>();
            var a = this._provider.GetAll();

            return View();
        }
        public ActionResult Register()
        {
            return View();
        }
    }
}
