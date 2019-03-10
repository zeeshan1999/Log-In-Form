function checkFields(nowCheck){
    var mail = document.getElementById(nowCheck).value;
    if(mail===""){
        document.getElementById('error').innerHTML = "Wrong Email and Password"
    }
    else{
        document.getElementById('success').innerHTML = "You are Successfully Loged In"
        
    }
    setTimeout(function(){
      document.getElementById('error').innerHTML = "";           
    },2000);
    setTimeout(function(){
        document.getElementById('success').innerHTML = "";
    },2000);
    return false;
}
function clear(){
    var z = document.getElementById('nameField').value = "";
}
function clear1(){
    var t = document.getElementById('passField').value = "";
}