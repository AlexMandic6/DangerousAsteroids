import { getDomString } from "./base";
import { fetchData } from "./fetchData";
import { getDateRange } from "./dateRange";
import { makeTable } from "./table";
import { asteroidList } from "./autocomplete";
import { makeChart } from "./chart";
import { sortByStringProperty, sortByNumberProperty } from "./tableSort";

function setupEventListeners() {
    getDomString('showAsteroidBtn').addEventListener('click', mainDataHandle);
    getDomString('testBtn').addEventListener('click', selectedAsteroids);
    getDomString('selectedAsteroidsList').addEventListener('click', deleteAsteroid);
    document.querySelector('.chartPageBtn').addEventListener('click', numOfPassesAroundEarth);
}

export const goToPage = function(page) {
    window.location = page;
  }

const tableData = [];

function mainDataHandle() {
    let startDate = getDomString('inputFieldStart').value;
    let endDate = getDomString('inputFieldEnd').value;
    
    if(getDateRange(startDate, endDate)) {
        fetchData(startDate, endDate).then(objects => {
            const dangerousAsteroids = [];
            const ID = [];

            for(const prop in objects) {
                for(let i = 0; i < objects[prop].length; i++) {
                    let item = objects[prop][i];
                    if(item.is_potentially_hazardous_asteroid === true) {
                        dangerousAsteroids.push(item);
                    }
                }   
            }

            for(const prop in dangerousAsteroids) {
                let date, name, speed, maxDia, minDia, asteroidID;
    
                date = dangerousAsteroids[prop].close_approach_data[0].close_approach_date;
                name = dangerousAsteroids[prop].name;
                speed = dangerousAsteroids[prop].close_approach_data[0].relative_velocity.kilometers_per_hour;
                maxDia = dangerousAsteroids[prop].estimated_diameter.meters.estimated_diameter_max;
                minDia = dangerousAsteroids[prop].estimated_diameter.meters.estimated_diameter_min;
                asteroidID = dangerousAsteroids[prop].id;

                ID.push(asteroidID);

                tableData.push({dateOfApproach: date, name: name, speed: speed, maxDiameter: maxDia, minDiameter: minDia});
            };
            
            makeTable(tableData);
            asteroidList(tableData, ID);

            let sortDirection = true;
            document.querySelector('tr').addEventListener('click', sort => {
                if(sort.target.innerHTML === 'Ime') {
                    sort = sortByStringProperty;
                    sort(tableData, sortDirection,'name');
                    sortDirection = !sortDirection;
                    makeTable(tableData);

                } else if (sort.target.innerHTML === 'Datum') {
                    sort = sortByStringProperty;
                    sort(tableData, sortDirection, 'dateOfApproach');
                    sortDirection = !sortDirection;
                    makeTable(tableData);
                } else if (sort.target.innerHTML === 'Brzina kretanja (km/h)') {
                    sort = sortByNumberProperty;
                    sort(tableData, sortDirection, 'speed');
                    sortDirection = !sortDirection;
                    makeTable(tableData);
                } else if (sort.target.innerHTML === 'Min. Precnik (m)') {
                    sort = sortByNumberProperty;
                    sort(tableData, sortDirection, 'minDiameter');
                    sortDirection = !sortDirection;
                    makeTable(tableData);
                } else if (sort.target.innerHTML === 'Max. Precnik (m)') {
                    sort = sortByNumberProperty;
                    sort(tableData, sortDirection, 'maxDiameter');
                    sortDirection = !sortDirection;
                    makeTable(tableData);
                }
            });
        });
    }
}

function selectedAsteroids() {

    const selectedAsteroidList = document.querySelector('.selected-asteroids');
    const value = getDomString('asteroidInput').value;
    const datasetOptions = document.querySelectorAll('option');
    let input =  getDomString('asteroidInput');
    if(!value) return;
    datasetOptions.forEach(opt => {
        if(opt.value === value) {
        let listItem = document.createElement('li');
        listItem.setAttribute('data-id', opt.getAttribute('data-id'));
        listItem.innerHTML = value;
        selectedAsteroidList.appendChild(listItem);
        listItem.classList.add('chosen-asteroid');

        let deleteBtn = `<button class="btn-delete">
        <i class="ion-ios-close-outline"></i> 
     </button>`;
        listItem.innerHTML += deleteBtn;
        opt.remove();
        input.value = '';
    }
    });
 };

 function deleteAsteroid(e) {
    let itemId = e.target.parentElement.parentElement;

    if(e.target.parentElement.matches('.btn-delete')) {
       let autocompleteList = document.querySelector('#asteroid-list');
       let returnDeletedElement = document.createElement('option');
       returnDeletedElement.setAttribute('value', itemId.childNodes[0].nodeValue);
       returnDeletedElement.setAttribute('data-id', itemId.getAttribute('data-id'));
       autocompleteList.appendChild(returnDeletedElement);
       itemId.parentNode.removeChild(itemId);

    }
 }


function numOfPassesAroundEarth() {
     const chosenAsteroids = document.querySelectorAll(".chosen-asteroid");

         if (chosenAsteroids.length > 0) {
          makeChart(chosenAsteroids);
          return (function() {
            setTimeout(() => {
              goToPage("chart.html");
            }, 1500);
          })();
        } else {
          alert("Please select asteroids from table!");
        }
  }
  

function init() {
    setupEventListeners();
}
init();