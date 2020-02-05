import React, { Component } from "react";
import { getCategoryList } from "./state/category";
import "./Category.scss";

export default class Category extends Component {
  state = { category: {} };
  async componentDidMount() {
    const loadedData = await getCategoryList();
    this.setState({ category: loadedData });
  }

  render() {
    /*
     * You can get the category data from the category state:
     * const { category } = this.state;
     */
    return <div className="product-list"></div>;
  }
}
