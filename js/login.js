var corect_user='chinh' ;
var corect_pass='1';

var corect_admin='admin' ;
var corect_pass='1';

var inputUsername=document.getElementById("username");
var inputPassword=document.getElementById("password");

var formlogin=document.getElementById("form__login")
if(formlogin.attachEvent) {
  formlogin.attachEvent('submit',onFormSubmit)
}else{
  formlogin.addEventListener('submit',onFormSubmit)
}
function onFormSubmit(e){
  var username=inputUsername.value;
  var password=inputPassword.value;
  
  if(username==corect_user && password==corect_pass ){
    alert('Đăng nhập thành công');
  }else if(username=="" || password == ""){
    alert('Điền đầy đủ thông tin')
  }
  else{
    alert('Tài khoản không chính xác')
  }
  
  
}