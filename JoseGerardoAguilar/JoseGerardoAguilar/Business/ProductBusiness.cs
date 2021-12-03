using JoseGerardoAguilar.Business.Interfaces;
using JoseGerardoAguilar.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JoseGerardoAguilar.Business
{
    public class ProductBusiness : IProductBusiness
    {
        private IFakeDatabase _fakeDatabase;
        public ProductBusiness(IFakeDatabase fakeDatabase)
        {
            _fakeDatabase = fakeDatabase;
        }

        public Task<Product> AddProductAsync(Product product)
        {
            try
            {
                var newProduct = new Product
                {
                    Id = Guid.NewGuid(),
                    Name = product.Name,
                    Category = product.Category,
                    Description = product.Description,
                    Price = product.Price,
                    Quantity = product.Quantity
                };

                _fakeDatabase.products.Add(newProduct);

                return Task.Run(() => newProduct);
            }
            catch (Exception ex)
            {
                throw new ApplicationException($"Error [AddProductAsync]: {ex.Message}");
            }
        }

        public Task<bool> DeleteProductAsync(Guid id)
        {
            try
            {
                var productsWithoutId = _fakeDatabase.products.Where(p => p.Id != id);

                _fakeDatabase.products = productsWithoutId.ToList();

                return Task.Run(() => true);
            }
            catch (Exception ex)
            {
                throw new ApplicationException($"Error [DeleteProductAsync]: {ex.Message}");
            }
        }

        public Task<Product> GetProductAsync(Guid id)
        {
            try
            {
                var product = Task.Run(() => _fakeDatabase.products.FirstOrDefault(p => p.Id == id));

                return product != null ? product : throw new ApplicationException($"Product id {id}, doesn't exist");
            }
            catch (Exception ex)
            {
                throw new ApplicationException($"Error [GetProductAsync]: {ex.Message}");
            }
        }

        public async Task<List<Product>> GetProductsAsync()
        {
            try
            {
                return await Task.Run(() => _fakeDatabase.products);
            }
            catch (Exception ex)
            {
                throw new ApplicationException($"Error [GetProductsAsync]: {ex.Message}");
            }
        }

        public async Task<Product> UpdateProductAsync(Product product, Guid id)
        {
            try
            {
                var productsWithoutId = await Task.Run(() => _fakeDatabase.products.Where(p => p.Id != id));

                _fakeDatabase.products = productsWithoutId.ToList();
                _fakeDatabase.products.Add(product);

                return product;
            }
            catch (Exception ex)
            {
                throw new ApplicationException($"Error [UpdateProductAsync]: {ex.Message}");
            }
        }
    }
}
