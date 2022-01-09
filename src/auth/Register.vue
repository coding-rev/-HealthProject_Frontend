<template>
    <div class="main-wrapper  account-wrapper">
        <div class="account-page">
            <div class="account-center">
                <div class="account-box">
                    <form class="form-signin">
						<div class="account-logo">
                            <a href="#"><img src="assets/img/logo-dark.png" alt=""></a>
                        </div>
                        <div class="form-group">
                            <label>Full Name</label>
                            <input type="text" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label>Email Address</label>
                            <input type="email" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" required>
                        </div>
                        <div id="account-type-style">
                            <div class="form-group">
                                <label>Patient Account</label>
                                <input type="radio" name="acount-type" id="is_patient" class="form-control">
                                    
                            </div>
                            <div class="form-group">
                                <label>Doctor Account</label>
                                <input type="radio" name="acount-type" id="is_patient" class="form-control">
                                
                            </div>
                        </div>
                        <div class="form-group checkbox">
                            <label>
                                <input type="checkbox" required> I have read and agree the Terms & Conditions
                            </label>
                        </div>
                        <div class="form-group text-center">
                            <button class="btn btn-primary account-btn" type="submit">Signup</button>
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