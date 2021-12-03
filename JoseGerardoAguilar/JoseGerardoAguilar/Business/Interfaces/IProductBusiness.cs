using JoseGerardoAguilar.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JoseGerardoAguilar.Business.Interfaces
{
    public interface IProductBusiness
    {
        public Task<List<Product>> GetProductsAsync();
        public Task<Product> GetProductAsync(Guid id);
        public Task<Product> AddProductAsync(Product product);
        public Task<Product> UpdateProductAsync(Product product, Guid id);
        public Task<bool> DeleteProductAsync(Guid id);
    }
}
