// import React...
import React from "react";
// ... and HotTable
import HotTable from "react-handsontable";
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';


class ExampleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handsontableData = [
            ["Longitude", "Latitude", "Number of pins"],
            [10, 11, 12],
            [20, 11, 14],
            [30, 15, 12]
        ];
    }

    render() {
        console.log(this.props);
        return (
            <div id="example-component">
                <HotTable root="hot" settings={{
                    data: this.handsontableData,
                    onAfterChange: (changes, source) => {
                        console.log("changing");
                        console.log(this.handsontableData);
                        // reduxStore.dispatch({type: "CHANGE", data: this.handsontableData})
                        this.props.change2(this.handsontableData);
                        console.log("changed table")
                    }
                }}

                          colHeaders={true}
                          rowHeaders={true}
                          width="600"
                          height="300"
                          stretchH="all"
                          manualColumnResize={true}
                          manualRowResize={true}
                          minRows={6}
                          minSpareRows={1}

                />
            </div>
        );
    }
}

const mapState = (state) => {
    return state
};

const mapDispatch = (dispatch) => ({
    change2 : (data) => dispatch({type: "CHANGE", data})
});

export default connect(mapState, mapDispatch)(ExampleComponent);