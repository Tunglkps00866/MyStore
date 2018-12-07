import React from 'react';
import Page from '../Page';
import Carosel from '../Carousel'
import ProductList from '../Component/ProductList'
import '../Component/HomePage.css'
class HomePage extends React.Component{
    render(){
        const _content =[];
        _content.push(
            <div key="01">
            <Carosel></Carosel>
            <ProductList></ProductList>
            </div>

        )
        return(
            <Page content={_content}></Page>
        );
    }
}
export default HomePage;