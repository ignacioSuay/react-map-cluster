// import React...
import React from "react";
import {connect} from "react-redux";


class StupidComponent extends React.Component {

    render() {
        console.log("rerendering");
        console.log(this.props.tableData);

        return (<div>{JSON.stringify(this.props.tableData.data)}</div>)
    }
}

// const mapState = (state) => {
//     return {
//         datas: (state) => state
//     };
// };

const mapStateToProps = (state) => {
    return {tableData: state.tableData}
};

export default connect(mapStateToProps)(StupidComponent);