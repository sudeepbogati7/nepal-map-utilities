'use strict';

var L = require('leaflet');

const mapProviders = {
    osm: {
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    },
    stamenTerrain: {
        url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg',
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>'
    }
};

class GeoBoundaryMap {
    constructor(containerId, provider, options = { center: [51.505, -0.09], zoom: 7.5 }) {
        this.geoJsonLayer = null;
        this.map = L.map(containerId).setView(options.center, options.zoom);
        this.setMapProvider(provider);
    }
    setMapProvider(provider) {
        const tileLayer = L.tileLayer(mapProviders[provider].url, {
            attribution: mapProviders[provider].attribution,
            maxZoom: 19,
        });
        tileLayer.addTo(this.map);
        return this;
    }
    addGeoJsonBoundary(geoJsonData, style) {
        if (this.geoJsonLayer) {
            this.map.removeLayer(this.geoJsonLayer);
        }
        this.geoJsonLayer = L.geoJSON(geoJsonData, {
            style: style || {
                color: '#ff7800',
                weight: 2,
                opacity: 0.65
            }
        }).addTo(this.map);
        // Fit map to bounds
        this.map.fitBounds(this.geoJsonLayer.getBounds());
        return this;
    }
    getMap() {
        return this.map;
    }
}

exports.GeoBoundaryMap = GeoBoundaryMap;
exports.mapProviders = mapProviders;
//# sourceMappingURL=index.cjs.map
