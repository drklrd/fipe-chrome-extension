document.addEventListener('DOMContentLoaded', ()=>{
	try{
		var socket = io('http://localhost:8080');	
		chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
		   function(tabs){
		   		var url = tabs[0].url;
		      	socket.emit('newUrl',{newUrl:url});
		      	document.getElementById('home-section').innerHTML="New download is queued for resource at <b>" + url + "</b>";
		   }
		);
	}

	catch(err){
		document.getElementById('home-section').innerHTML="Socket server is not running. This extension requires socket server running at http://localhost:8080"
	}
});







