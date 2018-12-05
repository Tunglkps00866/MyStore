import React from 'react';
import Page from '../Page';
import '../Component/ContactPage.css'
import {Breadcrumb,Image,Row,Col,Button,FormGroup,FormControl} from 'react-bootstrap';
class ContactPage extends React.Component{
    render(){
        const _content =[];
        _content.push(
            <div key="07">
                <Col lg={2} ></Col>
                <Col lg={8} >
                    <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>ContactUs</Breadcrumb.Item>
                    </Breadcrumb>
                    <Row>
                        <div className="Page">
                            <h1><b>CONTACT US</b></h1>
                            <br/>
                            <Col lg={4} ><Image src="../Image/mapmarker.png" className="Symbol-img"></Image>
                                <br/>
                                <br/>
                                <Row>
                                    <p> 
                                        <b>
                                        227 Nguyen Van Luong Street, Ward 11, District 6, HoChiMinh
                                        </b>
                                    </p>
                                </Row>
                            </Col>
                            <Col lg={4} ><Image src="../Image/phone.png" className="Symbol-img"></Image>
                                <br/>
                                <br/>
                                <Row>
                                    <p>
                                        <b>
                                        012 345 678
                                        010 121 1314
                                        </b>
                                    </p>
                                </Row>
                            </Col>
                            <Col lg={4} ><Image src="../Image/mail.png" className="Symbol-img"></Image>
                                <br/>
                                <br/>
                                <Row/>
                                    <p>
                                        <b>
                                            Example@gmail.com
                                        </b>
                                    </p>
                                <Row/>
                            </Col>
                            <br/>
                            <br/>       
                        </div>
                    </Row>

                    <Row>
                        <div className="Page">
                            <h1><b>FIND US</b></h1>
                            <br/>
                            <br/>       
                        </div>
                    </Row>
                    <Row>
                        <Col lg={12}>
                                                        
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={2}></Col>
                        <Col lg="8">
                        <form>
                            <FormGroup controlId="formBasicText">
                            <FormControl type="text" placeholder="Your Name..."/>
                            <br/>
                            <FormControl type="text" placeholder="Your Email..."/>
                            <br/>
                            <FormControl type="text" placeholder="Subject..."/>
                            <br/>
                            <FormControl componentClass="textarea" placeholder="Message..." />
                            </FormGroup>
                        </form>
                        <Button bsStyle="info">Submit</Button>
                        </Col>
                        <Col lg={2}></Col>
                    </Row>
                </Col>
                <Col lg={2}></Col>
            </div>
        )
        return(
            <Page content={_content}></Page>
        );
    }
}
export default ContactPage;