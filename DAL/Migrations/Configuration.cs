namespace DAL.Migrations
{
    using BusinessObjects;
    using BusinessObjects.Entities;
    using FlyVideos;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using System.Runtime.Remoting.Messaging;

    public sealed class Configuration : DbMigrationsConfiguration<ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
            AutomaticMigrationDataLossAllowed = true;
            ContextKey = "DAL.ApplicationDbContext";
        }
    

        protected override void Seed(ApplicationDbContext context)
        {
            IList<Drone> defaultStandards = new List<Drone>();

            defaultStandards.Add(new Drone() { Name = "DJI Phantom 4", Description = "Drona DJI PHANTOM 4 complet echipata (camera 4K)", Price = 650, BigImage = "product1_big.jpg", OneImage = "product1.jpg", TwoImage = "product1_2.jpg" });
            defaultStandards.Add(new Drone() { Name = "DJI Inspire 1", Description = "Filmare 4K si fotografii de 12Mpx", Price = 500, BigImage = "product2_big.jpg", OneImage = "product2.jpg", TwoImage = "product2_2.jpg" });
            defaultStandards.Add(new Drone() { Name = "DJI Phantom 2", Description = "Multicopterul DJI Phantom 2 are greutate redusa (1000g), dimensiuni compacte si este simplu de transportat si operat prin intermediul telecomenzii funcionale de la 1000m.", Price = 600, BigImage = "product3_big.jpg", OneImage = "product3.jpg", TwoImage = "product3_2.jpg" });
            defaultStandards.Add(new Drone() { Name = "Drona Cinestar", Description = "Drona Cinestar 8 reprezinta cel mai performant echipament pentru filmare aeriana cu capacitate maxima de ridicare.", Price = 850, BigImage = "product4_big.jpg", OneImage = "product4.jpg", TwoImage = "product4_2.jpg" });
            defaultStandards.Add(new Drone() { Name = "DJI Phantom 3", Description = "Sitemul este compus din drona (quadcopter), cap gimbal pe 3 axe stabilizat, camera video 4K si telecomanda cu sistem de monitorizare live.", Price = 650, BigImage = "product5_big.jpg", OneImage = "product5.jpg", TwoImage = "product5_2.jpg" });
            defaultStandards.Add(new Drone() { Name = "Drona Parrot Cargo", Description = "Robusta si rezistenta la socuri, aceasta drone unica poate fi personalizata instant. Lasa-ti imaginatia sa zboare gratuit! Distanta maxima de operare: Pana la 20m", Price = 600, BigImage = "product6_big.jpg", OneImage = "product6.jpg", TwoImage = "product6_2.jpg" });
            defaultStandards.Add(new Drone() { Name = "Minidrona Parrot Cargo", Description = "Distanta maxima de operare: 20 m,Conectivitate: Bluetooth® Smart/ Bluetooth V4.0 BLE", Price = 650, BigImage = "product7_big.jpg", OneImage = "product7.jpg", TwoImage = "product7_2.jpg" });
            defaultStandards.Add(new Drone() { Name = "Drona Parrot Rolling Spider", Description = "Conectivitate: Bluetooth 4.0 LE Alte specificatii: Raza de actiune: pana la 20m", Price = 760, BigImage = "product8_big.jpg", OneImage = "product8.jpg", TwoImage = "product8_2.jpg" });
            defaultStandards.Add(new Drone() { Name = "Drona Horizon Hobby Blade", Description = "Camera CGO3 4K", Price = 900, BigImage = "product9_big.jpg", OneImage = "product9.jpg", TwoImage = "product9_2.jpg" });
            defaultStandards.Add(new Drone() { Name = "Drona Parrot Bepop", Description = "GPS: GNSS (GPS + GLONASS)Conectivitate: Wi - Fi(MIMO) Senzori Accelerometru 3 Axis Gyroscope 3 Axis Magnetometru 3 Axis Ultrasunet Optic(Optical Flow)", Price = 850, BigImage = "product10_big.png", OneImage = "product10.jpg", TwoImage = "product10_2.jpg" });
            defaultStandards.Add(new Drone() { Name = "Drona Walkera Tali H500", Description = "Hexacopter cu radiocomanda Devo F12E si Gimbal G-3D(Varianta pentru GoPro)", Price = 850, BigImage = "product1_big.jpg", OneImage = "product1.jpg", TwoImage = "product1_2.jpg" });
            defaultStandards.Add(new Drone() { Name = "Walkera Voyager 3", Description = " Drona cu Gimbal 3D si camera 4K - Cea mai performanta drona de la Walkera, Dsign modular ", Price = 730, BigImage = "product2_big.jpg", OneImage = "product2.jpg", TwoImage = "product2_2.jpg" });
            defaultStandards.Add(new Drone() { Name = "Drona - Hexacopter Walkera QR Y100", Description = "Camera HD, FPV, Gyroscope, Control iOS sau Android", Price = 630, BigImage = "product3_big.jpg", OneImage = "product3.jpg", TwoImage = "product3_2.jpg" });
            defaultStandards.Add(new Drone() { Name = "Drona Walkera Scout X4 ", Description = "Drona cu Radiocomanda Devo F12E, Gimbal G-3D si Camera Full HD", Price = 980, BigImage = "product4_big.jpg", OneImage = "product4.jpg", TwoImage = "product4_2.jpg" });
            defaultStandards.Add(new Drone() { Name = "Drona Walkera Scout X5", Description = "Drona cu Modul WIFI", Price = 580, BigImage = "product5_big.jpg", OneImage = "product5.jpg", TwoImage = "product5_2.jpg" });
            defaultStandards.Add(new Drone() { Name = "Drona Walkera QR X350PRO", Description = "Drona cu Radiocomanda Devo F7, Camera iLook+(13MPx, 1080P video) si Gimbal G-3D", Price = 700, BigImage = "product6_big.jpg", OneImage = "product6.jpg", TwoImage = "product6_2.jpg" });
            defaultStandards.Add(new Drone() { Name = "Drona Walkera QR X350PRO GoPro version", Description = "Drona cu Radiocomanda Devo F7 si Gimbal 3D( compatibil pt GoPro Hero3/ Hero 4)", Price = 560, BigImage = "product7_big.jpg", OneImage = "product7.jpg", TwoImage = "product7_2.jpg" });
            defaultStandards.Add(new Drone() { Name = "DJI Matrice 600", Description = "Sistem complet RTF", Price = 700, BigImage = "product8_big.jpg", OneImage = "product8.jpg", TwoImage = "product8_2.jpg" });
            defaultStandards.Add(new Drone() { Name = "Hexacopter IdeaFly Storm 800", Description = "Dimensiune: 800mm, procesul de zbor poate dura 30 min(10 min pe timp de poaie)", Price = 620, BigImage = "product9_big.jpg", OneImage = "product9.jpg", TwoImage = "product9_2.jpg" });
            defaultStandards.Add(new Drone() { Name = "Quadcopter Horus H4 Gold", Description = "Include lumini de navigare, Dimensiune: 800 mm", Price = 940, BigImage = "product10_big.png", OneImage = "product10.jpg", TwoImage = "product10_2.jpg" });
            defaultStandards.Add(new Drone() { Name = "Drona Hubsan H107D+ camera HD si imagini live pe monitor", Description = "Distanta maxima de operare:150 m, Durata de zbor(min):7min, Senzori: Barometru", Price = 250, BigImage = "product1_big.jpg", OneImage = "product1.jpg", TwoImage = "product1_2.jpg" });
            defaultStandards.Add(new Drone() { Name = "Mini Drona Star 951C Gyro Quadcopter cu Wifi si Camera HD, Alb", Description = "Distanta maxima de operare: 50 m, Altele: Control de la distanta: Da Timp de actiune: 5 min Camera HD", Price = 100, BigImage = "product2_big.jpg", OneImage = "product2.jpg", TwoImage = "product2_2.jpg" });
            defaultStandards.Add(new Drone() { Name = "Drona smart Evolio iFly Micro cu camera, verde", Description = "Durata de zbor(min): 5 - 7 min, GPS: Nu, Tip acumulator: Li - po battery", Price = 120, BigImage = "product3_big.jpg", OneImage = "product3.jpg", TwoImage = "product3_2.jpg" });
            defaultStandards.Add(new Drone() { Name = "Mini Drona Star Spider Hexacopter 126 cu Camera HD, Rosu", Description = "Distanta maxima de operare: 50 m, Durata de zbor (min): 5 min, Tip acumulator: 220mAh LiPo", Price = 170, BigImage = "product4_big.jpg", OneImage = "product4.jpg", TwoImage = "product4_2.jpg" });
            defaultStandards.Add(new Drone() { Name = "Mini Drona Star Pocket Quadcopter 124, Alb", Description = "Distanta maxima de operare: 50 m, Durata de zbor (min): 4- 5 min, Altele: Dimensiune drona: 7x7x2.7cm; Dimensiune telecomanda: 14x8.5x4.1cm; Camera: Nu; Frecventa: 2.4G; Timp de reincarcare: 20min; Giroscop: 6 Axe;", Price = 150, BigImage = "product5_big.jpg", OneImage = "product5.jpg", TwoImage = "product5_2.jpg" });
            defaultStandards.Add(new Drone() { Name = "Drona JJRC H20 | 4 CH 6-Axis GYRO | Quad-Copter", Description = " Timpul de incarcare este de aproximativ 45 de minute, iar timpul de zbor de aproximativ 5 minute.", Price = 180, BigImage = "product6_big.jpg", OneImage = "product6.jpg", TwoImage = "product6_2.jpg" });
            defaultStandards.Add(new Drone() { Name = "Drona JJRC H11WH camera 720P", Description = "Imagini live pe smartphone, altitudine automata., Distanta maxima de operare: 80m, Durata de zbor(min): 7min", Price = 310, BigImage = "product7_big.jpg", OneImage = "product7.jpg", TwoImage = "product7_2.jpg" });
            defaultStandards.Add(new Drone() { Name = "Drona Walkera Y100 , camera HD , FPV inclus", Description = "Distanta maxima de operare: 100 m, Viteza maxima zbor veritcal: 4 m/s, Durata de zbor (min): 15, Conectivitate: Wi-Fi Bluetooth, GPS: Nu", Price = 330, BigImage = "product8_big.jpg", OneImage = "product8.jpg", TwoImage = "product8_2.jpg" });
            defaultStandards.Add(new Drone() { Name = "Drona iUni V262, leduri pentru exterior, Telecomanda WiFi, Giroscop, Verde", Description = "Durata de zbor (min): 5 - 10 minute, Autonomie baterie: 5 - 10 minute", Price = 200, BigImage = "product9_big.jpg", OneImage = "product9.jpg", TwoImage = "product9_2.jpg" });
            defaultStandards.Add(new Drone() { Name = "Drona UFO Intruder cu camera HD - exterior", Description = "Distanta maxima de operare: 200 m, Durata de zbor (min): 5 - 7 min, Altitudine maxima (m): 100", Price = 290, BigImage = "product10_big.png", OneImage = "product10.jpg", TwoImage = "product10_2.jpg" });

            foreach (Drone std in defaultStandards)
                context.Drones.AddOrUpdate(it=> it.Name ,std);

            //context.Drones.AddOrUpdate(it=>it.Id , new Drone() { Id = 15, Name = "Drona Cinestar", Description = "Drona Cinestar 8 reprezinta cel mai performant echipament pentru filmare aeriana cu capacitate maxima de ridicare.", Price = 650 });
            context.SaveChanges();

            base.Seed(context);

            if (context.Clients.Count() > 0)
            {
                return;
            }

            context.Clients.AddRange(BuildClientsList());
            context.SaveChanges();
        }

        private static List<Client> BuildClientsList()
        {

            List<Client> ClientsList = new List<Client>
            {
                new Client
                { Id = "ngAuthApp",
                    Secret= Helper.GetHash("abc@123"),
                    Name="AngularJS front-end Application",
                    ApplicationType = FlyVideos.Entities.ApplicationTypes.JavaScript,
                    Active = true,
                    RefreshTokenLifeTime = 7200,
                    AllowedOrigin = "http://flyvid.com:12300"
                },
                new Client
                { Id = "consoleApp",
                    Secret=Helper.GetHash("123@abc"),
                    Name="Console Application",
                    ApplicationType = FlyVideos.Entities.ApplicationTypes.NativeConfidential,
                    Active = true,
                    RefreshTokenLifeTime = 14400,
                    AllowedOrigin = "*"
                }
            };

            return ClientsList;
        }
    }
}
