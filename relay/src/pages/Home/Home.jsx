import React from "react";
import Nav from "../../components/Nav/Nav";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <Nav />
          <div className="home">
        
                  <h3>“Knowledge is power. Sharing knowledge is the key to unlocking that power.”
                  ― Martin Uzochukwu Ugwu</h3>
              <div className="bannerArt d-flex">
                  <div className="left"><div className="block1"></div></div>
                  <div className="middle"><div className="block2"></div></div>
                  <div className="right"><div className="block3"></div></div>
              </div>
             
      </div>
    </>
  );
};

export default Home;
