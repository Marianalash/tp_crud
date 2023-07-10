document.getElementById('header').innerHTML = `
<nav class="navbar navbar-expand-sm navbar-light bg-pastel-pink">
  <div class="container">
    <a class="navbar-brand" href="index.html">
      <img src="logo.png" alt="Logo" width="160" height="160" class="d-inline-block align-top">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active text-dark" href="index.html" aria-current="page">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-dark" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">CRUD</a>
          <div class="dropdown-menu" aria-labelledby="dropdownId">
            <a class="dropdown-item" href="productos.html">Productos</a>
            <a class="dropdown-item" href="#">#</a>
          </div>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-dark" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>`;
