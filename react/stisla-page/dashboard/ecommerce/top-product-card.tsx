import Image from "next/image";
import { useState } from "react";
import { top5Product } from "./_data";

export default function TopProductCard() {
  const [period, setPeriod] = useState('Today');
  const listPeriod = ["Today", "Week", "Month", "This Year"];

  const topProductList = top5Product.map( (product, i) => {
    const priceSell = parseInt(product.price.sell);
    const priceBudget = parseInt(product.price.budget);
    const totalPrice = priceSell + priceBudget;
    const sell_percentage = (priceSell/totalPrice) * 100;
    const budget_percentage = (priceBudget/totalPrice) * 100;

    return (
      <li className="media" key={`topproduct-${i}`}>
        <Image
          className="rounded"
          width="60"
          height="60"
          src={ product.imgSrc }
          alt="product"
        />
        <div className="media-body ml-2">
          <div className="float-right">
            <div className="font-weight-600 text-muted text-small">
              { product.sold } Sales
            </div>
          </div>
          <div className="media-title"> { product.name } </div>
          <div className="mt-1">
            <div className="budget-price">
              <div
                className="budget-price-square bg-primary"
                data-width={ `${sell_percentage}`}
              ></div>
              <div className="budget-price-label">${ product.price.sell }</div>
            </div>
            <div className="budget-price">
              <div
                className="budget-price-square bg-danger"
                data-width={ `${budget_percentage}` }
              ></div>
              <div className="budget-price-label"> ${ product.price.budget } </div>
            </div>
          </div>
        </div>
      </li>
    );
  })

  return (
    <div className="card gradient-bottom">
      <div className="card-header">
        <h4>Top 5 Products</h4>
        <div className="card-header-action dropdown">
          <a onClick={e => e.preventDefault()}
            href="#"
            data-toggle="dropdown"
            className="btn btn-danger dropdown-toggle"
          > { period } </a
          >
          <ul className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
            <li className="dropdown-title">Select Period</li>
            {
              listPeriod.map( (p, i) => {
                return (
                  <li key={`period-${i}`}>
                    <a onClick={ (e) => {
                      e.preventDefault();
                      setPeriod(p);
                    }} href="#" className={ `dropdown-item ${p == period ? "active" : ""}` }> { p } </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
      <div className="card-body" id="top-5-scroll" >
        <ul className="list-unstyled list-unstyled-border">
          { topProductList }
        </ul>
      </div>
      <div className="card-footer pt-3 d-flex justify-content-center">
        <div className="budget-price justify-content-center">
          <div className="budget-price-square bg-primary" data-width="20"></div>
          <div className="budget-price-label">Selling Price</div>
        </div>
        <div className="budget-price justify-content-center">
          <div className="budget-price-square bg-danger" data-width="20"></div>
          <div className="budget-price-label">Budget Price</div>
        </div>
      </div>
    </div>
  );
}