export default function ArticleStyle1({bgImg, url, title, details}: any) {
  return (
    <article className="article">
      <div className="article-header">
        <div
          className="article-image"
          data-background={ bgImg }
        ></div>
        <div className="article-title">
          <h2>
            <a href={ url }>
              { title }
            </a>
          </h2>
        </div>
      </div>
      <div className="article-details">
        <p>
          { details }
        </p>
        <div className="article-cta">
          <a href="#" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </article>
  );
}