using System;
using System.Collections.Generic;
using System.Net;
using System.Web.Http;
using MoviesWebApplication.Models;
using Newtonsoft.Json.Linq;

namespace MoviesWebApplication.Controllers
{
    public class MoviesController : ApiController
    {
        // GET: api/Movies
        public IEnumerable<Movie> Get()
        {
            List<Movie> movies = new List<Movie>();
            using (WebClient wc = new WebClient())
            {
                var json = wc.DownloadString("https://imdb-api.com/en/API/Top250Movies/k_ej0gti84");
                Console.WriteLine(json);

                Newtonsoft.Json.Linq.JObject obj = JObject.Parse(json);
                JObject jResults = JObject.Parse(json);
                foreach (var m in jResults["items"])
                {
                    Movie movie = m.ToObject<Movie>();
                    movies.Add(movie);
                }

            }

            return movies;
        }

        // GET: api/Movies/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Movies
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Movies/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Movies/5
        public void Delete(int id)
        {
        }
    }
}
