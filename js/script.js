const analyticsChart = document.querySelector('#analytics-chart');

new Chart(analyticsChart, {
  options: {
    rotation: 180,
    cutout: 100,
    plugins: {
      tooltip: {
        enabled: false,
      }
    }
  },
  type: 'doughnut',
  data: {
    datasets: [{
      data: [15, 4, 7, 4],
      borderWidth: 0,
      backgroundColor: [
        'rgb(34, 195, 142)',
        'rgb(243, 139, 0)',
        'rgb(0, 113, 178)',
        'rgb(0, 32, 51, 10%)',
      ],
    }],
  },
});