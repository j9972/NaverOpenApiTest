import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function BoardView() {
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  const getBordView = async () => {
    console.log(location);
    console.log(navigate);

    if (location === undefined) {
      navigate.push("/board");
    } else {
      const {
        data: { boardView, getImageViewList },
      } = await axios.get(`board/view/${location.state.id}`);
      console.log(boardView, getImageViewList);

      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBordView();
  }, []);

  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading..</span>
        </div>
      ) : (
        <div className="loader">
          <span className="loader__text">HHHH..</span>
        </div>
      )}
    </section>
  );
}

export default BoardView;
