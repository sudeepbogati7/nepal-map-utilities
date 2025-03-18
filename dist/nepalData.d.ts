import { DistrictData, DistrictFeature, NepalDataManager } from './types';
declare class NepalDataManagerImpl implements NepalDataManager {
    private data;
    constructor();
    getAllDistricts(): DistrictData;
    getDistrictByName(name: string): DistrictFeature | undefined;
    filterDistricts(predicate: (feature: DistrictFeature) => boolean): DistrictFeature[];
}
declare const nepalDataManager: NepalDataManagerImpl;
export default nepalDataManager;
