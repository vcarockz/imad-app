console.log('Loaded!');

var button = document.getElementById('button');
var count= document.getElementById('count');
count=0;
button.onClick= function(){
  count=count+1;
};
    