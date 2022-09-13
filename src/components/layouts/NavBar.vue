<template>
  <header>
    <nav class="navbar bg-success bg-gradient">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"> NoteBalls </a>
        <div class="d-flex">
          <RouterLink class="navbar-brand" active-class="is-active" to="/">
            Notes
          </RouterLink>
          <RouterLink class="navbar-brand" active-class="is-active" to="/Stats">
            Stats
          </RouterLink>
        </div>
      </div>
    </nav>
  </header>
</template>
