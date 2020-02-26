var materials = ["Hydrogen","Helium", "Lithium", "Berrylium"];

var materialslength1 = materials.map(function(material){
    console.log(material.length)
    return material.length;
    console.log(materialslength1) 
});

var materialslength2 = materials.map((material)=>{
    console.log(material.length)
    return material.length;
    console.log(materialslength2) 
});

var materialslength3 = materials.map(material=> material.length);
console.log(materialslength3)