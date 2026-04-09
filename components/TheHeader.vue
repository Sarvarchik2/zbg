<template>
  <header class="header glass-nav" :class="{ 'header-scrolled': scrolled }">
    <div class="container header-content">
      <div class="logo">
        <span class="logo-text">ZBG</span>
      </div>
      
      <nav class="nav">
        <ul class="nav-list">
          <li><a href="#about">О нас</a></li>
          <li><a href="#services">Услуги</a></li>
          <li><a href="#projects">Проекты</a></li>
          <li><a href="#contacts">Контакты</a></li>
        </ul>
      </nav>

      <div class="header-actions">
        <div class="lang-switcher">
          <span class="active">RU</span>
          <span>UZ</span>
        </div>
        <a href="#contacts" class="btn btn-primary btn-sm">Связаться</a>
      </div>
    </div>
  </header>
</template>

<script setup>
const scrolled = ref(false)

if (process.client) {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 20
  })
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 30px 0;
  transition: var(--transition);
}

.header-scrolled {
  padding: 15px 0;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
}

.logo-text {
  font-family: 'Unbounded', sans-serif;
  font-size: 1.5rem;
  font-weight: 900;
  color: #000;
}

.nav-list {
  display: flex;
  gap: 40px;
}

.nav-list a {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--text-secondary);
  font-family: 'Unbounded', sans-serif;
  letter-spacing: 0.05em;
}

.nav-list a:hover {
  color: #000;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 24px;
}

.lang-switcher {
  display: flex;
  background: #fff;
  padding: 6px 16px;
  border-radius: 999px;
  border: 1px solid rgba(0,0,0,0.1);
  gap: 12px;
  font-size: 0.75rem;
  font-weight: 800;
  font-family: 'Unbounded', sans-serif;
}

.lang-switcher span {
  opacity: 0.4;
  cursor: pointer;
}

.lang-switcher span.active {
  opacity: 1;
}

.btn-sm {
  padding: 10px 24px;
  font-size: 0.75rem;
}

@media (max-width: 968px) {
  .nav {
    display: none;
  }
}
</style>
