import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();
  const [eusername, setUEsername] = useState("");
  const [epassword, setEPassword] = useState("");
  const [ruser, setRUser] = useState(true);

  const users = props.users;

  function handleUsername(evt) {
    setUEsername(evt.target.value);
  }

  function handlePassword(evt) {
    setEPassword(evt.target.value);
  }

  function checkUser() {
    var userfound = false;
    users.forEach((item) => {
      if (item.name === eusername && item.password === epassword) {
        userfound = true;
        
        navigate("/landing",{state:{name:eusername}});
      }

    });
    if (userfound === false) {
      setRUser(false);
    }
  }

  return (
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey Hii</h1>
        {ruser ? (
          <p>I help you manage your activies after you login </p>
        ) : (
          <p className="text-red-500">Please Sign Up Before you Login!! </p>
        )}

        <div className="flex flex-col gap-2 my-5">
          <input
            type="text"
            className="w-52 border p-2 rounded-md"
            placeholder="Username"
            onChange={handleUsername}
          />
          <input
            type="password"
            className="w-52 border p-2 rounded-md"
            placeholder="Password"
            onChange={handlePassword}
          />
          <button
            className="w-24 bg-purple-500 text-white p-2 rounded-md hover:bg-purple-700"
            onClick={checkUser}
          >
            Login
          </button>

          <p className="text-sm">
            Don't have an account?{" "}
            <Link to={"./signup"} className="underline text-blue-600">
              Signup{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
