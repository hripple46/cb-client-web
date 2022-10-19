fetch("/data/water.json")
    .then(function(response){
        return response.json();
    })
    .then(function(sources){
        addSourcesToPage(sources);
    });




function addSourcesToPage(sources) {
    const list = document.getElementById("WaterSources");

    for (let i = 0 ; i < sources.length ; i++ ){
        let li = createListItem(sources[i]);
        list.appendChild(li);
    }
}



function createListItem(data) {
    const listItem = document.createElement("li");
    listItem.innerHTML = data.name;

    let paragraph = document.createElement("p");
    paragraph.innerHTML = "Discharge (cubic feet per second): " + data.discharge;

    listItem.appendChild(paragraph);

    return listItem;
}