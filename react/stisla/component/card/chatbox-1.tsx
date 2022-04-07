import Image from "next/image";

export default function Chatbox1() {
  return (
    <div className="card chat-box" id="mychatbox">
      <div className="card-header">
        <h4>Chat with Rizal</h4>
      </div>
      <div className="card-body chat-content">
        <div className="chat-item chat-left">
          <Image src="/img/avatar/avatar-1.png" alt="..." width="40" height="40" />
          <div className="chat-details">
            <div className="chat-text">Hi, dude!</div>
            <div className="chat-time">11:23</div>
          </div>
        </div>
        <div className="chat-item chat-right">
          <Image src="/img/avatar/avatar-2.png" alt="..." width="40" height="40" />
          <div className="chat-details">
            <div className="chat-text">Wat?</div>
            <div className="chat-time">11:23</div>
          </div>
        </div>
        <div className="chat-item chat-left">
          <Image src="/img/avatar/avatar-1.png" alt="..." width="40" height="40" />
          <div className="chat-details">
            <div className="chat-text">You wanna know?</div>
            <div className="chat-time">11:23</div>
          </div>
        </div>
        <div className="chat-item chat-right">
          <Image src="/img/avatar/avatar-2.png" alt="..." width="40" height="40" />
          <div className="chat-details">
            <div className="chat-text">Wat?!</div>
            <div className="chat-time">11:23</div>
          </div>
        </div>
        <div className="chat-item chat-left chat-typing">
          <Image src="/img/avatar/avatar-1.png" alt="..." width="40" height="40" />
          <div className="chat-details">
            <div className="chat-text"></div>
          </div>
        </div>
      </div>
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
  )
}