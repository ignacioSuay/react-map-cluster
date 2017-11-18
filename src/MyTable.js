// import React...
import React from 'react';
import ReactDOM from 'react-dom';

// ... and HotTable
import HotTable from 'react-handsontable';

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
    return (
      <div id="example-component">
        <HotTable root="hot" settings = {{
            data:this.handsontableData,
            onAfterChange: (changes, source) => {
                      console.log(this.handsontableData)
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

export default ExampleComponent;