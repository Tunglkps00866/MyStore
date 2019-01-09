import React from 'react'
import { Col,Row} from 'react-bootstrap';
import Products from './Products'

 
class ProductsC extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    componentWillMount() {
        let url = "./Data";
        Request.get(url)
            .then((res) => {
                this.setState({
                    data: res.body.data
                });
            })
            .catch(function (err) {
                alert(err);
            });
    }
    render() {
        return (

            <Row className="products-container">
                <Col sm={12}>
                    {
                        this.state.data.map(
                            (product, index) => (
                                <Products key={index} product={product} />
                            )
                        )
                    }
                </Col>
            </Row>
        )
    }
}
export default ProductsC;


