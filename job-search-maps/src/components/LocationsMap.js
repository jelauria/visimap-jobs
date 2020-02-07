import React, {Component, Fragment} from 'react';
import GoogleMap, {Marker} from 'google-map-react';

const createInfoContent = (listing, index) => `
    <div>
      <div style="font-size: 16px;">
        ${listing.title}
      </div>
      <div style="font-size: 14px; color: grey;">
        ${listing.company.display_name}
      </div>
      <div style="font-size: 14px; color: grey;">
        ${listing.created.substring(0, 10)}
      </div>
    </div>`;

    let myMap = null, myMaps = null;

    let oldMarkers = [];

const handleApiLoaded = (map, maps, listings) => {
    myMap = map;
    myMaps = maps;
    
    let markers = [];
    let infowindows = [];

    oldMarkers.forEach((oldMarker) => {
        oldMarker.setMap(null);
    });

    listings.forEach((listing, i) => {
        markers.push(new maps.Marker({
        position: {
            lat: listing.latitude,
            lng: listing.longitude,
        },
        map,
        }));
    
        infowindows.push(new maps.InfoWindow({
        content: createInfoContent(listing, i),
        }));
    });
    
    markers.forEach((marker, i) => {
        marker.addListener('click', () => {
        infowindows[i].open(map, marker);
        });
    });

    oldMarkers = markers;
};

class LocationsMap extends Component {
  updateMarkers = (listings) => {
    handleApiLoaded(myMap, myMaps, listings);
  };

    render() {
        return (
            <Fragment>
                <div style={{ height: '75vh', width: '100%' }}>
                    <GoogleMap
                    bootstrapURLKeys={{key: this.props.apiKey}}
                    center={{
                        lat: this.props.results[0].latitude,
                        lng: this.props.results[0].longitude}}
                    defaultZoom={7}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => {
                        handleApiLoaded(map, maps, this.props.results);
                    }}
                    >
                    </GoogleMap>
                </div>
            </Fragment>
        );
    }
}

export default LocationsMap;
