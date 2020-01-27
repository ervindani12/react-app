import React, { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function(response) {
        setData(response.data);
        // handle success
        console.log(response);
      });
  }, []);

  console.log("Users", data);

  return (
    <div>
      {data.map(user => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <h5>{user.address.city}</h5>
        </div>
      ))}
    </div>
  );
};

export default Users;
