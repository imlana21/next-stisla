export default function Chatbox2() {
  return (
    <div className="card chat-box card-success" id="mychatbox2">
      <div className="card-header">
        <h4>
          <i
            className="fas fa-circle text-success mr-2"
            title="Online"
            data-toggle="tooltip"
          ></i>{" "}
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
  );
}