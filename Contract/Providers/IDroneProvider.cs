using BusinessObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BusinessObjects.Dtos;

namespace Contract.Providers
{
    public interface IDroneProvider
    {
        IEnumerable<DroneDto> GetAll();
        IEnumerable<DroneDto> GetAllByOrderId(int id);
        DroneDto GetById(int id);
        void Insert(DroneDto drona);
        void Save(DroneDto drona);
        void Update(DroneDto drona);
        void Delete(int id);
       IEnumerable<DroneDto> GetDronesPage(FilterPageDto filter);
    }
}
