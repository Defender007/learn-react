import React, { Component } from "react";

export default class MainContent extends Component {
  state = {
    appTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Scott",
        phone: "123-456",
        address: { city: "New Delhi" },
        photo:
          "https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 2,
        name: "Jones",
        phone: "125-545",
        address: { city: "New Jersy" },
        photo:
          "https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: 3,
        name: "Allen",
        phone: "120-345",
        address: { city: "London" },
        photo:
          "https://media.istockphoto.com/photos/studio-waist-up-portrait-of-a-beautiful-businesswoman-with-crossed-picture-id1180926773?b=1&k=20&m=1180926773&s=612x612&w=0&h=ZQv4MQIH8Jg6ZHZ4lYxQk5C7J3K678q7DZcS2OYy4sQ=",
      },
      {
        id: 4,
        name: "James",
        phone: "",
        address: { city: "Berlin" },
        photo:
          "https://media.istockphoto.com/photos/smiling-black-man-in-suit-posing-on-studio-background-picture-id1201144328?b=1&k=20&m=1201144328&s=612x612&w=0&h=HVsjzeExJBJT3bj3wD_xVLzKd8kJVWRkEJjsRbsV04c=",
      },
      {
        id: 5,
        name: "John",
        phone: "",
        address: { city: "Lagos" },
        photo:
          "https://media.istockphoto.com/photos/mature-businessman-smiling-over-white-background-picture-id685132245?b=1&k=20&m=685132245&s=612x612&w=0&h=vDrgOXgZiPhJrAHZJP77qDaB77oxXohhTNhTGAT_1jE=",
      },
    ],
  };
  /* customerNameStyle = (name) => {
    if (name.startsWith("S")) return "green-highlight border-left";
    else if (name.startsWith("J")) return "red-highlight border-right";
    else return "";
  }; */

  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.appTitle}
          <span className="badge badge-secondary m-2">
            {this.state.customersCount}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>
        <table className="table table-">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer Name</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }
  onRefreshClick = () => {
    this.setState({
      customersCount: 7,
    });
  };

  getPhoneToRender = (phone) => {
    return phone ? (
      phone
    ) : (
      <div className="bg-warning p-2 text-center">No Phone no.</div>
    );
  };
  getCustomerRow = () => {
    return this.state.customers.map((customer, index) => {
      return (
        <tr key={customer.id}>
          <td>{customer.id}</td>
          <td>
            <img
              src={customer.photo}
              className="img-thumbnail"
              style={{width:"50px"}}
              alt="Customer photo"
            />Ï
            <div>
                <button className="btn btn-small btn-secondary" onClick={() => this.onChangePictureClick(customer, index)}>Change Image</button>
            </div>
          </td>
          <td>{customer.name}</td>
          <td>{this.getPhoneToRender(customer.phone)}</td>
          <td>{customer.address.city}</td>
        </tr>
      );
    });
  };
  onChangePictureClick = (customer, index) => {
    console.log(customer)
    console.log(index)
    const custArray = this.state.customers;
    custArray[index].photo = "https://images.pexels.com/photos/1975342/pexels-photo-1975342.jpeg?auto=compress&cs=tinysrgb&w=600"
    this.setState({customer:custArray})
  }
}
