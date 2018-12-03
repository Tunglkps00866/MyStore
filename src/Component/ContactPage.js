import React from 'react';
import Page from '../Page';
import {Breadcrumb, Glyphicon,Col} from 'react-bootstrap';
class ContactPage extends React.Component{
    render(){
        const _content =[];
        _content.push(
            <div key="07">
                <Col lg={2}></Col>
                <Col lg={8}>
                    <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>ContactUs</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="Page">
                        <h1><b>CONTACT US</b></h1>
                        <br/>
                        <Col lg={4}><Glyphicon glyph="map-marker" bsSize="larger"/></Col>
                        <Col lg={4}><Glyphicon glyph="phone" bsSize="larger"/></Col>
                        <Col lg={4}><Glyphicon glyph="envelope" bsSize="larger"/></Col>
                        <br/>
                        <br/>
                            
                    </div>
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