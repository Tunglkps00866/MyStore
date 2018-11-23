import React from 'react';
import Page from '../Page';
class SpecialPage extends React.Component{
    render(){
        const _content =[];
        _content.push(
            <div key="03">Khuyen mai</div>
        )
        return(
            <Page content={_content}></Page>
        );
    }
}
export default SpecialPage;