import React, { Component } from "react";

export default class CustomersList extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Scott",
        phone: "123-456",
        address: { city: "New Delhi" },
        photo: "https://media.istockphoto.com/photos/mature-businessman-smiling-over-white-background-picture-id685132245?b=1&k=20&m=685132245&s=612x612&w=0&h=vDrgOXgZiPhJrAHZJP77qDaB77oxXohhTNhTGAT_1jE=",
      },
      {
        id: 2,
        name: "Jones",
        phone: "982-014",
        address: { city: "New Jersy" },
        photo: "https://media.istockphoto.com/photos/studio-waist-up-portrait-of-a-beautiful-businesswoman-with-crossed-picture-id1180926773?b=1&k=20&m=1180926773&s=612x612&w=0&h=ZQv4MQIH8Jg6ZHZ4lYxQk5C7J3K678q7DZcS2OYy4sQ=",
      },
      {
        id: 3,
        name: "Allen",
        phone: "889-921",
        address: { city: "London" },
        photo: "https://media.istockphoto.com/photos/smiling-black-man-in-suit-posing-on-studio-background-picture-id1201144328?b=1&k=20&m=1201144328&s=612x612&w=0&h=HVsjzeExJBJT3bj3wD_xVLzKd8kJVWRkEJjsRbsV04c=",
      },
      {
        id: 4,
        name: "James",
        phone: null,
        address: { city: "Berlin" },
        photo: "https://media.istockphoto.com/photos/portrait-of-young-happy-indian-business-man-executive-looking-at-picture-id1309489745?b=1&k=20&m=1309489745&s=612x612&w=0&h=SvwAcCHO9JeEfiibPrhvM4vwmlifl8bZV3KLlhTrUMY=",
      },
      {
        id: 5,
        name: "John",
        phone: null,
        address: { city: "New York" },
        photo: "https://images.pexels.com/photos/3797438/pexels-photo-3797438.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
    ],
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
    custArr[index].photo = "https://images.pexels.com/photos/37546/woman-portrait-face-studio-37546.jpeg?auto=compress&cs=tinysrgb&w=600";

    //update "customers" array in the state
    this.setState({ customers: custArr });
  };
}
