// idea for toggle active from https://github.com/cielavenir/ctouch/issues/1
var active = true;

chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
		
        alert(details.url);
        document.getElementById("testurl").innerHTML = details.url;
		return;
	},
	{
		urls: ["*://open.spotify.com/*"],
		types: ["main_frame", "sub_frame"]//, "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
	},
	["blocking"]
);

