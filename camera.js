var video = document.getElementById("video");

function on_cam_success(stream) //function that will access the camera and transmit  the  video  to  the  camera
{
	video.srcObject = stream;
}
function on_cam_error(err) //for transmitting an error in case we cannot access the camera
{
	alert("error." +err.message);
}

var constraints = { audio: false, video: true }; 
navigator.mediaDevices.getUserMedia(constraints) // method prompts  the  user  for  permission  to  use  a  video input device and an audio input device as the source 
.then(on_cam_success)
.catch(on_cam_error);

function capteaza()
{
	var c = document.getElementById("canvas"); // method  returns  the  element  that  has  the ID attribute with the specified value, that is, the video id
	c.width = video.width;
	c.height = video.height;
	var ctx = c.getContext("2d"); 
	ctx.drawImage(video, 0, 0, 640, 480); //display point starting by setting the x axis and the y axis
}
video.addEventListener("touchstart",capteaza); 
video.addEventListener("mousedown",capteaza);
