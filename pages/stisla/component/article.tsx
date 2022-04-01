import BasicLayout from "@stisla/basic-layout";
import ArticleStyle1 from "@stisla/component/article/article-1";
import ArticleStyle2 from "@stisla/component/article/article-2";
import ArticleStyle3 from "@stisla/component/article/article-3";

export default function ComponentArticlePage() {
  return (
    <BasicLayout>
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Article</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active">
                <a href="#">Dashboard</a>
              </div>
              <div className="breadcrumb-item">
                <a href="#">Components</a>
              </div>
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
                <ArticleStyle1
                  bgImg="/img/news/img08.jpg"
                  url="#"
                  title="Excepteur sint occaecat cupidatat non proident"
                  details="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                <ArticleStyle1
                  bgImg="/img/news/img04.jpg"
                  url="#"
                  title="Excepteur sint occaecat cupidatat non proident"
                  details="Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur." />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                <ArticleStyle1
                  bgImg="/img/news/img09.jpg"
                  url="#"
                  title="Excepteur sint occaecat cupidatat non proident"
                  details="Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur." />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                <ArticleStyle1
                  bgImg="/img/news/img10.jpg"
                  url="#"
                  title="Excepteur sint occaecat cupidatat non proident"
                  details="Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur." />
              </div>
            </div>

            <h2 className="section-title">Article Style B</h2>
            <div className="row">
              <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                <ArticleStyle2
                  bgImg="/img/news/img10.jpg"
                  trending={true}
                  url="#"
                  title="Excepteur sint occaecat cupidatat non proident"
                  details="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                <ArticleStyle2
                  bgImg="/img/news/img09.jpg"
                  trending={false}
                  url="#"
                  title="Excepteur sint occaecat cupidatat non proident"
                  details="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                <ArticleStyle2
                  bgImg="/img/news/img07.jpg"
                  trending={false}
                  url="#"
                  title="Excepteur sint occaecat cupidatat non proident"
                  details="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                <ArticleStyle2
                  bgImg="/img/news/img02.jpg"
                  trending={false}
                  url="#"
                  title="Excepteur sint occaecat cupidatat non proident"
                  details="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
              </div>
            </div>

            <h2 className="section-title">Article Style C</h2>
            <div className="row">
              <div className="col-12 col-md-4 col-lg-4">
                <ArticleStyle3
                  bgImg="/img/news/img13.jpg"
                  url="#"
                  title="Excepteur sint occaecat cupidatat non proident"
                  details="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
                  times="5 Days"
                  users={{
                    name: "Hasan Basri",
                    job: "Web Developer",
                    profileUrl: "#",
                    profileImg: "/img/avatar/avatar-1.png"
                  }}
                />
              </div>
              <div className="col-12 col-md-4 col-lg-4">
                <ArticleStyle3
                  bgImg="/img/news/img14.jpg"
                  url="#"
                  title="Excepteur sint occaecat cupidatat non proident"
                  details="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
                  times="5 Days"
                  users={{
                    name: "Rizal Fakhri",
                    job: "UX Designer",
                    profileUrl: "#",
                    profileImg: "/img/avatar/avatar-3.png"
                  }}
                />
              </div>
              <div className="col-12 col-md-4 col-lg-4">
                <ArticleStyle3
                  bgImg="/img/news/img01.jpg"
                  url="#"
                  title="Excepteur sint occaecat cupidatat non proident"
                  details="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
                  times="5 Days"
                  users={{
                    name: "Irwansyah Saputra",
                    job: "Mobile Developer",
                    profileUrl: "#",
                    profileImg: "/img/avatar/avatar-2.png"
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </BasicLayout>
  )
}