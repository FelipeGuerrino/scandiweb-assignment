import { Component } from "react";
import ProductCard from "../ProductCard";

class Container extends Component {
    // state = {  } 
    render() { 
        return (
            <>
                {/* TODO: <h1>{categoryName}</h1> */}
                {/* TODO: render conditionally the productCards */}
                <ProductCard />
            </>
        );
    }
}
 
export default Container;