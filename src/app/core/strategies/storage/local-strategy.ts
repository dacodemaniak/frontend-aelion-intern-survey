import { IStorageStrategy } from "./i-storage-strategy";

export class LocalStrategy implements IStorageStrategy {
  getItem(key: string) {
    return localStorage.getItem(key);
  }
  storeItem(key: string, item: string): void {
    localStorage.setItem(key, item);
  }
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

}
