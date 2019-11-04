import React, { Component } from "react";
import style from "./App.module.scss";
import PageLayout from "./components/pageLayout";
import { Button, Input } from "antd";

const { Search } = Input;
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
              <Button
                type="primary"
                onClick={this.handleDoSomething}
                size="large"
              >
                Do something
              </Button>
              <div className="search-item-wrapper">
                <Search
                  placeholder="input search text"
                  onSearch={value => console.log(value)}
                />
              </div>
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
