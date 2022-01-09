<template>
  <!-- main nav -->
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
export default{
  data(){
    return {
       
    }
  },
  computed:{
    currentRouteName(){
    return this.$route.path;
  }
  },
}
</script>
