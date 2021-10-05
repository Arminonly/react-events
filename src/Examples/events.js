import React, { Component } from "react";
import axios from "axios";

export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  fetchData = async () => {
    const users = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(users.data.slice(0, 2));
    this.setState({ users: users.data });
  };

  componentDidMount = () => {
    this.fetchData();
  };

  render() {
    const { users } = this.state;
    return (
      <div>
        <h4>events</h4>
        {users.map((user) => (
          <div>
            <h6 key={user._id}>
              {" "}
              {user.name}: {user.phone}
            </h6>
          </div>
        ))}
        <input onChange={(event) => console.log(event.target.value)} />
        <button onClick={() => console.log('click')}>Click me</button>
      </div>
    );
  }
}
