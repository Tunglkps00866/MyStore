import React from 'react';
import {Panel,Row,Col,Image} from 'react-bootstrap';
import './Footer.css'
class Footer extends React.Component {
    render() {
        return ( 
            <div>
                <hr/>
                    <Row>                       
                        <Col lg={6}>
                            <h3>asdasd</h3>
                        </Col>
                        <Col lg={6}>
                            <h3>Our Partner</h3>
                            <Image src="../Image/MSI-logo.png" className="brand-icon"></Image>
                            <Image src="../Image/logitech-logo.png" className="brand-icon"></Image>
                            <Image src="../Image/corsair-logo.png" className="brand-icon"></Image>
                        </Col>
                    </Row>
            </div>
        );
    }
}
export default Footer;