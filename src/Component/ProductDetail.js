import React from 'react';
import {Grid,Row,Col,Breadcrumb,Image,Glyphicon,Pagination,Button,ButtonGroup} from 'react-bootstrap';
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
                <Col lg={6}>
                    <Image src={'/'+product.img}></Image> 
                </Col>
                <Col lg={6}>
                    <h3>{product.name}</h3>
                    <p>{product.descript}</p>
                    <p>{product.prize}</p>
                    <ButtonGroup>
                        <Button><Glyphicon glyph="minus-sign"/></Button>
                        <p></p>
                        <Button><Glyphicon glyph="plus-sign"/></Button>
                    </ButtonGroup>
                    <Button bsStyle="default">Add to <Glyphicon glyph="shopping-cart" /></Button> 
                </Col>
            </Row>
        );
        _content.push(
            
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