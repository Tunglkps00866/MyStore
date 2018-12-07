import {Map,GoogleApiWrapper,Marker,InfoWindow} from 'google-maps-react';
import React from 'react';
 
export class GMap extends React.Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
      <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
                <p>Your location</p>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
    apiKey: ("AIzaSyCYi-YM9WCW3okjOrRUakaD0HwnEH1_LN8")
  })(GMap)