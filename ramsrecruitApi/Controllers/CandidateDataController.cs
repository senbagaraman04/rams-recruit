using ramsrecruitApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ramsrecruitApi.Controllers
{
    public class CandidateDataController : ApiController
    {
        // GET: api/CandidateData
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

        // GET: api/CandidateData/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/addCandidateData
        public void Post([FromBody]string value)
        {
             
            Console.WriteLine("Raman");
        }

        // PUT: api/CandidateData/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/CandidateData/5
        public void Delete(int id)
        {
        }
    }
}
