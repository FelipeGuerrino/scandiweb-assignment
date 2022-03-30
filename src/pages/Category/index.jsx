import { client } from "@tilework/opus";
import React, { Component } from "react";
import Header from "../../components/Header";
import { test } from "../../graphql/Queries";

const testResult = async () => {
    await (client.post(test))
}  

class Category extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <Header />
                {console.log(testResult)}
            </>
        );
    }
}
 
export default Category;