// chart 1 starts
let myChart1 = document.getElementById('chart_1').getContext('2d');

let massPopChart1 = new Chart(myChart1, {
  type: 'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Population',
      data: [20, 40, 30, 10, 80, 20, 90],
      borderColor: '#5bc0de',
      backgroundColor:'rgba(91, 192, 222, 1)',
      pointRadius:0
    }, {
      label: 'Population',
      data: [60, 50, 70, 80, 60, 50, 40],
      borderColor: 'rgba(207, 207, 207, 1)',
      backgroundColor: 'rgba(207, 207, 207, 1)',
      pointRadius:0
    }]
  },
  options: {
    // borderColor: #5bc0de,
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 123
      }
    },
    scales: {
        xAxes: [{
            gridLines: {
                drawOnChartArea: false
            }
        }],
        yAxes: [{
            gridLines: {
                drawOnChartArea: false
            }
        }]
    },
    legend: {
      display:false
    }
  }
});
// chart 1 ends


// chart 2 starts
let myChart2 = document.getElementById('chart_2').getContext('2d');

let massPopChart2 = new Chart(myChart2, {
  type: 'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    datasets: [{
      data: [70,30],
      backgroundColor: ['#d9534f','rgb(227, 227, 227, 1)']
    }],
    labels: ['70'],
  },
  options: {
    // cutoutPercentage: 100,
    rotation: 3.15,
    circumference: 3.14 ,
    title: {
      text: '70',
      display: true,
      position: 'bottom'
    },
    legend: {
      display:false
    }
  }
});
// chart 2 ends

// chart 3 starts
let myChart3 = document.getElementById('chart_3').getContext('2d');

let massPopChart3 = new Chart(myChart3, {
  type: 'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    datasets: [{
      data: [70,30],
      backgroundColor: ['#d9534f','rgb(227, 227, 227, 1)']
    }],
    labels: ['70'],
  },
  options: {
    title: {
      text: '70',
      display: true,
      position: 'bottom'
    },
    legend: {
      display:false
    }
  }
});
// chart 3 ends


// chart 4 starts
let myChart4 = document.getElementById('chart_4').getContext('2d');

let massPopChart4 = new Chart(myChart4, {
  type: 'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Population',
      data: [210, 200, 240, 230, 260, 280, 220],
      backgroundColor:'rgba(0, 0, 0, 0)',
      borderColor: '#5bc0de',
      pointRadius:0
    }, {
      label: 'Population',
      data: [260, 250, 280, 220, 250, 270, 240],
      backgroundColor: 'rgba(0, 0, 0, 0)',
      pointRadius:0
    }]
  },
  options: {
    // borderColor: #5bc0de,
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 123
      }
    },
    scales: {
        xAxes: [{
            gridLines: {
                drawOnChartArea: false
            }
        }],
        yAxes: [{
            gridLines: {
                drawOnChartArea: false
            }
        }]
    },
    legend: {
      display:false
    }
  }
});
// chart 4 ends


// chart 5 starts
let myChart5 = document.getElementById('chart_5').getContext('2d');

let massPopChart5 = new Chart(myChart5, {
  type: 'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Population',
      data: [280, 280, 280, 280, 280, 280, 280],
      backgroundColor:'rgba(0, 0, 0, 0)',
      borderColor: '#5bc0de',
      pointRadius:0
    }, {
      label: 'Population',
      data: [210, 260, 210, 260, 210, 260, 210],
      backgroundColor: 'rgba(0, 0, 0, 0)',
      pointRadius:0
    }]
  },
  options: {
    // borderColor: #5bc0de,
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 123
      }
    },
    scales: {
        xAxes: [{
            gridLines: {
                drawOnChartArea: false
            }
        }],
        yAxes: [{
            gridLines: {
                drawOnChartArea: false
            }
        }]
    },
    legend: {
      display:false
    }
  }
});
// chart 5 ends


// chart 6 starts
let myChart6 = document.getElementById('chart_6').getContext('2d');

let massPopChart6 = new Chart(myChart6, {
  type: 'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Population',
      data: [280, 280, 280, 280, 280, 280, 280],
      backgroundColor:'rgba(0, 0, 0, 0)',
      borderColor: '#5bc0de',
      pointRadius:0
    }, {
      label: 'Population',
      data: [210, 260, 210, 260, 210, 260, 210],
      backgroundColor: 'rgba(0, 0, 0, 0)',
      pointRadius:0
    }]
  },
  options: {
    // borderColor: #5bc0de,
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 123
      }
    },
    scales: {
        xAxes: [{
            gridLines: {
                drawOnChartArea: false
            }
        }],
        yAxes: [{
            gridLines: {
                drawOnChartArea: false
            }
        }]
    },
    legend: {
      display:false
    }
  }
});
// chart 6 ends


// chart 7 starts
let myChart7 = document.getElementById('chart_7').getContext('2d');

let massPopChart7 = new Chart(myChart7, {
  type: 'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Population',
      data: [280, 280, 280, 280, 280, 280, 280],
      backgroundColor:'rgba(0, 0, 0, 0)',
      borderColor: '#5bc0de',
      pointRadius:0
    }, {
      label: 'Population',
      data: [210, 260, 210, 260, 210, 260, 210],
      backgroundColor: 'rgba(0, 0, 0, 0)',
      pointRadius:0
    }]
  },
  options: {
    // borderColor: #5bc0de,
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 123
      }
    },
    scales: {
        xAxes: [{
            gridLines: {
                drawOnChartArea: false
            }
        }],
        yAxes: [{
            gridLines: {
                drawOnChartArea: false
            }
        }]
    },
    legend: {
      display:false
    }
  }
});
// chart 7 ends
