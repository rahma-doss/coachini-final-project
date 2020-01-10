import React, { Component } from 'react';
import { connect } from 'react-redux'
import Search from '../search_blog_boutique/Search';
import ProductList from '../comp_boutique/ProductList';
import { MDBBadge } from 'mdbreact';

class Boutique extends Component {


  searchBlog = y => {
    this.setState({
      keyword: y
    })
  }

  render() {

    return (
      <div className="App">
        <div className="d-flex justify-content-between">
          <Search searchProduct={true} />
            <div>
                <i class="fas fa-shopping-cart"></i>
                <MDBBadge color="danger" className="ml-2">{this.props.cart.cart.length}</MDBBadge>
            </div>
        </div>
        <ProductList />
      </div>
    )
  }
}
const mapStateToProps = state => {
    return{
        cart: state.cartReducer
    }
}
export default connect(mapStateToProps)(Boutique)



















// import React, { Component } from 'react';
// import Search from '../search/Search';
// import Home from '../comp_boutique/Home';


// class Boutique extends Component {


//   searchBlog = y => {
//     this.setState({
//       keyword: y
//     })
//   }

//   render() {

//     return (
//       <div className="bout">
//         <div className="d-flex justify-content-between">
//           <Search />
//         </div>
//         <Home/>
//       </div>
//     )
//   }
// }
// export default Boutique