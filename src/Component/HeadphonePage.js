import React from 'react';
import Page from '../Page';
import Products from './Products';
import Data from '../Data';
import { Col,Grid,Row } from 'react-bootstrap';
import Pagi from './Pagination';
class HeadphoneList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            content:[]
        }
    }
    buildContent(){
        let _content=[];
        let data= Data.getProducList("headphone");
        for (var i in data){
            _content.push(
            <Col key={i} sx={6} md={4}>
                <Products data={data[i]}></Products>
            </Col>
            );
        }
        let _productContent = []
        _productContent.push(<Grid key="content"><Row key={i}>{_content}</Row></Grid>)
        _productContent.push(<Grid><Row key="01"><Pagi></Pagi></Row></Grid>)
        return _productContent;
    }
    componentDidMount(){
        this.setState({
            content: this.buildContent()
        });
    }
    render(){
        return(
            <div>
            <Page content={this.state.content}></Page>
            </div>
        );
    }
}
export default HeadphoneList;