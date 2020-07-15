<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body, html {
  height: 100%;
  margin: 0;
}
.bg{
  background-color:white;
  }
  
  
/*Styles the top bar where it says "Bullet Journal"*/
.h {
  background-image: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77827752-693b-4a5b-9c50-be492a42cfa7/d2ij2zr-3081ac33-61bf-4826-97c7-33b9e257f5b9.jpg/v1/fill/w_800,h_625,q_75,strp/avatar_movie_leather_texture_by_alexesn_d2ij2zr-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02MjUiLCJwYXRoIjoiXC9mXC83NzgyNzc1Mi02OTNiLTRhNWItOWM1MC1iZTQ5MmE0MmNmYTdcL2QyaWoyenItMzA4MWFjMzMtNjFiZi00ODI2LTk3YzctMzNiOWUyNTdmNWI5LmpwZyIsIndpZHRoIjoiPD04MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.4_ulmERXwu-bTClhRSYYnfuSyyv7pp3hF8FtzuMqPew");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
  text-align:center;
  font-family: Courier New;
  color: black;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 0;
  border-style: solid;
  border-width: 2px;
  border-color: #333;
  }
  
  /*styles the other two bars below that are place-holders until real bars are made*/
.htool{
  background-color:LightSlateGrey;
  margin: 0;
  line-height: 50px;
  padding-top:0;
  border-style: solid;
  border-width: 2px;
  border-color: #333;
  text-align: center;
  }
  
/* for the text box area*/
.container {
  position: relative;
}
/*for the text box area... this may need to be changed in some way in order to allow the user to save/load later on*/
.text-block {
  margin: 30px;
  background-color: #ffffff;
  /*the black border around the outside of the paper*/
  border: 1px solid black;
  /* The image used which is */
  background-image: url("https://i.pinimg.com/originals/af/09/5e/af095e23981716dadfbd1516768978ff.jpg");
  /* Full height */
  height: 1200px;
  width: 1200px; 
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.text-block p{
  margin:5%;
  font-weight: bold;
  color: #000000;
}
  
/*Add a black background color to the top of the navigation */
/*The Navigation Bar at the top that says "Home" etc */  
.topnav{
  background-color: #000000;
  overflow:hidden;
  border-style: solid;
  border-width: 2px;
  border-color: #333;
  border-top-width: 0px;
}
/*Style the links inside the navigation bar */
.topnav a{
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  font-family: Courier New;
  
}
/*Change the color of the links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black; 
}
/* Add a color to the active/current link */
.topnav a.active{
  background-color: #0E5862;
  color: white;
}
/*part of the text area that allows the textbox itself to be transparent while also allowing the text to remain black*/
.textareaa {
  background-color: rgba(255, 255, 255, 0.5);
  position: relative;
  float:left;
  width: 1200px;
  height: 1200px;
}
/*Messing around with trying to do a toolbar where the user can bold, underline, italicize, change the indent, add a bullet point etc */
body {margin:0;}
/*iconbar base*/
.icon-bar {
  width: 100%;
  background-color: #000000;
  overflow: auto;
}
/*iconbar button specifications*/
.icon-bar a {
  float: left;
  width: 50px;
  text-align: center;
  padding: 12px 0;
  transition: all 0.3s ease;
  color: white;
  font-size: 36px;
}
.icon-bar a:hover {
  background-color: #61707D;
}
.active {
  background-color: #0E5862;
}
  
</style>
</head>

<body>

<h1 class="h">Bullet Journal</h1>

<div class="topnav">
  <a class="active" href="#home">Home</a>

</div>

<script src="https://kit.fontawesome.com/4856c08f5f.js" crossorigin="anonymous"></script>

<div class="icon-bar">
  <a href='#'><i class="fas fa-save"></i></a> 
  <a href="#"><i class="fas fa-list"></i>
  <a href="#"><i class="fas fa-list-ol"></i></a> 
  <a href="#"><i class="fas fa-list-ul"></i></a>
  <a href="#">
    <i class="far fa-plus-square" onclick="createbullet()">

    </i></a>
  <a href="#"><i class="fas fa-paste"></i>
    

</div>


<div class="bg">
  <div class="container">
    <div class="text-block">
    </div>
  </div>
</div>

<script>
  function createbullet() {
    /* Vars used for bullet point placement on the image in textblock */
    var x = 25;
    var y = 45;
    var y_increase = 40;
    let node = document.createElement("LI");
    let textnode = document.createTextNode("Testing");
    node.appendChild(textnode);
    document.querySelector('.text-block').appendChild(node);
    
  }
</script>
</body>


</html>
