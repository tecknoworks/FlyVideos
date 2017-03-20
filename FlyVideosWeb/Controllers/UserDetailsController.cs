using BusinessObjects.Dtos;
using BusinessObjects.Entities;
using BusinessObjects.Identity;
using Contract.Providers;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.Description;

namespace FlyVideos.Controllers
{
    public class UserDetailsController : BaseController
    {
        private IUserDetailsProvider _provider;

        public UserDetailsController()
        {
            this._provider = this.DIContainer.Resolve<IUserDetailsProvider>();
        }
        /// <summary>
        /// Get user details
        /// </summary>
        /// <returns></returns>
        public IEnumerable<UserDetailsDto> Get()
        {
            var result = _provider.GetAll();
            return result;
        }
        /// <summary>
        /// get user details by userid
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Route("api/UserDetails/{id}")]
        public UserDetailsDto GetById(string id)
        {
            var result = _provider.GetByIdUser(id);
            return result;
        }
        /// <summary>
        /// Get userdetails by username
        /// </summary>
        /// <param name="username"></param>
        /// <returns></returns>
        [Route("api/UserDetails")]
        public UserDetailsDto GetByUsername(string username)
        {
            var result = _provider.GetByUsername(username);
            return result;
        }
        /// <summary>
        /// Add or update user details
        /// </summary>
        /// <param name="userdet"></param>
        [Route("api/UserDetails")]
        public IHttpActionResult AddOrUpdateUserDetails(UserDetailsDto userdet)
        {
            _provider.Update(userdet);
            return Ok(100);
        }
        /// <summary>
        /// Add photo profile
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        [Route("api/PostUserImage/{userId}")]
        [HttpPost()]
        public string UploadFiles(string userId)
        {
            int iUploadedCnt = 0;

            // DEFINE THE PATH WHERE WE WANT TO SAVE THE FILES.
            string sPath = "";
            sPath = System.Web.Hosting.HostingEnvironment.MapPath("~/locker/");
            System.Web.HttpFileCollection hfc = System.Web.HttpContext.Current.Request.Files;

            // CHECK THE FILE COUNT.
            for (int iCnt = 0; iCnt <= hfc.Count - 1; iCnt++)
            {
                System.Web.HttpPostedFile hpf = hfc[iCnt];

                if (hpf.ContentLength > 0)
                {
                    // CHECK IF THE SELECTED FILE(S) ALREADY EXISTS IN FOLDER. (AVOID DUPLICATE)
                    //if (!File.Exists(sPath + Path.GetFileName(hpf.FileName)))
                    //{
                    //    // SAVE THE FILES IN THE FOLDER.
                    //    hpf.SaveAs(sPath + Path.GetFileName(hpf.FileName));
                    //    iUploadedCnt ++;
                    //}
                    if (!File.Exists(sPath + Path.GetFileName(hpf.FileName)))
                    {
                        // SAVE THE FILES IN THE FOLDER.
                        string username = _provider.UploadPhoto(userId);
                        //hpf.SaveAs(sPath + username + ".jpg");
                        iUploadedCnt++;
                        Stream strm = hpf.InputStream;
                        EditImage.CompressImage(strm, sPath + username + ".jpg", hpf.FileName);
                    }
                }
            }

            // RETURN A MESSAGE (OPTIONAL).
            if (iUploadedCnt > 0)
            {
                return iUploadedCnt + " Files Uploaded Successfully";
            }
            else
            {
                return "Upload Failed";
            }
        }
    }
}
