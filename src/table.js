import { getDomString } from "./base";

export const makeTable = function(data) {
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

// Prepravi svuda domstrings u getdomstring metodu. 
// nastavi po planu, ubaciti sve document.querry selektore u base.js