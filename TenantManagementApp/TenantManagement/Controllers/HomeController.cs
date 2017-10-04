using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TenantManagement.Models;

namespace TenantManagement.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }

        public IActionResult Password()
        {
            return View();
        }

        public IActionResult MFAPage()
        {
            return View();
        }
        public IActionResult InvalidPage()
        {
            return View();
        }


        [HttpPost]
        public IActionResult UsernameValidation (LoginModel loginModel )
        {
            if (loginModel.userName!=null)
            {
                return View("~/Views/Home/Password.cshtml");
            }else
            {
                @ViewBag.UsernameLoginError = "Please Enter Valid Username ..!";

            }
            return View("~/Views/Home/InvalidPage.cshtml");
        }

        [HttpPost]
        public IActionResult PassWordValidation(LoginModel loginModel)
        {
            if (loginModel.passWord != null)
            {
                return View("~/Views/Home/MFAPage.cshtml");
            }else
            {
                @ViewBag.PasswordLoginError = "Password Invild please enter correct Password ..!";

            }
            return View("~/Views/Home/InvalidPage.cshtml");
        }


        [HttpPost]
        public IActionResult MFAValidation(LoginModel loginModel)
        {
            if (loginModel.otpCode != null)
            {
                return View("~/Views/Home/Loader.cshtml");
            }else
            {
                @ViewBag.OtpLoginError = "please enter Correct Validation Code..!";

            }
            return View("~/Views/Home/InvalidPage.cshtml");
        }



    }
}
