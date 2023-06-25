// Pie Chart во вкладке аналитика

const showPieChart = () => {
  const analyticsChart = document.querySelector('#analytics-chart');

  if(!analyticsChart) return;

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


// Скрытие боковой панели

const toggleAside = () => {
  const burgerBtn = document.querySelector('.section-header .burger-btn');
  const aside = document.querySelector('.section-main .aside.main__aside');

  if(!burgerBtn && !aside) return;

  burgerBtn.addEventListener('click', () => {
    aside.classList.toggle('open');
  })
}

toggleAside();

function media() {
  const mainContent = document.querySelector('.section-main .content.main__content');
  const aside = document.querySelector('.section-main .aside')

  window.addEventListener('resize', e => {
    if(parseInt(window.getComputedStyle(mainContent).width) <= 768) {
      mainContent.classList.add('media-768');
    } else {
      mainContent.classList.remove('media-768');
    }

    if(parseInt(window.getComputedStyle(mainContent).width) <= 576) {
      mainContent.classList.add('media-576');
    } else {
      mainContent.classList.remove('media-576');
    }
  });
}

// media();