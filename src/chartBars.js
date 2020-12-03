import { barColor } from "./chart";

const previousPageBtn = document.querySelector('.prevPageBtn');
previousPageBtn.addEventListener('click', function() {
    window.location = 'index.html';
});

















const chartContainer = document.querySelector('.chart-container');


const charts = document.createElement('displayChart');
charts.innerHTML = '';
charts.innerHTML = JSON.parse(localStorage.getItem('item'));


const numOfApproach = JSON.parse(localStorage.getItem('numOfApproach'));
chartContainer.appendChild(charts);

//testing
const chartsName = document.createElement('div');

chartsName.className = 'charts-name';

const chartsValue = document.createElement('div');

chartsValue.className = 'charts-value';
charts.appendChild(chartsName);
charts.appendChild(chartsValue);

//////////////


const chart = document.querySelectorAll('.chart');


const chartItem = document.querySelectorAll('.chart-item');
chartItem.forEach(item => {
    chartsName.appendChild(item);
});

chart.forEach( (chart, ind) => {
    chartsValue.appendChild(chart);
    chart.innerHTML = numOfApproach[ind];

    let chartStyle = numOfApproach[ind] * 20;
    chart.style.width = `${chartStyle}px`;
    
});

// console.log(chart);
// console.log(charts);

function bars() {
    chart.forEach( (e, index) => {
        barColor(e, numOfApproach[index]);
    });
}
 bars();

