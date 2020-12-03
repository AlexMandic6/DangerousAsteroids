export const numOfPasses = async function(id) {
    const key = 'x0HeIJzRCLm3lj0zrfXt2LltusKVCO7aoHmRkVq2';
    const url = `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${key}`;

    const result = await fetch(url);
    const data = await result.json();
    return data;

}