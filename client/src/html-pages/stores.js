import 'mapbox-gl/dist/mapbox-gl.css';
import React from 'react';
import MapGL from 'mapbox-gl';
import "../css/map.css";

class Stores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 49.1221301735,
      lon: -122.9163910206,
      zoom: 14,
      minZoom: 11,
      maxZoom: 17,
      maxBounds: [[-123.3845691633, 48.9221301735], [-122.5163910206, 49.486393603]], // [left, bottom], [right, top]
      center: [-123.1153071, 49.283423]
    };
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    this.setupMap();
  }

  setupMap() {
    // Set the public API access token
    MapGL.accessToken = process.env.REACT_APP_MAPBOX_API_ACCESS_TOKEN;

    // Define the map and configure the map's theme
    this.map = new MapGL.Map({
      container: this.mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: this.state.zoom,
      minZoom: this.state.minZoom,
      maxZoom: this.state.maxZoom,
      maxBounds: this.state.maxBounds,
      center: this.state.center
    });

    // Add Navigation controls to the map to the top-right corner of the map
    const nav = new MapGL.NavigationControl();
    this.map.addControl(nav, 'top-right');
    this.map.addControl(new MapGL.ScaleControl({
      maxWidth: 80,
      unit: 'metric'
    }));

    // Update state?
    this.map.on('move', () => {
      this.setState({
        lng: this.map.getCenter().lng.toFixed(4),
        lat: this.map.getCenter().lat.toFixed(4),
        zoom: this.map.getZoom().toFixed(2)
      });
    });

    this.map.on('load', () => {
      this.loadStores();
    });
  }

  loadStores() {
    this.stores = { // load from database
      'type': 'FeatureCollection',
      'features': [
        {
          'type': 'Feature',
          'properties': {
            'brand': 'Safeway',
            'people_queued': 10,
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-123.127926, 49.2866144]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'brand': 'Safeway',
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-123.139624, 49.286025]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'brand': 'Costco',
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-123.1095645, 49.278777]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'brand': 'IGA',
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-123.117392, 49.2800345]
          }
        },
      ]
    };

    // Load GeoJSON data
    this.map.addSource('stores', {
      type: 'geojson',
      data: this.stores,
    });

    const filterElement = document.getElementById('filter-container');

    this.stores.features.forEach(feature => {
      const layerID = feature.properties['brand'];

      if (!this.map.getLayer(layerID)) {
        this.map.addLayer({
          'id': layerID,
          'type': 'circle',
          'source': 'stores',
          'paint': {
            'circle-color': '#fc0356',
            'circle-radius': 8
          },
          'filter': ['==', 'brand', layerID]
        });

        // Add checkbox and label elements for the layer.
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = layerID;
        input.checked = true;
        filterElement.appendChild(input);

        const label = document.createElement('label');
        label.setAttribute('for', layerID);
        label.textContent = layerID;
        filterElement.appendChild(label);

        // When the checkbox changes, update the visibility of the layer.
        input.addEventListener('change', (e) => {
          this.map.setLayoutProperty(
            layerID,
            'visibility',
            e.target.checked ? 'visible' : 'none'
          );
        });

        // Add popups
        this.map.on('click', layerID, e => {
          const coordinates = e.features[0].geometry.coordinates.slice();
          const brand = e.features[0].properties.brand;

          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }

          new MapGL.Popup()
            .setLngLat(coordinates)
            .setHTML(`${brand}`)
            .addTo(this.map);
        });

        // Change the cursor to a pointer when the mouse is over the places layer.
        this.map.on('mouseenter', layerID, () => {
          this.map.getCanvas().style.cursor = 'pointer';
        });

        // Change it back to a pointer when it leaves.
        this.map.on('mouseleave', layerID, () => {
          this.map.getCanvas().style.cursor = '';
        });
      }
    });
  }

  render() {
    return (
      <div>
        <div ref={this.mapRef} className="map-container"/>
        <div id="filter-container" className="filter-group"/>
      </div>
    );
  }
};

export default Stores;