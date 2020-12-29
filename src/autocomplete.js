export const asteroidList = function(arr, id) {
    const names = arr.map( e => e.name);

    names.forEach( (name, index) => {
                const el = document.createElement('option');
                el.setAttribute('value', name);
                el.setAttribute('data-id', id[index]);
                document.getElementById('asteroid-list').appendChild(el);
            });
}