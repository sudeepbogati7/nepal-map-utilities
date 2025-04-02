import L, { Map, GeoJSON } from 'leaflet';
import { mapProviders } from './mapProviders';


export class GeoDataNepal {
  private map: Map;
  private geoJsonLayer: GeoJSON | null = null;

  constructor(
    containerId: string,
    provider: string,
    options: { center: [number, number]; zoom: number } = { center: [51.505, -0.09], zoom: 7.5 }
  ) {
    this.map = L.map(containerId).setView(options.center, options.zoom);
    this.setMapProvider(provider);
  }

  setMapProvider(provider: string) {
    const tileLayer = L.tileLayer(mapProviders[provider].url, {
      attribution: mapProviders[provider].attribution,
      maxZoom: 19,
    });
    tileLayer.addTo(this.map);
    return this;
  }

  addGeoJsonBoundary(geoJsonData: any, style?: L.PathOptions) {
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

  getMap(): Map {
    return this.map;
  }
}