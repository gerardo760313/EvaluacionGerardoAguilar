using System.Collections.Generic;

namespace JoseGerardoAguilar.Models
{
    public class FakeDatabase : IFakeDatabase
    {
        private List<Product> _products;
        public List<Product> products
        {
            get
            {
                if (_products == null)
                    _products = new List<Product>();
                return _products;
            }
            set
            {
                _products = value;
            }
        }
    }

    public interface IFakeDatabase
    {
        public List<Product> products { get; set; }
    }
}
