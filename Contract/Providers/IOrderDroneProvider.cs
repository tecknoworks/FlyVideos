using BusinessObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contract.Providers
{
    public interface IOrderDroneProvider
    {
        void Insert(DroneDto drone, int orderId);
    }
}
