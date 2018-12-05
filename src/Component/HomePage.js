import React from 'react';
import Page from '../Page';
import Carosel from '../Carousel'
import '../Component/HomePage.css'
class HomePage extends React.Component{
    render(){
        const _content =[];
        _content.push(
            <div key="01">
            <Carosel></Carosel>
            </div>

        )
        return(
            <Page content={_content}></Page>
        );
    }
}
export default HomePage;