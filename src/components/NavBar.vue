<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">

      <RouterLink class="navbar-item" to="/">
        <img class="image" src="\src\assets\home_icon.png" alt="A home icon to get back to the main page.">
        </RouterLink>


    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
        <RouterLink class="navbar-item" to="/about">About</RouterLink>
        <RouterLink class="navbar-item" to="/apc">Arknights Pulls Calculator</RouterLink>


      <!-- <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Side projects
        </a>

        <div class="navbar-dropdown">
          <RouterLink class="navbar-item" to="/apc">Arknights Pulls Calculator</RouterLink>
        </div>

              <a class="navbar-item">
        Contact
      </a> 

      </div> -->

    </div>

    <!-- <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div> -->
  </div>
</nav>
</template>

<script setup>
import router from '@/router';
</script>