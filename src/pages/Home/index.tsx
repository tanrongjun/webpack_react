import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC<unknown> = () => {
  return (
    <div>
      Home
      <Link to='/about'>About</Link>
    </div>
  )
}

export default Home
