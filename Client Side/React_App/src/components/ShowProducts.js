import { useEffect,useState} from "react";
import { useAccordionButton } from "react-bootstrap";

const ShowProducts = () => {

    const [products,setProducts] = useState([]);
    useEffect (()=>{
        setProducts(JSON.parse(localStorage.getItem("searchedProducts")))
        console.log(products);
    },[])

    const addtocart = (id,qty) => {

      let cart = JSON.parse(localStorage.getItem("cart"));
      if( cart === null)
          cart = [];
      cart.push({pid: id, qty: qty});
      localStorage.setItem("cart",JSON.stringify(cart))

    }
    //const sellerId = localStorage.getItem("searchedProducts")
    
    // useEffect(() => {
    //     fetch.get(`http://localhost:8080/products/${sellerId}`)
    //       .then(response => {
    //         setModels(response.data);
    //       })
    //       .catch(error => {
    //         console.error('Error fetching product data:', error);
    //       });
    //   }, [sellerId]);

    return (
        <div>
        <h1> Products List </h1>
        <table>
            {
                products.map(p => (
                    <tr key={p.product_Id}>
                      <td>{p.product_Id}</td>
                      <td>{p.model.model_Name}</td>
                      <td> {p.seller.shop_name}</td>
                      <td> {p.seller.address}</td>
                      <td>{p.seller.area.area_name}</td>
                      <td>{p.seller.area.city.c_name}</td>
                      <td> <input type="number" value="1" /> </td>
                     
                      <td>
                        <button className="btn btn-danger" onClick={() => addtocart(p.product_Id,1)}>
                          Add to Cart
                        </button>
                      </td>
                    </tr>
                  )

                )
            }
        </table>
        </div>
    )
}

export default ShowProducts;