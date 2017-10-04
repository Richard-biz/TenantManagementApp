using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TenantManagement.Models
{
    public class LoginModel
    {
        public string userName   { get; set; }
        public string passWord   { get; set; }
        public string isPersist   { get; set; }
        public string otpCode   { get; set; }

    }
}
