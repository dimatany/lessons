<template>
  <header id="header">
    <div class="header-content clearfix">
      <a class="logo" href="#"><img src="../assets/images/logo.png" alt=""></a>
      <nav class="navigation" role="navigation">
        <ul class="primary-nav">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <!--
          <li><a href="#features">Features</a></li>
          <li><a href="#works">Works</a></li>
          <li><a href="#teams">Our Team</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#download">Download</a></li>
          -->
        </ul>
      </nav>
      <a href="#" class="nav-toggle">Menu<span></span></a>
    </div><!-- header content -->
  </header><!-- header -->
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header',
};
</script>

<style scoped>

</style>