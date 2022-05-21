using Microsoft.AspNetCore.Mvc;
using ramsrecruitAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ramsrecruitAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateDataController : ControllerBase
    {
         // GET: api/CandidateData
        [HttpGet]
        public IEnumerable<CandidateData> Get()
        {
            var cd = new CandidateData();
            cd.currentctc = "1000";
            cd.email = "testEmail@suthor.com";
            cd.experience = "4";
            cd.name = "Senbagaraman";
            cd.phonenumber = "23455667";
            cd.pskills = "Azure, Gmail, gaming";
            cd.rcompany = "Rams Fleet Management SYstem";


            var cd2 = new CandidateData();
            cd2.currentctc = "31000";
            cd2.email = "testEmail@author.com";
            cd2.experience = "14";
            cd2.name = "raman";
            cd2.phonenumber = "23455667";
            cd2.pskills = "Project Manager";
            cd2.rcompany = "ncovid website";

            List<CandidateData> candid = new List<CandidateData>();

            candid.Add(cd);
            candid.Add(cd2);

            return candid;
        }

        // GET api/<CandidateDataController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<CandidateDataController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<CandidateDataController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CandidateDataController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
