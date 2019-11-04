import React, { Component } from "react";
import style from "./App.module.scss";
import PageLayout from "./components/pageLayout";
import { Button } from "antd";

class App extends Component {
  handleDoSomething = e => {
    console.log(e.target);
  };

  render() {
    return (
      <div className={style["App"]}>
        <PageLayout>
          <header className="App-header">
            <div className="add-new-item-wrapper">
              <Button type="primary" onClick={this.handleDoSomething} size="large">
                Do something
              </Button>
            </div>
          </header>
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
