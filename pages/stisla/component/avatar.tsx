import BasicLayout from "@stisla/basic-layout";
import AvatarBasic from "@stisla/component/avatar/basic";
import AvatarIcon from "@stisla/component/avatar/icon";
import AvatarInitial from "@stisla/component/avatar/initial";
import AvatarPresence from "@stisla/component/avatar/presence";
import BasicCard from "@stisla/component/card/basic-card";
import Head from "next/head";

export default function ComponentAvatarPage() {
  return (
    <BasicLayout>
      <Head>
        <title> Avatar Component </title>
      </Head>
      <section className="section">
        <div className="section-header">
          <h1>Avatar</h1>
          <div className="section-header-breadcrumb">
            <div className="breadcrumb-item active">
              <a href="#">Dashboard</a>
            </div>
            <div className="breadcrumb-item">
              <a href="#">Components</a>
            </div>
            <div className="breadcrumb-item">Avatar</div>
          </div>
        </div>

        <div className="section-body">
          <h2 className="section-title">Avatar</h2>
          <p className="section-lead">
            Avatars are user profile pictures. Thanks to{" "}
            <a href="https://picturepan2.github.io/spectre/components/avatars.html">
              Spectre.css
            </a>
            .
          </p>

          <div className="row">
            <div className="col-md-6 col-sm-6 col-12">
              <BasicCard title="Avatar">
                <AvatarBasic src="/img/avatar/avatar-1.png" alt="..." size="xl" />
                <AvatarBasic src="/img/avatar/avatar-2.png" alt="..." size="lg" />
                <AvatarBasic src="/img/avatar/avatar-5.png" alt="..." size="" />
                <AvatarBasic src="/img/avatar/avatar-3.png" alt="..." size="sm" />
                <AvatarBasic src="/img/avatar/avatar-4.png" alt="..." size="xs" />
              </BasicCard>
            </div>
            <div className="col-md-6 col-sm-6 col-12">
              <div className="card">
                <BasicCard title="Avatar Icon">
                  <AvatarIcon
                    avatarSrc="/img/avatar/avatar-1.png"
                    avatarAlt="..."
                    iconSrc="/img/avatar/avatar-5.png"
                    iconAlt="..."
                    size="xl" />
                  <AvatarIcon
                    avatarSrc="/img/avatar/avatar-2.png"
                    avatarAlt="..."
                    iconSrc="/img/avatar/avatar-4.png"
                    iconAlt="..."
                    size="lg" />
                  <AvatarIcon
                    avatarSrc="/img/avatar/avatar-3.png"
                    avatarAlt="..."
                    iconSrc="/img/avatar/avatar-3.png"
                    iconAlt="..."
                    size="" />
                  <AvatarIcon
                    avatarSrc="/img/avatar/avatar-4.png"
                    avatarAlt="..."
                    iconSrc="/img/avatar/avatar-2.png"
                    iconAlt="..."
                    size="sm" />
                  <AvatarIcon
                    avatarSrc="/img/avatar/avatar-5.png"
                    avatarAlt="..."
                    iconSrc="/img/avatar/avatar-1.png"
                    iconAlt="..."
                    size="xs" />
                </BasicCard>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-12">
              <div className="card">
                <div className="card-header">
                  <h4>Avatar Presence</h4>
                </div>
                <div className="card-body">
                  <AvatarPresence
                    src="/img/avatar/avatar-1.png"
                    alt="..."
                    size="xl"
                    status="online" />
                  <AvatarPresence
                    src="/img/avatar/avatar-2.png"
                    alt="..."
                    size="lg"
                    status="busy" />
                  <AvatarPresence
                    src="/img/avatar/avatar-3.png"
                    alt="..."
                    size=""
                    status="away" />
                  <AvatarPresence
                    src="/img/avatar/avatar-4.png"
                    alt="..."
                    size="sm"
                    status="offline" />
                  <AvatarPresence
                    src="/img/avatar/avatar-5.png"
                    alt="..."
                    size="xs"
                    status="online" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-12">
              <div className="card">
                <div className="card-header">
                  <h4>Avatar Initial</h4>
                </div>
                <div className="card-body">
                  <AvatarInitial
                    size="xl"
                    initial="UM" />
                  <AvatarInitial
                    size="lg"
                    initial="UM"
                    bgColor="bg-danger" />
                  <AvatarInitial
                    size=""
                    initial="UM"
                    bgColor="bg-warning" />
                  <AvatarInitial
                    size="sm"
                    initial="UM"
                    bgColor="bg-success" />
                  <AvatarInitial
                    size="xs"
                    initial="UM"
                    bgColor="bg-info" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BasicLayout>
  )
}