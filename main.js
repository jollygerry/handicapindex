var addScoreDiv = document.getElementById("add-score-div");
      var viewRoundsDiv = document.getElementById("view-rounds-div");
      var logoDiv = document.getElementById("logo-div");
      var scoreModal = document.getElementById("score-modal");
      var modal2 = document.getElementById("rounds-modal");
      var span = document.getElementById("close");
      var span2 = document.getElementById("close2");
      var main = document.querySelector("#main");

      addScoreDiv.onclick = function(){
        scoreModal.style.display = "block";
      }
      span.onclick = function(){
        scoreModal.style.display = "none";
      }
      window.onclick = function(event){
        if(event.target == main){
           scoreModal.style.display = "none";
          document.getElementById("round-list-div").innerHTML = "<ul id='round-list'></ul>";
           modal2.style.display = "none";
        }
      }
      let rounds = JSON.parse(localStorage.getItem("rounds") || "[]");
      var form = document.getElementById("add-score");
      form.addEventListener("submit", submitScore);
      function submitScore(e) {
        e.preventDefault();
        var course = document.getElementById("course").value;
        var slope = parseInt(document.getElementById("slope").value);
        var rating = parseInt(document.getElementById("rating").value);
        var score = parseInt(document.getElementById("score").value);
        
        function Round(){
        this.course = course;
        this.slope = slope;
        this.rating = rating;
        this.score = score;
      }
       let round = new Round();
       rounds.push(round);
        if (rounds.length <= 20){
          return rounds
        } else if (rounds.length > 20) {
          rounds.shift();
          return rounds
        }
      }
      
       viewRoundsDiv.onclick = function(){
        modal2.style.display = "block";
        for (var i = 0; i < rounds.length; i++){
        var node = document.createElement("LI");
        var textNode = document.createTextNode(rounds[i]["course"] + " - " + rounds[i]["score"]);
        node.appendChild(textNode);
        document.getElementById("round-list").appendChild(node);
      }
      }
      span2.onclick = function(){
        modal2.style.display = "none";
        document.getElementById("round-list-div").innerHTML = "<ul id='round-list'></ul>";
      }
      
      var handicapDisplayed = false;
      logoDiv.onclick = function(){
        if (handicapDisplayed == false){
          //the calculation:
          if (rounds.length < 3) {
            alert("Ya need to submit at least three rounds, buddy ol' pal")
          } else if (rounds.length == 3){
            let diffs = [];
            for (let i = 0; i < rounds.length; i++){
              diffs.push((rounds[i]["score"] - rounds[i]["rating"]) * (113 / rounds[i]["slope"]));
            }
            diffs.sort(function(a, b){
              return a - b;
            })
            logoDiv.innerHTML = Math.round(diffs[0] * 10) / 10 - 2;
          } else if (rounds.length == 4){
            let diffs = [];
            for (let i = 0; i < rounds.length; i++){
              diffs.push((rounds[i]["score"] - rounds[i]["rating"]) * (113 / rounds[i]["slope"]));
            }
            diffs.sort(function(a, b){
              return a - b;
            })
            logoDiv.innerHTML = Math.round(diffs[0] * 10) / 10 - 1;
          } else if (rounds.length == 5){
            let diffs = [];
            for (let i = 0; i < rounds.length; i++){
              diffs.push((rounds[i]["score"] - rounds[i]["rating"]) * (113 / rounds[i]["slope"]));
            }
            diffs.sort(function(a, b){
              return a - b;
            })
            logoDiv.innerHTML = Math.round(diffs[0] * 10) / 10;
          } else if (rounds.length == 6){
            let diffs = [];
            for (let i = 0; i < rounds.length; i++){
              diffs.push((rounds[i]["score"] - rounds[i]["rating"]) * (113 / rounds[i]["slope"]));
            }
            diffs.sort(function(a, b){
              return a - b;
            })
            logoDiv.innerHTML = Math.round(((diffs[0] + diffs[1])/2 - 1) * 10) / 10;
          } else if (rounds.length == 7 || rounds.length == 8){
            let diffs = [];
            for (let i = 0; i < rounds.length; i++){
              diffs.push((rounds[i]["score"] - rounds[i]["rating"]) * (113 / rounds[i]["slope"]));
            }
            diffs.sort(function(a, b){
              return a - b;
            })
            logoDiv.innerHTML = Math.round(((diffs[0] + diffs[1])/2) * 10) / 10;
          } else if (rounds.length >= 9 && rounds.length <= 11){
            let diffs = [];
            for (let i = 0; i < rounds.length; i++){
              diffs.push((rounds[i]["score"] - rounds[i]["rating"]) * (113 / rounds[i]["slope"]));
            }
            diffs.sort(function(a, b){
              return a - b;
            })
            logoDiv.innerHTML = Math.round(((diffs[0] + diffs[1] + diffs[2])/3) * 10) / 10;
          } else if (rounds.length >= 12 && rounds.length <= 14) {
            let diffs = [];
            for (let i = 0; i < rounds.length; i++){
              diffs.push((rounds[i]["score"] - rounds[i]["rating"]) * (113 / rounds[i]["slope"]));
            }
            diffs.sort(function(a, b){
              return a - b;
            })
            logoDiv.innerHTML = Math.round(((diffs[0] + diffs[1] + diffs[2] + diffs[3])/4) * 10) / 10;
          } else if (rounds.length == 15 || rounds.length == 16) {
            let diffs = [];
            for (let i = 0; i < rounds.length; i++){
              diffs.push((rounds[i]["score"] - rounds[i]["rating"]) * (113 / rounds[i]["slope"]));
            }
            diffs.sort(function(a, b){
              return a - b;
            })
            logoDiv.innerHTML = Math.round(((diffs[0] + diffs[1] + diffs[2] + diffs[3] + diffs[4])/5) * 10) / 10;
          } else if (rounds.length == 17 || rounds.length == 18) {
            let diffs = [];
            for (let i = 0; i < rounds.length; i++){
              diffs.push((rounds[i]["score"] - rounds[i]["rating"]) * (113 / rounds[i]["slope"]));
            }
            diffs.sort(function(a, b){
              return a - b;
            })
            logoDiv.innerHTML = Math.round(((diffs[0] + diffs[1] + diffs[2] + diffs[3] + diffs[4] + diffs[5])/6) * 10) / 10;
          } else if (rounds.length == 19){
            let diffs = [];
            for (let i = 0; i < rounds.length; i++){
              diffs.push((rounds[i]["score"] - rounds[i]["rating"]) * (113 / rounds[i]["slope"]));
            }
            diffs.sort(function(a, b){
              return a - b;
            })
            logoDiv.innerHTML = Math.round(((diffs[0] + diffs[1] + diffs[2] + diffs[3] + diffs[4] + diffs[5] + diffs[6])/7) * 10) / 10;
          } else if (rounds.length == 20) {
            let diffs = [];
            for (let i = 0; i < rounds.length; i++){
              diffs.push((rounds[i]["score"] - rounds[i]["rating"]) * (113 / rounds[i]["slope"]));
            }
            diffs.sort(function(a, b){
              return a - b;
            })
            logoDiv.innerHTML = Math.round(((diffs[0] + diffs[1] + diffs[2] + diffs[3] + diffs[4] + diffs[5] + diffs[6] + diffs[7])/8) * 10) / 10;
          }
          logoDiv.style.backgroundImage = "none";
        } else {
          logoDiv.style.backgroundImage = "url('https://yt3.ggpht.com/ytc/AAUvwnhB0AccbMBJcZDHWXhqsGJ37tPq1ZgzQxFtRCB0gQ=s900-c-k-c0x00ffffff-no-rj')";
          logoDiv.innerHTML = ""
        }
        handicapDisplayed = !handicapDisplayed
      }
      
      var reset = document.getElementById("reset");
      reset.onclick = function(){
        rounds = [];
      }
      localStorage.setItem("rounds", JSON.stringify(rounds));