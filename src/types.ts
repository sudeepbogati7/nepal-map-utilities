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
export interface StateFeature extends GeoJSON.Feature {
  properties: {
    Shape_Leng: number;
    Shape_Area: number;
    ADM1_EN: string; // State name or identifier (e.g., "1" for Province No. 1)
    ADM1_PCODE: string;
    ADM1_REF: string | null;
    ADM1ALT1EN: string | null;
    ADM1ALT2EN: string | null;
    ADM0_EN: string;
    ADM0_PCODE: string;
    date: string;
    validOn: string;
    validTo: string | null;
  };
  geometry: GeoJSON.MultiPolygon; // Based on the snippet, geometry is MultiPolygon
}

export interface StateData extends GeoJSON.FeatureCollection {
  features: StateFeature[];
}

export interface HeadquartersFeature extends GeoJSON.Feature {
  id: number;
  properties: {
    NAME: string;
    TYPE: string;
  };
  geometry: GeoJSON.Point;
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