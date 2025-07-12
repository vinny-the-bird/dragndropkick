<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
        <img src="\src\assets\home_icon.png" alt="A home icon to get back to the main page.">
      </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">

      <a class="navbar-item">
         About
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Side projects
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            Arknights Pulls Calculator
          </a>

          <!-- <a class="navbar-item">
            Project 2 (to come)
          </a> -->

        </div>

              <!-- <a class="navbar-item">
        Logbook
      </a>

              <a class="navbar-item">
        Contact
      </a> -->

      </div>
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
</script>