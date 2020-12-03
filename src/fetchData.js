export const fetchData = async function(startDate, endDate) {

    const key = 'x0HeIJzRCLm3lj0zrfXt2LltusKVCO7aoHmRkVq2';
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${key}`;

    try{
        const result = await fetch(url);
        const data = await result.json();
        let objects = await data.near_earth_objects;
        return objects;
    } catch(error) {
        alert('Error!')
    }
}