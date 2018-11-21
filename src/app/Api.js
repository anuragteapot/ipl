/**
* Api class for communication with the server
*/
class Api {

  /**
  * constructor
  */
  constructor() {

  }

  /**
  * Get avg of array.
  * @returns {number}
  */
  getAvgOfArray(array) {
    this.sum = 0
    array.forEach(element => {
      this.sum = this.sum + element
    })
    return Math.round(this.sum/array.length)
  }

  /**
  * Get max of array.
  * @returns {number}
  */
  getMaxOfArray(array) {
      return Math.max.apply(null, array)
  }

  /**
  * Get min  of array.
  * @returns {number}
  */
  getMinOfArray(array) {
      return Math.min.apply(null, array)
  }
}

export default new Api();
