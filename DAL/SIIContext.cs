using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FlyVideos
{
    public class SIIContext
    {
        private static SIIContext _instance;
        private ApplicationDbContext context;

        private SIIContext()
        {
            context = new ApplicationDbContext();
        }

        public static SIIContext GetInstance()
        {
            if (_instance == null)
            {
                _instance = new SIIContext();
            }

            return _instance;
        }

        public ApplicationDbContext GetContext()
        {
            return context;
        }
    }
}