import { connect } from "react-redux";
import Counter from "./Counter";





//map redux state to component props
function mapStateToProps(state) {
    return {
        countValue: state.count
    }
}

// actions
var startTimer = { type: "time" };

//map redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        
        // startTime: function() {
        //     return dispatch(startTimer);
        // }


        startTime: setInterval(function() {
            return dispatch(startTimer);
        }, 1000)
    }
}
//hoc
var connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default connectedComponent;