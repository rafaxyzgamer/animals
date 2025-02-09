function startClassification() {
  navigator.mediaDevices.getUserMedia({ audio: true });
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/wfB4G3Y3C/model.json', modelReady);
}

function modelReady() {
  classifier.classify(gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
  console.log(results);
  random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'Posso ouvir - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Precisão - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
  
    img = document.getElementById('imagem1') ;
    img1 = document.getElementById('imagem2');
    img2 = document.getElementById('imagem3');
    img3 = document.getElementById('imagem4');

    if (results[0].label == "dog") {
      img.src = 'dog.gif';
      img1.src = 'wolf.jpeg';
      img2.src = 'fox.jpeg';
      img3.src = 'aliens-04.png';
    } else if (results[0].label == "wolf") {
      img.src = 'dog.jpeg';
      img1.src = 'wolf.gif';
      img2.src = 'fox.jpeg';
      img3.src = 'aliens-04.png';
    } else if (results[0].label == "fox") {
      img.src = 'dog.jpeg';
      img1.src = 'wolf.jpeg';
      img2.src = 'fox.gif';
      img3.src = 'aliens-04.png';
    }else{
      img.src = 'dog.jpeg';
      img1.src = 'wolf.jpeg';
      img2.src = 'fox.jpeg';
      img3.src = 'aliens-04.gif';
    }
  }
}
