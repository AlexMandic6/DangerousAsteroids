import { getDomString } from "./base";

export const makeTable = function createTableBody(data) {
    const tableBody = getDomString('tableBody');
    tableBody.innerHTML = '';
    
    for (let prop in data) {
        const data2 = data[prop];

        const asteroidRow = document.createElement("tr");
        const asteroidDisplayData = [];
        asteroidDisplayData.push(data2.dateOfApproach,
                                data2.name,
                                data2.speed,
                                data2.maxDiameter,
                                data2.minDiameter);
    
        asteroidDisplayData.forEach(item => {
        const asteroidDataCell = document.createElement("td");
        asteroidDataCell.innerHTML = item;
        asteroidRow.appendChild(asteroidDataCell);
        tableBody.appendChild(asteroidRow);
    });
    }
        
}

// dangerousAsteroids.forEach( asteroid => {
//     const asteroidRow = document.createElement("tr");
//     const asteroidDisplayData = [];
//     asteroidDisplayData.push(asteroid.close_approach_data[0].close_approach_date,
//                             asteroid.name,
//                             asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour,
//                             asteroid.estimated_diameter.meters.estimated_diameter_max,
//                             asteroid.estimated_diameter.meters.estimated_diameter_min);

//     asteroidDisplayData.forEach(item => {
//     const asteroidDataCell = document.createElement("td");
//     asteroidDataCell.innerHTML = item;
//     asteroidRow.appendChild(asteroidDataCell);
//     });
//     tableBody.appendChild(asteroidRow);
// });








    // for (let i=0; i < data.name.length; i++) {
    //     let row = `<tr>
    //                     <td>${data.dateOfApproach[i]}</td>
    //                     <td>${data.name[i]}</td>
    //                     <td>${data.speed[i]}</td>
    //                     <td>${data.minDiameter[i]}</td>
    //                     <td>${data.maxDiameter[i]}</td>
    //                </tr>`
    //     table.innerHTML += row;
    // }


function createTableBody(asteroids, table) {
    const tableBody = document.createElement("tbody");
    asteroids.forEach(asteroid => {
      const asteroidRow = document.createElement("tr");
      const asteroidDisplayData = [];
      asteroidDisplayData.push(
        asteroid.date,
        asteroid.asteroidSpecs.name,
        asteroid.asteroidSpecs.close_approach_data[0].relative_velocity
          .kilometers_per_hour,
        asteroid.asteroidSpecs.estimated_diameter.meters.estimated_diameter_max,
        asteroid.asteroidSpecs.estimated_diameter.meters.estimated_diameter_min
      );
      asteroidDisplayData.forEach(item => {
        const asteroidDataCell = document.createElement("td");
        asteroidDataCell.innerHTML = item;
        asteroidRow.appendChild(asteroidDataCell);
      });
      tableBody.appendChild(asteroidRow);
    });
    table.appendChild(tableBody);
  }



// Prepravi svuda domstrings u getdomstring metodu. 
// nastavi po planu, ubaciti sve document.querry selektore u base.js