export default function ArticleStyle2({ bgImg, trending, url, title, details}: any) {
  const ifTrending = () => {
    if(trending == true ) {
      return (
        <div className="article-badge">
          <div className="article-badge-item bg-danger">
            <i className="fas fa-fire"></i> 
            Trending
          </div>
        </div>
      )
    } else {
      return ""
    }
  }
  
  return (
    <article className="article article-style-b">
      <div className="article-header">
        <div
          className="article-image"
          data-background={ bgImg }
        ></div>
        { ifTrending }
      </div>
      <div className="article-details">
        <div className="article-title">
          <h2>
            <a href={ url }>
              { title }
            </a>
          </h2>
        </div>
        <p>
          { details }
        </p>
        <div className="article-cta">
          <a href="#">
            Read More <i className="fas fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </article>
  );
}