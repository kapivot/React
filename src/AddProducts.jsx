import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProducts = () => {
  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_cost, setProductCost] = useState("");
  const [product_photo, setProductPhoto] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // ✅ Redirect if not admin
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || user.role !== "admin") {
      toast.error("Access denied. Admins only.", { position: "top-center" });
      navigate("/");
    }
  }, [navigate]);

  const submit = async (e) => {
    e.preventDefault();
    toast.dismiss();

    if (!product_photo || !product_photo.type.startsWith("image/")) {
      toast.error("Please upload a valid image file", { position: "top-center" });
      return;
    }

    setLoading(true);

    try {
      const data = new FormData();
      data.append("product_name", product_name);
      data.append("product_description", product_description);
      data.append("product_cost", product_cost);
      data.append("product_photo", product_photo);

      const token = localStorage.getItem("token");

      const response = await axios.post(
        "https://falsafa.pythonanywhere.com/api/add_product",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success(response.data.Message || "Product added successfully!", {
        position: "top-center",
      });

      // Reset form
      setProductName("");
      setProductDescription("");
      setProductCost("");
      setProductPhoto(null);
      setPreviewImage(null);

    } catch (error) {
      toast.error(error.response?.data?.error || error.message || "Something went wrong!", {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setProductPhoto(file);

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };

  return (
    <div className='container mt-5'>
      <ToastContainer />
      <div className='row justify-content-center'>
        <div className='col-md-6 card p-5 shadow'>

          <h2 className="text-center text-primary mb-4">Upload New Product</h2>

          <nav className='mb-3'>
            <Link to='/' className='btn btn-outline-dark w-100'>View All Products</Link>
          </nav>

          <form onSubmit={submit}>
            <div className="form-group mb-3">
              <label>Product Name</label>
              <input
                type="text"
                className='form-control'
                required
                value={product_name}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <label>Product Description</label>
              <textarea
                className='form-control'
                required
                rows={3}
                value={product_description}
                onChange={(e) => setProductDescription(e.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <label>Product Cost (KES)</label>
              <input
                type="number"
                className='form-control'
                required
                value={product_cost}
                onChange={(e) => setProductCost(e.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <label>Product Image</label>
              <input
                type="file"
                className='form-control'
                required
                accept="image/*"
                onChange={handlePhotoChange}
              />
              {previewImage && (
                <div className="text-center mt-3">
                  <img src={previewImage} alt="Preview" className='img-fluid rounded' style={{ maxHeight: "200px" }} />
                </div>
              )}
            </div>

            <button type='submit' className='btn btn-primary w-100' disabled={loading}>
              {loading ? (
                <div className="spinner-border spinner-border-sm text-light" role="status"></div>
              ) : (
                "Add Product"
              )}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default AddProducts;
