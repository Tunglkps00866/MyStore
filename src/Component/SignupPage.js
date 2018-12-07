import React from 'react';
import Page from '../Page';
import {FormControl,Row,Col,FormGroup,Image,Button} from 'react-bootstrap';
import '../Component/SignupPage.css';
class SignupPage extends React.Component{
    render(){
        const _content =[];
        _content.push(<Col lg={4} key="01"></Col>)
        _content.push( 
            <Col lg={4} key="02">
                    <Row>
                        <div>
                            <div className="Signup_Form" key={"10"}>
                            <br/>
                            <Image src="../Image/avata.jpg" className="Avata" rounded/>
                            <br/>
                            <h1><b>SIGN UP</b></h1> 
                            <div>
                                <form className="Form">
                                    <FormGroup controlId="formBasicText">
                                    <Row>
                                    <Col lg={6}>
                                        <FormControl type="text" placeholder="First Name..."/>
                                    </Col>
                                    <Col lg={6}>
                                        <FormControl type="text" placeholder="Last Name..."/>
                                    </Col>
                                    </Row>
                                    </FormGroup>
                                </form>
                                <form className="Form">
                                    <FormGroup controlId="formBasicText">
                                    <FormControl type="text" placeholder="Username..."/>
                                    </FormGroup>
                                </form>
                                <form className="Form">
                                    <FormGroup controlId="formBasicText">
                                    <FormControl type="email" placeholder="Email..."/>
                                    </FormGroup>
                                </form>
                                <form className="Form">
                                    <FormGroup controlId="formBasicText">
                                    <FormControl type="password" placeholder="Password"/>
                                    </FormGroup>
                                </form>
                                <form className="Form">
                                    <FormGroup controlId="formBasicText">
                                    <FormControl type="password" placeholder="Confirm Password..."/>
                                    </FormGroup>
                                </form>
                            </div>
                            <a href="/dang-nhap" >Back to Sign In</a><br/>
                            <br/>
                            <Button bsSize="large" bsStyle="info">Sign up</Button>
                            </div> 
                        </div> 
                    </Row>
                </Col>
        )
        _content.push(<Col lg={4} key="03"></Col>)
        return(
            <Page content={_content}></Page>
        );
    }
}
export default SignupPage;