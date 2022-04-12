import BasicLayout from "@stisla/basic-layout";
import Head from "next/head";

export default function ComponentPricingPage() {
  return (
    <BasicLayout>
      <Head>
        <title> Component Pricing </title>
      </Head>
      <section className="section">
        <div className="section-header">
          <h1>Pricing</h1>
          <div className="section-header-breadcrumb">
            <div className="breadcrumb-item active">
              <a href="#">Dashboard</a>
            </div>
            <div className="breadcrumb-item">
              <a href="#">Components</a>
            </div>
            <div className="breadcrumb-item">Pricing</div>
          </div>
        </div>

        <div className="section-body">
          <h2 className="section-title">Pricing</h2>
          <p className="section-lead">
            Price components are very important for SaaS projects or other
            projects.
          </p>

          <div className="row">
            <div className="col-12 col-md-4 col-lg-4">
              <div className="pricing">
                <div className="pricing-title">Developer</div>
                <div className="pricing-padding">
                  <div className="pricing-price">
                    <div>$19</div>
                    <div>per month</div>
                  </div>
                  <div className="pricing-details">
                    <div className="pricing-item">
                      <div className="pricing-item-icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="pricing-item-label">1 user agent</div>
                    </div>
                    <div className="pricing-item">
                      <div className="pricing-item-icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="pricing-item-label">Core features</div>
                    </div>
                    <div className="pricing-item">
                      <div className="pricing-item-icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="pricing-item-label">1GB storage</div>
                    </div>
                    <div className="pricing-item">
                      <div className="pricing-item-icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="pricing-item-label">2 Custom domain</div>
                    </div>
                    <div className="pricing-item">
                      <div className="pricing-item-icon bg-danger text-white">
                        <i className="fas fa-times"></i>
                      </div>
                      <div className="pricing-item-label">Live Support</div>
                    </div>
                  </div>
                </div>
                <div className="pricing-cta">
                  <a href="#">
                    Subscribe <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4">
              <div className="pricing pricing-highlight">
                <div className="pricing-title">Small Team</div>
                <div className="pricing-padding">
                  <div className="pricing-price">
                    <div>$60</div>
                    <div>per month</div>
                  </div>
                  <div className="pricing-details">
                    <div className="pricing-item">
                      <div className="pricing-item-icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="pricing-item-label">5 user agent</div>
                    </div>
                    <div className="pricing-item">
                      <div className="pricing-item-icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="pricing-item-label">Core features</div>
                    </div>
                    <div className="pricing-item">
                      <div className="pricing-item-icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="pricing-item-label">10GB storage</div>
                    </div>
                    <div className="pricing-item">
                      <div className="pricing-item-icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="pricing-item-label">10 Custom domain</div>
                    </div>
                    <div className="pricing-item">
                      <div className="pricing-item-icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="pricing-item-label">24/7 Support</div>
                    </div>
                  </div>
                </div>
                <div className="pricing-cta">
                  <a href="#">
                    Subscribe <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4">
              <div className="pricing">
                <div className="pricing-title">Enterprise</div>
                <div className="pricing-padding">
                  <div className="pricing-price">
                    <div>$499</div>
                    <div>per month</div>
                  </div>
                  <div className="pricing-details">
                    <div className="pricing-item">
                      <div className="pricing-item-icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="pricing-item-label">
                        Unlimited user agent
                      </div>
                    </div>
                    <div className="pricing-item">
                      <div className="pricing-item-icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="pricing-item-label">Core features</div>
                    </div>
                    <div className="pricing-item">
                      <div className="pricing-item-icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="pricing-item-label">8TB storage</div>
                    </div>
                    <div className="pricing-item">
                      <div className="pricing-item-icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="pricing-item-label">
                        Unlimited custom domain
                      </div>
                    </div>
                    <div className="pricing-item">
                      <div className="pricing-item-icon">
                        <i className="fas fa-check"></i>
                      </div>
                      <div className="pricing-item-label">Lifetime Support</div>
                    </div>
                  </div>
                </div>
                <div className="pricing-cta">
                  <a href="#">
                    Subscribe <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BasicLayout>
  );
}