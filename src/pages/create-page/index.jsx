import  { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
    const [formData, setFormData] = useState({
        name: "",
        brand: "",
        category: "",
        price: "",
    });
    let navigate = useNavigate()
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:4000/product", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                navigate('/')
                setFormData({
                    name: "",
                    brand: "",
                    category: "",
                    price: "",
                });
            })
            .catch((error) => console.error("Error creating product:", error));
    };

    return (
        <section className="max-w-7xl mx-auto px-5">
            <form onSubmit={handleSubmit} className="mt-8">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" name="name" id="name" onChange={handleChange} value={formData.name} className="mt-1 p-2 border rounded-md w-full" required />
                    </div>
                    <div>
                        <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Brand</label>
                        <input type="text" name="brand" id="brand" onChange={handleChange} value={formData.brand} className="mt-1 p-2 border rounded-md w-full" required />
                    </div>
                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                        <input type="text" name="category" id="category" onChange={handleChange} value={formData.category} className="mt-1 p-2 border rounded-md w-full" required />
                    </div>
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                        <input type="text" name="price" id="price" onChange={handleChange} value={formData.price} className="mt-1 p-2 border rounded-md w-full" required />
                    </div>
                </div>
                <div className="mt-6">
                    <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">Create</button>
                </div>
            </form>
        </section>
    );
};

export default CreateProduct;
