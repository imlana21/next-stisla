import Image from "next/image";
import { searchData } from "./_data";

export default function HeaderSearch() {
  const listProjects = searchData.map( (data, i) => {
    if(data.type === 'projects') {
      return (
        <div className="search-item" key={`project-${i}`}>
          <a onClick={event => event.preventDefault()}>
            <div className="search-icon bg-primary text-white mr-3">
              <i className="fas fa-laptop"></i>
            </div>
            { data.text }
          </a>
        </div>
      )
    }
  });

  const listHistories = searchData.map( (data, i) => {
    if (data.type === 'histories') {
      return (
        <div className="search-item">
          <a
            onClick={event => event.preventDefault()}
          >
            { data.text }
          </a>
          <a
            onClick={event => event.preventDefault()}
            className="search-close"
          >
            <i className="fas fa-times"></i>
          </a>
        </div>
      ); 
    }
  });

  const listResults = searchData.map( (data, i) => {
    if(data.type === 'results' && data.imgUrl !== undefined) {
      return (
        <div className="search-item">
          <a onClick={event => event.preventDefault()}>
            <span>
              <Image
                className="rounded"
                width="50"
                height="50"
                src={ data?.imgUrl }
                alt="product"
              />
            </span>
            <span className="ml-2">
              { data.text }
            </span>
          </a>
        </div>
      )
    } 
  });

  return (
    <form className="form-inline mr-auto">
      <ul className="navbar-nav mr-3">
        <li>
          <a
            onClick={event => event.preventDefault()}
            data-toggle="sidebar"
            className="nav-link nav-link-lg"
            href="#"
          >
            <i className="fas fa-bars"></i>
          </a> 
        </li>
        <li>
          <a
            onClick={event => event.preventDefault()}
            data-toggle="search"
            className="nav-link nav-link-lg d-sm-none"
            href="#"
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
          <div className="search-header"> Histories </div>
          { listHistories }
          <div className="search-header"> Results </div>
          { listResults }
          <div className="search-header"> Projects </div>
          { listProjects }
        </div>
      </div>
    </form>
  );
}