/* global window */
import MemoryAdapter from 'firenze/lib/adapters/Memory';

export default class LocalStorageAdapter extends MemoryAdapter {
  constructor(...args) {
    super(...args);

    const data = JSON.parse(window.localStorage.getItem(this.getKey()));
    if (data) {
      this.data = data;
    }

    this.persistCurrentData();
  }

  persistCurrentData() {
    return window.localStorage.setItem(this.getKey(), JSON.stringify(this.data));
  }

  getKey() {
    if (this.options.key) {
      return this.options.key;
    }

    return 'firenze_data';
  }

  setData(...args) {
    const out = super(...args);

    this.persistCurrentData();

    return out;
  }
}
