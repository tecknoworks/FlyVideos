using BusinessObjects.Dtos;
using Contract.Providers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FlyVideos.Controllers
{
    public class AccessoryController : BaseController
    {
        private IAccessoryProvider _provider;
        public AccessoryController()
        {
            this._provider = this.DIContainer.Resolve<IAccessoryProvider>();
        }
        /// <summary>
        /// Get all accessories
        /// </summary>
        /// <returns>All accessories</returns>
        public IEnumerable<AccessoryDto> Get()
        {
            var result = _provider.GetAll();
            return result;
        }
    }
}
