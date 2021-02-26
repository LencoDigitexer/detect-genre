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





var printButton = document.search.print;
printButton.addEventListener("click", printForm);
//printButton.addEventListener('keydown', printForm);