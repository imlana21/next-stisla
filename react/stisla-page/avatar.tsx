import Image from "next/image";

export default function AvatarComponent() {
  return (
    <div>
      <div className="section-header">
        <h1>Avatar</h1>
        <div className="section-header-breadcrumb">
          <div className="breadcrumb-item active"><a href="javascript:void(0)">Dashboard</a></div>
          <div className="breadcrumb-item"><a href="javascript:void(0)">Components</a></div>
          <div className="breadcrumb-item">Avatar</div>
        </div>
      </div>

      <div className="section-body">
        <h2 className="section-title">Avatar</h2>
        <p className="section-lead">
          Avatars are user profile pictures. Thanks to
          <a href="https://picturepan2.github.io/spectre/components/avatars.html"
            >Spectre.css</a
          >.
        </p>

        <div className="row">
          <div className="col-md-6 col-sm-6 col-12">
            <div className="card">
              <div className="card-header">
                <h4>Avatar</h4>
              </div>
              <div className="card-body">
                <figure className="avatar mr-2 avatar-xl">
                  <Image src="/img/avatar/avatar-1.png" alt="..." />
                </figure>
                <figure className="avatar mr-2 avatar-lg">
                  <Image src="/img/avatar/avatar-2.png" alt="..." />
                </figure>
                <figure className="avatar mr-2">
                  <Image src="/img/avatar/avatar-5.png" alt="..." />
                </figure>
                <figure className="avatar mr-2 avatar-sm">
                  <Image src="/img/avatar/avatar-3.png" alt="..." />
                </figure>
                <figure className="avatar mr-2 avatar-xs">
                  <Image src="/img/avatar/avatar-4.png" alt="..." />
                </figure>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-12">
            <div className="card">
              <div className="card-header">
                <h4>Avatar Icon</h4>
              </div>
              <div className="card-body">
                <figure className="avatar mr-2 avatar-xl">
                  <Image src="/img/avatar/avatar-1.png" alt="..." />
                  <Image
                    src="/img/avatar/avatar-5.png"
                    className="avatar-icon"
                    alt="..."
                  />
                </figure>
                <figure className="avatar mr-2 avatar-lg">
                  <Image src="/img/avatar/avatar-2.png" alt="..." />
                  <Image
                    src="/img/avatar/avatar-4.png"
                    className="avatar-icon"
                    alt="..."
                  />
                </figure>
                <figure className="avatar mr-2">
                  <Image src="/img/avatar/avatar-3.png" alt="..." />
                  <Image
                    src="/img/avatar/avatar-3.png"
                    className="avatar-icon"
                    alt="..."
                  />
                </figure>
                <figure className="avatar mr-2 avatar-sm">
                  <Image src="/img/avatar/avatar-4.png" alt="..." />
                  <Image
                    src="/img/avatar/avatar-2.png"
                    className="avatar-icon"
                    alt="..."
                  />
                </figure>
                <figure className="avatar mr-2 avatar-xs">
                  <Image src="/img/avatar/avatar-5.png" alt="..." />
                  <Image
                    src="/img/avatar/avatar-1.png"
                    className="avatar-icon"
                    alt="..."
                  />
                </figure>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-12">
            <div className="card">
              <div className="card-header">
                <h4>Avatar Presence</h4>
              </div>
              <div className="card-body">
                <figure className="avatar mr-2 avatar-xl">
                  <Image src="/img/avatar/avatar-1.png" alt="..." />
                  <i className="avatar-presence online"></i>
                </figure>
                <figure className="avatar mr-2 avatar-lg">
                  <Image src="/img/avatar/avatar-2.png" alt="..." />
                  <i className="avatar-presence busy"></i>
                </figure>
                <figure className="avatar mr-2">
                  <Image src="/img/avatar/avatar-3.png" alt="..." />
                  <i className="avatar-presence away"></i>
                </figure>
                <figure className="avatar mr-2 avatar-sm">
                  <Image src="/img/avatar/avatar-4.png" alt="..." />
                  <i className="avatar-presence offline"></i>
                </figure>
                <figure className="avatar mr-2 avatar-xs">
                  <Image src="/img/avatar/avatar-5.png" alt="..." />
                  <i className="avatar-presence online"></i>
                </figure>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-12">
            <div className="card">
              <div className="card-header">
                <h4>Avatar Initial</h4>
              </div>
              <div className="card-body">
                <figure className="avatar mr-2 avatar-xl" data-initial="UM"></figure>
                <figure
                  className="avatar mr-2 avatar-lg bg-danger text-white"
                  data-initial="UM"
                ></figure>
                <figure
                  className="avatar mr-2 bg-warning text-white"
                  data-initial="UM"
                ></figure>
                <figure
                  className="avatar mr-2 avatar-sm bg-success text-white"
                  data-initial="UM"
                ></figure>
                <figure
                  className="avatar mr-2 avatar-xs bg-info text-white"
                  data-initial="UM"
                ></figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}