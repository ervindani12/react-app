import React, { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function(response) {
        setData(response.data);
        console.log(response);
      });
  }, []);

  console.log("Posts", data);

  return (
    <div>
      {data.map(post => (
        <div key={post.id} style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", color: "red" }}>
            <h1>{post.title}</h1>
          </div>
          <div style={{ textAlign: "center" }}>
            <h4>{post.body}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
