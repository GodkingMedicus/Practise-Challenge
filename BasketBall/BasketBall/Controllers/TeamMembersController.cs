using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BasketBall.Models;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;

namespace BasketBall.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeamMembersController : ControllerBase
    {
        private readonly testDBContext _context;

        public TeamMembersController(testDBContext context)
        {
            _context = context;
        }

        // GET: api/TeamMembers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TeamMember>>> GetTeamMembers()
        {
            return await _context.TeamMembers.ToListAsync();
        }

        // GET: api/TeamMembers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TeamMember>> GetTeamMember(int id)
        {
            var teamMember = await _context.TeamMembers.FindAsync(id);

            if (teamMember == null)
            {
                return NotFound();
            }

            return teamMember;
        }

        // PUT: api/TeamMembers/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTeamMember(int id, TeamMember teamMember)
        {
            if (id != teamMember.UserId)
            {
                return BadRequest();
            }

            _context.Entry(teamMember).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TeamMemberExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TeamMembers
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<TeamMember>> PostTeamMember(TeamMember teamMember)
        {
            _context.TeamMembers.Add(teamMember);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTeamMember", new { id = teamMember.UserId }, teamMember);
        }

        //[HttpPost, Route("login")]
        //public IActionResult Login(TeamMember login)
        //{

        //    if (login == null)
        //    {
        //        return BadRequest(new { message = "Invalid client request" });
        //    }

        //    var staff = (from s in _context.TeamMembers
        //                     //where s.Email == login.Email
        //                 where s.Email == login.Email
        //                 select new TeamMember
        //                 {
        //                     Email = s.Email,
        //                     Password = s.Password,
        //                     Authorized = s.Authorized,
        //                     Role = s.Role
        //                 }).ToList();

        //    //Handle invalid logins
        //    if (staff.Count == 0)
        //    {
        //        return BadRequest(new { message = "Username or Password is incorrect" });
        //    }

            
        //    if (login.Password == staff.SingleOrDefault().Password && staff.SingleOrDefault().Role == "Authorized")
        //    {
        //        var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Environment.GetEnvironmentVariable("secret")));
        //        var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

        //        var claims = new Claim[] {
        //            //new Claim("Role", staff.FirstOrDefault().Role.ToString()),
        //            new Claim("Authorized", staff.FirstOrDefault().Authorized.ToString()),
        //            new Claim("Role", staff.FirstOrDefault().Role.ToString())
        //        };

        //        var tokenOptions = new JwtSecurityToken(
        //            issuer: Environment.GetEnvironmentVariable("applicationUrl"),
        //            audience: Environment.GetEnvironmentVariable("applicationUrl"),
        //            claims: claims,
        //            expires: DateTime.Now.AddDays(5),
        //            signingCredentials: signinCredentials
        //        );

        //        var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);

        //        return Ok(new { Token = tokenString });
        //    }
        //    else
        //    {
        //        Console.WriteLine("Failed Login");
        //        return Unauthorized();
        //    }
        //}
        // DELETE: api/TeamMembers/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TeamMember>> DeleteTeamMember(int id)
        {
            var teamMember = await _context.TeamMembers.FindAsync(id);
            if (teamMember == null)
            {
                return NotFound();
            }

            _context.TeamMembers.Remove(teamMember);
            await _context.SaveChangesAsync();

            return teamMember;
        }

        private bool TeamMemberExists(int id)
        {
            return _context.TeamMembers.Any(e => e.UserId == id);
        }
    }
}
