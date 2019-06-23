import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class App extends Component {
  state = {
    columnDefs: [
      {
        headerName: "Id", field: "id", sortable: true
      },
      {
        headerName: "Name", field: "name"
      },
      {
        headerName: "Phone", field: "phone"
      },
      {
        headerName: "Age", field: "age", sortable: true
      }
    ],
    rowData: []
  }
  componentDidMount() {
    fetch('./json.json')
      .then(result => result.json())
      .then(rowData => this.setState({ rowData }))
  }
  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: '500px',
          width: '800px'
        }}
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}>
        </AgGridReact>
      </div>
    )
  }
}

export default App