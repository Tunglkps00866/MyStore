import React from 'react';
import Page from '../Page';
import '../Component/PaymentPage.css'
import {Breadcrumb,Col} from 'react-bootstrap';
class PaymentPage extends React.Component{
    render(){
        const _content =[];
        _content.push(
            <div key="01">
                <Col lg={2}></Col>
                <Col lg={8}>
                    <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/gio-hang">
                        MyCart
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Payment</Breadcrumb.Item>
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
export default PaymentPage;