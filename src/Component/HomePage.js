import React from 'react';
import Page from '../Page';
import Carosel from '../Carousel'
import Title from './Title';
//import {Breadcrumb} from 'react-bootstrap'
class HomePage extends React.Component{
    render(){
        const _content =[];
        _content.push(
            <div key="01">
            <Carosel></Carosel>
            <Title></Title>
            <Title></Title>
            </div>

        )
        return(
            <Page content={_content}></Page>
        );
    }
}
export default HomePage;