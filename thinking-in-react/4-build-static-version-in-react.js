/*
Let's finish our static version by adding the ProductTable and it's child components; ProductRow and ProductCategoryRow.

In this exercise product data is passed to the top component as properties. You can access them via this.props.products on FilterableProductTable.

It is part of the exercise to pass the data on to ProductTable and use it to generate the correct number of components ProductRow and ProductCategoryRow.

*/

import React from 'react';

export const ProductCategoryRow = React.createClass({
  render() {
    return (
      <tr>
        <th colSpan={2}>{this.props.category}</th>
      </tr>
    );
  },
});

export const ProductRow = React.createClass({
  render() {
    const product = this.props.product;

    const style = {
      color: product.stocked ? null : 'red',
    };

    return (
      <tr>
        <td style={style}>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    );
  },
});

export const ProductTable = React.createClass({
  render() {
    const products = this.props.products;

    const rows = [];
    let currentCategory;

    products.forEach((product) => {
      if (product.category !== currentCategory) {
        currentCategory = product.category;

        rows.push((
          <ProductCategoryRow
            key={currentCategory}
            category={currentCategory}
            />
        ));
      }

      rows.push((
        <ProductRow key={product.name} product={product}/>
      ));
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  },
});

export const SearchBar = React.createClass({
  render() {
    return (
      <form>
        <input type="search" placeholder="Search..."/>
        <label>
          <input type="checkbox"/>
          Only show products in stock
        </label>
      </form>
    );
  },
});

export const FilterableProductTable = React.createClass({
  render() {
    const products = this.props.products;

    return (
      <div>
        <SearchBar/>
        <ProductTable products={products}/>
      </div>
    );
  },
});
