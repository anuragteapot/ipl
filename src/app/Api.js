/**
* Api class for communication with the server
*/
class Api {

  /**
  * constructor
  */
  constructor() {

  }

  isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
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

  /**
  * Prepare data for chart.
  * @returns {number}
  */
  prepareData(chartData) {

    var arr = {
      'data': {
        'labels': chartData['labels'],
        'datasets': [
          {
            'backgroundColor': [
              'rgba(255, 99, 132)',
              'rgba(54, 162, 235)',
              'rgba(255, 206, 86)',
              'rgba(75, 192, 192)',
              'rgba(153, 102, 255)',
              'rgba(255, 159, 64)',
              'rgba(117, 59, 120)',
              'rgba(26, 163, 255)',
              'rgba(255, 26, 26)',
              'rgba(65, 5, 111)',
              '#28a745',
              '#6610f2',
              '#17a2b8'
            ],
            'label': '',
            'data': chartData['data']
          }
        ]
      },
      'options':{responsive: true, maintainAspectRatio: false }
    }

    if((typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1))
    {
      arr.options.animation = false;
    }

    return arr;
  }
}

export default new Api();
