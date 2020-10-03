import React from "react";

const Header = ({ data }) => {
  const img = 'url(../img/intro-bg' + Math.floor(Math.random() * 10) + '.jpg)';
  const bgImage = { background: img + ' center center no-repeat'};
  return (
    <header id="header">
      <div className="intro" style={bgImage}>
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>{ data ? data.title : "Loading"}</h1>
                <p>{ data ? data.paragraph1 : "Loading"}
                  <br/>{ data ? data.paragraph2 : "Loading"}
                </p>
                <a href="#features" className="btn btn-custom btn-lg page-scroll">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
