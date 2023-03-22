video = ""
status = ""
objts = []

function preload(){
    video = createVideo("video.mp4")
    video.hide()
}

function setup(){
    canvas = createCanvas(400,300)
    canvas.center()

}

function draw(){
    image(video,0,0,400,300)
    if(status != ""){
        objdetector.detect(video,gotResult)
        for(var i=0; i<objts.length; i++){
            document.getElementById("status").innerHTML = "objetos detectados."
            document.getElementById("nobj").innerHTML = "numeros de objetos detectados: " + objts.length
            fill("#FFFFFF");
            getPercent = floor(objts[i].confidence * 100)
            text(objts[1].label + " " + getPercent + "%",objts[1].x + 15,objts[1].y + 15)
            noFill()
            stroke("#FF0000")
            react(objts[1].x,objts[1].y,objts[1].objts[1].width,objts[1].height )
        }
    }
}

function gotResult(error,results){
    if(error){
        console.error(error)
    }
    console.log(results)
    objts = results
}

function start(){
    objdetector = ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("status").innerHTML = "status: dectando objetos"   
}

function modelLoaded(){
    console.log("modelo carregado")
    status = true;
    video.loop()
    video.speed(1)
    video.volume(0.5)
}