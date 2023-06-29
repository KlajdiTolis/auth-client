import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const dataF = async () => {
  //   fetch("/users")
  //     .then((res) => res.json())
  //     .then((dataa) => {
  //       setData(dataa);
  //       console.log(dataa);
  //     });
  // };

  // useEffect(() => {
  //   dataF();
  // }, []);

  const login = () => {
    fetch("/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="App">
      <form onSubmit={login}>
        <input
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
