using System;
using System.Collections.Generic;

#nullable disable

namespace BasketBall.Models
{
    public partial class Game
    {
        public int GameId { get; set; }
        public DateTime GameDate { get; set; }
        public string Venue { get; set; }
        public int? UserId { get; set; }
        public int? Fees { get; set; }
    }
}
