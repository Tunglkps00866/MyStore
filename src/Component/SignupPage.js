import React from 'react';
import Page from '../Page';
class SignupPage extends React.Component{
    render(){
        const _content =[];
        _content.push(
            <div key="05">Dang ky</div>
        )
        return(
            <Page content={_content}></Page>
        );
    }
}
export default SignupPage;