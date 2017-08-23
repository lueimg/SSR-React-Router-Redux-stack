import React from 'react';
import {connect} from 'react-redux';
import {testStart} from 'components/actions';

class Home extends React.Component {

    componentDidMount = () => {
        this.props.start();
    }
    
    render() {
        return (
            <div>
                <h2>Home cclass {this.props.testDisplay} </h2>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        testDisplay: state.test
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        start: () => {
            dispatch(testStart());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);