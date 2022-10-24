import React, { Component } from 'react';
import "./style.css";
import Story from "../Story"
import Post from '../Post'

export default class index extends Component {
  render() {
    return (
      <main className="main-grid" style={{gridArea: "fistColumn"}}>
        <div className="first-column">
          <div className="box">
            <Story />
          </div>
          <div className="box">
            <Post />
          </div>
        </div>
        <div className="second-column" style={{gridArea: "secondColumn"}}>
          <div className="suggestionBox">
            sugestão
          </div>
        </div>
      </main>
    );
  }
}
