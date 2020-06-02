import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Decrement extends Component {
    constructor(props) {
        super(props);
        this.state = {number: props.start};
    }
    decrementNumber = (state) => {
        if (this.state.number === 0) {
            alert("Cannot be less than zero");
        }
        else {
            this.setState({number: state.number - 1});
        }
    };
    render(){
        return (
            <>
            {this.state.number}{" "}
            <button onClick = {() => this.decrementNumber(this.state)}>
                decrement</button><br></br>    
            </>
        )
    }
}
Decrement.propTypes = {
    number: PropTypes.number.isRequired
}
export default Decrement;