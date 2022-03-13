import Image from "next/image";

export default function BestProductCard() {
  return (
    <div className="card">
      <div className="card-header">
        <h4> Best Products </h4>
      </div>
      <div className="card-body">
        <div
          className="owl-carousel owl-theme"
          id="products-carousel"
        >
          <div>
            <div className="product-item pb-3">
              <div className="product-image">
                <Image src="/img/products/product-4-50.png"
                  alt="image"
                  className="img-fluid"
                  width="55"
                  height="55"
                />
              </div>
              <div className="product-details">
                <div className="product-name">iBook Pro 2018</div>
                <div className="product-review">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <div className="text-muted text-small">67 Sales</div>
                <div className="product-cta">
                  <a href="#" className="btn btn-primary">
                    Detail
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="product-item">
              <div className="product-image">
                <Image
                  alt="image"
                  src="/img/products/product-3-50.png"
                  className="img-fluid"
                  width="55"
                  height="55"
                />
              </div>
              <div className="product-details">
                <div className="product-name">oPhone S9 Limited</div>
                <div className="product-review">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half"></i>
                </div>
                <div className="text-muted text-small">86 Sales</div>
                <div className="product-cta">
                  <a href="#" className="btn btn-primary">
                    Detail
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="product-item">
              <div className="product-image">
                <Image
                  alt="image"
                  src="/img/products/product-1-50.png"
                  className="img-fluid"
                  width="55"
                  height="55"
                />
              </div>
              <div className="product-details">
                <div className="product-name">Headphone Blitz</div>
                <div className="product-review">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
                <div className="text-muted text-small">63 Sales</div>
                <div className="product-cta">
                  <a href="#" className="btn btn-primary">
                    Detail
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}