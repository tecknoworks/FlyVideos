using BusinessObjects.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contract.Providers
{
    public interface IAccessoryProvider
    {
        IEnumerable<AccessoryDto> GetAll();
    }
}
