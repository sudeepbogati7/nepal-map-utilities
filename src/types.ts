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

// State (Province) Types
export interface StateFeature extends GeoJSON.Feature {
  id: number;
  properties: {
    STATE: string; 
  };
  geometry: GeoJSON.Polygon | GeoJSON.MultiPolygon;
}

export interface StateData extends GeoJSON.FeatureCollection {
  features: StateFeature[];
}

// Headquarters Types
export interface HeadquartersFeature extends GeoJSON.Feature {
  id: number;
  properties: {
    NAME: string; // Adjust based on your GeoJSON data (e.g., name of the headquarters)
    TYPE: string; // E.g., "District HQ", "State HQ"
    // Add other properties as needed
  };
  geometry: GeoJSON.Point; // Headquarters are typically points
}

export interface HeadquartersData extends GeoJSON.FeatureCollection {
  features: HeadquartersFeature[];
}

// Manager Interfaces
export interface DistrictGeoDataManager {
  getAllDistricts(): DistrictData;
  getDistrictByName(name: string): DistrictFeature | undefined;
  filterDistricts(predicate: (feature: DistrictFeature) => boolean): DistrictFeature[];
}

export interface StateGeoDataManager {
  getAllStates(): StateData;
  getStateByName(name: string): StateFeature | undefined;
  filterStates(predicate: (feature: StateFeature) => boolean): StateFeature[];
}

export interface HeadquartersGeoDataManager {
  getAllHeadquarters(): HeadquartersData;
  getHeadquartersByName(name: string): HeadquartersFeature | undefined;
  filterHeadquarters(predicate: (feature: HeadquartersFeature) => boolean): HeadquartersFeature[];
}