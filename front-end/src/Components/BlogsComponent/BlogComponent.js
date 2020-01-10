import React, { Component } from 'react';
import './BlogComponent.css';
import Modal from '../modalBlog/Modal';
import Search from '../search_blog_boutique/Search';
import BlogListe from '../blog_liste/BlogListe';

class BlogComponent extends Component {


  searchBlog = y => {
    this.setState({
      keyword: y
    })
  }

  render() {

    return (
      <div className="App">
        <div className="d-flex justify-content-between">
          <Search searchProduct={false}/>
        </div>
        <BlogListe />
        <Modal editMode={false} />
      </div>
    )
  }
}
export default BlogComponent