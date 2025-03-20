import statesData from '../data/nepal-states.geojson';
import { StateData, StateFeature, StateGeoDataManager as stateGeoDataManager } from './types';
const stateNameMap: { [key: string]: string } = {
    '1': 'Province No. 1',
    '2': 'Province No. 2',
    '3': 'Bagmati Province',
    '4': 'Gandaki Province',
    '5': 'Lumbini Province',
    '6': 'Karnali Province',
    '7': 'Sudurpashchim Province'
};

class StateGeoDataManager implements StateGeoDataManager {
    private data: StateData;

    constructor() {
        this.data = statesData as StateData;
    }

    getAllStates(): StateData {
        return { ...this.data };
    }

    getStateByName(name: string): StateFeature | undefined {
        // Handle both numeric IDs and full names
        const searchKey = Object.keys(stateNameMap).find(key => key === name || stateNameMap[key].toUpperCase() === name.toUpperCase());
        if (searchKey) {
            return this.data.features.find(feature => feature.properties.ADM1_EN === searchKey);
        }
        return undefined;
    }

    filterStates(predicate: (feature: StateFeature) => boolean): StateFeature[] {
        return this.data.features.filter(predicate);
    }
    getFriendlyStateName(feature: StateFeature): string {
        return stateNameMap[feature.properties.ADM1_EN] || feature.properties.ADM1_EN;
    }
}

const stateGeoDataManager = new StateGeoDataManager();
export default stateGeoDataManager;