using BusinessObjects;
using BusinessObjects.Dtos;
using BusinessObjects.Entities;
using BusinessObjects.Identity;
using Contract.Providers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace FlyVideos.Controllers
{
    [RoutePrefix("api/Order")]
    public class OrderController : BaseController
    {
        private IOrderProvider _provider;

        public OrderController()
        {
            this._provider = this.DIContainer.Resolve<IOrderProvider>();
        }
        /// <summary>
        /// Get all orders
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
         [Route("orders")]
        public IEnumerable<OrderDto> GetAll(string userId)
        {
            var result = _provider.GetAll(userId);
            return result;
        }
        [Route("orders")]
        public IEnumerable<OrderDto> GetAllOrders(int droneId)
        {
            var result = _provider.GetAllOrders(droneId);
            return result;
        }
        /// <summary>
        /// Get an order by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Route("Id")]
        public OrderDto GetById(int id)
        {
            var result = _provider.GetById(id);
            return result;
        }
        /// <summary>
        /// Post a new order
        /// </summary>
        /// <param name="order"></param>
        [Route("UserId")]
        [ResponseType(typeof(Order))]
        [Route("OrderDto")]
        public void PostOrder(OrderDto order)
        {
            _provider.Insert(order);
        }
        /// <summary>
        /// Put an order
        /// </summary>
        /// <param name="order"></param>
        [Route("Id/OrderDto")]
        public void PutOrder(OrderDto order)
        {
            _provider.Update(order);
        }
        /// <summary>
        /// Delete an existing order
        /// </summary>
        /// <param name="id"></param>
        [Route("Id")]
        public void DeleteOrder(int id)
        {
            _provider.Delete(id);
        }
        /// <summary>
        /// Add or update an order
        /// </summary>
        /// <param name="order"></param>
        public void AddOrUpdateOrder(OrderDto order)
        {
            _provider.Save(order);
        }
    }
}
