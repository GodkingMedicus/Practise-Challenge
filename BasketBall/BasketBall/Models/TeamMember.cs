using System;
using System.Collections.Generic;

#nullable disable

namespace BasketBall.Models
{
    public partial class TeamMember
    {
        public int UserId { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
        public bool? Authorized { get; set; }
        public int? Fees { get; set; }
    }
}
