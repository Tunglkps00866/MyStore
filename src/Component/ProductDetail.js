import React from 'react';
import {Grid,Row,Col,Breadcrumb,Image} from 'react-bootstrap';
import Page from '../Page'
import Data from '../Data';

class ProductDetail extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            content:[],
            idProduct: this.props.match.params.idProduct,
        }
    }
    buildContent(){
        console.log(this.props);
        let _content=[];

        let product = Data.getProductById(this.state.idProduct);
        console.log(product);
        _content.push(
            <Row key="01">
                <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item>{product.type}</Breadcrumb.Item>
                <Breadcrumb.Item active>{product.id}</Breadcrumb.Item>
                </Breadcrumb>
            </Row>
        );
        _content.push(
            <Row key="02">
                <Col>
                    <h3>{product.name}</h3>
                    <Image src={'/'+product.img}></Image> 
                </Col>
            </Row>
        );
        return(<Grid>{_content}</Grid>);
    }
    render(){
        return(
            <Page content={this.buildContent()}></Page>
        );
    }
}
export default ProductDetail;