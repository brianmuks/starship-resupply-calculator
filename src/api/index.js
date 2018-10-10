const API_URL = 'https://swapi.co/api/';


export const getStarShips = () =>{

 return new  Promise((resolve, reject)=> {



const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       //document.getElementById("demo").innerHTML = xhttp.responseText;

        const responseJson = JSON.parse(xhttp.responseText)
        // console.log('StartShoips:',responseJson.results[0]);

        resolve(responseJson);

    }else{
       // reject(false);
    }
};

xhttp.open("GET", `${API_URL}starships/`, true);
xhttp.send();

 })


}