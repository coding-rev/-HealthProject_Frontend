<template>
   <div class="page-wrapper">
            <div class="content">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                        <h4 v-if="is_doctor" class="page-title">Edit Doctor</h4>
                        <h4 v-else class="page-title">Edit Patient</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                        <form @submit="updateInfo">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label>Full Name<span class="text-danger">*</span></label>
                                        <input v-model="form.full_name" :placeholder="form.full_name" class="form-control" type="text" required>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label>Email <span class="text-danger">*</span></label>
                                        <input v-model="form.email" :placeholder="form.email" class="form-control" type="email" required>
                                    </div>
                                </div>
                                
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label>Phone </label>
                                        <input v-model="form.phone" :placeholder="form.phone" class="form-control" type="text">
                                    </div>
                                </div>
                                <div class="col-sm-6">
									<div class="form-group">
										<label>Your avatar:</label>
										<div class="profile-upload">
											<div class="upload-img">
												<img v-if="image" :src="base_url + image">
                                            </div>
											<div class="upload-input">
												<input @change="updateImage" accept="image/*" type="file" class="form-control">
											</div>
										</div>
									</div>
                                </div>
                            </div>
							<div class="m-t-20 text-center">
                                <button v-if="isLoading" disabled class="btn btn-primary submit-btn">PROCESSING</button>
                                <button v-else type="submit" class="btn btn-primary submit-btn">SAVE</button>
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
    name: "EditUser",
    props: ["id"],
    data(){
        return{
           base_url: this.$store.state.base_url,
           UserId: this.$route.params.id,
           isLoading:false,
           form:{
               full_name: '',
               email: '',
               phone: ''
           },
           image: '',
           is_doctor:false         
        }
    },
    computed:{
        async getDoctor(){
            try{
                const doc               = await this.$store.state.allDoctors.find(doctor => doctor.id == this.UserId)
                this.form.full_name     = doc.full_name
                this.form.email         = doc.email
                this.image              = doc.profile_image
                this.form.phone         = doc.phone
                this.is_doctor=true
            }catch{
                const doc               = await this.$store.state.allPatients.find(patient => patient.id == this.UserId)  
                this.form.full_name     = doc.full_name
                this.form.email         = doc.email 
                this.image              = doc.profile_image
                this.form.phone         = doc.phone
                this.is_doctor=false    
            }
        }
    },
    methods:{
        async updateInfo(e) {
          e.preventDefault();
          //Show progress indicator
          this.isLoading=true
          const response = await axios.put(this.base_url+'/edit/delete/user/'+this.UserId, this.form)
            .then((response)=>{
                this.isLoading=false
                alert(response.data["message"])
                if(this.is_doctor){
                    this.$router.push('/doctors')
                }else{
                    this.$router.push('/patients')
                }
            })
            .catch((error)=>{
                this.isLoading=false
                alert("Inputs invalid. Please check and try again")
            })
      },
       async updateImage(e){
           e.preventDefault()
           this.isLoading=true
           
           let getImage = e.target.files[0]
           let formData     = new FormData()
           
           formData.append('profile_image', getImage)
           axios.put(this.base_url+'/edit-profile-pic/'+this.UserId, formData,{
               headers:{
                   'content-type': 'multipart/form-data'
               }
           })
           this.isLoading=false
       }
        
    },
    async mounted(){
        await this.getDoctor()
        
    }
    
};
</script>
