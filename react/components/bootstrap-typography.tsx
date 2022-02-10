export default function BootstrapTypography() {
  return (
    <div>
      <div className="section-header">
        <h1>Typography</h1>
        <div className="section-header-breadcrumb">
          <div className="breadcrumb-item active"><a href="javascript:void(0)">Dashboard</a></div>
          <div className="breadcrumb-item"><a href="javascript:void(0)">UI Kit</a></div>
          <div className="breadcrumb-item">Typography</div>
        </div>
      </div>

      <div className="section-body">
        <h2 className="section-title">Typography</h2>
        <p className="section-lead">
          Documentation and examples for Bootstrap typography, including global
          settings, headings, body text, lists, and more.
        </p>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            <div className="card">
              <div className="card-header">
                <h4>Text</h4>
              </div>
              <div className="card-body">
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>
                <h3 className="mt-4">
                  Fancy display heading
                  <small className="text-muted">With faded secondary text</small>
                </h3>
                <p className="lead mt-4">
                  Lead &mdash; Vivamus sagittis lacus vel augue laoreet rutrum
                  faucibus dolor auctor. Duis mollis, est non commodo luctus.
                </p>
                <p className="mt-4 mb-4">
                  Paragraph &mdash; Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam.
                </p>
                <a href="javascript:void(0)">You can click me!</a>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4>Text Colors</h4>
              </div>
              <div className="card-body">
                <div className="text-primary mb-2">Text Primary</div>
                <div className="text-secondary mb-2">Text Secondary</div>
                <div className="text-success mb-2">Text Success</div>
                <div className="text-info mb-2">Text Info</div>
                <div className="text-warning mb-2">Text Warning</div>
                <div className="text-light mb-2">Text Light</div>
                <div className="text-dark mb-2">Text Dark</div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4>Inline Text Element</h4>
              </div>
              <div className="card-body">
                <p>You can use the mark tag to <mark>highlight</mark> text.</p>
                <p>
                  <del
                    >This line of text is meant to be treated as deleted
                    text.</del
                  >
                </p>
                <p>
                  <s
                    >This line of text is meant to be treated as no longer
                    accurate.</s
                  >
                </p>
                <p>
                  <ins
                    >This line of text is meant to be treated as an addition to
                    the document.</ins
                  >
                </p>
                <p><u>This line of text will render as underlined</u></p>
                <p>
                  <small
                    >This line of text is meant to be treated as fine
                    print.</small
                  >
                </p>
                <p><strong>This line rendered as bold text.</strong></p>
                <p><em>This line rendered as italicized text.</em></p>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4>Abbreviations</h4>
              </div>
              <div className="card-body">
                <p><abbr title="attribute">attr</abbr></p>
                <p>
                  <abbr title="HyperText Markup Language" className="initialism"
                    >HTML</abbr
                  >
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <div className="card">
              <div className="card-header">
                <h4>Color</h4>
              </div>
              <div className="card-body">
                <div className="colors">
                  <div className="color bg-primary text-white">
                    <div>Primary</div>
                  </div>
                  <div className="color bg-secondary text-white">
                    <div>Secondary</div>
                  </div>
                  <div className="color bg-success text-white">
                    <div>Success</div>
                  </div>
                  <div className="color bg-info text-white"><div>Info</div></div>
                  <div className="color bg-warning text-white">
                    <div>Warning</div>
                  </div>
                  <div className="color bg-danger text-white"><div>Danger</div></div>
                  <div className="color bg-light"><div>Light</div></div>
                  <div className="color bg-dark text-white"><div>Dark</div></div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4>Text Block</h4>
              </div>
              <div className="card-body">
                <div className="section-title mt-0">Blockquote</div>
                <blockquote>Stisla made with hand</blockquote>
                <div className="section-title">Inline Code</div>
                <p>
                  Lorem ipsum dolor sit amet, <code>consectetur</code> adipisicing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud
                  <code>exercitation</code> ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </p>
                <div className="section-title">Code Block</div>
                <p>
                  We use PrismJS to do this, you can adjust themes, syntax and
                  more.
                  <a href="http://prismjs.com/">Visit their documentation</a>.
                </p>
                <pre
                  className="language-javascript"
                ><code>var code = &lsquo;Hello&rsquo;</code></pre>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4>Display</h4>
              </div>
              <div className="card-body">
                <div className="display-1">Display 1</div>
                <hr />
                <div className="display-2">Display 2</div>
                <hr />
                <div className="display-3">Display 3</div>
                <hr />
                <div className="display-4">Display 4</div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4>Naming a Source</h4>
              </div>
              <div className="card-body">
                <blockquote className="blockquote">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer className="blockquote-footer">
                    Someone famous in
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <h2 className="section-title">List</h2>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            <div className="card">
              <div className="card-header">
                <h4>Unordered List</h4>
              </div>
              <div className="card-body">
                <p>
                  Sunt in culpa qui officia deserunt mollit anim id est laborum:
                </p>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                    do eiusmod
                  </li>
                  <li>
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam,
                  </li>
                  <li>
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo
                  </li>
                  <li>
                    consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse
                  </li>
                  <li>
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non
                  </li>
                  <li>
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <div className="card">
              <div className="card-header">
                <h4>Ordered List</h4>
              </div>
              <div className="card-body">
                <p>
                  Sunt in culpa qui officia deserunt mollit anim id est laborum:
                </p>
                <ol>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                    do eiusmod
                  </li>
                  <li>
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam,
                  </li>
                  <li>
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo
                  </li>
                  <li>
                    consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse
                  </li>
                  <li>
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non
                  </li>
                  <li>
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </li>
                  <li>
                    consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}