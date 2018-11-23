import React from 'react';
import Page from '../Page';
class PaymentPage extends React.Component{
    render(){
        const _content =[];
        _content.push(
            <div key="05">Thanh toan</div>
        )
        return(
            <Page content={_content}></Page>
        );
    }
}
export default PaymentPage;