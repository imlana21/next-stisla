import Image from "next/image";

export default function HeaderSearchComponent() {
  return (
    <form className="form-inline mr-auto">
      <ul className="navbar-nav mr-3">
        <li>
          <a
            onClick={event => event.preventDefault()}
            data-toggle="sidebar"
            className="nav-link nav-link-lg"
          >
            <i className="fas fa-bars"></i>
          </a> 
        </li>
        <li>
          <a
            onClick={event => event.preventDefault()}
            data-toggle="search"
            className="nav-link nav-link-lg d-sm-none"
          >
            <i className="fas fa-search"></i>
          </a>
        </li>
      </ul>
      <div className="search-element">
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
          data-width="250"
        />
        <button className="btn" type="submit">
          <i className="fas fa-search"></i>
        </button>
        <div className="search-backdrop"></div>
        <div className="search-result">
          <div className="search-header">Histories</div>
          <div className="search-item">
            <a
              onClick={event => event.preventDefault()}
            >
              How to hack NASA using CSS
            </a>
            <a
              onClick={event => event.preventDefault()}
              className="search-close"
            >
              <i className="fas fa-times"></i>
            </a>
          </div>
          <div className="search-item">
            <a onClick={event => event.preventDefault()}>
              Kodinger.com
            </a>
            <a
              onClick={event => event.preventDefault()}
              className="search-close"
            >
              <i className="fas fa-times"></i>
            </a>
          </div>
          <div className="search-item">
            <a onClick={event => event.preventDefault()}>#Stisla</a>
            <a onClick={event => event.preventDefault()} className="search-close"><i className="fas fa-times"></i></a>
          </div>
          <div className="search-header">Result</div>
          <div className="search-item">
            <a onClick={event => event.preventDefault()}>
              <Image
                className="mr-3 rounded"
                width="30"
                src="/img/products/product-3-50.png"
                alt="product"
                layout="fill"
              />
              oPhone S9 Limited Edition
            </a>
          </div>
          <div className="search-item">
            <a onClick={event => event.preventDefault()}>
              <Image
                className="mr-3 rounded"
                width="30"
                src="/img/products/product-2-50.png"
                alt="product"
                layout="fill"
              />
              Drone X2 New Gen-7
            </a>
          </div>
          <div className="search-item">
            <a onClick={event => event.preventDefault()}>
              <Image
                className="mr-3 rounded"
                width="30"
                src="/img/products/product-1-50.png"
                alt="product"
                layout="fill"
              />
              Headphone Blitz
            </a>
          </div>
          <div className="search-header">Projects</div>
          <div className="search-item">
            <a onClick={event => event.preventDefault()}>
              <div className="search-icon bg-danger text-white mr-3">
                <i className="fas fa-code"></i>
              </div>
              Stisla Admin Template
            </a>
          </div>
          <div className="search-item">
            <a onClick={event => event.preventDefault()}>
              <div className="search-icon bg-primary text-white mr-3">
                <i className="fas fa-laptop"></i>
              </div>
              Create a new Homepage Design
            </a>
          </div>
        </div>
      </div>
    </form>
  );
}