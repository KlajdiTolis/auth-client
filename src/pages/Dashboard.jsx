import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const testColl = (e) => {
    e.preventDefault();
    fetch("/testColl", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: "klajdi",
        price: 21,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const Logout = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  return (
    <div>
      <button onClick={Logout}>LOGOUT</button>
      <button onClick={testColl}>TestColl</button>
    </div>
  );
};

export default Dashboard;
