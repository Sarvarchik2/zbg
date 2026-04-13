<template>
  <header class="header glass-nav" :class="{ 'header-scrolled': scrolled, 'menu-active': isMenuOpen }">
    <div class="container header-content">
      <div class="logo">
        <img src="/images/logo.png" alt="BESTSERVICEGROUP MCHJ" class="header-logo" />
      </div>
      
      <nav class="nav" :class="{ 'nav-open': isMenuOpen }">
        <ul class="nav-list">
          <li><a href="#about" @click="isMenuOpen = false">{{ t.navAbout }}</a></li>
          <li><a href="#services" @click="isMenuOpen = false">{{ t.navServices }}</a></li>
          <li><a href="#projects" @click="isMenuOpen = false">{{ t.navProjects }}</a></li>
          <li><a href="#contacts" @click="isMenuOpen = false">{{ t.navContacts }}</a></li>
        </ul>
        <div class="mobile-menu-footer">
          <div class="lang-switcher">
            <span :class="{ 'active': locale === 'RU' }" @click="setLocale('RU')">RU</span>
            <span :class="{ 'active': locale === 'UZ' }" @click="setLocale('UZ')">UZ</span>
          </div>
        </div>
      </nav>

      <div class="header-actions">
        <div class="lang-switcher hide-mobile">
          <span :class="{ 'active': locale === 'RU' }" @click="setLocale('RU')">RU</span>
          <span :class="{ 'active': locale === 'UZ' }" @click="setLocale('UZ')">UZ</span>
        </div>
        <a href="#contacts" class="btn btn-primary btn-sm hide-mobile">Связаться</a>
        
        <button class="burger" @click="isMenuOpen = !isMenuOpen" :class="{ 'active': isMenuOpen }">
          <span class="line-wrap">
            <span class="line"></span>
            <span class="line"></span>
          </span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLocale } from '~/composables/useLocale'
const scrolled = ref(false)
const isMenuOpen = ref(false)
const { locale, setLocale } = useLocale()

const translations = {
  RU: {
    navAbout: 'О нас',
    navServices: 'Услуги',
    navProjects: 'Проекты',
    navContacts: 'Контакты',
  },
  UZ: {
    navAbout: 'Biz haqimizda',
    navServices: 'Xizmatlar',
    navProjects: 'Loyihalar',
    navContacts: 'Kontaktlar',
  }
}

const t = computed(() => translations[locale.value])

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
}

.logo-text {
  font-family: 'Unbounded', sans-serif;
  font-size: 1.5rem;
  font-weight: 900;
  color: #000;
  position: relative;
  z-index: 2001;
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
  transition: var(--transition);
}

.nav-list a:hover {
  color: #000;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 24px;
}

.hide-mobile {
  display: flex;
}

.burger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2000;
  padding: 10px;
}

.line-wrap {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 24px;
}

.line {
  width: 100%;
  height: 2px;
  background: var(--bg-dark);
  transition: var(--transition);
}

.burger.active .line:nth-child(1) {
  transform: translateY(4px) rotate(45deg);
}

.burger.active .line:nth-child(2) {
  transform: translateY(-4px) rotate(-45deg);
}

@media (max-width: 968px) {
  .header {
    padding: 15px 0;
  }
  
  .nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100vh;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 1500;
  }

  .nav-open {
    right: 0;
  }

  .nav-list {
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-bottom: 40px;
  }

  .nav-list a {
    font-size: 1.5rem;
    color: var(--text-primary);
  }

  .mobile-menu-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding-top: 40px;
    border-top: 1px solid rgba(0,0,0,0.05);
    width: 80%;
  }

  .hide-mobile {
    display: none !important;
  }

  .burger {
    display: flex;
  }
  
  .header-logo {
    height: 28px;
  }
}

@media (min-width: 969px) {
  .mobile-menu-footer {
    display: none;
  }
}
</style>
