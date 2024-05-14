Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
})
camera=document.getElementById("camera")
Webcam.attach("#camera")
function capture(){
Webcam.snap(function(data){
    document.getElementById("result").innerHTML="<img id=picture src="+data+">"
})
}
function identify(){
    
}
console.log(ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/jsXcXYQux/model.json",modelLoaded)
function modelLoaded(){
    console.log("model is loaded");
}