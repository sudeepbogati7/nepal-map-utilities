
import districtsData from '../data/nepal-districts.geojson';
import { DistrictData, DistrictFeature, DistrictGeoDataManager } from './types';

class GeoDataManager implements DistrictGeoDataManager {
  private data: DistrictData;

  constructor() {
    this.data = districtsData as DistrictData; // Type assertion since JSON is loaded
  }

  getAllDistricts(): DistrictData {
    return { ...this.data }; // Return a copy to prevent mutation
  }

  getDistrictByName(name: string): DistrictFeature | undefined {
    return this.data.features.find(feature => feature.properties.DISTRICT.toUpperCase() === name.toUpperCase());
  }

  filterDistricts(predicate: (feature: DistrictFeature) => boolean): DistrictFeature[] {
    return this.data.features.filter(predicate);
  }
}

const geoDataManager = new GeoDataManager();

export default geoDataManager;