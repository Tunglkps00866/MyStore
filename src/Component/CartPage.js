import React from 'react';
import Page from '../Page';
import '../Component/CartPage.css'
import {Breadcrumb,Grid,Row,Image} from 'react-bootstrap';
class CartPage extends React.Component{
    buildContent(){
        let _content=[];
        _content.push(
            <Row key="01">
                    <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>MyCart</Breadcrumb.Item>
                    </Breadcrumb>
            </Row>
        );
        _content.push(
            <Row>
                <h1>YOUR CART</h1>
            </Row>
        );
        _content.push(
            <Row>
                <Image src="image/tainguyen/asus/tainghe-asus.png" className="cartImage"></Image>
                <h5>Tai nghe Asus</h5>
                
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