import React, { Component } from "react";
import style from "./App.module.scss";
import PageLayout from "./components/pageLayout";
import {Button} from "antd";

class App extends Component {
  handleDoSomething = e => {
    console.log(e.target);
  };
  
  render() {
    return (
      <div className={style["App"]}>
        <header className="App-header" />
        <PageLayout>
          <div className="add-new-item-wrapper">
            <Button type="primary" onClick={this.handleDoSomething}>Do something</Button>
          </div>
          <div className="main-page-content">
            <nav></nav>
            <article></article>
          </div>
        </PageLayout>
      </div>
    );
  }
}

export default App;
