class Login extends React.Component{

login = ()=>{

var email = this.refs.email.value;
var password = this.refs.password.value;

axios.post('http://cvhunt.com/API/userLogin', {
   email: email,
   password: password,
       
 })
 .then(function (response) {
   console.log(response);
   if (response.data.message) {alert(response.data.message);}
   if (response.data.errorMsg) {alert(response.data.errorMsg);}
   if (response.data.details.token) {localStorage.setItem("token", response.data.details.token);
   window.location.href = '/welcome';
}

   
   
   
 })
 .catch(function (error) {
   console.log(error);
 }); 

}
render(){

return(
<div>
<h1>LOGIN</h1>