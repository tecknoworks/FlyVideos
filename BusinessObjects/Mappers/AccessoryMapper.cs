using BusinessObjects.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObjects.Mappers
{
    public static class AccessoryMapper
    {
        public static IEnumerable<AccessoryDto> ToAccessoryDtos(this IEnumerable<Accessory> entities)
        {
            var results = entities.Select(it =>
            new AccessoryDto()
            {
                Id = it.Id,
                Name = it.Name,
                Description = it.Description,
                Price = it.Price
            });

            return results;
        }
    }
}
