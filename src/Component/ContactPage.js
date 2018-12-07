import React from 'react';
import Page from '../Page';
import '../Component/ContactPage.css'
import {Breadcrumb,Image,Row,Col,Button,FormGroup,FormControl} from 'react-bootstrap';
//import GMap from './GMap';
class ContactPage extends React.Component{
    render(){
        const _content =[];
        _content.push(<Col lg={2} key="01"></Col>)
        _content.push(
            <div key="02">
                <Col lg={8} >
                    <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>ContactUs</Breadcrumb.Item>
                    </Breadcrumb>
                    <Row>
                        <div className="Page">
                            <Row>
                                <Image src="../Image/Map.png" className="Map"></Image>
                            </Row>
                            <br/>
                            <Col lg={4}  ><Image src="../Image/mapmarker.png" className="Symbol-img"></Image>
                                <br/>
                                <br/>
                                <Row>
                                    <p> 
                                        
                                    227 Nguyen Van Luong Street, Ward 11, District 6
                                        
                                    </p>
                                </Row>
                            </Col>
                            <Col lg={4} ><Image src="../Image/phone.png" className="Symbol-img"></Image>
                                <br/>
                                <br/>
                                <Row>
                                    <p>
                                        
                                    012.345.678 - 010.121.1314
                                        
                                    </p>
                                </Row>
                            </Col>
                            <Col lg={4} ><Image src="../Image/mail.png" className="Symbol-img"></Image>
                                <br/>
                                <br/>
                                <Row/>
                                    <p>
                                        
                                        Example@gmail.com
                                        
                                    </p>
                                <Row/>
                            </Col>
                            <br/>
                            <br/>       
                        </div>
                    </Row>

                    <Row>
                        <div className="Page" key="03">
                            <h2><b>YOUR FEEDBACK</b></h2>
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
                        <Col lg={8}>
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
                        <Button bsStyle="info">Send</Button>
                        </Col>
                        <Col lg={2}></Col>
                    </Row>
                </Col>
            </div>
        )
        _content.push(<Col lg={2} key="03" ></Col>)
        //_content.push(<GMap key="04"></GMap>)
        return(
            <Page content={_content}></Page>
        );
    }
}
export default ContactPage;