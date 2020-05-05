import React from 'react';
import MapGL from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
// import Geocoder from 'react-map-gl-geocoder';
// import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';

class Stores extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zoom: 14,
            minZoom: 11,
            maxZoom: 17,
            maxBounds: [[-123.3845691633, 48.9221301735], [-122.5163910206, 49.486393603]], // [left, bottom], [right, top]
        }
    }


    componentDidMount() {
        MapGL.accessToken = process.env.REACT_APP_MAPBOX_API_ACCESS_TOKEN;
        // this.getGeoCode('Vancouver').then(geoCode => this.setupMap(geoCode));
        this.setupMap();
    }

    setupMap() {
        // Define the map and configure the map's theme
        let map = new MapGL.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            zoom: this.state.zoom,
            minZoom: this.state.minZoom,
            maxZoom: this.state.maxZoom,
            maxBounds: this.state.maxBounds,
            // center: [geoCode[0], geoCode[1]]
        });

        // Add Navigation controls to the map to the top-right corner of the map
        let nav = new MapGL.NavigationControl();
        map.addControl(nav, 'top-right');

        // Add a Scale to the map
        map.addControl(new MapGL.ScaleControl({
            maxWidth: 80,
            unit: 'metric'
        }));

        return map;
    }

    // Get geocode using Mapbox API
    getGeoCode(query) {
        // let mapboxClient = mapboxSdk({ accessToken: MapGL.accessToken });
        //
        // // Query to Mapbox API
        // return mapboxClient.geocoding.forwardGeocode({
        //     query: query,
        //     autocomplete: false,
        //     limit: 1,
        //     bbox: [-123.3845691633, 48.9221301735, -122.5163910206, 49.486393603], // Inside Lower Mainland area
        // }).send().then(res => {
        //     // Check for match
        //     if (res.body.features.hasOwnProperty("0")) {
        //         return res.body.features[0].center
        //     }
        // });
    }

    render() {
        return (
            <div className="container shadow">
            <div id="map" style={{position: 'absolute', top: '100px', bottom: '0', width: '81.5%', border: '20px solid #AAD2A9', borderRadius: '10px', padding: '20px'}}/>

            </div>
        );
    }
};

export default Stores;