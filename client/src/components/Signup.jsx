import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <form>
      <div className="my-4 text-2xl font-bold">
        <h2 className="text-center uppercase">Sign up Here</h2>
      </div>

      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Enter Your Name"
          className="input-box"
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          className="input-box"
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          className="input-box"
        />
      </div>
      <div>
        <button className="btn">Sign up</button>
        <p className="my-4 text-center">
          Already have an account &nbsp;
          <Link to="/login" className="here-btn">
            Log in here
          </Link>
        </p>
      </div>
    </form>
  );
}
