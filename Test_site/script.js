var button_press=function(){
  var parent=document.body;
  var child=document.getElementById('wrapper')
  parent.removeChild(child)
  var count=0;
  var myVar=setInterval(function(){
    if(count===200){
      var clear=clearinverval(myVar)
    }
    else{
      count++;
      var image=document.createElement("img");
      var att=document.createAttribute("src");
      var att2=document.createAttribute("id");
      att.value="wat.jpg";
      att2.value="wat2";
      image.setAttributeNode(att)
      image.setAttributeNode(att2)
      var element = document.body;
      element.appendChild(image);
    }
  },200);
};
var button_press2=function(){
  var colorNumber=0;
  var backgroundColor=document.getElementById('body1');
  var bob=setInterval (function (){
    if (colorNumber===0) {
      colorNumber++;
      backgroundColor.style.backgroundColor="blue";
    }
    else {
      colorNumber--;
      backgroundColor.style.backgroundColor="#99b7e8";
    }
  }, 170);
}
var button_press3=function(){
  var audio = new Audio('Turn_down_for_what.mp3');
  audio.play();
};
