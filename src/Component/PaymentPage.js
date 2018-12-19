import React from 'react';
import Page from '../Page';
import '../Component/PaymentPage.css'
import {Breadcrumb,Col,Row,Grid,FormControl,FormGroup,Glyphicon,Image} from 'react-bootstrap';
import SelectBox from './SelectBox';
class PaymentPage extends React.Component{
    buildContent(){
        let _content=[];
        _content.push(
            <Row key="01">
                <Col lg={2}></Col>
                <Col lg={8}>
                    <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/gio-hang">MyCart</Breadcrumb.Item>
                    <Breadcrumb.Item active>MyPayment</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
                <Col lg={2}></Col>
            </Row>
        );
        _content.push(
            <Row key="02">
                <Col lg={6}>
                    <h3>YOUR PAYMENT</h3>
                </Col>
            </Row>
        );
        _content.push(
            <Row key="03">
                <Col lg={6}>
                    <form className="Form">
                        <Grid>
                            <Row>
                                <Col lg={12}>
                                    <label>
                                        <Glyphicon glyph="info-sign"></Glyphicon><h4>Personal Infomation</h4>
                                    </label>
                                </Col>
                                <Col lg={12}>
                                    <FormGroup >     
                                    <FormControl type="text" placeholder="First Name..."/>
                                    </FormGroup>
                                </Col>
                                <Col lg={12}>
                                    <FormGroup > 
                                    <FormControl type="text" placeholder="Last Name..."/>
                                        
                                    </FormGroup>
                                </Col>
                                <Col lg={12}>
                                    <FormGroup >
                                        <FormControl type="text" placeholder="Address..."/>
                                    </FormGroup>
                                </Col>
                                <Col lg={12}>
                                    <FormGroup >
                                        <FormControl type="email" placeholder="Email..."/>
                                    </FormGroup>
                                </Col>
                                <Col lg={12}>
                                    <FormGroup >
                                        <FormControl type="text" placeholder="Phone"/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                <SelectBox items={[
                                    {value:'VietNam',id:1},
                                    {value:'Indonesia', id:2},
                                    {value:'Singapore',id:3},
                                    {value:'Japan',id:4}
                                ]}>    
                                </SelectBox>
                                
                                <FormGroup>
                                    <FormControl type="text" placeholder="Postal code..."></FormControl>
                                </FormGroup>
                                </Col>
                            </Row>
                        </Grid>
                    </form>
                </Col> 
            </Row>
        );

        {/*<Col lg={6}>
                    <label>
                        <Glyphicon glyph="info-sign"></Glyphicon><h4>Payment Method</h4>
                    </label>
                    <form className="Form">
                        <FormGroup >
                        <Row>
                        <Col lg={6}>
                            <Col lg={4}>
                                <Image src="../Image/phone.png" className="icon"/>
                            </Col>
                            <Col lg={4}>
                                <Image src="../Image/phone.png" className="icon"/>
                            </Col>
                            <Col lg={4}></Col>`
                            
                        </Col>
                        <Col lg={6}>  
                        </Col>
                        </Row>
                        </FormGroup>
                    </form>
                    <form className="Form">
                        <FormGroup >
                        <FormControl type="text" placeholder="CardName..."/>
                        </FormGroup>
                    </form>
                    <form className="Form">
                        <FormGroup >
                        <FormControl type="text" placeholder="CardNumber..."/>
                        </FormGroup>
                    </form>
                    
                    <FormGroup >
                        <Row>
                            <Col lg={6}>
                                <label>Date:</label>
                                <div>
                                <FormControl type="text" className="DateBox"/>
                                /
                                <FormControl type="text" className="DateBox"/>
                                </div>
                            </Col>
                            <Col lg={6}>
                            <form>
                                <FormControl type="text" className="cvvBox" placeholder="CVV..."/>
                                <Button>
                                    <Glyphicon glyph="question-sign"></Glyphicon>
                                </Button>
                            </form>
                            </Col>
                        </Row>
                    </FormGroup>
                    
                </Col>*/}
        return (<Grid>{_content}</Grid>)
    }
    render(){
        return(
            <Page content={this.buildContent()}></Page>
        );
    }
}
export default PaymentPage;