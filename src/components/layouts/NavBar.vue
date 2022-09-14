<template>
  <header>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">NoteBalls</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="navbar-brand" active-class="is-active" to="/">
                Notes
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink
                class="navbar-brand"
                active-class="is-active"
                to="/Stats"
              >
                Stats
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style>
@media (max-width: 1023) {
  .navbar-collapse {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
