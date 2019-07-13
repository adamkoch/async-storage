import AsyncStorage from './AsyncStorage';
import { IStorageBackend, FactoryOptions, StorageModel } from '../types';
declare class AsyncStorageFactory {
    constructor();
    static create<STR extends IStorageBackend>(storage: STR, opts?: FactoryOptions): AsyncStorage<STR, StorageModel<STR>>;
}
export default AsyncStorageFactory;
