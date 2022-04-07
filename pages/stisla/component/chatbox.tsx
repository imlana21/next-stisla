import BasicLayout from "@stisla/basic-layout";
import Chatbox1 from "@stisla/component/card/chatbox-1";
import Chatbox2 from "@stisla/component/card/chatbox-2";
import OnlineUserBox from "@stisla/component/card/online-user-box";
import Image from "next/image";

export default function ComponentChatboxPage() {
  return (
    <BasicLayout>
      <section className="section">
        <div className="section-header">
          <h1>Chat Box</h1>
          <div className="section-header-breadcrumb">
            <div className="breadcrumb-item active">
              <a href="#">Dashboard</a>
            </div>
            <div className="breadcrumb-item">
              <a href="#">Components</a>
            </div>
            <div className="breadcrumb-item">Chat Box</div>
          </div>
        </div>

        <div className="section-body">
          <h2 className="section-title">Chat Boxes</h2>
          <p className="section-lead">
            The chat component and is equipped with a JavaScript API, making
            it easy for you to integrate with Back-end.
          </p>

          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-sm-6 col-lg-4">
              <OnlineUserBox />
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <Chatbox1 />  
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <Chatbox2 />
            </div>
          </div>
        </div>
      </section>
    </BasicLayout>
  );
}