using BusinessObjects;
using BusinessObjects.Dtos;
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
    [RoutePrefix("api/Drone")]
    public class DroneController : BaseController
    {
        private IDroneProvider _provider;

        public DroneController()
        {
            this._provider = this.DIContainer.Resolve<IDroneProvider>();
        }
        /// <summary>
        /// Get all drones
        /// </summary>
        /// <returns>All drones</returns>
        [Route("GetAll")]
        public IEnumerable<DroneDto> GetAll()
        {
            var result = _provider.GetAll();
            return result;
        }
        /// <summary>
        /// Get drones from an existing order
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Route("GetAll/{id}")]
        public IEnumerable<DroneDto> GetAllByOrderId(int id)
        {
            var result = _provider.GetAllByOrderId(id);
            return result;
        }
        /// <summary>
        /// Get a drone by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [ResponseType(typeof(Drone))]
        [Route("Get/{id}")]
        public DroneDto GetById(int id)
        {
            var result = _provider.GetById(id);
            return result;
        }
        /// <summary>
        /// Create a new drone
        /// </summary>
        /// <param name="drona"></param>
        /// <returns></returns>
        [ResponseType(typeof(Drone))]
        [Route("Post")]
        public IHttpActionResult PostDrone(DroneDto drona)
        {
            _provider.Insert(drona);
            return Ok(100);
        }
        /// <summary>
        /// Updates an existing drone
        /// </summary>
        /// <param name="id"></param>
        /// <param name="drona"></param>
        /// <returns></returns>
        [Route("api/Drone/Put/{id}")]
        public IHttpActionResult PutDrone(int id, DroneDto drona)
        {
            _provider.Update(drona);
            return Ok(100);
        }
        /// <summary>
        /// Delete an existing drone
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Route("Delete/{id}")]
        public IHttpActionResult DeleteDrone(int id)
        {
            _provider.Delete(id);
            return Ok(100);
        }
        /// <summary>
        /// Add or update a drone
        /// </summary>
        /// <param name="drona"></param>
        /// <returns></returns>
        [Route("AddOrUpdate")]
        public IHttpActionResult AddOrUpdateDrone(DroneDto drona)
        {
            _provider.Save(drona);
            return Ok(100);
        }
        /// <summary>
        /// Get drones by filters
        /// </summary>
        /// <param name="filter"></param>
        /// <returns></returns>
        [Route("GetByFilter")]
        public IHttpActionResult PostGetDrones(FilterPageDto filter)
        {
            var result = _provider.GetDronesPage(filter);
            return Ok(result);
        }


        //[Route("email")]
        //public IHttpActionResult GetByEmail(string email)
        //{
        //    return Ok(100);
        //}
    }
}
