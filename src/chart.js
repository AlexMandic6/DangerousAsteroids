import { numOfPasses } from "./PassesNearEarth";



// Set color of each bar
export const barColor = function(item, value) {
    if(value < 25) {
        item.style.backgroundColor = 'green';
    } else if ( value > 25 && value < 45) {
        item.style.backgroundColor = 'yellow';
    } else if ( value > 45 && value < 75) {
        item.style.backgroundColor = 'orange';
    } else {
        item.style.backgroundColor = 'red';
    }
}

export const makeChart = function(selectedArr) {
    const numOfApproach = [];
    const container = document.createElement('div');

    selectedArr.forEach(item => {
       const id = item.getAttribute('data-id');

        numOfPasses(id).then(data => {
            const passes = data.close_approach_data;
            const passesResult = passes.filter(date => {
               return parseInt(date.close_approach_date.substring(0,4),10) > 1900 && 
                      parseInt(date.close_approach_date.substring(0,4),10) < 1999
            }).length;

            numOfApproach.push(passesResult);

            container.innerHTML += `<span class="chart-item">${data.name}</span><div class="chart"></div>`;

            localStorage.setItem('numOfApproach', JSON.stringify(numOfApproach));
            localStorage.setItem('item', JSON.stringify(container.innerHTML));
        });
    });
}