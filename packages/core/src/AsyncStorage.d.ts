import { FactoryOptions, IStorageBackend, StorageModel, StorageOptions } from '../types';
declare class AsyncStorage<STR extends IStorageBackend, VAL = StorageModel<STR>> {
    private readonly _backend;
    private readonly _config;
    private readonly log;
    private readonly error;
    constructor(storageBackend: STR, asOptions: FactoryOptions);
    get(key: string, opts?: StorageOptions): Promise<VAL | null>;
    set(key: string, value: VAL, opts?: StorageOptions): Promise<void>;
    getMultiple(keys: Array<string>, opts?: StorageOptions): Promise<Array<VAL | null>>;
    setMultiple(keyValues: Array<{
        [key: string]: VAL;
    }>, opts?: StorageOptions): Promise<void>;
    remove(key: string, opts?: StorageOptions): Promise<void>;
    removeMultiple(keys: Array<string>, opts?: StorageOptions): Promise<void>;
    getKeys(opts?: StorageOptions): Promise<Array<string>>;
    clearStorage(opts?: StorageOptions): Promise<void>;
    instance(): STR;
}
export default AsyncStorage;
