import 'mapbox-gl/dist/mapbox-gl.css';
import React from 'react';
import MapGL from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import "../css/map.css";
import Cookies from "js-cookie";
import { Redirect } from 'react-router-dom';


// import Geocoder from 'react-map-gl-geocoder';
// import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';

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
      this.loadStoresFromDatabase().then(() => this.addStoresToMap());
    });
  }

  async loadStoresFromDatabase() {
    const features = [];
    await fetch(process.env.REACT_APP_API_URL + '/load-stores')
      .then(res => res.json())
      .then(stores => {
        stores.forEach(store => {
          const feature =  {
            'type': 'Feature',
            'properties': {
              'id': `${store.id}`,
              'brand': `${store.name}`,
              'address': `${store.address}`,
              'count': `${store.count}`
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [store.longitude, store.latitude]
            }
          };
          features.push(feature);
        });
      })
      .catch(err => console.log(err));

    this.stores = {
      'type': 'FeatureCollection',
      'features': features
    };

    // Load GeoJSON data
    this.map.addSource('stores', {
      type: 'geojson',
      data: this.stores,
    });
  }

  addStoresToMap() {
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

        const label = document.createElement('label');
        label.setAttribute('for', layerID);
        label.textContent = layerID;

        if (filterElement) {
          filterElement.appendChild(input);
          filterElement.appendChild(label);
        }

        // When the checkbox changes, update the visibility of the layer.
        input.addEventListener('change', (e) => {
          this.map.setLayoutProperty(layerID, 'visibility',
            e.target.checked ? 'visible' : 'none'
          );
        });

        // Add popups
        this.map.on('click', layerID, e => {
          const store = e.features[0];

          const content = document.createElement('div');
          const text = document.createElement('p');
          text.innerHTML = `${store.properties.brand}<br>People in line: ${store.properties.count}`;

          const button = document.createElement('button');
          button.innerText = 'Enqueue';
          button.type = 'click';
          button.addEventListener('click', () => {
            this.addToStoreQueue(store.properties.id);
            // this.getPeopleInLine(store.properties.id);
          });

          content.appendChild(text);
          content.appendChild(button);

          new MapGL.Popup({className: "store-popup"})
            .setLngLat(store.geometry.coordinates.slice())
            .setDOMContent(content)
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

  addToStoreQueue(storeID) {
    if (Cookies.get('token')) {
      fetch(process.env.REACT_APP_API_URL + "/queue/add", {
        method: "POST",
        body: JSON.stringify({
          user_id: Cookies.get('id'),
          store_id: storeID
        }),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        credentials: 'include'
      })
        .then(res => {
          if (res.ok) {
            Cookies.set('enqueued', true);
            window.location = '/profile_page';
          }
        })
        .catch(err => console.log(err));
    } else {
      // redirect to login
      window.location = '/login';
    }
  }

  getPeopleInLine(storeID) {
    fetch(process.env.REACT_APP_API_URL + "/queue/people-in-line", {
      method: "POST",
      body: JSON.stringify({
        store_id: storeID
      }),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
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