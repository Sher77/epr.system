// Pie Chart во вкладке аналитика

const showPieChart = () => {
  const analyticsChart = document.querySelector('#analytics-chart');

  console.log(analyticsChart);


  new Chart(analyticsChart, {
    options: {
      rotation: 180,
      responsive: true,
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
        borderWidth: 1,
        backgroundColor: [
          'rgb(34, 195, 142)',
          'rgb(243, 139, 0)',
          'rgb(0, 113, 178)',
          'rgb(0, 32, 51, 10%)',
        ],
      }],
    },
  });
}

showPieChart();

// Переключение по табам

const tabSwitch = () => {
  const tabsParent = document.querySelector('.tabs');

  if(!tabsParent) return;

  const tabBtns = tabsParent.querySelectorAll('.tab');
  const tabContents = tabsParent.querySelectorAll('.tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      const target = e.currentTarget;
      
      if(target.classList.contains('tab--active')) return;
      
      const dataTarget = target.dataset.target;

      tabBtns.forEach(btn => btn.classList.remove('tab--active'));

      target.classList.add('tab--active');

      tabContents.forEach(content => content.classList.remove('tab-pane--active'));

      tabsParent.querySelector(dataTarget).classList.add('tab-pane--active');
    });
  })
}

tabSwitch();