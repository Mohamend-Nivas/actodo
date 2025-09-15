import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(props) {
  const navigate = useNavigate();
  const users = props.users;
  const setUsers = props.setUsers;

  const [eusername, setUEsername] = useState("");
  const [epassword, setEPassword] = useState("");

  function handleUsername(evt) {
    setUEsername(evt.target.value);
  }

  function handlePassword(evt) {
    setEPassword(evt.target.value);
  }

  function addUser() {
    const newUser = { name: eusername, password: epassword };
    setUsers([...users, newUser]);
    navigate("/");
  }

  return (
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey Hii</h1>
        <p>Sign up here :)</p>

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
          <input
            type="password"
            className="w-52 border p-2 rounded-md"
            placeholder="Confirm Password"
          />
          <button
            className="w-24 bg-yellow-400 text-black p-2 rounded-md hover:bg-yellow-500"
            onClick={addUser}
          >
            Sign Up
          </button>

          <p className="text-sm">
            Already have an account?{" "}
            <Link to={"/"} className="underline text-blue-600">
              Login{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
