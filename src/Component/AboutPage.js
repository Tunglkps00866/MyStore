import React from 'react';
import Page from '../Page';
class AboutPage extends React.Component{
    render(){
        const _content =[];
        _content.push(
            <div key="03">Gioi thieu</div>
        )
        return(
            <Page content={_content}></Page>
        );
    }
}
export default AboutPage;