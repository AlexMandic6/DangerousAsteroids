
export const asteroidList = function(asteroidName, id) {
    asteroidName.forEach( (name, index) => {
        const el = document.createElement('option');
        el.setAttribute('value', name);
        
        el.setAttribute('data-id', id[index]);
        console.log(el);
        document.getElementById('asteroid-list').appendChild(el);
        console.log(name);
        // return name;
    });
}
