using JoseGerardoAguilar.Business.Interfaces;
using JoseGerardoAguilar.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JoseGerardoAguilar.Controllers
{   
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : ControllerBase
    {
        private IProductBusiness _productoBusiness;
        private readonly ILogger<ProductsController> _logger;

        public ProductsController(IProductBusiness productoBusiness, ILogger<ProductsController> logger)
        {
            _productoBusiness = productoBusiness;
            _logger = logger;
        }

        [HttpGet("")]
        public async Task<ActionResult<List<Product>>> Get()
        {
            try
            {
                var response = await _productoBusiness.GetProductsAsync();

                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        // GET api/<ProductosController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> Get(string id)
        {
            try
            {
                var guid = Guid.Empty;

                Guid.TryParse(id, out guid);
                var product = await _productoBusiness.GetProductAsync(guid);

                return Ok(product);
            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        // POST api/<ProductosController>
        [HttpPost]
        public async Task<ActionResult<Product>> Post([FromBody] Product product)
        {
            try
            {
                var newProduct = await _productoBusiness.AddProductAsync(product);

                return Ok(newProduct);
            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        // PUT api/<ProductosController>/5
        [HttpPut("{id}")]
        public async Task<ActionResult<Product>> Put([FromBody] Product product, string id)
        {
            try
            {
                var guid = Guid.Empty;

                Guid.TryParse(id, out guid);

                var newProduct = await _productoBusiness.UpdateProductAsync(product, guid);

                return Ok(newProduct);
            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        // DELETE api/<ProductosController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<bool>> Delete(string id)
        {
            try
            {
                var guid = Guid.Empty;

                Guid.TryParse(id, out guid);
                var wasDeleted = await _productoBusiness.DeleteProductAsync(guid);

                return Ok(wasDeleted);
            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }
    }
}
