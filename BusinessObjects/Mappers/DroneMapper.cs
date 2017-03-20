using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObjects
{
    public static class DroneMapper
    {
        public static Drone FromDroneDto(DroneDto dto,Drone entity)
        {
            entity.Name = dto.Name;
            entity.Description = dto.Description;
            entity.Price = dto.Price;
            entity.BigImage = "/Content/Theme/img/" + dto.BigImage;
            entity.OneImage = "/Content/Theme/img/" + dto.OneImage;
            entity.TwoImage = "/Content/Theme/img/" + dto.TwoImage;
            return entity;
        }

        public static DroneDto ToDroneDto(Drone entity)
        {
            var dto = new DroneDto();
            dto.Id = entity.Id;
            dto.Name = entity.Name;
            dto.Description = entity.Description;
            dto.Price = entity.Price;
            dto.OneImage = "/Content/Theme/img/" +  entity.OneImage;
            dto.TwoImage = "/Content/Theme/img/" +  entity.TwoImage;
            dto.BigImage = "/Content/Theme/img/" +  entity.BigImage;
            
            return dto;
        }

        public static IEnumerable<DroneDto> ToDroneDtos(this IEnumerable<Drone> entities)
        {
            var results = entities.Select(it =>
            new DroneDto() {
                Id = it.Id,
                Name = it.Name,
                Description = it.Description,
                Price = it.Price,
                OneImage = "/Content/Theme/img/" +  it.OneImage,
                TwoImage = "/Content/Theme/img/" +  it.TwoImage,
                BigImage = "/Content/Theme/img/" +  it.BigImage
            });

            return results;
        }
    }
}
