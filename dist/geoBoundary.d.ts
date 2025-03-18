import L, { Map } from 'leaflet';
export declare class GeoBoundaryMap {
    private map;
    private geoJsonLayer;
    constructor(containerId: string, provider: string, options?: {
        center: [number, number];
        zoom: number;
    });
    setMapProvider(provider: string): this;
    addGeoJsonBoundary(geoJsonData: any, style?: L.PathOptions): this;
    getMap(): Map;
}
