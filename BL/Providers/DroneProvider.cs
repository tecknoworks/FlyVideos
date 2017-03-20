using BusinessObjects;
using BusinessObjects.Dtos;
using BusinessObjects.Entities;
using Contract.Providers;
using ImlpRepository.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Providers
{
    public class DroneProvider : IDroneProvider
    {

        private IRepository<Drone> _droneRepository { get; set; }
        private IRepository<Order> _orderRepository { get; set; }
        public DroneProvider(IRepository<Drone> droneRepository, IRepository<Order> orderRepository)
        {
            _droneRepository = droneRepository;
            _orderRepository = orderRepository;
        }

        public IEnumerable<DroneDto> GetAll()
        {
            var result = _droneRepository.GetAll().ToDroneDtos();
            return result;
        }

        public IEnumerable<DroneDto> GetAllByOrderId(int id)
        {
            var dbOrder = _orderRepository.GetById(id);
            return dbOrder.Drones.ToDroneDtos();
        }

        public IEnumerable<DroneDto> GetDronesPage(FilterPageDto filter)
        {
            var droneQuery = _droneRepository.GetAll().AsQueryable();
            if (!string.IsNullOrEmpty(filter.KeyWord))
            {
                droneQuery = droneQuery.Where(it => it.Name.Contains(filter.KeyWord) 
                || it.Description.Contains(filter.KeyWord));
            }

            droneQuery = droneQuery.Skip((filter.PageNumber - 1)*filter.PageSize).Take(filter.PageSize);

            if (!string.IsNullOrEmpty(filter.OrderBy)&& (filter.Descending.HasValue))
            {
                  droneQuery = ((IOrderedQueryable<Drone>)droneQuery).ThenBy(filter.OrderBy, filter.Descending.Value);
            }
            else
            {
                droneQuery = droneQuery.OrderBy(it => it.Name);
            }
            
            return droneQuery.ToDroneDtos();
        }

        public DroneDto GetById(int id)
        {
            var result = _droneRepository.GetById(id);
            DroneDto rezz = DroneMapper.ToDroneDto(result);
            return rezz;
        }

        public void Insert(DroneDto drona)
        {
            Drone ent = new Drone();
            Drone rezz = DroneMapper.FromDroneDto(drona, ent);
            _droneRepository.Insert(rezz);
            _droneRepository.Save();
        }

        public void Update(DroneDto drona)
        {
            Drone ent = new Drone();
            Drone rezz = DroneMapper.FromDroneDto(drona, ent);
            _droneRepository.Update(rezz);
            _droneRepository.Save();
        }

        public void Delete(int id)
        {
            _droneRepository.Delete(id);
            _droneRepository.Save();
        }

        public void Save(DroneDto dto)
        {
            Drone entity;
            if (!dto.Id.HasValue)
            {
                entity = new Drone();
            }
            else
            {
                entity = _droneRepository.GetById(dto.Id.Value);
            }

            DroneMapper.FromDroneDto(dto, entity);
            if (!dto.Id.HasValue)
            {
                _droneRepository.Insert(entity);
            }
            else
            {
                _droneRepository.Update(entity);
            }

            _droneRepository.Save();
        }
    }
}
