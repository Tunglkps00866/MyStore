import React from 'react';
import Page from '../Page';
class ProductPage extends React.Component{
    render(){
        const _content =[];
        _content.push(
            <div key="02">San Pham</div>
        )
        return(
            <Page content={_content}></Page>
        );
    }
}
export default ProductPage;