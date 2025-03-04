var menuS = 1;
var website = 0;
var web1 = 1;
var web2 = 1;
var web3 = 1;
var web4 = 1;

let webs1 = document.getElementById('web1');
let webs2 = document.getElementById('web2');
let webs3 = document.getElementById('web3');
let webs4 = document.getElementById('web4');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');

function web(input) {
  website = input;
  
  if (website == 1) {
    document.getElementById('webName').innerHTML = "FitnessTrack";
    document.getElementById('description').innerHTML = "Track your workouts like a pro! FitnessTrack lets you log your workout name, sets, reps, weight, and height while automatically calculating your BMI, total workout volume, and intensity. Stay on top of your fitness goals with accurate tracking and insights—your progress starts here!";
    
    webs1.style.cssText = "background-color: whitesmoke; color: black; box-shadow: 0 0 20px rgba(79, 100, 247, 0.9);";
    webs2.style.cssText = "background-color: black; color: whitesmoke;";
    webs3.style.cssText = "background-color: black; color: whitesmoke;";
    webs4.style.cssText = "background-color: black; color: whitesmoke;";
  }
  else if (website == 2) {
    document.getElementById('webName').innerHTML = "Kinematic Equation 1";
    document.getElementById('description').innerHTML = "Need quick and accurate physics calculations? Kinematic Equation is your go-to calculator for solving problems using four different kinematic equations. Whether you're a student or a physics enthusiast, this tool makes motion calculations effortless!";
    webs1.style.cssText = "background-color: black; color: whitesmoke;";
    webs2.style.cssText = "background-color: whitesmoke; color: black; box-shadow: 0 0 20px rgba(79, 100, 247, 0.9);";
    webs3.style.cssText = "background-color: black; color: whitesmoke;";
    webs4.style.cssText = "background-color: black; color: whitesmoke;";
  }
  else if (website == 3) {
    document.getElementById('webName').innerHTML = "Kinematic Equation 2";
    document.getElementById('description').innerHTML = "Introducing the improved version of the kinematics calculator! Kinematic Equation 2 comes with a better interface, enhanced accuracy, and additional features to make solving motion problems even easier. Experience faster and smarter physics calculations now!";
    webs1.style.cssText = "background-color: black; color: whitesmoke;";
    webs2.style.cssText = "background-color: black; color: whitesmoke;";
    webs3.style.cssText = "background-color: whitesmoke; color: black; box-shadow: 0 0 20px rgba(79, 100, 247, 0.9);";
    webs4.style.cssText = "background-color: black; color: whitesmoke;";
  }
  else if (website == 4) {
    document.getElementById('webName').innerHTML = "Projectile Motion";
    document.getElementById('description').innerHTML = "Introducing the Projectile Motion Calculator! Easily calculate projectile trajectories by simply inputting the angle and velocity. Get accurate results for motion analysis, making physics calculations faster and more convenient. Perfect for students, engineers, and enthusiasts.";
    webs1.style.cssText = "background-color: black; color: whitesmoke;";
    webs2.style.cssText = "background-color: black; color: whitesmoke;";
    webs4.style.cssText = "background-color: whitesmoke; color: black; box-shadow: 0 0 20px rgba(79, 100, 247, 0.9);";
    webs3.style.cssText = "background-color: black; color: whitesmoke;";
  }
  right();
  left();
}

function right() {
  if (website == 1) {
    if (web1 < 3) {
      web1++;
      if (web1 == 1) {
        document.getElementById('image').src = "web1/image1.png";
      }
      else if (web1 == 2) {
        document.getElementById('image').src = "web1/image2.png";
      }
      else if (web1 == 3) {
        document.getElementById('image').src = "web1/image3.png";
      }
    }
  }
  else if (website == 2) {
    if (web2 < 3) {
      web2++;
      if (web2 == 1) {
        document.getElementById('image').src = "web2/image1.png";
      }
      else if (web2 == 2) {
        document.getElementById('image').src = "web2/image2.png";
      }
      else if (web2 == 3) {
        document.getElementById('image').src = "web2/image3.png";
      }
    }
  }
  else if (website == 3) {
    if (web3 < 3) {
      web3++;
      if (web3 == 1) {
        document.getElementById('image').src = "web3/image1.png";
      }
      else if (web3 == 2) {
        document.getElementById('image').src = "web3/image2.png";
      }
      else if (web3 == 3) {
        document.getElementById('image').src = "web3/image3.png";
      }
    }
  }
  else if (website == 4) {
    if (web4 < 3) {
      web4++;
      if (web4 == 1) {
        document.getElementById('image').src = "web4/image1.png";
      }
      else if (web4 == 2) {
        document.getElementById('image').src = "web4/image2.png";
      }
      else if (web4 == 3) {
        document.getElementById('image').src = "web4/image3.png";
      }
    }
  }
}
function left() {
  
  if (website == 1) {
    if (web1 > 1) {
      web1--;
      if (web1 == 1) {
        document.getElementById('image').src = "web1/image1.png";
      }
      else if (web1 == 2) {
        document.getElementById('image').src = "web1/image2.png";
      }
      else if (web1 == 3) {
        document.getElementById('image').src = "web1/image3.png";
      }
    }
  }
  else if (website == 2) {
    if (web2 > 1) {
      web2--;
      if (web2 == 1) {
        document.getElementById('image').src = "web2/image1.png";
      }
      else if (web2 == 2) {
        document.getElementById('image').src = "web2/image2.png";
      }
      else if (web2 == 3) {
        document.getElementById('image').src = "web2/image3.png";
      }
    }
  }
  else if (website == 3) {
    if (web3 > 1) {
      web3--;
      if (web3 == 1) {
        document.getElementById('image').src = "web3/image1.png";
      }
      else if (web3 == 2) {
        document.getElementById('image').src = "web3/image2.png";
      }
      else if (web3 == 3) {
        document.getElementById('image').src = "web3/image3.png";
      }
    }
  }
  else if (website == 4) {
    if (web4 > 1) {
      web4--;
      if (web4 == 1) {
        document.getElementById('image').src = "web4/image1.png";
      }
      else if (web4 == 2) {
        document.getElementById('image').src = "web4/image2.png";
      }
      else if (web4 == 3) {
        document.getElementById('image').src = "web4/image3.png";
      }
    }
  }
}

function enterWeb() {
  if (website == 1) {
    window.location.href = "https://terrestriallife.github.io/FitnessTrack/";
  }
  else if (website == 2) {
    window.location.href = "https://terrestriallife.github.io/Kinematic-Equation/";
  }
  else if (website == 3) {
    window.location.href = "https://terrestriallife.github.io/Kinematic-Equation-2/";
  }
  else if (website == 4) {
    window.location.href = "https://terrestriallife.github.io/Projectile-Motion/";
  }
}

function menu(input) {
  menuS = input;
  
  if (menuS == 1) {
    document.getElementById("box4").style.display = "grid";
    document.getElementById("box6").style.display = "none";
    btn1.style.cssText = "background-color: whitesmoke; color: black; box-shadow: 0 0 20px rgba(79, 100, 247, 0.9);";
    btn2.style.cssText = "background-color: black; color: whitesmoke;";
  }
  else if (menuS == 2) {
    document.getElementById("box4").style.display = "none";
    document.getElementById("box6").style.display = "grid";
    btn1.style.cssText = "background-color: black; color: whitesmoke;";
    btn2.style.cssText = "background-color: whitesmoke; color: black; box-shadow: 0 0 20px rgba(79, 100, 247, 0.9);";
  }
}