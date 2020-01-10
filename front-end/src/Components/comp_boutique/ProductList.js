import React, { Component } from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import '../comp_boutique/Comp_Boutique.css';
// import {addToCart} from "../../actions/CartAction";
 
 
class ProductList extends Component{

 
    render() {
        return (
            <div className="container">
                <h2 className='container-list'>Product List</h2>
                <br/>
                <div className="row">
 
                    {
                        this.props.products.items.map(product => <Product
                            product={product} 
                            // addToCart={this.addToCart} 
                            inCart={this.props.cart.length>0 && this.props.cart.filter(e => e.product.id === product.id).length > 0 }
                            key={product.id}
                            /> )
                    }
 
                </div>
            </div>
        )
    }
}
 
const mapStateToProps = (state) => {
 
    return {
        products: state.ProductReducer,
        cart: state.cartReducer
    }
};
 

 
 
export default connect(mapStateToProps)(ProductList)

// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// //import { addShipping } from './actions/cartActions'
// class Recipe extends Component{
    
//     componentWillUnmount() {
//          if(this.refs.shipping.checked)
//               this.props.substractShipping()
//     }

//     handleChecked = (e)=>{
//         if(e.target.checked){
//             this.props.addShipping();
//         }
//         else{
//             this.props.substractShipping();
//         }
//     }

//     render(){
  
//         return(
//             <div className="container">
//                 <div className="collection">
//                     <li className="collection-item">
//                             <label>
//                                 <input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
//                                 <span>Shipping(+6$)</span>
//                             </label>
//                         </li>
//                         <li className="collection-item"><b>Total: {this.props.total} $</b></li>
//                     </div>
//                     <div className="checkout">
//                         <button className="waves-effect waves-light btn">Checkout</button>
//                     </div>
//                  </div>
//         )
//     }
// }

// const mapStateToProps = (state)=>{
//     return{
//         addedItems: state.addedItems,
//         total: state.total
//     }
// }

// const mapDispatchToProps = (dispatch)=>{
//     return{
//         addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
//         substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Recipe)