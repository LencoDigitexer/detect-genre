function printForm(e) {
    // получаем значение поля key
    var keyBox = document.search.key;
    var val = keyBox.value;

    //импорт функции
    var request = new XMLHttpRequest();

    //вместо div блока output вывести значение ответа
    function reqReadyStateChange() {
        if(request.readyState == 4) {
            var status = request.status;
            if(status == 200) {
                //document.getElementById("output").innerHTML = request.responseText;
                const obj = JSON.parse(request.responseText);
                var adds = 0;
                for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
                    if(obj[i].genre!=""){
                        document.getElementById("genre" + Number(i+1)).innerHTML = obj[i].genre;
                    } else {
                        adds++;
                        document.getElementById("genre" + Number(i+1)).innerHTML = obj[Number(i+adds)].genre;
                    }
                }
                document.getElementById("title").innerHTML = obj[0].title + " - " + obj[0].user.username;
                //document.getElementById("user").innerHTML = obj[0].user.username;
                
                document.getElementById('imgs').style.background = "url("+obj[0].artwork_url+")"
                    
                

                
                
            }
        }
    }
    // строка с параметрами для отправки
    var body = val;
    request.open("GET", "https://api.soundcloud.com/tracks?client_id=a25e51780f7f86af0afa91f241d091f8&q=" + body);
    request.onreadystatechange = reqReadyStateChange;
    request.send();

    
    
}

send_current();

function send_current(){
    
    var url = "https://api.spotify.com/v1/me/player/currently-playing?market=RU";

    var request = new XMLHttpRequest();
    
    function change_info() {
        if(request.readyState == 4) {
            var status = request.status;
            if(status == 200) {
                const obj = JSON.parse(request.responseText);
                //document.getElementById("test").innerHTML = obj["item"]["name"] + " " + obj["item"]["artists"][0]["name"];
                get_genre(obj["item"]["artists"][0]["name"] + " " + obj["item"]["name"]);
            }
        }
    }
    
    request.open("GET", url);
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Content-Type", "application/json");
    // get token https://developer.spotify.com/console/get-users-currently-playing-track/?market=RU&additional_types=
    request.setRequestHeader("Authorization", "Bearer BQDEiazIUy0zQon-NIqm4J40Sn7ZPSHTlDqqgEDBDFai-TVf6XTwRg4rBt0tLqEcoJr-L1zkjGA9psdxnNe7yPpkFUBLNCh2xP0QyOmNJtFw5toISMbj9GLuJBGB1Kb_8tYzwTWKQ39-wTyCG2sSb4O2vax9WjJbvfc15m5_cgUkDPV82nob1HN-bWcHaOFmJLAdINVN9TS1S0ic-nkgDg0Yl99-26tOWn9_Vw2I_pH0Xk8hlk9EZsEHpkvcwLJ-AW-eRMiLUFONC_8PH8kBYQBYs9YrpQ");

    
    request.onreadystatechange = change_info;
    request.send();

    
}

function get_genre(track_name) {
    // получаем значение поля key
    //var keyBox = document.search.key;
    var val = track_name

    //импорт функции
    var request = new XMLHttpRequest();

    //вместо div блока output вывести значение ответа
    function reqReadyStateChange() {
        if(request.readyState == 4) {
            var status = request.status;
            if(status == 200) {
                //document.getElementById("output").innerHTML = request.responseText;
                const obj = JSON.parse(request.responseText);
                //document.getElementById("output").innerHTML = obj[0].id;

                var adds = 0;
                for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
                    if(obj[i].genre!=""){
                        document.getElementById("genre" + Number(i+1)).innerHTML = obj[i].genre;
                    } else {
                        adds++;
                        document.getElementById("genre" + Number(i+1)).innerHTML = obj[Number(i+adds)].genre;
                    }
                }

                
                document.getElementById("title").innerHTML = obj[0].title + " - " + obj[0].user.username;
                //document.getElementById("user").innerHTML = obj[0].user.username;
                
                document.getElementById('imgs').style.background = "url("+obj[0].artwork_url+")"
                
                
            }
        }
    }
    // строка с параметрами для отправки
    var body = val;
    request.open("GET", "https://api.soundcloud.com/tracks?client_id=a25e51780f7f86af0afa91f241d091f8&q=" + body);
    request.onreadystatechange = reqReadyStateChange;
    request.send();

    
    
}




var printButton = document.search.print;
printButton.addEventListener("click", printForm);
//printButton.addEventListener('keydown', printForm);
