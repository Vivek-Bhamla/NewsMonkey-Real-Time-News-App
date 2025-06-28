import { useState, useEffect } from "react";
import NewsBox from "./NewsBox";
import axios from "axios";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=${props.category}%20india&apiKey=5d69e00fe88747a9b53b82d25d89b396&page=${page}&pageSize=12`
        );
        setarticles(response.data.articles);
      } catch (error) {
        console.log("There is an error", error);
      }
    };

    fetchdata();
  }, [props.category, page]);

  const handlePrevClick = () => setPage(page - 1);
  const handleNextClick = () => setPage(page + 1);

  return (
    <div className="container my-5">
      <h1
        className="text-center fw-bold text-uppercase mb-5"
        style={{ marginTop: "90px" }}
      >
        NewsMonkey - Top Headlines
      </h1>

      <div className="row g-4">
        {articles.map((element) => (
          <div
            className="col-12 col-sm-6 col-md-4 d-flex justify-content-center"
            key={element.url}
          >
            <NewsBox
              title={element.title}
              description={element.description}
              imageUrl={element.urlToImage}
              newsUrl={element.url}
              author={element.author}
              date={element.publishedAt}
            />
          </div>
        ))}
      </div>

      <div className="container d-flex justify-content-center my-4">
        <div className="btn-group">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-outline-primary rounded-pill px-4 shadow-sm me-2"
            onClick={handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-outline-primary rounded-pill px-4 shadow-sm"
            onClick={handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
