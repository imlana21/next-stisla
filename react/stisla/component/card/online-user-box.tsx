import BasicCard from '@stisla/component/card/basic-card';
import Image from 'next/image';

export default function OnlineUserBox() {
  return (
    <BasicCard title="Who&quot;s Online?">
      <ul className="list-unstyled list-unstyled-border">
        <li className="media">
          <Image
            alt="image"
            className="rounded-circle"
            width="50"
            height="50"
            src="/img/avatar/avatar-1.png"
          />
          <div className="ml-3 media-body">
            <div className="mt-0 mb-1 font-weight-bold">
              Hasan Basri
            </div>
            <div className="text-success text-small font-600-bold">
              <i className="fas fa-circle"></i> Online
            </div>
          </div>
        </li>
        <li className="media">
          <Image
            alt="image"
            className="rounded-circle"
            width="50"
            height="50"
            src="/img/avatar/avatar-2.png"
          />
          <div className="ml-3 media-body">
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
            className="rounded-circle"
            width="50"
            height="50"
            src="/img/avatar/avatar-3.png"
          />
          <div className="ml-3 media-body">
            <div className="mt-0 mb-1 font-weight-bold">
              Wildan Ahdian
            </div>
            <div className="text-small font-weight-600 text-success">
              <i className="fas fa-circle"></i> Online
            </div>
          </div>
        </li>
        <li className="media">
          <Image
            alt="image"
            className="rounded-circle"
            width="50"
            height="50"
            src="/img/avatar/avatar-4.png"
          />
          <div className="ml-3 media-body">
            <div className="mt-0 mb-1 font-weight-bold">
              Rizal Fakhri
            </div>
            <div className="text-small font-weight-600 text-success">
              <i className="fas fa-circle"></i> Online
            </div>
          </div>
        </li>
      </ul>
    </BasicCard>
  );
}