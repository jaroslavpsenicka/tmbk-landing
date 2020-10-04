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
                <a href="#features" className="btn btn-default page-scroll sm-mt-30 btn-xs-block">More...</a>
                <a href="#features" className="btn btn-primary page-scroll sm-ml-30 xs-mt-30 btn-xs-block">
                  <i class="fa fa-facebook-f xs-pr-15"></i>Login with Facebook</a>
                <a href="#features" className="btn btn-danger page-scroll sm-ml-30 xs-mt-30 btn-xs-block">
                  <i class="fa fa-google xs-pr-15"></i>Login with Google</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
