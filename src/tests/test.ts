
// src/stateGeoDataManager.ts
import statesData from '../data/nepal-states.geojson';
import { StateData, StateFeature, StateGeoDataManager as stateGeoDataManager} from '../types';

class StateGeoDataManager implements StateGeoDataManager {
  private data: StateData;

  constructor() {
    this.data = statesData as StateData;
  }

  getAllStates(): StateData {
    return { ...this.data };
  }

  getStateByName(name: string): StateFeature | undefined {
    return this.data.features.find(feature => feature.properties.ADM1_EN.toUpperCase() === name.toUpperCase());
  }

  filterStates(predicate: (feature: StateFeature) => boolean): StateFeature[] {
    return this.data.features.filter(predicate);
  }
}

const stateGeoDataManager = new StateGeoDataManager();

export default stateGeoDataManager;