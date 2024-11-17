<template>
    <section class="hero-section">
      <div class="hero-content">
      </div>
    </section>
  </template>
  
  <script>
  export default {
    methods: {
      exploreNow() {
        alert('Explore Now button clicked!');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Hero Section Styles */
  .hero-section {
    position: relative;
    width: 100%;
    height: 100vh; /* Full viewport height */
    background: url('https://items.templately.com/item-d34fcdded1e93d1c42f5283981a464f2/runway-hero-section-for-gutenberg-banner-6WRqMR4.jpg') no-repeat center center/cover;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
  }
  
  .hero-content {
    background: rgba(0, 0, 0, 0.5); /* Add a translucent overlay for text visibility */
    padding: 2rem;
    border-radius: 10px;
  }
  
  .hero-content h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .hero-content p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .hero-content button {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .hero-content button:hover {
    background-color: #0056b3;
  }
  </style>
  