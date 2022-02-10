import Image from "next/image";

export default function BootstrapMediaObject() {
  return (
    <div>
      <div className="section-header">
        <h1>Media Object</h1>
        <div className="section-header-breadcrumb">
          <div className="breadcrumb-item active"><a href="javascript:void(0)">Dashboard</a></div>
          <div className="breadcrumb-item"><a href="javascript:void(0)">Bootstrap Components</a></div>
          <div className="breadcrumb-item">Media Object</div>
        </div>
      </div>

      <div className="section-body">
        <h2 className="section-title">Media Object</h2>
        <p className="section-lead">
          Examples for Bootstrap’s media object to construct highly repetitive
          components like blog comments, tweets, and the like.
        </p>

        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            <div className="card">
              <div className="card-header">
                <h4>Simple</h4>
              </div>
              <div className="card-body">
                <div className="media">
                  <Image
                    className="mr-3"
                    src="/img/example-image-50.jpg"
                    alt="Generic placeholder image"
                    layout='fill'
                  />
                  <div className="media-body">
                    <h5 className="mt-0">Media heading</h5>
                    <p className="mb-0">
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                      scelerisque ante sollicitudin. Cras purus odio, vestibulum
                      in vulputate at, tempus viverra turpis. Fusce condimentum
                      nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                      in faucibus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4>List</h4>
              </div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li className="media">
                    <Image
                      className="mr-3"
                      src="/img/example-image-50.jpg"
                      alt="Generic placeholder image"
                      layout='fill'
                    />
                    <div className="media-body">
                      <h5 className="mt-0 mb-1">List-based media object</h5>
                      <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin. Cras purus oringilla.
                        Donec lacinia congue felis in faucibus.
                      </p>
                    </div>
                  </li>
                  <li className="media my-4">
                    <Image
                      className="mr-3"
                      src="/img/example-image-50.jpg"
                      alt="Generic placeholder image"
                      layout='fill'
                    />
                    <div className="media-body">
                      <h5 className="mt-0 mb-1">List-based media object</h5>
                      <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin. Cras purus oringilla.
                        Donec lacinia congue felis in faucibus.
                      </p>
                    </div>
                  </li>
                  <li className="media">
                    <Image
                      className="mr-3"
                      src="/img/example-image-50.jpg"
                      alt="Generic placeholder image"
                      layout='fill'
                    />
                    <div className="media-body">
                      <h5 className="mt-0 mb-1">List-based media object</h5>
                      <p className="mb-0">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin. Cras purus oringilla.
                        Donec lacinia congue felis in faucibus.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <div className="card">
              <div className="card-header">
                <h4>Nesting</h4>
              </div>
              <div className="card-body">
                <div className="media">
                  <Image
                    className="mr-3"
                    src="/img/example-image-50.jpg"
                    alt="Generic placeholder image"
                    layout='fill'
                  />
                  <div className="media-body">
                    <h5 className="mt-0">Media heading</h5>
                    <p>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                      scelerisque ante sollicitudin. Cras purus odio, vestibulum
                      in vulputate at, tempus viverra turpis. Fusce condimentum
                      nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                      in faucibus.
                    </p>

                    <div className="media mt-3">
                      <a className="pr-3" href="javascript:void(0)">
                        <Image
                          src="/img/example-image-50.jpg"
                          alt="Generic placeholder image"
                          layout='fill'
                        />
                      </a>
                      <div className="media-body">
                        <h5 className="mt-0">Media heading</h5>
                        <p className="mb-0">
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin. Cras purus odio,
                          vestibulum in vulputate at, tempus viverra turpis. Fusce
                          condimentum nunc ac nisi vulputate fringilla. Donec
                          lacinia congue felis in faucibus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4>Order</h4>
              </div>
              <div className="card-body">
                <div className="media">
                  <div className="media-body">
                    <h5 className="mt-0 mb-1">Media object</h5>
                    <p>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                      scelerisque ante sollicitudin. Cras purus odio, vestibulum
                      in vulputate at, tempus viverra turpis. Fusce condimentum
                      nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                      in faucibus.
                    </p>
                  </div>
                  <Image
                    className="ml-3"
                    src="/img/example-image-50.jpg"
                    alt="Generic placeholder image"
                    layout='fill'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}