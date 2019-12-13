import React from 'react'
import { connect } from 'react-redux'
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
//import {AllCommunityModules} from "ag-grid-community/all-modules";

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';


function mapStateToProps(state) {
  return{
    customers: state.customersObj.customers,
    timezone: state.timezoneObj.timezone
  };
}

class CustomerTable extends React.Component {
  constructor(props){
    super(props);
    let customerList = []
    for(let i=0;i<this.props.customers.length;i++){
      let customer = this.props.customers[i];
      let timeAdded = customer[9].clone().tz(this.props.timezone).format("DD-MM-YYYY h:mm:ss A");
      let timeAddedSplit = timeAdded.split(' ');
      customerList.push(
        {
            name: customer[1],
            dob: customer[2],
            phoneNumber: customer[3],
            address: (customer[4]+', '+customer[5]+' '+customer[6]+' '+customer[7]),
            package: customer[8],
            timeAdded: timeAddedSplit[1]+' '+timeAddedSplit[2]+', '+timeAddedSplit[0]
          }
      )
    }

    this.state = {
      columnDefs: [
        { headerName: "Name", field: "name", sortable: true, filter: true },
        { headerName: "Date of Birth", field: "dob", sortable: true, filter: true },
        { headerName: "Phone Number", field: "phoneNumber", filter: true },
        { headerName: "Address", field: "address", filter:true },
        { headerName: "Package Type", field: "package", sortable: true, filter: true },
        { headerName: "Time Added to System", field: "timeAdded", sortable: true, filter: true },
      ],
      rowData: customerList
    }
  }
  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
        height: '500px',
        width: '1200px' }}
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}>
        </AgGridReact>
      </div>
    )
  }
}

export default connect(mapStateToProps)(CustomerTable)
