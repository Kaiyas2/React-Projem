using Business.Abstract;
using Entities.Concrete;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        private ICustomerService _customerService;

        public CustomersController(ICustomerService customerService)
        {
            _customerService = customerService;
        }

        [HttpGet("getall")]
        public IActionResult GetList()
        {
            var result = _customerService.GetList();
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }

        [HttpGet("getbytc")]
        public IActionResult GetById(double customerTc)
        {
            var result = _customerService.GetById(customerTc);
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }



        [HttpPost("add")]
        public IActionResult Add( Customer customer)
        {
            var existingCustomer = _customerService.GetById(customer.customerTc);
            if (existingCustomer.Data != null)
            {
                return BadRequest("Bu Müşteri Zaten Var");
            }
            var result = _customerService.add(customer);

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
