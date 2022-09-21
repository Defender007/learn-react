import React, { Component } from "react";

export default class CustomersList extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [],
  };

  render() {
    return (
      <div>
        <h4 className="m-1 p-1">
          {this.state.pageTitle}

          <span className="badge badge-secondary m-2">
            {this.state.customersCount}
          </span>

          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }
  // render ends here


  //Executes after constructor and render method (includes life cycle of child components, if any) of current component
  componentDidMount = async () => {
    //send request to server
    const response = await fetch("http://localhost:5000/customers", {
      method: "GET",
    });

    //the following code executes after receiving response from server
    //converting the response body into a JS object array
    const custs = await response.json();

    //the following code executes after converting response body into JS object array
    console.log(custs);

    //updating products into component's state
    this.setState({ customers: custs });

    //console.log("componentDidMount - CustomersList");
  };

  componentDidCatch(error, info) {
    //console.log("componentDidCatch - CustomersList");
    console.log(error, info);

    localStorage.lastError = `${error}\n${JSON.stringify(info)}`;
  }

  //Executes when the user clicks on Refresh button
  onRefreshClick = () => {
    //Update the state using setState method - so that react updates the Browser DOM automatically
    this.setState({ customersCount: 7 });
  };

  getPhoneToRender = (phone) => {
    if (phone) return phone;
    else {
      return <div className="bg-warning p-2 text-center">No Phone</div>;
    }
  };

  getCustomerRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="Customer" className="my-thumbnail" />
            <div>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => {
                  this.onChangePictureClick(cust, index);
                }}
              >
                Change Picture
              </button>
            </div>
          </td>
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };

  //Executes when the user clicks on "Change Picture" button in the grid
  //Receives the "customer" object and index of the currently clicked customer
  onChangePictureClick = (cust, index) => {
    //console.log(cust);
    //console.log(index);

    //get existing customers
    const custArr = this.state.customers;
    custArr[index].photo =
      "https://images.pexels.com/photos/37546/woman-portrait-face-studio-37546.jpeg?auto=compress&cs=tinysrgb&w=600";

    //update "customers" array in the state
    this.setState({ customers: custArr });
  };
}
