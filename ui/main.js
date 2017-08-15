var button= document.getElementById('button');

button.onclick = function() {
  var request = new XMLhttpRequest();
  
  request.onreadystatechange = function() {
    if(request.readyState === XMLhttpRequest.DONE){
        if(request.status === 200) {
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML= counter.toString();
        }
    }  
  };
  
  request.open('GET','http://vcashwin99.imad.hasura-app.io/counter', true);
  request.send(null);
};