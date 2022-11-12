import './Product.css'
import {Link} from 'react-router-dom'
function Product(props) {
    //console.log(props)
    // opject product of props
    const {product,showButton}=props
    
    //show data of api
    return (
        <>
        
            <div className="card h-100 " >
                <img src={product.image} className="card-img-top height-300" alt="..." />
                <div className="card-body padding-16">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text  ">{product.description}</p>
                    <p> {product.price} $</p>
                     
                    {showButton? <Link to={`/product/${product.id}`} className="btn btn-primary ">Details</Link>: null}
                    
                </div> 
                            </div>
        </>

    )
}
export default Product