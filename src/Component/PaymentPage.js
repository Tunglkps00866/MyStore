import React from 'react';
import Page from '../Page';
import '../Component/PaymentPage.css'
import {Breadcrumb,Col,Row,Grid} from 'react-bootstrap';
class PaymentPage extends React.Component{
    buildContent(){
        let _content=[];
        _content.push(
            <Row key="01">
                <Col lg={2}></Col>
                <Col lg={8}>
                    <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/gio-hang">MyCart</Breadcrumb.Item>
                    <Breadcrumb.Item active>MyPayment</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
                <Col lg={2}></Col>
            </Row>
        );
        _content.push(
            
        );
        _content.push(
            
        );
        _content.push(
            
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
export default PaymentPage;