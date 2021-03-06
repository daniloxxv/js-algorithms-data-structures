class HashTable {
  constructor(length = 100) {
    this.keyMap = Array(length);
  }

  /**
   * Hash function to obtain a number from a string
   * @param {String} key The hash table key
   */
  hash(key) {
    let total = 0;
    const PRIME_NUMBER = 1009;
    for (let i = 0; i < Math.min(key.length, 100); i += 1) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * PRIME_NUMBER + value) % this.keyMap.length;
    }
    return total;
  }

  /**
   * Sets a value in the hash table
   * @param {String} key The key
   * @param {any} value The value to store
   */
  set(key, value) {
    const index = this.hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    for (let i = 0; i < this.keyMap[index].length; i += 1) {
      if (this.keyMap[index][i][0] === key) {
        this.keyMap[index][i][1] = value;
        return;
      }
    }
    this.keyMap[index].push([key, value]);
  }

  /**
   * Gets the value associated with a given key
   * @param {String} key The key
   * @returns {any} The value associated with the key
   */
  get(key) {
    const index = this.hash(key);
    if (!this.keyMap[index]) return undefined;
    for (let i = 0; i < this.keyMap[index].length; i += 1) {
      if (this.keyMap[index][i][0] === key) return this.keyMap[index][i][1];
    }
    return undefined;
  }

  /**
   * Removes the key/value pair from the hash table
   * @param {String} key The key of the item to remove
   */
  delete(key) {
    const index = this.hash(key);
    if (!this.keyMap[index]) return;
    for (let i = 0; i < this.keyMap[index].length; i += 1) {
      if (this.keyMap[index][i][0] === key) this.keyMap[index].splice(i, 1);
    }
    if (this.keyMap[index].length === 0) delete this.keyMap[index];
  }

  /**
   * @returns {Array} An array with all keys in the hash table
   */
  keys() {
    const keys = [];
    this.keyMap.forEach((allocation) => {
      allocation.forEach((entry) => {
        keys.push(entry[0]);
      });
    });
    return keys;
  }

  /**
   * @returns {Array} An array with all values in the hash table
   */
  values() {
    const values = [];
    this.keyMap.forEach((allocation) => {
      allocation.forEach((entry) => {
        values.push(entry[1]);
      });
    });
    return values;
  }
}

module.exports = HashTable;
