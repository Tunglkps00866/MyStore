import React from 'react';
import Page from '../Page';
class HomePage extends React.Component{
    render(){
        const _content =[];
        _content.push(
            <div key="01">Trang Chu</div>
        )
        return(
            <Page content={_content}></Page>
        );
    }
}
export default HomePage;