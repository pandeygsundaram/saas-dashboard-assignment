import './style.css'
import './assets/scss/app.scss';


import Chart from 'chart.js/auto';
import 'bootstrap';

const ctx1 = document.getElementById('chart1');
new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [{
      label: 'Users',
      data: [12, 19, 3, 5, 2],
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
    }]
  }
});

const ctx2 = document.getElementById('chart2');
new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [{
      label: 'Revenue',
      data: [300, 400, 100, 600],
      borderColor: 'rgba(255, 99, 132, 1)',
      fill: false
    }]
  }
});

