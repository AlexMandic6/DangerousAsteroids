import { DOMstrings } from "./base";

export const makeTable = function(data) {
    const table = DOMstrings.tableBody;
    
    for (let i=0; i < data.name.length; i++) {
        let row = `<tr>
                        <td>${data.dateOfApproach[i]}</td>
                        <td>${data.name[i]}</td>
                        <td>${data.speed[i]}</td>
                        <td>${data.minDiameter[i]}</td>
                        <td>${data.maxDiameter[i]}</td>
                   </tr>`
        table.innerHTML += row;
    }
}