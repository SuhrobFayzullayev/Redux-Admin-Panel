import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NotFoundWrapper = styled.div`
  .page_404 {
    padding: 40px 0;
    background: #fff;
    font-family: "Arvo", serif;
  }

  .page_404 img {
    width: 100%;
  }

  .four_zero_four_bg {
    background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
    height: 400px;
    background-position: center;
  }

  .four_zero_four_bg h1 {
    font-size: 80px;
    font-family: sans-serif;
  }

  .four_zero_four_bg h3 {
    font-size: 80px;
    font-family: serif;
  }

  .link_404 {
    color: #fff !important;
    padding: 10px 20px;
    background: #39ac31;
    margin: 20px 0;
    display: inline-block;
    text-decoration: none;
  }
  .contant_box_404 {
    margin-top: -50px;
    font-family: sans-serif;
  }
`;
export default function NotFound() {
  const navigate = useNavigate();
  return (
    <NotFoundWrapper>
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center ">404</h1>
                </div>

                <div className="contant_box_404">
                  <h3 className="h2">Look like you're lost</h3>

                  <p>the page you are looking for not avaible!</p>

                  <button onClick={() => navigate("/")} className="link_404">
                    Go to Home
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </NotFoundWrapper>
  );
}
