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
                            <input v-model="form.email" type="email" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input v-model="form.password" type="password" minlength="8" class="form-control" required>
                        </div>
                        <div class="form-group text-center">
                            <button v-if="isLoading" disabled class="btn btn-primary account-btn">Processing</button>
                            <button v-else type="submit" class="btn btn-primary account-btn">Login</button>
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

function navAndHeaderVisible(){
    document.querySelector("#sidebar").style.display = "block";
    document.querySelector(".header").style.display = "block";
};
export default {
    name: 'login',
    data(){
        return {
            isLoading:false,
            form: {
                email: '',
                password: ''   
            }
        }
    },
    
    methods:{
        async login(e) {
          e.preventDefault();
          //Show progress indicator
          this.isLoading=true

          const base_url = await this.$store.state.base_url
          const response = await axios.post(base_url+'/login', this.form)
            .then((response)=>{
                localStorage.setItem('isLoggedIn', true)
                localStorage.setItem('userId', response.data["userId"])
                localStorage.setItem('userToken', response.data["token"])
                // Stop progress indicator
                this.isLoading=false
                
                alert('Login successful')
                navAndHeaderVisible()
                this.$router.push('/')
            })
            .catch((error)=>{
                this.isLoading=false
                alert("Invalid credentials provided")
            })
      },
        
    }
}
</script>

<style scope>
#sidebar, .header{
    display: none;
}
</style>
 