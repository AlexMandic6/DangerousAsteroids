export const sortByStringProperty = function(data, sortDirection, property) {
        if(sortDirection === true) {
             data.sort((a,b) => {
                return a[property].localeCompare(b[property])
            });
        } else {
             data.sort((a,b) => {
                return b[property].localeCompare(a[property])
            });
        }    
}

export const sortByNumberProperty = function(data, sortDirection, property) {
    if(sortDirection === true) {
         data.sort((a,b) => {
            return a[property] - b[property]
        });
    } else {
         data.sort((a,b) => {
            return b[property] - a[property]
        });
    }
}