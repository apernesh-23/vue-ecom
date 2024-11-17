<template>
    <nav class="navbar">
      <div class="logo">
        <span>ShopEase</span>
      </div>
      <ul class="nav-links" :class="{ active: isMenuOpen }">
        <li><a href="#home">Home</a></li>
        <li><a href="#shop">Shop</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div class="menu-toggle" @click="toggleMenu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Navbar Styles */
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #333;
    color: white;
  }
  
  .logo {
    display: flex;
    align-items: center;
  }
  
  .logo img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  
  .nav-links {
    list-style: none;
    display: flex;
    gap: 1.5rem;
  }
  
  .nav-links a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
  }
  
  .menu-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
  }
  
  .menu-toggle .bar {
    height: 3px;
    width: 25px;
    background-color: white;
    margin: 3px 0;
  }
  
  @media (max-width: 768px) {
    .nav-links {
      flex-direction: column;
      position: absolute;
      top: 60px;
      right: 0;
      background: #444;
      width: 200px;
      height: auto;
      padding: 1rem;
      border-radius: 10px;
      display: none;
    }
  
    .nav-links.active {
      display: flex;
    }
  
    .menu-toggle {
      display: flex;
    }
  }
  </style>
  