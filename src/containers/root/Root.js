import React from "react";
import Category from "../category/Category";
import Header from "../header/header";
import "./Root.scss";

export default function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">
          <Category />
        </div>
      </div>
    </div>
  );
}
