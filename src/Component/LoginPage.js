import React from 'react';
import Page from '../Page';
class LoginPage extends React.Component{
    render(){
        const _content =[];
        _content.push(
            <div key="04">Dang nhap</div>
        )
        return(
            <Page content={_content}></Page>
        );
    }
}
export default LoginPage;