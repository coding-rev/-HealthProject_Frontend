<template>
    <div class="main-wrapper  account-wrapper">
        <div class="account-page">
            <div class="account-center">
                <div class="account-box">
                    <form @submit="register" class="form-signin">
						<div class="account-logo">
                            <a href="#"><img src="assets/img/logo-dark.png" alt=""></a>
                        </div>
                        <div class="form-group">
                            <label>Full Name</label>
                            <input v-model="form.full_name" type="text" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label>Email Address</label>
                            <input v-model="form.email" type="email" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input v-model="form.password" type="password" minlength="8" class="form-control" required>
                        </div>
                        <div id="account-type-style">
                            <div class="form-group">
                                <label>Patient Account</label>
                                <input v-model="form.is_patient" type="radio" name="acount-type" id="is_patient" class="form-control">
                                    
                            </div>
                            <div class="form-group">
                                <label>Doctor Account</label>
                                <input v-model="form.is_doctor" type="radio" name="acount-type" id="is_doctor" class="form-control">
                                
                            </div>
                        </div>
                        <div class="form-group checkbox">
                            <label>
                                <input type="checkbox" required> I have read and agree the Terms & Conditions
                            </label>
                        </div>
                        <div class="form-group text-center">
                            <button v-if="isLoading" class="btn btn-primary account-btn" disabled>Processing</button>
                            <button v-else class="btn btn-primary account-btn" type="submit">Signup</button>
                        </div>
                        <div class="text-center login-link">
                            Already have an account? <router-link to="/login">Login</router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'register',
    data(){
        return {
            isLoading:false,
            form: {
                full_name: '',
                email: '',
                is_patient: Boolean(''),
                is_doctor: Boolean(''),
                password: ''   
            }
        }
    },
    
    methods:{
        async register(e) {
          e.preventDefault();
          // Show progress indicator
          this.isLoading=true

          var patientAccount=false
          var doctorAccount=false
          if(this.form.is_patient==false){
              doctorAccount=true
          }else{
              patientAccount=true
          }
          const base_url = await this.$store.state.base_url
          const response = await axios.post(
              base_url+'/register', 
              {
                full_name:this.form.full_name,
                email:this.form.email,
                is_patient:patientAccount,
                is_doctor:doctorAccount,
                password:this.form.password   
                }
              )
              .then((response)=>{
                // Stop progress indicator
                  this.isLoading=false

                  alert(response.data["message"])
                  this.$router.push('/login')
              })
              .catch((error)=>{
                  this.isLoading=false
                  alert("Registration failed. Email already exist")
              })
      },
        
    }
}

</script>
 
<style scope>
#sidebar, .header{
    display: none;
}
#account-type-style{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
#account-type-style input{
    font-size: 20px;
}
</style> 
