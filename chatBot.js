const coll=document.querySelector('.collapsible');
coll.addEventListener('click',function(){
    const content=document.querySelector('.content')
    content.classList.toggle("active");
})

// $(".collapsible").click(function(){
//   $(".content").toggle(1000);
// });

function msgTime(){
      var date= new Date();
      var hours=date.getHours();
      var minutes=date.getMinutes();
      if(hours<10){
        hours="0"+hours;
      }
      if(minutes<10){
        minutes="0"+minutes;
      }
      let time= hours+":"+minutes;
      console.log(time);
      return time;
}

function firstMessage(){
  let firstMessage="How it's going?";
  var element=document.getElementById('botstarterMessage');
  element.innerHTML= firstMessage;
  let time=msgTime();
  var timespanbot=document.createElement('span');
  timespanbot.classList.add('timespanbot');
  timespanbot.innerHTML=time;
  element.appendChild(timespanbot);
}
setTimeout(()=>{
  firstMessage();
},1000)

function showResponse(userText){
  var showbotResponse= document.createElement('p');
  showbotResponse.classList.add('botText');
  var response=getBotResponse(userText);
  showbotResponse.innerHTML=response;
  console.log(userText);
  document.querySelector('.chatbox').appendChild(showbotResponse);

  let time=msgTime();
  var timespanbot=document.createElement('span');
  timespanbot.classList.add('timespanbot');
  timespanbot.innerHTML=time;
  showbotResponse.appendChild(timespanbot);

}

function getResponse(){
    var userText= $('#textInput').val();
    // $('#textInput').val()="";
    var showUserText= document.createElement('p');
    showUserText.classList.add('userText');
    showUserText.innerHTML=userText;
    console.log(userText);
    document.querySelector('.chatbox').appendChild(showUserText);
    let time=msgTime();
    var timespanuser=document.createElement('span');
    timespanuser.classList.add('timespanuser');
    timespanuser.innerHTML=time;
    showUserText.appendChild(timespanuser);

    setTimeout(()=>{
      showResponse(userText);
    },1000);

}

function sendButton(){
  getResponse();
  $('#textInput').val("");
}


function heartClicked(){
  var showbotResponse= document.createElement('p');
  showbotResponse.classList.add('userText');
  showbotResponse.innerHTML='<i id="chat-icon"style="color: crimson"class="fa fa-fw fa-heart"></i>';
  document.querySelector('.chatbox').appendChild(showbotResponse);

  let time=msgTime();
  var timespanbot=document.createElement('span');
  timespanbot.classList.add('timespanbot');
  timespanbot.innerHTML=time;
  showbotResponse.appendChild(timespanbot);
}















// RESPONSES 

function getBotResponse(userText){
  // SIMPLE TALKS
 
  if(userText=="hello"||userText=="hii"||userText=="Hello"||userText=="Hii"){
    return "hello there!!";
  }
  else if(userText=="bye"||userText=="Bye"){
    return "Bye... Talk to you later!";
  }
  else if(userText=="how are you")
  {
    return "I m Fine !! ... uu ??"
  }
  else if(userText=="i am fine"){
    return "Good."
  }
}
