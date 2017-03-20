using Contract.Providers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BusinessObjects.Dtos;
using ImlpRepository.Repository;
using BusinessObjects;
using BusinessObjects.Mappers;

namespace BL.Providers
{
    public class AccessoryProvider : IAccessoryProvider
    {
        private IRepository<Accessory> _accessoryRepository;
        public AccessoryProvider(IRepository<Accessory> accessoryRepository)
        {
            this._accessoryRepository = accessoryRepository;
        }
        public IEnumerable<AccessoryDto> GetAll()
        {
            IEnumerable<Accessory> accessories = this._accessoryRepository.GetAll();
            var accessroryDtos = accessories.ToAccessoryDtos();
            return accessroryDtos;
        }
    }
}
