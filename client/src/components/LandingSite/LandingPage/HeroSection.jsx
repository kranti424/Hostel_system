import { Link } from "react-router-dom";
import "./Hero.css";

function HeroSection() {
  return (
    <main className="flex flex-col lg:flex-row-reverse justify-center align-center  text-white text-center">
          <img
            className="h-1/2 w-1/3 ml-20 mt-20 "
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/VJTI_College_Quadrangle.jpg/1200px-VJTI_College_Quadrangle.jpg"
          ></img>
      <div className="md:pt-[8%]">
      <h1 className="cormorant-garamond-semibold">
          VJTI
        </h1>
        <br />
        <h1 className="font-bold text-6xl">
          Hostel System
        </h1>
        <div className="py-20">
          <Link
            to="/auth/login"
            className="bg-blue-500 py-3 px-40 hover:bg-blue-700 transition rounded text-2xl"
          >
            Login as A Student
          </Link>
          <p className="mt-6 mb-3">OR</p>
          <Link
            to="/auth/request"
            className="text-xl hover:underline hover:text-blue-500"
          >
            Request Registration
          </Link>
        </div>
      </div>
    </main>
  );
}
export { HeroSection };