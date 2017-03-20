using BusinessObjects;
using BusinessObjects.Dtos;
using BusinessObjects.Entities;
using BusinessObjects.Identity;
using BusinessObjects.Mappers;
using Contract.Providers;
using DAL;
using ImlpRepository.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Providers
{
   public class OrderProvider : IOrderProvider
    {
        private IRepository<Order> _orderRepository { get; set; }
        private IRepository<ApplicationUser> _userRepository { get; set; }
        private IRepository<Drone> _droneRepository { get; set; }

        public OrderProvider(IRepository<Order> orderRepository, IRepository<ApplicationUser> userRepository, IRepository<Drone> droneRepository)
        {
            _orderRepository = orderRepository;
            _userRepository = userRepository;
            _droneRepository = droneRepository;
        }
        public IEnumerable<OrderDto> GetAll(string userId)
        {
            //ar context = new ApplicationDbContext();
            var dbUser = _userRepository.GetById(userId);
            //var orders = _orderRepository.GetAll().Where(it => it.UserId == dbUser.Id);
            return dbUser.Orders.ToOrderDtos();
        }
        public IEnumerable<OrderDto> GetAllOrders(int droneId)
        {
            var drone = _droneRepository.GetById(droneId);
            return drone.Orders.ToOrderDtos();
        }
        public OrderDto GetById(int id)
        {
            var result = _orderRepository.GetById(id);
            OrderDto rezz = OrderMapper.ToOrderDto(result);
            return rezz;
        }

        //public void Insert(OrderDto order)
        //{
        //    Order ent = new Order();
        //    Order entity = OrderMapper.FromOrderDto(order, ent);
        //    var dbUser = _userRepository.GetById(order.UserId);
        //    _orderRepository.Insert(entity);
        //    _orderRepository.Save();
        //}

        public void Insert(OrderDto orderDto)
        {
            Order order = new Order();
            Order entity = OrderMapper.FromOrderDto(orderDto, order);
            entity.Active = true;
            entity.Drones = new List<Drone>();
            var dbUser = _userRepository.GetById(orderDto.UserId);
            dbUser.Orders.Add(entity);
            List<Drone> selectedDrones = _droneRepository.GetAll().Where(it => orderDto.DroneIds.Contains(it.Id)).ToList();
            foreach (var selectedDrone in selectedDrones)
            {
                entity.Tariff = entity.Tariff + selectedDrone.Price;
                //    OrderDrone orderDrone = new OrderDrone();
                //    orderDrone.Order = order;
                //    orderDrone.Drone = selectedDrone;
                //    _orderdroneRepository.Insert(orderDrone);
                entity.Drones.Add(selectedDrone);
            }

            //entity.Drones = selectedDrones;
            _orderRepository.Insert(entity);
            _orderRepository.Save();
        }

        public void Update(OrderDto order)
        {
            Order ent = new Order();
            Order rezz = OrderMapper.FromOrderDto(order, ent);
            rezz.UserId = order.UserId;
            _orderRepository.Update(rezz);
            _orderRepository.Save();
        }

        public void Delete(int id)
        {
            _orderRepository.Delete(id);
            _orderRepository.Save();
        }

        public void Save(OrderDto dto)
        {
            Order entity;
            if (!dto.Id.HasValue)
            {
                entity = new Order();
            }
            else
            {
                entity = _orderRepository.GetById(dto.Id.Value);
            }

            OrderMapper.FromOrderDto(dto, entity);
            if (!dto.Id.HasValue)
            {
                _orderRepository.Insert(entity);
            }
            else
            {
                _orderRepository.Update(entity);
            }

            _orderRepository.Save();
        }
    }
}
