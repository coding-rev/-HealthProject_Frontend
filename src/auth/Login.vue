<template>
    <div class="main-wrapper account-wrapper">
        <div class="account-page">
			<div class="account-center">
				<div class="account-box">
                    <form class="form-signin">
						<div class="account-logo">
                            <a href="#"><img src="assets/img/logo-dark.png" alt=""></a>
                        </div>
                        <div class="form-group">
                            <label>Email Address</label>
                            <input v-model="email" type="text" autofocus="" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input v-model="password" type="password" class="form-control">
                        </div>
                        <div class="form-group text-center">
                            <button v-on:click="login()" type="submit" class="btn btn-primary account-btn">Login</button>
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
function navAndHeaderVisible(){
    document.querySelector("#sidebar").style.display = "block";
    document.querySelector(".header").style.display = "block";
};
export default {
    name: 'login',
    data(){
        return {
            email: '',
            password: ''   
        }
    },
    methods:{
        login(){
            if(this.email =="admin@email.com" && this.password=="admin1234"){
                localStorage.setItem('isLoggedIn', true)
                alert('Login successful')
                navAndHeaderVisible()
                this.$router.push('/')
            }else{
                alert("Invalid credentials")
                return 
            }
        }
    }
}
</script>

<style scope>
#sidebar, .header{
    display: none;
}
</style>
 