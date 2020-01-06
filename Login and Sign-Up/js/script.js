
/* start login and signup */
function login(logpage){
    'use strict';

    logpage.style.minWidth = window.innerWidth + "px";
    logpage.style.minHeight = window.innerHeight + "px";
    
    if(window.innerHeight <= 600){
      logpage.style.minHeight = "600px";
      document.querySelector('.window .card').style.top = "0px";
    }
    
    window.onresize=function(){
      'use strict';
      logpage.style.minWidth = window.innerWidth + "px";
      logpage.style.minHeight = window.innerHeight + "px";
        
      if(window.innerHeight <= 600){
        logpage.style.minHeight = "600px";
        document.querySelector('.window .card').style.top = "0px";

      }else{
        document.querySelector('.window .card').style.top = "calc(50% - 300px)";
      }
    };


  var icon = document.getElementsByTagName('i');
  var n;
  for(n=0 ; n<icon.length ; n++){
    icon[n].onclick = function(){
        'use strict';
      this.previousElementSibling.focus();
    };
}
  
  var rotate_signup = document.getElementById('rotate-signup');
  rotate_signup.onclick = function(){
    'use strict';
    document.querySelector('.container-login').style.transform = "rotateY(180deg)";
  };
  
  var rotate_login = document.getElementById('rotate-login');
  rotate_login.onclick = function(){
    'use strict';
    document.querySelector('.container-login').style.transform = "rotateY(0deg)";
  };
}


function placeholder(){
  'use strict';
  var holder = document.querySelectorAll('input[placeholder]');
  var i;
  for (i=0 ; i<holder.length ; i++){
    holder[i].onfocus = function(){
      
      var attDATA_TEXT = document.createAttribute('data-text');
      attDATA_TEXT.value = this.getAttribute('placeholder');
      this.setAttributeNode(attDATA_TEXT);
      this.setAttribute('placeholder' , '');
    };
    holder[i].onblur = function(){
      this.setAttribute('placeholder' , this.getAttribute('data-text'));
      this.setAttribute('data-text' , '');
    };
  }
}

function setOptions(select,l,r){
  'use strict';
  var x;
  while(l<=r){
    if(l<10)
        x= "0" + l;
    else
        x= l;
        
    var element = document.createElement('option'),
        txt    = document.createTextNode(x.toString());
        
    var val = document.createAttribute('value');
    val.value=l.toString();
    
    element.appendChild(txt);
    element.setAttributeNode(val);
    
    
    select.appendChild(element);
    
    ++l;
  }

}



/* end login and signup   page  */


window.onload=function(){
    'use strict';
    window.scrollTo(0,0);
    placeholder();
    
    var date=new Date();
  
    var log_page = document.getElementById('login-page');
    if(log_page !== null){
    
        login(log_page);
        
        var month = document.querySelector('select[name="month"]');
        var day   = document.querySelector('select[name="day"]');
        var year  = document.querySelector('select[name="year"]');
        
        setOptions(month,1,12);
        setOptions(day,1,31);
        setOptions(year,date.getFullYear()-80,date.getFullYear());
    
    
    }
  
  
  
  


  
  
  
  
}





