Vue.component('app-footer', {
  template: `
  <footer>
    <a href="https://www.linkedin.com/in/florian-g%C3%A9rard-b3446aba/">
      <i class="fab fa-linkedin-in fa-lg"></i>
    </a>
    <a href="https://github.com/kingdomflo">
      <i class="fab fa-github fa-lg"></i>
    </a>
    <a href="https://gerardweb.eu/cv/CvGerardFlorianDeveloper.pdf">
      <i class="fas fa-address-card fa-lg"></i>
    </a>
    <a href="mailto:florian@gerardweb.eu">
      <i class="fas fa-envelope-open fa-lg"></i>
    </a>
  </footer>
  `
});

new Vue({
  el: '#app-footer',
})