var Perro = 0;
var Gato = 0;

RuDeF = 0;

function SSound()
{
    navigator.mediaDevices.getUserMedia({ audio: true });
    clasify = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/UQnIc8coV/model.json", modelLoaded);
}

function modelLoaded()
{
    clasify.classify(gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);

        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("Escucho").innerHTML =  "Yo Escucho: " + results[0].label;
        document.getElementById("Precision").innerHTML =  "Estoy Seguro Un " +(results[0].confidence*100).toFixed(2) + "%"

        document.getElementById("Escucho").style.color = "rgb("+ rnr + "," + rng + "," + rnb +")";
        document.getElementById("Precision").style.color = "rgb("+ rnr + "," + rng + "," + rnb +")";

        img = document.getElementById("img");

        if(results[0].label == "Gatos")
        {
            img.src = "gato.gif"
        }
        else if(results[0].label == "Perros")
        {
            img.src = "Perro.gif"
        }
        else
        {
            img.src = "Escucho.gif"
        }
    }
}

