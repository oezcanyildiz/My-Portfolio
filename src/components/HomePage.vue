<template>
    <div>
      <HeaderApp></HeaderApp>
      <AboutMeApp></AboutMeApp>
      <MyTechApp></MyTechApp>
      <ProjectenApp></ProjectenApp>
      <ContactApp></ContactApp>
      <FooterApp></FooterApp>
  
    </div>
  </template>
  <script>
  import HeaderApp from './HeaderApp.vue';
  import DashboardApp from './DashboardApp.vue';
  import AboutMeApp from './AboutMeApp.vue';
  import MyTechApp from './MyTechApp.vue';
  import ProjectenApp from './ProjectenApp.vue';
  import ContactApp from './ContactApp.vue';
  import FooterApp from './FooterApp.vue';
  
  export default{
    components:{
      HeaderApp,
      DashboardApp,
      AboutMeApp,
      MyTechApp,
      ProjectenApp,
      ContactApp,
      FooterApp
    }
  }
  </script>