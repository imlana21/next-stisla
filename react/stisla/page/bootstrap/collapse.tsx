export default function BootstrapCollapse() {
  return (
    <div className="main-content">
      <section className="section">
        <div className="section-header">
          <h1>Collapse</h1>
          <div className="section-header-breadcrumb">
            <div className="breadcrumb-item active"><a href="#">Dashboard</a></div>
            <div className="breadcrumb-item"><a href="#">Bootstrap Components</a></div>
            <div className="breadcrumb-item">Collapse</div>
          </div>
        </div>

        <div className="section-body">
          <h2 className="section-title">Collapse</h2>
          <p className="section-lead">
            Toggle the visibility of content across your project with a few classNamees
            and our JavaScript plugins.
          </p>

          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h4>Simple</h4>
                </div>
                <div className="card-body">
                  <p>
                    <a
                      className="btn btn-primary"
                      data-toggle="collapse"
                      href="#collapseExample"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Link with href
                    </a>
                    <button
                      className="btn btn-primary"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Button with data-target
                    </button>
                  </p>
                  <div className="collapse" id="collapseExample">
                    <p>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4>Multiple Targets</h4>
                </div>
                <div className="card-body">
                  <p className="buttons">
                    <a
                      className="btn btn-primary"
                      data-toggle="collapse"
                      href="#multiCollapseExample1"
                      role="button"
                      aria-expanded="false"
                      aria-controls="multiCollapseExample1"
                    >Toggle first element</a
                    >
                    <button
                      className="btn btn-primary"
                      type="button"
                      data-toggle="collapse"
                      data-target="#multiCollapseExample2"
                      aria-expanded="false"
                      aria-controls="multiCollapseExample2"
                    >
                      Toggle second element
                    </button>
                    <button
                      className="btn btn-primary"
                      type="button"
                      data-toggle="collapse"
                      data-target=".multi-collapse"
                      aria-expanded="false"
                      aria-controls="multiCollapseExample1 multiCollapseExample2"
                    >
                      Toggle both elements
                    </button>
                  </p>
                  <div className="row">
                    <div className="col">
                      <div
                        className="collapse multi-collapse"
                        id="multiCollapseExample1"
                      >
                        <p>
                          Anim pariatur cliche reprehenderit, enim eiusmod high life
                          accusamus terry richardson ad squid. Nihil anim keffiyeh
                          helvetica, craft beer labore wes anderson cred nesciunt
                          sapiente ea proident.
                        </p>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        className="collapse multi-collapse"
                        id="multiCollapseExample2"
                      >
                        <p>
                          Anim pariatur cliche reprehenderit, enim eiusmod high life
                          accusamus terry richardson ad squid. Nihil anim keffiyeh
                          helvetica, craft beer labore wes anderson cred nesciunt
                          sapiente ea proident.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h4>Accordion</h4>
                </div>
                <div className="card-body">
                  <div id="accordion">
                    <div className="accordion">
                      <div
                        className="accordion-header"
                        role="button"
                        data-toggle="collapse"
                        data-target="#panel-body-1"
                        aria-expanded="true"
                      >
                        <h4>Panel 1</h4>
                      </div>
                      <div
                        className="accordion-body collapse show"
                        id="panel-body-1"
                        data-parent="#accordion"
                      >
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit
                          esse cillum dolore eu fugiat nulla pariatur. Excepteur
                          sint occaecat cupidatat non proident, sunt in culpa qui
                          officia deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    </div>
                    <div className="accordion">
                      <div
                        className="accordion-header"
                        role="button"
                        data-toggle="collapse"
                        data-target="#panel-body-2"
                      >
                        <h4>Panel 2</h4>
                      </div>
                      <div
                        className="accordion-body collapse"
                        id="panel-body-2"
                        data-parent="#accordion"
                      >
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit
                          esse cillum dolore eu fugiat nulla pariatur. Excepteur
                          sint occaecat cupidatat non proident, sunt in culpa qui
                          officia deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    </div>
                    <div className="accordion">
                      <div
                        className="accordion-header"
                        role="button"
                        data-toggle="collapse"
                        data-target="#panel-body-3"
                      >
                        <h4>Panel 3</h4>
                      </div>
                      <div
                        className="accordion-body collapse"
                        id="panel-body-3"
                        data-parent="#accordion"
                      >
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit
                          esse cillum dolore eu fugiat nulla pariatur. Excepteur
                          sint occaecat cupidatat non proident, sunt in culpa qui
                          officia deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}