import React from 'react';
import Page from '../Page';
import {Breadcrumb} from 'react-bootstrap';
class PaymentPage extends React.Component{
    render(){
        const _content =[];
        _content.push(
            <div key="05">
            <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/gio-hang">
                MyCart
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Payment</Breadcrumb.Item>
            </Breadcrumb>;
            </div>
        )
        return(
            <Page content={_content}></Page>
        );
    }
}
export default PaymentPage;