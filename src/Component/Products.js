import React from 'react';
import {Grid,Row,Col,Thumbnail,Button} from 'react-bootstrap';
class Products extends React.Component{
    render(){
        return(
            <div className="product-item">
                <Grid>
                    <Row>
                        <Col lg={4}>
                        <Thumbnail src={this.props.data.img} alt="242x200">
                            <h3>{this.props.data.product_name}</h3>
                            <p>{this.props.data.product_descript}</p>
                            <p>
                            <Button bsStyle="primary">Details</Button>
                            &nbsp;
                            <Button bsStyle="default">Add to Cart</Button>
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