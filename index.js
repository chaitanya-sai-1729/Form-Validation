function validate(){
  var username = document.getElementById('username').value
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value
  var cpassword = document.getElementById('cpassword').value

  check_username(username)
  check_email(email)
  check_password(password)
  check_cpassword(cpassword,password)
}

function check_username(username){

  if(username.length > 7){
    document.getElementById('username').classList.add('success')
    document.getElementById('username').classList.replace('error','success')
    document.getElementById('username_error').innerHTML = ""
  }
  else {
    document.getElementById('username').classList.add('error')
    document.getElementById('username_error').innerHTML = "Enter atleast 8 characters."
  }
}
function check_email(email){
  if(email.length > 7 && email.includes('@gmail.com')){
    document.getElementById('email').classList.add('success')
    document.getElementById('email').classList.replace('error','success')
    document.getElementById('email_error').innerHTML = ""
  }
  else {
    document.getElementById('email').classList.add('error')
    document.getElementById('email_error').innerHTML = "Enter atleast 8 characters and should contain @gmail.com"
  }

}
function check_password(password){
  if(password.length > 7 && password.includes(".")){
    document.getElementById('password').classList.add('success')
    document.getElementById('password').classList.replace('error','success')
    document.getElementById('password_error').innerHTML = ""
  }
  else {
    document.getElementById('password').classList.add('error')
    document.getElementById('password_error').innerHTML = "Password must contain atleast 8 characters with one ."
  }
}
function check_cpassword(cpassword , password){
  if(cpassword == password){
    document.getElementById('cpassword').classList.add('success')
    document.getElementById('cpassword').classList.replace('error','success')
    document.getElementById('cpassword_error').innerHTML = ""
  }
  else {
    document.getElementById('cpassword').classList.add('error')
    document.getElementById('cpassword_error').innerHTML = "Password didn't matched ."
  }
}
