export interface IStorageStrategy {
    getItem(key: string): any;
    storeItem(key: string, item: string): void;
    removeItem(key: string): void;
}
