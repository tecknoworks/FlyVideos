using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObjects
{
    public static class OrderMapper
    {
        public static Order FromOrderDto(OrderDto dto, Order entity)
        {
            entity.UserId = dto.UserId;
            entity.OrderDate = dto.OrderDate;
            entity.FirstName = dto.FirstName;
            entity.LastName = dto.LastName;
            entity.Address = dto.Address;
            entity.City = dto.City;
            entity.Country = dto.Country;
            dto.Phone_No = dto.Phone_No;
            entity.RentalPeriod1 = dto.RentalPeriod1;
            entity.RentalPeriod2 = dto.RentalPeriod2;;
            return entity;
        }

        public static OrderDto ToOrderDto(Order entity)
        {
            var dto = new OrderDto();
            dto.UserId = entity.UserId;
            dto.OrderDate = entity.OrderDate;
            dto.FirstName = entity.FirstName;
            dto.LastName = entity.LastName;
            dto.Address = entity.Address;
            dto.City = entity.City;
            dto.Country = entity.Country;
            dto.Phone_No = entity.Phone_No;
            dto.RentalPeriod1 = entity.RentalPeriod1;
            dto.RentalPeriod2 = entity.RentalPeriod2;
            dto.Tariff = entity.Tariff;

            return dto;
        }

        public static IEnumerable<OrderDto> ToOrderDtos(this IEnumerable<Order> entities)
        {
            var results = entities.Select(it =>
            new OrderDto()
            {
                UserId = it.UserId,
                OrderDate = it.OrderDate,
                FirstName = it.FirstName,
                LastName = it.LastName,
                Address = it.Address,
                City = it.City,
                Country = it.Country,
                Phone_No = it.Phone_No,
                RentalPeriod1 = it.RentalPeriod1,
                RentalPeriod2 = it.RentalPeriod2,
                Tariff = it.Tariff
            });

            return results;
        }
    }
}