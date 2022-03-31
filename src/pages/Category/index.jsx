import { client } from "@tilework/opus";
import React, { Component } from "react";
import Header from "../../components/Header";
import { test } from "../../graphql/Queries";

// const testResult = async () => {
//   await client.post(test);
// };

class Category extends Component {
  constructor(props) {
    super(props);
}
state = { testResult: {} };

  handleResult = () => {
    this.setState(
      (this.testResult = async () => {
        await client.post(test);
      })
    );
  };

  render() {
    return (
      <>
        <Header />
        <p>
          {this.handleResult.map((res) => {
            return res.name;
          })}
        </p>
      </>
    );
  }
}

export default Category;
