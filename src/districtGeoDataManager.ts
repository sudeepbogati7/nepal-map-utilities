import districtsData from '../data/nepal-districts.geojson';
import { DistrictData, DistrictFeature, DistrictGeoDataManager as IDistrictGeoDataManager } from './types';

class DistrictGeoDataManager implements IDistrictGeoDataManager {
  private data: DistrictData;

  constructor() {
    this.data = districtsData as DistrictData;
  }

  getAllDistricts(): DistrictData {
    return { ...this.data };
  }

  getDistrictByName(name: string): DistrictFeature | undefined {
    return this.data.features.find(feature => feature.properties.DISTRICT.toUpperCase() === name.toUpperCase());
  }

  filterDistricts(predicate: (feature: DistrictFeature) => boolean): DistrictFeature[] {
    return this.data.features.filter(predicate);
  }
}

const districtGeoDataManager = new DistrictGeoDataManager();

export default districtGeoDataManager;



