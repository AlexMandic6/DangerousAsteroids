export function getDateRange(startDate, endDate) {
    
    if ( startDate.value === '' || endDate.value === '' ) {
        alert('Please select start and end dates!');
        return false
    } else if (  (parseInt(endDate.replace(/-/g, ""),10) - parseInt(startDate.replace(/-/g, ""),10)) > 7 ) {
        alert( 'Maximum difference between dates is 7 days!' );
        return false
    } 
    return true;
}