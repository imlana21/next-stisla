import BasicLayout from "@stisla/basic-layout";
import Head from "next/head";

export default function ComponentTabPage() {
  return (
    <BasicLayout>
      <Head>
        <title> Tab Component </title>
      </Head>
      <section className="section">
        <div className="section-header">
          <h1>Tab</h1>
          <div className="section-header-breadcrumb">
            <div className="breadcrumb-item active">
              <a href="#">Dashboard</a>
            </div>
            <div className="breadcrumb-item">
              <a href="#">Components</a>
            </div>
            <div className="breadcrumb-item">Tab</div>
          </div>
        </div>

        <div className="section-body">
          <h2 className="section-title">Tabs</h2>
          <p className="section-lead">
            The tab component for dividing parts of content.
          </p>

          <div className="row">
            <div className="col-12 col-sm-6 col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h4>Default Tab</h4>
                </div>
                <div className="card-body">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Profile
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="contact-tab"
                        data-toggle="tab"
                        href="#contact"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex
                      ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                      non proident, sunt in culpa qui officia deserunt mollit
                      anim id est laborum.
                    </div>
                    <div
                      className="tab-pane fade"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      Sed sed metus vel lacus hendrerit tempus. Sed efficitur
                      velit tortor, ac efficitur est lobortis quis. Nullam
                      lacinia metus erat, sed fermentum justo rutrum ultrices.
                      Proin quis iaculis tellus. Etiam ac vehicula eros,
                      pharetra consectetur dui. Aliquam convallis neque eget
                      tellus efficitur, eget maximus massa imperdiet. Morbi a
                      mattis velit. Donec hendrerit venenatis justo, eget
                      scelerisque tellus pharetra a.
                    </div>
                    <div
                      className="tab-pane fade"
                      id="contact"
                      role="tabpanel"
                      aria-labelledby="contact-tab"
                    >
                      Vestibulum imperdiet odio sed neque ultricies, ut
                      dapibus mi maximus. Proin ligula massa, gravida in
                      lacinia efficitur, hendrerit eget mauris. Pellentesque
                      fermentum, sem interdum molestie finibus, nulla diam
                      varius leo, nec varius lectus elit id dolor. Nam
                      malesuada orci non ornare vulputate. Ut ut sollicitudin
                      magna. Vestibulum eget ligula ut ipsum venenatis
                      ultrices. Proin bibendum bibendum augue ut luctus.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h4>Bordered Tab</h4>
                </div>
                <div className="card-body">
                  <ul className="nav nav-tabs" id="myTab2" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="home-tab2"
                        data-toggle="tab"
                        href="#home2"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="profile-tab2"
                        data-toggle="tab"
                        href="#profile2"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Profile
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="contact-tab2"
                        data-toggle="tab"
                        href="#contact2"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content tab-bordered" id="myTab3Content">
                    <div
                      className="tab-pane fade show active"
                      id="home2"
                      role="tabpanel"
                      aria-labelledby="home-tab2"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex
                      ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                      non proident, sunt in culpa qui officia deserunt mollit
                      anim id est laborum.
                    </div>
                    <div
                      className="tab-pane fade"
                      id="profile2"
                      role="tabpanel"
                      aria-labelledby="profile-tab2"
                    >
                      Sed sed metus vel lacus hendrerit tempus. Sed efficitur
                      velit tortor, ac efficitur est lobortis quis. Nullam
                      lacinia metus erat, sed fermentum justo rutrum ultrices.
                      Proin quis iaculis tellus. Etiam ac vehicula eros,
                      pharetra consectetur dui. Aliquam convallis neque eget
                      tellus efficitur, eget maximus massa imperdiet. Morbi a
                      mattis velit. Donec hendrerit venenatis justo, eget
                      scelerisque tellus pharetra a.
                    </div>
                    <div
                      className="tab-pane fade"
                      id="contact2"
                      role="tabpanel"
                      aria-labelledby="contact-tab2"
                    >
                      Vestibulum imperdiet odio sed neque ultricies, ut
                      dapibus mi maximus. Proin ligula massa, gravida in
                      lacinia efficitur, hendrerit eget mauris. Pellentesque
                      fermentum, sem interdum molestie finibus, nulla diam
                      varius leo, nec varius lectus elit id dolor. Nam
                      malesuada orci non ornare vulputate. Ut ut sollicitudin
                      magna. Vestibulum eget ligula ut ipsum venenatis
                      ultrices. Proin bibendum bibendum augue ut luctus.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-5 col-lg-5">
              <div className="card">
                <div className="card-header">
                  <h4>
                    Tab <code>.nav-pills</code>
                  </h4>
                </div>
                <div className="card-body">
                  <ul className="nav nav-pills" id="myTab3" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="home-tab3"
                        data-toggle="tab"
                        href="#home3"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="profile-tab3"
                        data-toggle="tab"
                        href="#profile3"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Profile
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="contact-tab3"
                        data-toggle="tab"
                        href="#contact3"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent2">
                    <div
                      className="tab-pane fade show active"
                      id="home3"
                      role="tabpanel"
                      aria-labelledby="home-tab3"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex
                      ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur.
                    </div>
                    <div
                      className="tab-pane fade"
                      id="profile3"
                      role="tabpanel"
                      aria-labelledby="profile-tab3"
                    >
                      Sed sed metus vel lacus hendrerit tempus. Sed efficitur
                      velit tortor, ac efficitur est lobortis quis. Nullam
                      lacinia metus erat, sed fermentum justo rutrum ultrices.
                      Proin quis iaculis tellus. Etiam ac vehicula eros,
                      pharetra consectetur dui.
                    </div>
                    <div
                      className="tab-pane fade"
                      id="contact3"
                      role="tabpanel"
                      aria-labelledby="contact-tab3"
                    >
                      Vestibulum imperdiet odio sed neque ultricies, ut
                      dapibus mi maximus. Proin ligula massa, gravida in
                      lacinia efficitur, hendrerit eget mauris. Pellentesque
                      fermentum, sem interdum molestie finibus, nulla diam
                      varius leo, nec varius lectus elit id dolor.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-7 col-lg-7">
              <div className="card">
                <div className="card-header">
                  <h4>2 Column</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-4">
                      <ul
                        className="nav nav-pills flex-column"
                        id="myTab4"
                        role="tablist"
                      >
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="home-tab4"
                            data-toggle="tab"
                            href="#home4"
                            role="tab"
                            aria-controls="home"
                            aria-selected="true"
                          >
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="profile-tab4"
                            data-toggle="tab"
                            href="#profile4"
                            role="tab"
                            aria-controls="profile"
                            aria-selected="false"
                          >
                            Profile
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="contact-tab4"
                            data-toggle="tab"
                            href="#contact4"
                            role="tab"
                            aria-controls="contact"
                            aria-selected="false"
                          >
                            Contact
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 col-sm-12 col-md-8">
                      <div className="tab-content no-padding" id="myTab2Content">
                        <div
                          className="tab-pane fade show active"
                          id="home4"
                          role="tabpanel"
                          aria-labelledby="home-tab4"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore
                          eu fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </div>
                        <div
                          className="tab-pane fade"
                          id="profile4"
                          role="tabpanel"
                          aria-labelledby="profile-tab4"
                        >
                          Sed sed metus vel lacus hendrerit tempus. Sed
                          efficitur velit tortor, ac efficitur est lobortis
                          quis. Nullam lacinia metus erat, sed fermentum justo
                          rutrum ultrices. Proin quis iaculis tellus. Etiam ac
                          vehicula eros, pharetra consectetur dui. Aliquam
                          convallis neque eget tellus efficitur, eget maximus
                          massa imperdiet. Morbi a mattis velit. Donec
                          hendrerit venenatis justo, eget scelerisque tellus
                          pharetra a.
                        </div>
                        <div
                          className="tab-pane fade"
                          id="contact4"
                          role="tabpanel"
                          aria-labelledby="contact-tab4"
                        >
                          Vestibulum imperdiet odio sed neque ultricies, ut
                          dapibus mi maximus. Proin ligula massa, gravida in
                          lacinia efficitur, hendrerit eget mauris.
                          Pellentesque fermentum, sem interdum molestie
                          finibus, nulla diam varius leo, nec varius lectus
                          elit id dolor. Nam malesuada orci non ornare
                          vulputate. Ut ut sollicitudin magna. Vestibulum eget
                          ligula ut ipsum venenatis ultrices. Proin bibendum
                          bibendum augue ut luctus.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h4>Icon Tab</h4>
                </div>
                <div className="card-body">
                  <ul className="nav nav-tabs" id="myTab5" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="home-tab5"
                        data-toggle="tab"
                        href="#home5"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        <i className="fas fa-home"></i> Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="profile-tab5"
                        data-toggle="tab"
                        href="#profile5"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        <i className="fas fa-id-card"></i> Profile
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="contact-tab5"
                        data-toggle="tab"
                        href="#contact5"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                      >
                        <i className="fas fa-mail-bulk"></i> Contact
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent5">
                    <div
                      className="tab-pane fade show active"
                      id="home5"
                      role="tabpanel"
                      aria-labelledby="home-tab5"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex
                      ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur.
                    </div>
                    <div
                      className="tab-pane fade"
                      id="profile5"
                      role="tabpanel"
                      aria-labelledby="profile-tab5"
                    >
                      Sed sed metus vel lacus hendrerit tempus. Sed efficitur
                      velit tortor, ac efficitur est lobortis quis. Nullam
                      lacinia metus erat, sed fermentum justo rutrum ultrices.
                      Proin quis iaculis tellus. Etiam ac vehicula eros,
                      pharetra consectetur dui.
                    </div>
                    <div
                      className="tab-pane fade"
                      id="contact5"
                      role="tabpanel"
                      aria-labelledby="contact-tab5"
                    >
                      Vestibulum imperdiet odio sed neque ultricies, ut
                      dapibus mi maximus. Proin ligula massa, gravida in
                      lacinia efficitur, hendrerit eget mauris. Pellentesque
                      fermentum, sem interdum molestie finibus, nulla diam
                      varius leo, nec varius lectus elit id dolor.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h4>
                    Icon Tab Bordered + Centered{" "}
                    <code>.justify-content-center</code>
                  </h4>
                </div>
                <div className="card-body">
                  <ul
                    className="nav nav-tabs justify-content-center"
                    id="myTab6"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active text-center"
                        id="home-tab6"
                        data-toggle="tab"
                        href="#home6"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        <span>
                          <i className="fas fa-home"></i>
                        </span>{" "}
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link text-center"
                        id="profile-tab6"
                        data-toggle="tab"
                        href="#profile6"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        <span>
                          <i className="fas fa-id-card"></i>
                        </span>{" "}
                        Profile
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link text-center"
                        id="contact-tab6"
                        data-toggle="tab"
                        href="#contact6"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                      >
                        <span>
                          <i className="fas fa-mail-bulk"></i>
                        </span>{" "}
                        Contact
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content tab-bordered" id="myTabContent6">
                    <div
                      className="tab-pane fade show active"
                      id="home6"
                      role="tabpanel"
                      aria-labelledby="home-tab6"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex
                      ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur.
                    </div>
                    <div
                      className="tab-pane fade"
                      id="profile6"
                      role="tabpanel"
                      aria-labelledby="profile-tab6"
                    >
                      Sed sed metus vel lacus hendrerit tempus. Sed efficitur
                      velit tortor, ac efficitur est lobortis quis. Nullam
                      lacinia metus erat, sed fermentum justo rutrum ultrices.
                      Proin quis iaculis tellus. Etiam ac vehicula eros,
                      pharetra consectetur dui.
                    </div>
                    <div
                      className="tab-pane fade"
                      id="contact6"
                      role="tabpanel"
                      aria-labelledby="contact-tab6"
                    >
                      Vestibulum imperdiet odio sed neque ultricies, ut
                      dapibus mi maximus. Proin ligula massa, gravida in
                      lacinia efficitur, hendrerit eget mauris. Pellentesque
                      fermentum, sem interdum molestie finibus, nulla diam
                      varius leo, nec varius lectus elit id dolor.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BasicLayout>
  )
}