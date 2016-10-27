fipeDownload = function(link) {
	var url = link.srcUrl;
	var jsElm = document.createElement("script");
	// set the type attribute
	jsElm.type = "text/javascript";
	// make the script element load file
	jsElm.src = "http://localhost:8080/socket.io/socket.io.js";
	// finally insert the element to the body element in order to load the script
	document.body.appendChild(jsElm);
	// var scripts = document.getElementsByTagName('script');
	// var url = "http://localhost:8080/socket.io/socket.io.js";
	// var loaded = false;
	// for (var i = scripts.length; i--;) {
	//    if (scripts[i].src === url) {
	//    		loaded = true;
	//    }
	// }
	// if(!loaded){
	// 	document.write('<script src="http://localhost:8080/socket.io/socket.io.js"></script>');
	// }

	try {

		var socket = io('http://localhost:8080');
		socket.emit('newUrl', {
			newUrl: url
		});

	} catch (err) {
		alert("Socket server is not running. This extension requires socket server running at http://localhost:8080");
	}


};

chrome.contextMenus.create({
	title: "Download in Fipe",
	contexts: ["link", "image", "video", "audio"],
	onclick: fipeDownload
});