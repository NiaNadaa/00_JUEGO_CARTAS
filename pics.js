let array = [];

fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyB9TYXV7DLNqhyIEhZ_1XvxqQ4h2YCRmrY&cx=5e12362cfd3971e91&q=birds`).then(function obtener(res){
        return res.json();
    }).then(function mostrar(data){
        console.log(data);


for(i=0;i<=8;i++){
    array += array.push(data[i].items.pagemap.cse_image.src);
    console.log(arrayPics);
}