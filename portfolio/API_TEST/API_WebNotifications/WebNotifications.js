//popup
//Notification objects have a close() method, Sme browser automatically close them.
//Notification Events - click, error, close, show.
if ('Notification' in window) { 
	if (Notification.permission !== "denied") {//객체안의 permission 속성.
		//If it's okay let's create a notification
		let title = "The Title";
		let options ={
			body: 'Hello from Js!'
		}
		let n = new Notification(title,options);
	}else{
		//notification == denied
		Notification.requestPermission().then(function(result) {
			// body...
			console.log(result); //granted || denied
			//if(notification.permission == '')
		}).catch((error) =>{
			console.log(error);
		});

		


	}
}