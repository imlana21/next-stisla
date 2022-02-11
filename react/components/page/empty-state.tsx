export default function EmptyStateComponent() {
  return (
    <div>
      <div className="section-header">
        <h1>Empty State</h1>
        <div className="section-header-breadcrumb">
          <div className="breadcrumb-item active"><a href="javascript:void(0)">Dashboard</a></div>
          <div className="breadcrumb-item"><a href="javascript:void(0)">Components</a></div>
          <div className="breadcrumb-item">Empty State</div>
        </div>
      </div>

      <div className="section-body">
        <h2 className="section-title">Empty States</h2>
        <p className="section-lead">
          Empty state are generally used when there is no data or content.
        </p>

        <div className="row">
          <div className="col-12 col-md-6 col-sm-12">
            <div className="card">
              <div className="card-header">
                <h4>Empty Data</h4>
              </div>
              <div className="card-body">
                <div className="empty-state" data-height="400">
                  <div className="empty-state-icon">
                    <i className="fas fa-question"></i>
                  </div>
                  <h2>We couldn&lsquo;t find any data</h2>
                  <p className="lead">
                    Sorry we can&lsquo;t find any data, to get rid of this message, make
                    at least 1 entry.
                  </p>
                  <a href="javascript:void(0)" className="btn btn-primary mt-4">Create new One</a>
                  <a href="javascript:void(0)" className="mt-4 bb">Need Help?</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-sm-12">
            <div className="card">
              <div className="card-header">
                <h4>Request Failed</h4>
              </div>
              <div className="card-body">
                <div className="empty-state" data-height="400">
                  <div className="empty-state-icon bg-danger">
                    <i className="fas fa-times"></i>
                  </div>
                  <h2>HTTP Request Failed</h2>
                  <p className="lead">
                    We tried it, but failed when requesting data to the server,
                    sorry. (Code: <a href="javascript:void(0)" className="bb">14045</a>)
                  </p>
                  <a href="javascript:void(0)" className="btn btn-warning mt-4">Try Again</a>
                  <a href="javascript:void(0)" className="mt-4 bb">Cancel</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}