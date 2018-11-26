import React from 'react';
import {Carousel} from 'react-bootstrap';

class Slider extends React.Component{
    render(){
        return(
            <div>
            <Carousel>
                    <Carousel.Item>
                        <img width={2000} height={400} alt="900x500" src="image/h6.jpg" />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={2000} height={400} alt="900x500" src="image/h6.jpg" />
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={2000} height={400} alt="900x500" src="image/h6.jpg" />
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
            </Carousel>
            </div>
        );
    }
}
export default Slider;