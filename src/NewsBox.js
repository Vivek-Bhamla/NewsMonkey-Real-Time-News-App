import React from "react";

const NewsBox = (props) => {
  let { title, description, imageUrl, newsUrl, author, date } = props;
  return (
    <div className="col mb-4 d-flex justify-content-center">
      <div
        className="card shadow-lg rounded-4 border-0"
        style={{ width: "20rem" }}
      >
        <img
          src={imageUrl}
          className="card-img-top rounded-top-4 img-fluid"
          alt="News"
          style={{ objectFit: "cover", height: "200px" }}
        />
        <div className="card-body">
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text text-secondary">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on{" "}
              {new Date(date).toDateString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            className="btn btn-primary btn-sm rounded-pill px-3"
            rel="noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsBox;
