import React from 'react';
import {Grid,Row,Col,Thumbnail,Button,Glyphicon} from 'react-bootstrap';
class Products extends React.Component{
    render(){
        return(
            <div className="product-item">
                <Grid>
                    <Row>
                        <Col lg={4}>
                        <Thumbnail src={this.props.data.img} alt="242x200">
                            <h3>{this.props.data.name}</h3>
                            <p>{this.props.data.descript}</p>
                            <p>
                            <Button bsStyle="primary" href={"/chi-tiet/"+this.props.data.id}><Glyphicon glyph="menu-hamburger"/></Button>
                            &nbsp;
                            <Button bsStyle="default">Add to <Glyphicon glyph="shopping-cart" /></Button>
                            </p>
                        </Thumbnail>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
export default Products;