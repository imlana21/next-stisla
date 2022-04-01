import Image from "next/image";

export default function ArticleStyle3({bgImg, url, title, details, users, times}: any) {
  return (
    <article className="article article-style-c">
      <div className="article-header">
        <div
          className="article-image"
          data-background={ bgImg }
        ></div>
      </div>
      <div className="article-details">
        <div className="article-category">
          <a href="#">News</a> <div className="bullet"></div>{" "}
          <a href="#"> { times } </a>
        </div>
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
        <div className="article-user">
          <Image
            alt="image"
            src={ users.profileImg }
            width="30"
            height="30"
          />
          <div className="article-user-details">
            <div className="user-detail-name">
              <a href={ users.profileUrl }> { users.name } </a>
            </div>
            <div className="text-job"> { users.job} </div>
          </div>
        </div>
      </div>
    </article>
  );
}