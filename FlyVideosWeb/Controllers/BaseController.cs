using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FlyVideos.Controllers
{
    public class BaseController : ApiController
    {
        protected DIContainer DIContainer;
        public BaseController()
        {
            DIContainer = DIContainer.GetInstance();
        }
    }
}
