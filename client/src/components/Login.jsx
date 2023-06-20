import { Link } from "react-router-dom";

export default function Login() {
  return (
    <form>
      <div className="my-4 text-2xl font-bold">
        <h2 className="text-center uppercase">Log in Here</h2>
      </div>

      <div className="flex flex-col">
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
        <button className="btn">Log in</button>
        <p className="my-4 text-center">
          Don&apos;t have account &nbsp;
          <Link to="/signup" className="here-btn">
            Sign up here
          </Link>
        </p>
      </div>
    </form>
  );
}
