<template>
<!-- Header -->
  <div class="header">
			<div class="header-left">
				<a href="#" class="logo">
					<!-- <img src="" width="35" height="35" alt="">  -->
          <span>HealthApp</span>
				</a>
			</div>
			<a id="toggle_btn" href="javascript:void(0);"><i class="fa fa-bars"></i></a>
            <a id="mobile_btn" class="mobile_btn float-left" href="#sidebar"><i class="fa fa-bars"></i></a>
            <ul class="nav user-menu float-right">
                <li class="nav-item dropdown d-none d-sm-block">
                    <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown"><i class="fa fa-bell-o"></i> <span class="badge badge-pill bg-danger float-right">3</span></a>
                    <div class="dropdown-menu notifications">
                        <div class="topnav-dropdown-header">
                            <span>Notifications</span>
                        </div>
                        <div class="drop-scroll">
                            <ul class="notification-list">
                                <li class="notification-message">
                                    <a href="#">
                                        <div class="media">
											<span class="avatar">
												<img alt="John Doe" src="assets/img/user.jpg" class="img-fluid">
											</span>
											<div class="media-body">
												<p class="noti-details"><span class="noti-title">John Doe</span> added new task <span class="noti-title">Patient appointment booking</span></p>
												<p class="noti-time"><span class="notification-time">4 mins ago</span></p>
											</div>
                                        </div>
                                    </a>
                                </li>
                                <li class="notification-message">
                                    <a href="#">
                                        <div class="media">
											<span class="avatar">V</span>
											<div class="media-body">
												<p class="noti-details"><span class="noti-title">Tarah Shropshire</span> changed the task name <span class="noti-title">Appointment booking with payment gateway</span></p>
												<p class="noti-time"><span class="notification-time">6 mins ago</span></p>
											</div>
                                        </div>
                                    </a>
                                </li>
                                <li class="notification-message">
                                    <a href="#">
                                        <div class="media">
											<span class="avatar">L</span>
											<div class="media-body">
												<p class="noti-details"><span class="noti-title">Misty Tison</span> added <span class="noti-title">Domenic Houston</span> and <span class="noti-title">Claire Mapes</span> to project <span class="noti-title">Doctor available module</span></p>
												<p class="noti-time"><span class="notification-time">8 mins ago</span></p>
											</div>
                                        </div>
                                    </a>
                                </li>
                                <li class="notification-message">
                                    <a href="#">
                                        <div class="media">
											<span class="avatar">G</span>
											<div class="media-body">
												<p class="noti-details"><span class="noti-title">Rolland Webber</span> completed task <span class="noti-title">Patient and Doctor video conferencing</span></p>
												<p class="noti-time"><span class="notification-time">12 mins ago</span></p>
											</div>
                                        </div>
                                    </a>
                                </li>
                                <li class="notification-message">
                                    <a href="#">
                                        <div class="media">
											<span class="avatar">V</span>
											<div class="media-body">
												<p class="noti-details"><span class="noti-title">Bernardo Galaviz</span> added new task <span class="noti-title">Private chat module</span></p>
												<p class="noti-time"><span class="notification-time">2 days ago</span></p>
											</div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="topnav-dropdown-footer">
                            <a href="#">View all Notifications</a>
                        </div>
                    </div>
                </li>
                <li class="nav-item dropdown d-none d-sm-block">
                    <a href="javascript:void(0);" id="open_msg_box" class="hasnotifications nav-link"><i class="fa fa-comment-o"></i> <span class="badge badge-pill bg-danger float-right">8</span></a>
                </li>
                <li class="nav-item dropdown has-arrow">
                    <a href="#" class="dropdown-toggle nav-link user-link" data-toggle="dropdown">
                        <span class="user-img">
							<img class="rounded-circle" src="assets/img/user.jpg" width="24" alt="Admin">
							<span class="status online"></span>
						</span>
						<span>Admin</span>
                    </a>
					<div class="dropdown-menu">
						<a class="dropdown-item" href="#">My Profile</a>
						<a class="dropdown-item" href="#">Edit Profile</a>
						<a class="dropdown-item" href="#">Settings</a>
						<a class="dropdown-item" v-on:click="logout()" href="#">Logout</a>
					</div>
                </li>
            </ul>
            <div class="dropdown mobile-user-menu float-right">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="#">My Profile</a>
                    <a class="dropdown-item" href="#">Edit Profile</a>
                    <a class="dropdown-item" href="#">Settings</a>
                    <a class="dropdown-item" v-on:click="logout()" href="#">Logout</a>
                </div>
            </div>
        </div>
  <!-- main nav - Sidebars -->
  <div class="sidebar" id="sidebar">
            <div class="sidebar-inner slimscroll">
                <!-- Dynamic Vue Navigation -->
                <div id="sidebar-menu" class="sidebar-menu">
                    <ul>
                        <li class="menu-title">Main</li>

                        <li :class="{'active' : currentRouteName == '/'}">
                          <router-link to='/'>
                            <i class="fa fa-dashboard"></i> <span>Dashboard</span>
                          </router-link>
                        </li>

                        <li :class="{'active' : currentRouteName == '/doctors'}">
                          <router-link to='/doctors'>
                            <i class="fa fa-user-md"></i> <span>Doctors</span>
                          </router-link>
                        </li>

                        <li :class="{'active' : currentRouteName == '/patients'}">
                          <router-link to='/patients'>
                            <i class="fa fa-wheelchair"></i> <span>Patients</span>
                          </router-link>
                        </li>
                        
                        <li :class="{'active' : currentRouteName == '/appointments'}">
                          <router-link to='/appointments'>
                            <i class="fa fa-calendar"></i> <span>Appointments</span>
                          </router-link>
                        </li>

                        <li :class="{'active' : currentRouteName == '/doctor-schedule'}">
                          <router-link to='/doctor-schedule'>
                            <i class="fa fa-calendar-check-o"></i> <span>Doctor Schedule</span>
                          </router-link>
                        </li>

                        <li :class="{'active' : currentRouteName == '/settings'}">
                          <router-link to='/settings'>
                            <i class="fa fa-cog"></i> <span>Settings</span>
                          </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
  <!-- router view -->
  <router-view/>
    
</template>

<script>
function navAndHeaderInvisible(){
    document.querySelector("#sidebar").style.display = "none";
    document.querySelector(".header").style.display = "none";
};
export default{
  data(){
    return {
       
    }
  },
  methods: {
    logout(){
      localStorage.removeItem('isLoggedIn')
      alert("You've been logged out")
      navAndHeaderInvisible()
      this.$route.push('/login')
    }
  },
  computed:{
    currentRouteName(){
    return this.$route.path;
  }
  },
}
</script>
