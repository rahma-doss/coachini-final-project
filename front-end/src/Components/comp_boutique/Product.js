import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/CartAction'

class Product extends Component {

    addToCart = (e) => {

        e.preventDefault();

        this.props.addToCart(this.props.product)

        this.setState({
            inCart: true
        })
    }

    render() {

        const { product } = this.props;
        return (
            <div className="col-md-3">
                <figure className="card card-product">
                    <div className="img-wrap">
                        <img className="img-responsive " src={product.image} />
                        {/* objectfit css */}
                    </div>
                    <figcaption className="info-wrap">
                        <h4 className="title_product">{product.title}</h4>
                        <p className="desc">{product.description}</p>
                    </figcaption>
                    <div className="bottom-wrap">

                        {
                            this.props.cart.cart.filter(el => el.id === product.id).length > 0 ? (
                                <span className="alert alert-success">Added to cart</span>
                            ) : (
                                    <a href="#" onClick={() => this.props.addToCart(product)} 
                                    className="btn btn-sm btn-primary float-right">Add to cart</a>
                                )
                        }

                        <div className="price-wrap h5">
                            <span className="price-new">${product.price}</span>
                        </div>
                    </div>
                </figure>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => {
            dispatch(addToCart(product));
        }
    }
};
const mapStateToProps = (state) => {

    return {
        cart: state.cartReducer
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);




// import {connect} from 'react-redux';
// import addToCart from '../../actions/CartAction';

// class Home extends Component{

//     render(){
//         let itemList = this.props.items.map(item=>{
//             return(
//                 <div className="card" key={item.id}>
//                         <div className="card-image">
//                             <img src={item.img} alt={item.title}/>
//                             <span className="card-title">{item.title}</span>
//                             <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
//                         </div>

//                         <div className="card-content">
//                             <p>{item.desc}</p>
//                             <p><b>Price: {item.price}$</b></p>
//                         </div>
//                  </div>
//             )
//         })
//         return(
//             <div className="container">
//                 <h3 className="center">Our items</h3>
//                 <div className="box">
//                     {itemList}
//                 </div>
//             </div>
//         )
//     }
// }
// const mapStateToProps = (state)=>{
//     return {
//       items: state.items
//     }
//   }
// const mapDispatchToProps= (dispatch)=>{

//     return{
//         addToCart: (id)=>{dispatch(addToCart(id))}
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Home)