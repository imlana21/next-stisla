import Image from "next/image";

export default function ChatBoxComponent() {
  return (
    <div>
      <div className="section-header">
        <h1>Chat Box</h1>
        <div className="section-header-breadcrumb">
          <div className="breadcrumb-item active"><a href="javascript:void(0)">Dashboard</a></div>
          <div className="breadcrumb-item"><a href="javascript:void(0)">Components</a></div>
          <div className="breadcrumb-item">Chat Box</div>
        </div>
      </div>

      <div className="section-body">
        <h2 className="section-title">Chat Boxes</h2>
        <p className="section-lead">
          The chat component and is equipped with a JavaScript API, making it easy
          for you to integrate with Back-end.
        </p>

        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="card">
              <div className="card-header">
                <h4>Who&lsquo;s Online?</h4>
              </div>
              <div className="card-body">
                <ul className="list-unstyled list-unstyled-border">
                  <li className="media">
                    <Image
                      alt="image"
                      className="mr-3 rounded-circle"
                      width="50"
                      height="50"
                      src="/img/avatar/avatar-1.png"
                    />
                    <div className="media-body">
                      <div className="mt-0 mb-1 font-weight-bold">Hasan Basri</div>
                      <div className="text-success text-small font-600-bold">
                        <i className="fas fa-circle"></i> Online
                      </div>
                    </div>
                  </li>
                  <li className="media">
                    <Image
                      alt="image"
                      className="mr-3 rounded-circle"
                      width="50"
                      height="50"
                      src="/img/avatar/avatar-2.png"
                    />
                    <div className="media-body">
                      <div className="mt-0 mb-1 font-weight-bold">
                        Bagus Dwi Cahya
                      </div>
                      <div className="text-small font-weight-600 text-muted">
                        <i className="fas fa-circle"></i> Offline
                      </div>
                    </div>
                  </li>
                  <li className="media">
                    <Image
                      alt="image"
                      className="mr-3 rounded-circle"
                      width="50"
                      height="50"
                      src="/img/avatar/avatar-3.png"
                    />
                    <div className="media-body">
                      <div className="mt-0 mb-1 font-weight-bold">Wildan Ahdian</div>
                      <div className="text-small font-weight-600 text-success">
                        <i className="fas fa-circle"></i> Online
                      </div>
                    </div>
                  </li>
                  <li className="media">
                    <Image
                      alt="image"
                      className="mr-3 rounded-circle"
                      width="50"
                      height="50"
                      src="/img/avatar/avatar-4.png"
                    />
                    <div className="media-body">
                      <div className="mt-0 mb-1 font-weight-bold">Rizal Fakhri</div>
                      <div className="text-small font-weight-600 text-success">
                        <i className="fas fa-circle"></i> Online
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="card chat-box" id="mychatbox">
              <div className="card-header">
                <h4>Chat with Rizal</h4>
              </div>
              <div className="card-body chat-content"></div>
              <div className="card-footer chat-form">
                <form id="chat-form">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type a message"
                  />
                  <button className="btn btn-primary">
                    <i className="far fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="card chat-box card-success" id="mychatbox2">
              <div className="card-header">
                <h4>
                  <i
                    className="fas fa-circle text-success mr-2"
                    title="Online"
                    data-toggle="tooltip"
                  ></i>
                  Chat with Ryan
                </h4>
              </div>
              <div className="card-body chat-content"></div>
              <div className="card-footer chat-form">
                <form id="chat-form2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type a message"
                  />
                  <button className="btn btn-primary">
                    <i className="far fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}