import { useState, useEffect } from 'react';

const API_URL = "http://localhost:4000/product";

const Products = () => {
  const [productList, setProducts] = useState([]);
  const [reload, setReload] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, [reload]);

  const handleDelete = (id) => {
    if (confirm("Product o'chishiga ruxsat berasizmi"))
      fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': "application/json"
        },
      })
        .then(res => {
          console.log(res);
          setReload(prev => !prev);
        })
        .catch(error => console.error('Error deleting product:', error));
  }

  const handleEdit = (product) => {
    setCurrentProduct(product);
    setIsModalOpen(true);
  }

  const handleSave = () => {
    fetch(`${API_URL}/${currentProduct.id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(currentProduct)
    })
      .then(res => res.json())
      .then(data => {
        console.log('Product updated:', data);
        setIsModalOpen(false);
        setReload(prev => !prev);
      })
      .catch(error => console.error('Error updating product:', error));
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduct({ ...currentProduct, [name]: value });
  }

  return (
    <>
      <section className="max-w-7xl mx-auto px-5 mb-56">
        <div className="grid grid-cols-4 gap-6">
          {productList.map((product) => (
            <div key={product.id} className="border p-4">
              <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Product_sample_icon_picture.png/640px-Product_sample_icon_picture.png" alt="Product" />
              </div>
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p>{product.price}</p>
              <p className="text-green-500">{product.brend}</p>
              <p className="text-green-500">{product.category}</p>
              <div className='flex items-center gap-5 mt-5'>
                <button className='py-1 px-6 bg-red-700 rounded-lg text-white' onClick={() => handleDelete(product.id)}>Delete</button>
                <button className='py-1 px-6 bg-slate-800 rounded-lg text-white' onClick={() => handleEdit(product)}>Edit</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" >
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Edit Product</h2>
            {currentProduct && (
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={currentProduct.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Price</label>
                  <input
                    type="text"
                    name="price"
                    value={currentProduct.price}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Brend</label>
                  <input
                    type="text"
                    name="brend"
                    value={currentProduct.brend}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Category</label>
                  <input
                    type="text"
                    name="category"
                    value={currentProduct.category}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className='flex items-center gap-5'>
                  <button
                    type="button"
                    className='py-1 px-6 bg-green-700 rounded-lg text-white'
                    onClick={handleSave}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className='py-1 px-6 bg-red-700 rounded-lg text-white'
                    onClick={() => setIsModalOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
