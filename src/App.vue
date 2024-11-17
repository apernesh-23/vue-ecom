<template>
  <div id="app">
    <NavBar />
    <HeroSection />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import HeroSection from './components/HeroSection.vue';

export default {
  components: {
    NavBar,
    HeroSection,
  },
};
</script>
