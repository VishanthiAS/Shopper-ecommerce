import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'
import Product from '../../Pages/Product'
const ProductDisplay = (props) => {
    const {product} =props;
    const {addToCart}=useContext(ShopContext);
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
<div className="productdisplay-img-list">
    <img src={product.image} alt="" />
    <img src={product.image} alt="" />
    <img src={product.image} alt="" />
    <img src={product.image} alt="" />
</div>
<div className="productdisplay-img">
   <img className='productdisplay-main-img' src ={product.image} alt=""/>
</div>
</div>
            <div className="productdisplay-right">
            <h1> {product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon}alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                    ${product.old_price}
                    <div className="productdisplay-right-price-new">
                    ${product.new_price}
                    </div>
                    <div className="productdisplay-right-description">
                        A light-weight , usually knitted, pullover shirt , close-fitting and a round neckline short sleeves , worn as an undershirt or out garment
                    </div>
                    <div className="productdisplay-right-size">
                        <h1>Select size</h1>
                        <div className="productdisplay-right-sizes">
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXL</div>
                        </div>
                    </div>
                    <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                    <p className='productdisplay-right-category'><span>Category :</span>women , T-shirt, croptop</p>
                    <p className='productdisplay-right-category'><span>tags :</span>modern , latest</p>
                </div>
               


            </div>
            </div>
        </div>
    )
}
export default ProductDisplay