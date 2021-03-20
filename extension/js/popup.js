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

getAccesToken();
function getAccesToken(){
    var url = "https://open.spotify.com/get_access_token";

    var request = new XMLHttpRequest();
    var strr;
    function change_info() {
        if(request.readyState == 4) {
            var status = request.status;
            if(status == 200) {
                const obj = JSON.parse(request.responseText);
                //document.getElementById("test").innerHTML = obj["item"]["name"] + " " + obj["item"]["artists"][0]["name"];
                //get_genre(obj["item"]["artists"][0]["name"] + " " + obj["item"]["name"]);
                strr = "Bearer " + obj["accessToken"]
                console.log(strr)
                //strr = "Bearer BQDBGUtY_0T1Vlz1zrCGQrM5TyTJgvAd64YAHUyn_2M5qYjPEY7YR0nhlTLi_iNe-KKZX-AAtDOWpQige7LU_1AlzdD5cJn2BAZYFOhgzQnOpzFGdPDZzW-7-_LwrRTaw7gUfviNznlquBobRNu05PKv4ocwS69T_1S0FwiQ68tQU10CpisID9opQVJtoepy6bHWiFjemlFVIeXaPPeSM68c9xBT08pb79Mz91v4iJnnRxZcR5E5SPetn5Ddp7G8mAW9EtcrcPp2jqe5Vb-rdnsLQiFlTODKtQ2N56TQdC_5zlCW-ioVAv-o";
                send_current(strr);
                
            }
        }
    }
    
    request.open("GET", url);
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Content-Type", "application/json");

    request.onreadystatechange = change_info;
    request.send();
    
    
}



function send_current(token){
    var token = token;
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



    request.setRequestHeader("Authorization", token);
    

    
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

function takeScreenshot(){
    console.log("screen");
    html2canvas(document.getElementById("screen")).then(function(canvas) {
    
        var my_screen = canvas;

        document.getElementById("result").appendChild(my_screen);

    });
}


var printButton = document.search.print;
printButton.addEventListener("click", printForm);
//printButton.addEventListener('keydown', printForm);

var screenshot_page = document.search.screenshot_page;
screenshot_page.addEventListener("click", takeScreenshot);