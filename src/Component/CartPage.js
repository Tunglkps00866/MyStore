import React from 'react';
import Page from '../Page';
class CartPage extends React.Component{
    render(){
        const _content =[];
        _content.push(
            <div key="04">Gio hang</div>
        )
        return(
            <Page content={_content}></Page>
        );
    }
}
export default CartPage;