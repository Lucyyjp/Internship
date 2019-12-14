import React from 'react'
import { connect } from 'react-redux'
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { deleteCustomers} from '../actions/index.js'

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';


function mapStateToProps(state) {
  return{
    customers: state.customersObj.customers,
    timezone: state.timezoneObj.timezone
  };
}

const mapDispatchToProps = {
  deleteCustomers
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
            id: customer[0],
            name: customer[1],
            dob: customer[2],
            phoneNumber: customer[3],
            address: (customer[4]+', '+customer[5]+' '+customer[6]+' '+customer[7]),
            package: customer[8],
            timeAdded: timeAddedSplit[1]+' '+timeAddedSplit[2]+', '+timeAddedSplit[0],
            delete: false
          }
      )
    }

    this.state = {
      columnDefs: [
        { headerName: "Name", field: "name", sortable: true, filter: true },
        { headerName: "Date of Birth", field: "dob", filter: true, width: 150, sortable:'asc',
          comparator: function (valueA, valueB, nodeA, nodeB, isInverted) {
            let dobASplit = valueA.split('/');
            let dobBSplit = valueB.split('/');
            console.log(dobASplit[1]+dobASplit[0]+dobASplit[2])
            return (dobASplit[1]+dobASplit[0]+dobASplit[2]) - (dobBSplit[1]+dobBSplit[0]+dobBSplit[2])
          }},
        { headerName: "Phone Number", field: "phoneNumber", filter: true },
        { headerName: "Address", field: "address", filter:true },
        { headerName: "Package Type", field: "package", sortable: true, filter: true, width: 150 },
        { headerName: "Time Added to System", field: "timeAdded", sortable: true, filter: true },
        {
          headerName: "Delete Customer",
          field: "deleteCustomer",
          width: 150,
          cellRenderer: function(params) {
            var input = document.createElement('input');
            input.type="checkbox";
            input.checked=params.value;
            input.addEventListener('click', function (event) {
              params.value=!params.value;
              params.node.data.fieldName = params.value;
              params.node.data.delete=!params.node.data.delete;
            });
            return input;
          }
        }
      ],
      rowData: customerList
      }
    }
/*
  deleteCustomerIds = (params) => {
    let deleteIds = [];
    params.api.forEachNode(function(RowNode){
      if (RowNode.data.delete) {
        deleteIds.push(RowNode.data.id)
      }
    })
    this.props.deleteCustomers(deleteIds)
  }
  */

  render() {

    return (
      <div
      className="ag-theme-balham"
      style={{
        height: '600px',
        width: '100%' }}>

          <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}>
          </AgGridReact>
          </div>
        )
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CustomerTable)
