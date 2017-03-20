using BusinessObjects;
using BusinessObjects.Dtos;
using BusinessObjects.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contract.Providers
{
    public interface IOrderProvider
    {
        OrderDto GetById(int id);
        void Insert(OrderDto order);
        void Save(OrderDto order);
        void Update(OrderDto order);
        void Delete(int id);
        IEnumerable<OrderDto> GetAll(string user);
        IEnumerable<OrderDto> GetAllOrders(int droneId);
    }
}
