import React, { Component } from "react";
import "./productcard.scss";

export default class Productcard extends Component {
  renderRating() {
    let rating = Math.round(this.props.rating);
    let ratingArr = [];

    for (let i = 0; i < rating; i++) {
      ratingArr.push(<span className="product-card__star">★</span>);
    }
    return ratingArr;
  }

  render() {
    return (
      <div className="product-card" href={this.props.url}>
        <div className="product-card__image">
          <img src={this.props.img} alt="" />
        </div>
        <div className="product-card__text">
          <h2 className="product-card__name">{this.props.name}</h2>
          <p className="product-card__desc">{this.props.desc}</p>
          <div className="product-card__rating">{this.renderRating()}</div>
        </div>
        <div className="product-card__price-container">
          <div className="product-card__price-container">
            <p className="product-card__price">
              {Math.round(this.props.price)}
            </p>
            <p className="product-card__currency">{this.props.currency}</p>
          </div>
        </div>
        <div className="product-card__btn-container">
          <button href={this.props.url} className="product-card__btn">
            Jämför Pris
          </button>
        </div>
      </div>
    );
  }
}
