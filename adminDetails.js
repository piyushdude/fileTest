const app = require('./server');
const base64ToImage = require('base64-to-image');
const fss = require('fs');

//Video Api's
app.get('/info', (req, res) => {
	console.log("hello Node");
	res.send("We are here for file upload");
}); 
app.get('/', (req, res) => {
	console.log("hello Node");
	res.send("We are here for file upload");
}); 
app.post("/blog", function(req, res) {
    var reqBody = req.body;
    const image = reqBody.image;
	const uploadPth ='./uploads/';
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    var letImageName = year + "" + month + "" + date + "" + hours + "" + minutes + "" + seconds;
    var imgDetails = {'fileName': letImageName, 'type':'png'};
            var img = base64ToImage(image,uploadPth,imgDetails); 
            res.send(img);
 });
  

app.post("/doc", function(req, res) {
	var reqBody = req.body;
	const pdfData = reqBody.pdf;
	let date_ob = new Date();
	  let date = ("0" + date_ob.getDate()).slice(-2);
	  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
	  let year = date_ob.getFullYear();
	  let hours = date_ob.getHours();
	  let minutes = date_ob.getMinutes();
	  let seconds = date_ob.getSeconds();
	  var pdfName = year + "" + month + "" + date + "" + hours + "" + minutes + "" + seconds;
		fss.writeFile("pdf/"+pdfName+".pdf",pdfData,{encoding:'base64'}, function(err){
              if(err){
				  res.send({"error":"error"})
			  }
              else{
					res.send({"done ":"done"});
              }
          });

  
 
});
 
