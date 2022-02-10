import Image from "next/image";

export default function BootstrapCarousel() {
  return (
    <div>
      <div className="section-header">
        <h1>Carousel</h1>
        <div className="section-header-breadcrumb">
          <div className="breadcrumb-item active"><a href="#">Dashboard</a></div>
          <div className="breadcrumb-item"><a href="#">Bootstrap Components</a></div>
          <div className="breadcrumb-item">Carousel</div>
        </div>
      </div>

      <div className="section-body">
        <h2 className="section-title">Carousel</h2>
        <p className="section-lead">
          A slideshow component for cycling through elements—images or slides of
          text—like a carousel.
        </p>

        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            <div className="card">
              <div className="card-header">
                <h4>Simple</h4>
              </div>
              <div className="card-body">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <Image
                        className="d-block w-100"
                        src="/img/news/img01.jpg"
                        alt="First slide"
                        layout='fill' />
                    </div>
                    <div className="carousel-item">
                      <Image
                        className="d-block w-100"
                        src="/img/news/img07.jpg"
                        alt="Second slide"
                        layout='fill' />
                    </div>
                    <div className="carousel-item">
                      <Image
                        className="d-block w-100"
                        src="/img/news/img08.jpg"
                        alt="Third slide"
                        layout='fill' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4>Navigation &amp; Indicator</h4>
              </div>
              <div className="card-body">
                <div
                  id="carouselExampleIndicators3"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators3"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators3"
                      data-slide-to="1"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators3"
                      data-slide-to="2"
                    ></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <Image
                        className="d-block w-100"
                        src="/img/news/img01.jpg"
                        alt="First slide"
                        layout='fill' />
                    </div>
                    <div className="carousel-item">
                      <Image
                        className="d-block w-100"
                        src="/img/news/img07.jpg"
                        alt="Second slide"
                        layout='fill' />
                    </div>
                    <div className="carousel-item">
                      <Image
                        className="d-block w-100"
                        src="/img/news/img08.jpg"
                        alt="Third slide"
                        layout='fill' />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators3"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators3"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <div className="card">
              <div className="card-header">
                <h4>Caption</h4>
              </div>
              <div className="card-body">
                <div
                  id="carouselExampleIndicators2"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators2"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators2"
                      data-slide-to="1"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators2"
                      data-slide-to="2"
                    ></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <Image
                        className="d-block w-100"
                        src="/img/news/img01.jpg"
                        alt="First slide"
                        layout='fill' />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Heading</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <Image
                        className="d-block w-100"
                        src="/img/news/img07.jpg"
                        alt="Second slide"
                        layout='fill' />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Heading</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <Image
                        className="d-block w-100"
                        src="/img/news/img08.jpg"
                        alt="Third slide"
                        layout='fill' />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Heading</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                      </div>
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators2"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators2"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4>Crossfade</h4>
              </div>
              <div className="card-body">
                <div
                  id="carouselExampleFade"
                  className="carousel slide carousel-fade"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <Image
                        className="d-block w-100"
                        src="/img/news/img01.jpg"
                        alt="First slide"
                        layout='fill' />
                    </div>
                    <div className="carousel-item">
                      <Image
                        className="d-block w-100"
                        src="/img/news/img07.jpg"
                        alt="Second slide"
                        layout='fill' />
                    </div>
                    <div className="carousel-item">
                      <Image
                        className="d-block w-100"
                        src="/img/news/img08.jpg"
                        alt="Third slide"
                        layout='fill' />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleFade"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleFade"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
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