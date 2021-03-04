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
                //document.getElementById("output").innerHTML = obj[0].id;
                document.getElementById("genre1").innerHTML = obj[0].genre;
                document.getElementById("genre2").innerHTML = obj[1].genre;
                document.getElementById("title1").innerHTML = obj[0].title;
                document.getElementById("title2").innerHTML = obj[1].title;
                document.getElementById("user1").innerHTML = obj[0].user.username;
                document.getElementById("user2").innerHTML = obj[1].user.username;
                document.getElementById("img1").src=obj[0].artwork_url;
                document.getElementById("img2").src=obj[0].artwork_url;
                

                
                
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
                document.getElementById("test").innerHTML = obj["item"]["name"] + " " + obj["item"]["artists"][0]["name"];
                get_genre(obj["item"]["name"] + " " + obj["item"]["artists"][0]["name"]);
            }
        }
    }
    
    request.open("GET", url);
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Content-Type", "application/json");
    // get token https://developer.spotify.com/console/get-users-currently-playing-track/?market=RU&additional_types=
    request.setRequestHeader("Authorization", "Bearer BQD7UCIimBdcfUTjrlkGcJi9E-LRdzCTQ2ka6R1pUL6q63ZGiT8wIsL2431B7rEZSf4IqfPXQRMbQAARlKDrToOUN2MEMrGcqU_BZAum0SFoDQ9t55rFNYJRGApIIfkmHGiMMoRC4Ysbo8FugfV_YgDq1a4h2W-HVQtv-Ug");

    
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
                document.getElementById("genre1").innerHTML = obj[0].genre;
                document.getElementById("genre2").innerHTML = obj[1].genre;
                document.getElementById("title1").innerHTML = obj[0].title;
                document.getElementById("title2").innerHTML = obj[1].title;
                document.getElementById("user1").innerHTML = obj[0].user.username;
                document.getElementById("user2").innerHTML = obj[1].user.username;
                document.getElementById("img1").src=obj[0].artwork_url;
                document.getElementById("img2").src=obj[0].artwork_url;
                
                
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
