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
                chrome.tabs.query({active : true, currentWindow: true}, function (tab) {
                    var activeTabUrl = tab.url;
                    document.getElementById("tabsurl").innerHTML = tab;
                    console.log(activeTabUrl);
                });

                chrome.storage.local.set({'token': 'abc123'}, function() {
                    console.log('Settings saved');
                });
                chrome.storage.local.set(['token'], function(items) {
                    message('Settings retrieved', items);
                    document.getElementById("test")  = items;
                });
                
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
                
            }
        }
    }
    
    request.open("GET", url);
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Authorization", "Bearer BQDfHuCO4qTzk0LHxpMBCi7n2D3yAV2aOqCm_0g6mwJP_WlkytWkftrwOq4TjGtm0NbmuQxE8PZfT_JO3oKpz3ib4fAFjeR7T_f2in4n7_UYsIFrRVNcIx2RsChKpI4bXqodTtpbpHIW88e1TROwwczQ6cQ6j73xPg1gToI");

    
    request.onreadystatechange = change_info;
    request.send();
    
}



var printButton = document.search.print;
printButton.addEventListener("click", printForm);
//printButton.addEventListener('keydown', printForm);
