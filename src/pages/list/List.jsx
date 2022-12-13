import React from 'react'
import "./list.css";

import Navbar from "../../components/navbar/Navbar";
import Header from '../../components/header/Header';

const List = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" />
    </div>
  )
}

export default List