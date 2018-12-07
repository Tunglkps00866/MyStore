import React from 'react';
import Page from '../Page';
import '../Component/CartPage.css'
import {Breadcrumb,Col} from 'react-bootstrap';
class CartPage extends React.Component{
    render(){
        const _content =[];
        _content.push(
            <div key="01">
                <Col lg={2}></Col>
                <Col lg={8}>
                <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>MyCart</Breadcrumb.Item>
                </Breadcrumb>
                </Col>
                <Col lg={2}></Col>
            </div>
        )
        return(
            <Page content={_content}></Page>
        );
    }
}
export default CartPage;