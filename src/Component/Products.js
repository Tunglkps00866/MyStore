import React from 'react';
import {Grid,Row,Col,Thumbnail,Button} from 'react-bootstrap';
class Products extends React.Component{
    render(){
        return(
            <div className="product-item">
                <Grid>
                    <Row>
                        <Col xs={6} md={4}>
                        <Thumbnail src="/thumbnaildiv.png" alt="242x200">
                            <h3>Thumbnail label</h3>
                            <p>Description</p>
                            <p>
                            <Button bsStyle="primary">Button</Button>
                            &nbsp;
                            <Button bsStyle="default">Button</Button>
                            </p>
                        </Thumbnail>
                        </Col>
                        <Col xs={6} md={4}>
                        <Thumbnail src="/thumbnaildiv.png" alt="242x200">
                            <h3>Thumbnail label</h3>
                            <p>Description</p>
                            <p>
                            <Button bsStyle="primary">Button</Button>
                            &nbsp;
                            <Button bsStyle="default">Button</Button>
                            </p>
                        </Thumbnail>
                        </Col>
                        <Col xs={6} md={4}>
                        <Thumbnail src="/thumbnaildiv.png" alt="242x200">
                            <h3>Thumbnail label</h3>
                            <p>Description</p>
                            <p>
                            <Button bsStyle="primary">Button</Button>
                            &nbsp;
                            <Button bsStyle="default">Button</Button>
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