import React, { Component } from "react";
import { getCategoryList } from "./state/category";
import { getProductImageLink } from "../../utils/imageUtils";
import Productcard from "./productcard/productcard";
import "./Category.scss";

export default class Category extends Component {
  state = { category: {} };

  componentDidMount() {
    getCategoryList().then(data => {
      this.setState({ category: data });
    });
  }

  render() {
    const { products } = this.state.category;

    if (products) {
      return products.map(prod => {
        return (
          <Productcard
            name={prod.name}
            desc={prod.description}
            url={prod.url}
            img={getProductImageLink(prod)}
            price={prod.cheapestPrice.amount}
            currency={prod.cheapestPrice.currency}
            rating={prod.rating.averageRating}
          />
        );
      });
    }

    return <div></div>;
  }
}
