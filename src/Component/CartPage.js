import React from 'react';
import Page from '../Page';
import '../Component/CartPage.css'
import {Breadcrumb,Col,Grid,Row} from 'react-bootstrap';
class CartPage extends React.Component{
    buildContent(){
        let _content=[];
        _content.push(
            <Row key="01">
                <Col lg={2}></Col>
                <Col lg={8}>
                    <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>MyCart</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
                <Col lg={2}></Col>
            </Row>
        );
        _content.push(
            
        );
        return (<Grid>{_content}</Grid>)
    }
    render(){
        return(
            <Page content={this.buildContent()}></Page>
        );
    }
}
export default CartPage;