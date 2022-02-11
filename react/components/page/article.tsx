import Image from "next/image";

export default function ArticleComponent() {
  return (
    <div>
      <div className="section-header">
        <h1>Article</h1>
        <div className="section-header-breadcrumb">
          <div className="breadcrumb-item active"><a href="javascript:void(0)">Dashboard</a></div>
          <div className="breadcrumb-item"><a href="javascript:void(0)">Components</a></div>
          <div className="breadcrumb-item">Article</div>
        </div>
      </div>

      <div className="section-body">
        <h2 className="section-title">Articles</h2>
        <p className="section-lead">
          This article component is based on card and flexbox.
        </p>

        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-3">
            <article className="article">
              <div className="article-header">
                <div
                  className="article-image"
                  style={ { backgroundImage : `url(/img/news/img08.jpg)`, } }
                ></div>
                <div className="article-title">
                  <h2>
                    <a href="javascript:void(0)">Excepteur sint occaecat cupidatat non proident</a>
                  </h2>
                </div>
              </div>
              <div className="article-details">
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
                <div className="article-cta">
                  <a href="javascript:void(0)" className="btn btn-primary">Read More</a>
                </div>
              </div>
            </article>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3">
            <article className="article">
              <div className="article-header">
                <div
                  className="article-image"
                  style= { { backgroundImage : `url(/img/news/img04.jpg)`, } }
                ></div>
                <div className="article-title">
                  <h2>
                    <a href="javascript:void(0)">Excepteur sint occaecat cupidatat non proident</a>
                  </h2>
                </div>
              </div>
              <div className="article-details">
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
                <div className="article-cta">
                  <a href="javascript:void(0)" className="btn btn-primary">Read More</a>
                </div>
              </div>
            </article>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3">
            <article className="article">
              <div className="article-header">
                <div
                  className="article-image"
                  style= { { backgroundImage: `url(/img/news/img09.jpg)`, } }
                ></div>
                <div className="article-title">
                  <h2>
                    <a href="javascript:void(0)">Excepteur sint occaecat cupidatat non proident</a>
                  </h2>
                </div>
              </div>
              <div className="article-details">
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
                <div className="article-cta">
                  <a href="javascript:void(0)" className="btn btn-primary">Read More</a>
                </div>
              </div>
            </article>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3">
            <article className="article">
              <div className="article-header">
                <div
                  className="article-image"
                  style= { { backgroundImage : `url(/img/news/img10.jpg)`, } }
                ></div>
                <div className="article-title">
                  <h2>
                    <a href="javascript:void(0)">Excepteur sint occaecat cupidatat non proident</a>
                  </h2>
                </div>
              </div>
              <div className="article-details">
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
                <div className="article-cta">
                  <a href="javascript:void(0)" className="btn btn-primary">Read More</a>
                </div>
              </div>
            </article>
          </div>
        </div>

        <h2 className="section-title">Article Style B</h2>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-3">
            <article className="article article-style-b">
              <div className="article-header">
                <div
                  className="article-image"
                  style= { { backgroundImage : `url(/img/news/img09.jpg)`, } }
                ></div>
                <div className="article-badge">
                  <div className="article-badge-item bg-danger">
                    <i className="fas fa-fire"></i> Trending
                  </div>
                </div>
              </div>
              <div className="article-details">
                <div className="article-title">
                  <h2>
                    <a href="javascript:void(0)">Excepteur sint occaecat cupidatat non proident</a>
                  </h2>
                </div>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
                <div className="article-cta">
                  <a href="javascript:void(0)">Read More <i className="fas fa-chevron-right"></i></a>
                </div>
              </div>
            </article>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3">
            <article className="article article-style-b">
              <div className="article-header">
                <div
                  className="article-image"
                  style= { { backgroundImage : `url(/img/news/img07.jpg)`, } }
                ></div>
              </div>
              <div className="article-details">
                <div className="article-title">
                  <h2>
                    <a href="javascript:void(0)">Excepteur sint occaecat cupidatat non proident</a>
                  </h2>
                </div>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
                <div className="article-cta">
                  <a href="javascript:void(0)">Read More <i className="fas fa-chevron-right"></i></a>
                </div>
              </div>
            </article>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3">
            <article className="article article-style-b">
              <div className="article-header">
                <div
                  className="article-image"
                  style= { { backgroundImage : `url(/img/news/img07.jpg)`, } }
                ></div>
              </div>
              <div className="article-details">
                <div className="article-title">
                  <h2>
                    <a href="javascript:void(0)">Excepteur sint occaecat cupidatat non proident</a>
                  </h2>
                </div>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
                <div className="article-cta">
                  <a href="javascript:void(0)">Read More <i className="fas fa-chevron-right"></i></a>
                </div>
              </div>
            </article>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3">
            <article className="article article-style-b">
              <div className="article-header">
                <div
                  className="article-image"
                  style= { { backgroundImage: `url(/img/news/img02.jpg)`, } }
                ></div>
              </div>
              <div className="article-details">
                <div className="article-title">
                  <h2>
                    <a href="javascript:void(0)">Excepteur sint occaecat cupidatat non proident</a>
                  </h2>
                </div>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
                <div className="article-cta">
                  <a href="javascript:void(0)">Read More <i className="fas fa-chevron-right"></i></a>
                </div>
              </div>
            </article>
          </div>
        </div>
        <h2 className="section-title">Article Style C</h2>
        <div className="row">
          <div className="col-12 col-md-4 col-lg-4">
            <article className="article article-style-c">
              <div className="article-header">
                <div
                  className="article-image"
                  style= { { backgroundImage: `url(/img/news/img09.jpg)`, } }
                ></div>
              </div>
              <div className="article-details">
                <div className="article-category">
                  <a href="javascript:void(0)">News</a>
                  <div className="bullet"></div>
                  <a href="javascript:void(0)">5 Days</a>
                </div>
                <div className="article-title">
                  <h2>
                    <a href="javascript:void(0)">Excepteur sint occaecat cupidatat non proident</a>
                  </h2>
                </div>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
                <div className="article-user">
                  <Image 
                    alt="image" 
                    src="/img/avatar/avatar-1.png" 
                    width="200%"
                    height="200%"/>
                  <div className="article-user-details">
                    <div className="user-detail-name">
                      <a href="javascript:void(0)">Hasan Basri</a>
                    </div>
                    <div className="text-job">Web Developer</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="col-12 col-md-4 col-lg-4">
            <article className="article article-style-c">
              <div className="article-header">
                <div
                  className="article-image"
                  style= { { backgroundImage: `url(/img/news/img08.jpg)`, } }
                ></div>
              </div>
              <div className="article-details">
                <div className="article-category">
                  <a href="javascript:void(0)">News</a>
                  <div className="bullet"></div>
                  <a href="javascript:void(0)">5 Days</a>
                </div>
                <div className="article-title">
                  <h2>
                    <a href="javascript:void(0)">Excepteur sint occaecat cupidatat non proident</a>
                  </h2>
                </div>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
                <div className="article-user">
                  <Image 
                    alt="image" 
                    src="/img/avatar/avatar-3.png" 
                    width="200%"
                    height="200%"/>
                  <div className="article-user-details">
                    <div className="user-detail-name">
                      <a href="javascript:void(0)">Rizal Fakhri</a>
                    </div>
                    <div className="text-job">UX Designer</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="col-12 col-md-4 col-lg-4">
            <article className="article article-style-c">
              <div className="article-header">
                <div
                  className="article-image"
                  style= { { backgroundImage: `url(/img/news/img01.jpg)`, } }
                ></div>
              </div>
              <div className="article-details">
                <div className="article-category">
                  <a href="javascript:void(0)">News</a>
                  <div className="bullet"></div>
                  <a href="javascript:void(0)">5 Days</a>
                </div>
                <div className="article-title">
                  <h2>
                    <a href="javascript:void(0)">Excepteur sint occaecat cupidatat non proident</a>
                  </h2>
                </div>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
                <div className="article-user">
                  <Image 
                    alt="image" 
                    src="/img/avatar/avatar-2.png" 
                    width="200%"
                    height="200%"/>
                  <div className="article-user-details">
                    <div className="user-detail-name"> 
                      <a href="javascript:void(0)">Irwansyah Saputra</a>
                    </div>
                    <div className="text-job">Mobile Developer</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}