import React from 'react';
import Slider from './Carousel';
class Content extends React.Component{
    render(){
        return(
            <div>
               {this.props.content};
            </div>
        );
    }
}
export default Content;