// import React...
import React from "react";
import {connect} from "react-redux";


class StupidComponent extends React.Component {

    render() {
        console.log("rerendering");
        console.log(this.props);

        return (<div>{JSON.stringify(this.props)}</div>)
    }
}

// const mapState = (state) => {
//     return {
//         datas: (state) => state
//     };
// };

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(StupidComponent);