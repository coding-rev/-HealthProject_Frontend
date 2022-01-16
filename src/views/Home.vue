<template>
  <div class="page-wrapper">
            <div class="content">
                <div class="row">
                    <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                        <div class="dash-widget">
							<span class="dash-widget-bg1"><i class="fa fa-stethoscope" aria-hidden="true"></i></span>
							<div class="dash-widget-info text-right">
								<h3>{{doctorsCount}}</h3>
								<span class="widget-title1">Doctors <i class="fa fa-check" aria-hidden="true"></i></span>
							</div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                        <div class="dash-widget">
                            <span class="dash-widget-bg2"><i class="fa fa-user-o"></i></span>
                            <div class="dash-widget-info text-right">
                                <h3>{{patientsCount}}</h3>
                                <span class="widget-title2">Patients <i class="fa fa-check" aria-hidden="true"></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                        <div class="dash-widget">
                            <span class="dash-widget-bg3"><i class="fa fa-user-md" aria-hidden="true"></i></span>
                            <div class="dash-widget-info text-right">
                                <h3>0</h3>
                                <span class="widget-title3">Attend <i class="fa fa-check" aria-hidden="true"></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                        <div class="dash-widget">
                            <span class="dash-widget-bg4"><i class="fa fa-heartbeat" aria-hidden="true"></i></span>
                            <div class="dash-widget-info text-right">
                                <h3>0</h3>
                                <span class="widget-title4">Pending <i class="fa fa-check" aria-hidden="true"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
			
				<div class="row">
					<div class="col-12 col-md-6 col-lg-8 col-xl-8">
						<div class="card">
							<div class="card-header">
								<h4 class="card-title d-inline-block">Upcoming Appointments</h4> <a href="appointments.html" class="btn btn-primary float-right">View all</a>
							</div>
							<div class="card-body p-0">
								<div class="table-responsive">
									<table class="table mb-0">
										<thead class="d-none">
											<tr>
												<th>Patient Name</th>
												<th>Doctor Name</th>
												<th>Timing</th>
												<th class="text-right">Status</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td style="min-width: 200px;">
													<a class="avatar" href="profile.html">B</a>
													<h2><a href="profile.html">Bernardo Galaviz <span>New York, USA</span></a></h2>
												</td>                 
												<td>
													<h5 class="time-title p-0">Appointment With</h5>
													<p>Dr. Cristina Groves</p>
												</td>
												<td>
													<h5 class="time-title p-0">Timing</h5>
													<p>7.00 PM</p>
												</td>
												<td class="text-right">
													<a href="appointments.html" class="btn btn-outline-primary take-btn">Take up</a>
												</td>
											</tr>
											<tr>
												<td style="min-width: 200px;">
													<a class="avatar" href="profile.html">B</a>
													<h2><a href="profile.html">Bernardo Galaviz <span>New York, USA</span></a></h2>
												</td>                 
												<td>
													<h5 class="time-title p-0">Appointment With</h5>
													<p>Dr. Cristina Groves</p>
												</td>
												<td>
													<h5 class="time-title p-0">Timing</h5>
													<p>7.00 PM</p>
												</td>
												<td class="text-right">
													<a href="appointments.html" class="btn btn-outline-primary take-btn">Take up</a>
												</td>
											</tr>
											<tr>
												<td style="min-width: 200px;">
													<a class="avatar" href="profile.html">B</a>
													<h2><a href="profile.html">Bernardo Galaviz <span>New York, USA</span></a></h2>
												</td>                 
												<td>
													<h5 class="time-title p-0">Appointment With</h5>
													<p>Dr. Cristina Groves</p>
												</td>
												<td>
													<h5 class="time-title p-0">Timing</h5>
													<p>7.00 PM</p>
												</td>
												<td class="text-right">
													<a href="appointments.html" class="btn btn-outline-primary take-btn">Take up</a>
												</td>
											</tr>
											<tr>
												<td style="min-width: 200px;">
													<a class="avatar" href="profile.html">B</a>
													<h2><a href="profile.html">Bernardo Galaviz <span>New York, USA</span></a></h2>
												</td>                 
												<td>
													<h5 class="time-title p-0">Appointment With</h5>
													<p>Dr. Cristina Groves</p>
												</td>
												<td>
													<h5 class="time-title p-0">Timing</h5>
													<p>7.00 PM</p>
												</td>
												<td class="text-right">
													<a href="appointments.html" class="btn btn-outline-primary take-btn">Take up</a>
												</td>
											</tr>
											<tr>
												<td style="min-width: 200px;">
													<a class="avatar" href="profile.html">B</a>
													<h2><a href="profile.html">Bernardo Galaviz <span>New York, USA</span></a></h2>
												</td>                 
												<td>
													<h5 class="time-title p-0">Appointment With</h5>
													<p>Dr. Cristina Groves</p>
												</td>
												<td>
													<h5 class="time-title p-0">Timing</h5>
													<p>7.00 PM</p>
												</td>
												<td class="text-right">
													<a href="appointments.html" class="btn btn-outline-primary take-btn">Take up</a>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
                    <div class="col-12 col-md-6 col-lg-4 col-xl-4">
                        <div class="card member-panel">
							<div class="card-header bg-white">
								<h4 class="card-title mb-0">Doctors</h4>
							</div>
                            <div class="card-body">
                                <ul class="contact-list">
                                    <!-- Doctor list -->
									<li v-for="doctor in allDoctors" :key="doctor.id">
                                        <div class="contact-cont">
                                            <div class="float-left user-img m-r-10">
                                                <a href="#" title="John Doe"><img src="assets/img/user.jpg" alt="" class="w-40 rounded-circle"><span class="status online"></span></a>
                                            </div>
                                            <div class="contact-info">
                                                <span class="contact-name text-ellipsis">{{doctor.full_name}}</span>
                                                <span class="contact-date">Doctor</span>
                                            </div>
                                        </div>
                                    </li>
                                    <!-- ends here -->
                                </ul>
                            </div>
                            <div class="card-footer text-center bg-white">
                                <router-link to="/doctors" class="text-muted">View all Doctors</router-link>
                            </div>
                        </div>
                    </div>
				</div>
				<div class="row">
					<div class="col-12 col-md-12 col-lg-12 col-xl-12">
						<div class="card">
							<div class="card-header">
								<h4 class="card-title d-inline-block">New Patients </h4> <router-link to="/patients" class="btn btn-primary float-right">View all</router-link>
							</div>
							<div class="card-block">
								<div class="table-responsive">
									<table class="table mb-0 new-patient-table">
										<tbody>
											<!-- Patient list -->
											<tr v-for="patient in allPatients" :key="patient.id">
												<td>
													<img width="28" height="28" class="rounded-circle" src="assets/img/user.jpg" alt=""> 
													<h2>{{patient.full_name}}</h2>
												</td>
												<td>{{patient.email}}</td>
												<td>Patient</td>
												<td><button class="btn btn-primary btn-primary-two float-right">Cancer</button></td>
											</tr>
											<!-- ends here -->
											
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
					
				</div>
            </div>
            
        </div>
</template>

<script>
export default {
    name: "Home",
    mounted(){
        this.$store.dispatch("fetchAllDoctors")
		this.$store.dispatch("fetchAllPatients")
    },
    computed: {
		allDoctors(){
			return this.$store.state.allDoctors.slice(0,5)
		},
		doctorsCount() {
            return this.$store.state.allDoctors.length
        },

		allPatients(){
			return this.$store.state.allPatients.slice(0,5)
		},
		patientsCount(){
			return this.$store.state.allPatients.length
		}
  }
};
</script>