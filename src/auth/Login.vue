<template>
    <div class="main-wrapper account-wrapper">
        <div class="account-page">
			<div class="account-center">
				<div class="account-box">
                    <form @submit="login" class="form-signin">
						<div class="account-logo">
                            <a href="#"><img src="assets/img/logo-dark.png" alt=""></a>
                        </div>
                        <div class="form-group">
                            <label>Email Address</label>
                            <input v-model="form.email" type="email" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input v-model="form.password" type="password" minlength="8" class="form-control">
                        </div>
                        <div class="form-group text-center">
                            <button type="submit" class="btn btn-primary account-btn">Login</button>
                        </div>
                        <div class="text-center register-link">
                            Don’t have an account? <router-link to="/register">Register Now</router-link>
                        </div>
                    </form>
                </div>
			</div>
        </div>
    </div>
</template>
 
<script>
import axios from 'axios'
// const base_url = 'http://127.0.0.1:8000'
const base_url = 'https://healthprojectapi.herokuapp.com'

function navAndHeaderVisible(){
    document.querySelector("#sidebar").style.display = "block";
    document.querySelector(".header").style.display = "block";
};
export default {
    name: 'login',
    data(){
        return {
            form: {
                email: '',
                password: ''   
            }
        }
    },
    
    methods:{
        async login(e) {
          e.preventDefault();
          const response = await axios.post(base_url+'/login', this.form);
          if(response.status==200){
            localStorage.setItem('isLoggedIn', true)
            localStorage.setItem('userId', response.data["userId"])
            localStorage.setItem('userToken', response.data["token"])
            alert('Login successful')
            navAndHeaderVisible()
            this.$router.push('/')
          }else{
            alert("Email or password invalid");
          }
      },
        
    }
}
</script>

<style scope>
#sidebar, .header{
    display: none;
}
</style>
 