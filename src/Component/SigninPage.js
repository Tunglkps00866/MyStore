import React from 'react';
import Page from '../Page';
import {FormControl,Row,Col,FormGroup,Image,Button,Checkbox} from 'react-bootstrap';
import '../Component/SigninPage.css';
class SigninPage extends React.Component{
    render(){
        const _content =[];
        _content.push(<Col lg={4} key="01"></Col>)
        _content.push(
            <Row>
                <Col lg={4} key="02">
                    <Row>
                        <div>
                            <div className="Signin_Form" key={"09"}>
                            <br/>
                            <Image src="../Image/avata.jpg" className="Avata" rounded/>
                            <br/>
                            <h1><b>SIGN IN</b></h1> 
                            <div>
                                <form className="Form">
                                    <FormGroup controlId="formBasicText">
                                    <FormControl type="text" placeholder="Username..."/>
                                    </FormGroup>
                                </form>
                                <form className="Form">
                                    <FormGroup controlId="formBasicText">
                                    <FormControl type="password" placeholder="Password..."/>
                                    </FormGroup>
                                </form>
                            </div>
                            <Checkbox inline className="checkbox_left">Remember me</Checkbox>
                            <a href="#" className="a_left">Forgot Password?</a>
                            <a href="/dang-ky" className="a_right">Create Account</a><br/>
                            <Button bsStyle="info">Sign in</Button>
                            </div> 
                        </div>
                        
                    </Row>
                </Col>
            </Row>
        )
        _content.push(<Col lg={4} key="03"></Col>)
        return(
            <Page content={_content}></Page>
        );
    }
}
export default SigninPage;