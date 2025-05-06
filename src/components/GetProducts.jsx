import axios from "axios"
import { useEffect, useState } from "react"
import '../App.css'
import { useNavigate,BrowserRouter as Router} from "react-router-dom"
import CustomCarousel from "./Carousel"

const Getproducts = () => {
  const[loading,setLoading]=useState('')
  const[error,setError]=useState('')
  const[ products,setProducts]=useState()
  const [filteredProducts, setFilteredProducts] = useState([]); // Filtered data
  const [searchQuery, setSearchQuery] = useState(""); // Search input
 
  //The data coming from the API comes as a list
const get_products=async()=>{
  setLoading('Please Wait as we load the products...')
  try {
    //getting data
    const response=await axios.get('https://falsafa.pythonanywhere.com/api/get_product_details')
    setLoading('')
    setProducts(response.data)
  } catch (error) {
    setLoading('')
    setError(error.message)
}
}
useEffect( ()=> {get_products()},[])
//filter loic
  // Search filter logic
  useEffect(() => {
      if (!products) return; // Prevent errors if products is undefined

      const filtered = products.filter((product) =>
          product.product_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.product_description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
  }, [searchQuery, products]);
  //The above hook enables us to fetch all data at once
//[]-Fetch all data once
const img_url='https://falsafa.pythonanywhere.com/static/images/'
const navigate=useNavigate()
  return (
    <div className="row container-fluid">
        <CustomCarousel/>

       
       
      <h1 className="text-center">Available products</h1>
      <input
            type="text"
            className="form-control shadow-sm p-2"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
      {loading}
      {error}
      {filteredProducts?.map((product,index)=>(
      <div className="col-md-3 justify-content-center mb-4 mt-4">
        <div className="card shadow">
          <img src= {img_url+ product.product_photo}alt="" className="product_img" />
          <div className="card-body">
            <h5 className="mt-2 text-dark">{product.product_name}</h5>
            <p className="text-dark">{product.product_description}</p>
            <b className="text-warning">{product.product_cost}</b> <br />
            <button className="btn btn-dark text-light w-100 mt-2" onClick={()=>navigate('/makepayments',{state:{product}})}>Purchase</button>
         


          </div>

        </div>

      </div>
      ))}
      </div>
  )
}
export default Getproducts;