<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand">
        <img alt="Elite Seller" src="/src/assets/img/logo.svg">
      </a>
      <button aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"
              data-bs-target="#navbarNav" data-bs-toggle="collapse" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="navbarNav" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item dropdown">
            <a id="navbarDropdownMenuLinkTools" aria-expanded="false" class="nav-link dropdown-toggle"
               data-bs-toggle="dropdown"
               href="#" role="button">
              Features
            </a>
            <ul aria-labelledby="navbarDropdownMenuLinkTools" class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a id="navbarDropdownMenuLinkResources" aria-expanded="false" class="nav-link dropdown-toggle"
               data-bs-toggle="dropdown"
               href="#" role="button">
              Resources
            </a>
            <ul aria-labelledby="navbarDropdownMenuLinkResources" class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <button class="btn btn-login" type="button">Danger</button>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Log In</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
