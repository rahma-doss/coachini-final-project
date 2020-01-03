import React from 'react';
import { connect } from 'react-redux';
import { specialiteFilter} from '../../actions/SpecialiteAction';




const SpecialiteSearch = ({ value, onChangeText }) => {
    return (
        <div className="container">
            
            <div className="name-filter">
                <input className="name-filter-text"
                    type="text" placeholder="Search..."
                    onChange={event => onChangeText(event.target.value)}
                />

            </div>
        </div>




    );
}
const mapStateToProp = (state) => {
    return {
        value: state.SpecialiteFiterReducer
    };
};

function mapDispatchToProps(dispatch) {
    return {
        onChangeText: (newText) => dispatch(specialiteFilter(newText)),


    }

}



export default connect(mapStateToProp, mapDispatchToProps)(SpecialiteSearch);