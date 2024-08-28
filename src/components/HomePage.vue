<!-- HomePage.vue -->
<template>
    <div class="container">
      <!-- Navigation Bar -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Brand</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About Us</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Our Mission</a></li>
                <li><a class="dropdown-item" href="#">History</a></li>
                <li><a class="dropdown-item" href="#">Leadership</a></li>
                <li><a class="dropdown-item" href="#">Annual Reports</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact Us</a>
            </li>
          </ul>
          <form class="form-inline ml-auto">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          <a class="nav-link" href="#">My Account</a>
        </div>
      </nav>
  
      <!-- Welcome Section -->
      <section class="welcome mt-4">
        <h1>Welcome Page</h1>
      </section>
  
      <!-- Main Services Section -->
      <div class="row mt-4">
        <div class="col-md-6">
          <h3>Health Support</h3>
          <p>Description</p>
        </div>
        <div class="col-md-6">
          <h3>Mental Health</h3>
          <p>Description</p>
        </div>
        <div class="col-md-6">
          <h3>Financial Assistance</h3>
          <p>Description</p>
        </div>
        <div class="col-md-6">
          <h3>Online Learning</h3>
          <p>Description</p>
        </div>
        <div class="col-md-6">
          <h3>Community Activities</h3>
          <p>Description</p>
        </div>
      </div>
  
      <!-- What's New Section -->
      <section class="whats-new mt-4">
        <h3>What's New</h3>
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">News</h5>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">News</h5>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">News</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Contact Us Section -->
      <footer class="contact-us mt-4">
        <h4>Contact Us</h4>
        <p>Phone Number: 11111111</p>
        <a href="#" class="btn btn-link">Social Media Link</a>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
  };
  </script>
  
  <style scoped>

  </style>
  