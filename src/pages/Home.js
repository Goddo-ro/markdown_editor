import React from 'react';
import {useDispatch} from "react-redux";
import {removeUser} from "../store/slices/userSlice";

const Home = () => {
  const dispatch = useDispatch();

  const exit = () => {
    dispatch(removeUser());
  }

  return (
    <div>
      Home
      <a onClick={exit}>Exit</a>
    </div>
  );
};

export default Home;