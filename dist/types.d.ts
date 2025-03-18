export interface DistrictFeature extends GeoJSON.Feature {
    id: number;
    properties: {
        DISTRICT: string;
    };
    geometry: GeoJSON.Polygon | GeoJSON.MultiPolygon;
}
export interface DistrictData extends GeoJSON.FeatureCollection {
    features: DistrictFeature[];
}
export interface NepalDataManager {
    getAllDistricts(): DistrictData;
    getDistrictByName(name: string): DistrictFeature | undefined;
    filterDistricts(predicate: (feature: DistrictFeature) => boolean): DistrictFeature[];
}
