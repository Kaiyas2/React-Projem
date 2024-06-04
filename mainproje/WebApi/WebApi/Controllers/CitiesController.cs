using Business.Abstract;
using Entities.Concrete;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CitiesController : ControllerBase
    {
        

        private ICityService _cityservice;

        public CitiesController(ICityService cityservice)
        {
            _cityservice = cityservice;
        }

        [HttpGet("getall")]
        public IActionResult GetList()
        {
            var result = _cityservice.GetList();
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }
        [HttpPost("add")]
        public IActionResult Add(Cities cities)
        {
            var result = _cityservice.add(cities);

            if (result.Success)
            {
                return Ok(result.Message);
            }
            else
            {
                return BadRequest(result.Message);
            }
        }
    }
}
