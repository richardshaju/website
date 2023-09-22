import React from "react";
import "./Works.css";
function Works() {
  return (
    <section className="work-page" id="work">
      <h1 className="title">
        <span className="material-symbols-outlined ">home_repair_service</span>
        Works
      </h1>
      <div className="content">
        <p>Following are my previous works : </p>
      </div>
      <div className="works-display">
        <div className="item" style={{ textAlign: "center" }}>
          <img src={require("./ir.png")} alt="" />
          <a
            className="link-icon"
            href="http://ec2-13-48-45-183.eu-north-1.compute.amazonaws.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="item-title cart">
              <span>Image Recognizer</span>
              <i className="fa fa-external-link" aria-hidden="true"></i>
            </div>
          </a>
          <p style={{ paddingTop: "0.6rem" }}>
            Front-end : <b>Html, Css, Js</b> <br />
            Web server : <b>Nginx</b><br />
            Back-end : <b>Flask</b> <br />
            Cloud : <b>AWS</b> <br />
            ML Algorithm : <b>Support Vector Machine</b>
          </p>
        </div>
        <div className="item" style={{ textAlign: "center" }}>
          <img src={require("./Capture.JPG")} alt="" />
          <a
            className="link-icon"
            href="http://ec2-16-171-239-94.eu-north-1.compute.amazonaws.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="item-title cart">
              <span>Shopping Website</span>
              <i className="fa fa-external-link" aria-hidden="true"></i>
            </div>
          </a>
          <p style={{ paddingTop: "0.6rem" }}>
            Back-end : <b>NodeJS</b> <br />
            Data Base : <b>MongoDB</b> <br />
            Front-end : <b>Html,Css,Javascript</b> <br />
            FrameWorks : <b>Handlebars,ExpressJS,Bootstrap</b>{" "}
          </p>
        </div>
      
      </div>
      <div className="works-display" style={{ marginBottom: "2rem" }}>
        <div className="item" style={{ textAlign: "center" }}>
          <img src={require("./tic.png")} alt="" />
          <a
            className="link-icon"
            href="https://richardshaju.github.io/tictactoe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="item-title cart">
              <span>AI Tic Tac Toe</span>
              <i className="fa fa-external-link" aria-hidden="true"></i>
            </div>
          </a>
          <p style={{ paddingTop: "0.6rem" }}>
            FrameWorks : <b>React JS</b>
            <br />
            Algorithm: <b>Minimax</b> <br />
            Feature: <b>You can't win</b> <br />
            Front-end : <b>Html,Css,Javascript</b> <br />
          </p>
        </div>
        <div className="item" style={{ textAlign: "center" }}>
          <img src={require("./netflix.JPG")} alt="" />
          <a
            class="link-icon"
            href="https://richardshaju.github.io/netflix/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="item-title cart">
              <span>Netflix-Clone</span>
              <i class="fa fa-external-link" aria-hidden="true"></i>
            </div>
          </a>
          <p style={{ paddingTop: "0.6rem" }}>
            Back-end : <b>Nill</b> <br />
            API used : <b>TMDB</b> <br />
            FrameWorks : <b>ReactJS</b>
            <br />
            Front-end : <b>React,Css,Javascript</b> <br />
          </p>
        </div>
      </div>
      <div className="works-display" style={{ marginBottom: "2rem" }}>
        <div className="item" style={{ textAlign: "center" }}>
          <img src={require("./weeknd.JPG")} alt="" />
          <a
            className="link-icon"
            href="https://richardshaju.github.io/weeknd/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="item-title cart">
              <span>Weeknd Music Player</span>
              <i className="fa fa-external-link" aria-hidden="true"></i>
            </div>
          </a>
          <p style={{ paddingTop: "0.6rem" }}>
            Front-end : <b>Html,Css,Javascript</b>{" "}
          </p>
        </div>
        <div className="item" style={{ textAlign: "center" }}>
          <img src={require("./olx.png")} alt="" />
          <a
            className="link-icon"
            href="https://richardshaju.github.io/olx-clone/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="item-title cart">
              <span>Olx-Clone</span>
              <i className="fa fa-external-link" aria-hidden="true"></i>
            </div>
          </a>
          <p style={{ paddingTop: "0.6rem" }}>
            Front-end : <b>React JS</b> <br />
            Back-end : <b>Firebase</b>
          </p>
        </div>
      </div>
    </section>
  );
}
export default Works;
