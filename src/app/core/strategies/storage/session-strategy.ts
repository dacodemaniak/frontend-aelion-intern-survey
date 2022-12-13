import { IStorageStrategy } from "./i-storage-strategy";

export class SessionStrategy implements IStorageStrategy {
  getItem(key: string) {
    return sessionStorage.getItem(key);
  }
  storeItem(key: string, item: string): void {
    sessionStorage.setItem(key, item);
  }
  removeItem(key: string): void {
    sessionStorage.removeItem(key);
  }
}
