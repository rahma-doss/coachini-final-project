import React,{ Component } from "react";
import Blog from "../blog/Blog";
import { connect } from 'react-redux';

class BlogListe extends React.Component{
    render() {
        return  (

            <div className="box-blog">
                {this.props.initState.map((el, i) =>  <Blog key={i} blog={el}/>)}
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        initState: state.ReducerBlog
    };
};

export default connect(mapStateToProps)(BlogListe)