import React from 'react';
import Page from '../Page';
class ContactPage extends React.Component{
    render(){
        const _content =[];
        _content.push(
            <div key="07">Lien he</div>
        )
        return(
            <Page content={_content}></Page>
        );
    }
}
export default ContactPage;