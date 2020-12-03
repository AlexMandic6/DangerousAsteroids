import { DOMstrings } from "./base";
import { fetchData } from "./fetchData";
import { makeTable } from "./table";
import { asteroidList } from "./autocomplete";
import { makeChart } from "./chart";

document.querySelector('.input__btn').addEventListener('click', myFunction);


const tableData = {
    dateOfApproach: [],
    name: [],
    speed: [],
    minDiameter: [],
    maxDiameter: [],
    id: []
}


function myFunction() {
    let startDate = DOMstrings.inputFieldStart.value;
    let endDate = DOMstrings.inputFieldEnd.value;
    let dateRange = parseInt(endDate.replace(/-/g, ""),10) - parseInt(startDate.replace(/-/g, ""),10);
    if(dateRange <= 7) {

        fetchData(startDate, endDate).then(objects => {
            const DangerousAsteroids = [];

            for(const prop in objects) {
                for(let i = 0; i < objects[prop].length; i++) {
                    let item = objects[prop][i];
                    if(item.is_potentially_hazardous_asteroid === true) {
                        DangerousAsteroids.push(item);
                    }
                }  
                
            }
            for(const prop in DangerousAsteroids) {

                let date, name, speed, maxDia, minDia, asteroidID;
    
                date = DangerousAsteroids[prop].close_approach_data[0].close_approach_date;
    
                name = DangerousAsteroids[prop].name;
    
                speed = DangerousAsteroids[prop].close_approach_data[0].relative_velocity.kilometers_per_hour;
    
                maxDia = DangerousAsteroids[prop].estimated_diameter.meters.estimated_diameter_max;
    
                minDia = DangerousAsteroids[prop].estimated_diameter.meters.estimated_diameter_min;

                asteroidID = DangerousAsteroids[prop].id;
              
                tableData.dateOfApproach.push(date);
                tableData.name.push(name);
                tableData.speed.push(speed);
                tableData.maxDiameter.push(maxDia);
                tableData.minDiameter.push(minDia);
                tableData.id.push(asteroidID);

                // console.log(DangerousAsteroids[prop]);
            };

            makeTable(tableData);
            asteroidList(tableData.name, tableData.id);
            // console.log(tableData.id);
           
        });
    } else {
        alert('Maximum range between start and end date is 7 days!');
    }
}

/////////////////////////////////////////////////////////////////////
document.querySelector('.testBtn').addEventListener('click', selectedAsteroids);

function selectedAsteroids() {
    const ul = document.querySelector('.selected-asteroids');
    const value = DOMstrings.asteroidInput.value;
    const datasetOptions = document.querySelectorAll('option');
    let input =  DOMstrings.asteroidInput;
    if(!value) return;
    datasetOptions.forEach(opt => {
        if(opt.value === value) {
        let listItem = document.createElement('li');
        listItem.setAttribute('data-id', opt.getAttribute('data-id'));
        listItem.innerHTML = value;
        ul.appendChild(listItem);
        listItem.classList.add('chosen-asteroid')
        console.log(listItem, ul);
    
        input.value = '';


        numOfPassesBtn();
    }
    });
 };

export const goToPage = function(page) {
    window.location = page;
  }



function numOfPassesBtn() {
     const timesBtn = document.querySelector(".chartPageBtn");
     const chosenAsteroids = document.querySelectorAll(".chosen-asteroid");
     console.log(chosenAsteroids.length);
        
     timesBtn.addEventListener("click", function() {
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
      });
  }
  
