// TODO: DO NOT FORGET TO IMPLEMENT OUT OF STOCK!!!

import { client } from "@tilework/opus";
import { Component } from "react";
import { test } from "../../graphql/Queries";

const testResult = await client.post(test);

class ProductCard extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return <>
        <p>{testResult}</p>
    </>;
  }
}

export default ProductCard;
