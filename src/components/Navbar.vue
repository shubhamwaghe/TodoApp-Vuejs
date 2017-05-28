<template>

<div class="container-fluid py-0 bg-primary">
  <b-navbar toggleable type="inverse" variant="primary" class="container py-0">

    <b-nav-toggle target="nav_collapse"></b-nav-toggle>

    <b-link class="navbar-brand" to="#">
      <img alt="Brand" src="../assets/logo.png" class="logo">
      <span>Todo Application</span>
    </b-link>

    <b-collapse is-nav id="nav_collapse">
      
      <b-nav is-nav-bar>
        <b-nav-item>
          <router-link to="/" class="nav-link"><icon class="nav-icon" name="home"></icon> All TODOs</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/new" class="nav-link"> <icon class="nav-icon" name="plus"></icon>  New TODO </router-link>
        </b-nav-item>
      </b-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
}
</script>

<style>
.logo {
  max-height: 30px;
}
</style>
