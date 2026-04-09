<template>
  <main>
    <TheHeader />

    <!-- Hero Slider Concept -->
    <section class="hero">
      <div v-for="(slide, index) in heroSlides" :key="index" 
           class="hero-slide" 
           v-show="currentSlide === index">
        <div class="hero-bg" :style="{ backgroundImage: `url(${slide.image})` }"></div>
        <div class="hero-overlay"></div>
        <div class="container hero-content">
          <h1 class="hero-title" data-aos>{{ slide.title }}</h1>
          <p class="hero-description" data-aos>{{ slide.description }}</p>
          <div class="hero-btns" data-aos>
            <a href="#contacts" class="btn btn-primary">Обсудить проект <span class="arrow">→</span></a>
            <a href="#services" class="btn btn-outline-white">Наши услуги</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Top Features (Benefits) -->
    <section class="benefits-sec">
      <div class="container grid-3">
        <div class="benefit-card card-rounded" data-aos>
          <div class="benefit-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77z"/></svg>
          </div>
          <h3 class="benefit-title">Лучшая инженерия</h3>
          <p class="benefit-text">Хорошая коммуникация имеет решающее значение в строительной отрасли. Мы остаемся открытыми и прозрачными.</p>
        </div>
        <div class="benefit-card card-rounded" data-aos :style="{ transitionDelay: '0.1s' }">
          <div class="benefit-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
          </div>
          <h3 class="benefit-title">Умные технологии</h3>
          <p class="benefit-text">Мы внедряем современные интеллектуальные системы для автоматизации и повышения безопасности вашего объекта.</p>
        </div>
        <div class="benefit-card card-rounded" data-aos :style="{ transitionDelay: '0.2s' }">
          <div class="benefit-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v8L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45L14 10V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></svg>
          </div>
          <h3 class="benefit-title">Химические исследования</h3>
          <p class="benefit-text">Уважаемая строительная компания обычно имеет команду опытных специалистов для контроля качества материалов.</p>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
      <div class="container grid-2 about-layout">
        <div class="about-image-wrapper" data-aos>
          <img src="/images/hero.png" alt="ZBG Projects" class="img-rounded main-about-img" />
          <div class="experience-badge card-rounded">
            <span class="exp-num">25+</span>
            <span class="exp-text">Лет опыта</span>
          </div>
        </div>
        <div class="about-content" data-aos>
          <h2 class="section-title">О компании ZBG</h2>
          <p class="section-subtitle">Мировые стандарты инжиниринга в Узбекистане.</p>
          <p class="about-text">Многие современные строительные компании уделяют особое внимание экологически безопасным методам строительства, внедряя экологически чистые материалы и энергоэффективные системы.</p>
          
          <div class="about-highlights">
            <div class="highlight-item">
              <div class="h-icon">✓</div>
              <div class="h-info">
                <h4 class="h-title">Услуги по всему миру</h4>
                <p>Мы предоставляем прозрачные сметы расходов и строго придерживаемся согласованных сроков.</p>
              </div>
            </div>
            <div class="highlight-item">
              <div class="h-icon">✓</div>
              <div class="h-info">
                <h4 class="h-title">Победитель номинаций</h4>
                <p>Надежная строительная компания умеет эффективно управлять бюджетами и сложными проектами.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Counters Section -->
    <section class="counters bg-dark text-white">
      <div class="container grid-4 counters-grid">
        <div class="counter-item" data-aos>
          <div class="c-num">2K+</div>
          <div class="c-label">Дело завершено</div>
        </div>
        <div class="counter-item" data-aos>
          <div class="c-num">3K+</div>
          <div class="c-label">Члены команды</div>
        </div>
        <div class="counter-item" data-aos>
          <div class="c-num">1.9K+</div>
          <div class="c-label">Клиенты довольны</div>
        </div>
        <div class="counter-item" data-aos>
          <div class="c-num">1K+</div>
          <div class="c-label">Награды Победы</div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title" data-aos>Реализуйте проекты своей мечты</h2>
          <p class="section-subtitle" data-aos>Комплексный подход к строительству и инженерным системам.</p>
        </div>
        
        <div class="grid-3 services-grid">
          <div v-for="(service, index) in services" :key="index" 
               class="service-card card-rounded" data-aos :style="{ transitionDelay: (index * 0.1) + 's' }">
            <div class="service-icon"><span v-html="service.icon"></span></div>
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-text">{{ service.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section id="projects" class="portfolio">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title" data-aos>Наша последняя работа</h2>
          <p class="section-subtitle" data-aos>Портфолио завершенных объектов промышленного и жилого назначения.</p>
        </div>
        
        <div class="portfolio-grid">
          <div v-for="(project, index) in portfolio" :key="index" 
               class="portfolio-item" data-aos>
            <img :src="project.image" :alt="project.title" class="portfolio-img" />
            <div class="portfolio-content">
              <span class="portfolio-tag">{{ project.category }}</span>
              <h3 class="portfolio-title">{{ project.title }}</h3>
              <p class="portfolio-desc">{{ project.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section id="team" class="team-sec">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title" data-aos>Профессиональная команда</h2>
          <p class="section-subtitle" data-aos>Эксперты, стоящие за успехом каждого проекта.</p>
        </div>
        
        <div class="team-grid">
          <div v-for="(member, index) in team" :key="index" class="team-card" data-aos :style="{ transitionDelay: (index * 0.1) + 's' }">
            <div class="team-image">
              <img :src="`https://ui-avatars.com/api/?name=${member.name}&background=141414&color=fff&size=512&bold=true`" :alt="member.name" />
            </div>
            <h3 class="team-name">{{ member.name }}</h3>
            <p class="team-role">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-banner-wrapper">
      <div class="container">
        <div class="cta-banner card-rounded bg-dark text-white" data-aos>
          <div class="cta-grid grid-2">
            <div class="cta-text">
              <h2 class="cta-title">Есть предстоящие проекты? <br />Давайте поговорим!</h2>
              <p class="cta-desc text-dim">Все больше дизайнеров интерьера уделяют внимание устойчивым и экологичным методам проектирования.</p>
            </div>
            <div class="cta-actions">
              <div class="cta-contact">
                <span class="label">Звоните в любое время:</span>
                <span class="value">+998 99 560 01 01</span>
              </div>
              <a href="#contacts" class="btn btn-accent">Связаться с нами</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials">
      <div class="container">
        <div class="testimonial-card" data-aos>
          <div class="quote-icon">“</div>
          <p class="testimonial-text">ZBG выбирают лучшие материалы и технологии, которые создают целостный и визуально приятный вид, отражая индивидуальность и вкус клиента. Это новый уровень инжиниринга.</p>
          <div class="testimonial-footer">
            <h4 class="testimonial-author">Michel Carlos</h4>
            <p class="testimonial-role">Инвестор</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners -->
    <section class="partners">
      <div class="container">
        <div class="partners-grid" data-aos>
          <div class="partner-logo">CONSTRUCT</div>
          <div class="partner-logo">ENGINEER</div>
          <div class="partner-logo">BUILD.TECH</div>
          <div class="partner-logo">GLOBAL.S</div>
          <div class="partner-logo">MODERN.V</div>
        </div>
      </div>
    </section>

    <!-- Blog Section -->
    <section id="blog" class="blog-sec">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title" data-aos>Новости и блог</h2>
        </div>
        <div class="grid-3 blog-grid">
          <div v-for="i in 3" :key="i" class="blog-item card-rounded bg-white" data-aos :style="{ transitionDelay: (i * 0.1) + 's' }">
            <div class="blog-meta">
              <span class="blog-date">22 января 2025</span>
              <span class="blog-cat">Construction</span>
            </div>
            <h3 class="blog-title">Команда зверей вокруг и как мы заставляем ее работать</h3>
            <a href="#" class="blog-link">Читать далее →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contacts" class="contacts-sec">
      <div class="container">
        <div class="contact-card card-rounded bg-dark text-white">
          <div class="contact-grid grid-2">
            <div class="contact-info" data-aos>
              <h2 class="contact-title text-white">ОБСУДИМ ВАШ <br />ПРОЕКТ?</h2>
              <div class="contact-details">
                <div class="detail-item">
                  <span class="detail-label">Телефон</span>
                  <a href="tel:+998995600101" class="detail-value">+998 99 560 01 01</a>
                </div>
                <div class="detail-item">
                  <span class="detail-label">Электронная почта</span>
                  <a href="mailto:zaminbiggroup@mail.ru" class="detail-value">zaminbiggroup@mail.ru</a>
                </div>
              </div>
            </div>
            <div class="contact-form-side" data-aos>
              <form class="contact-form">
                <div class="form-row">
                  <input type="text" placeholder="Имя" class="input-modern" />
                  <input type="email" placeholder="Email" class="input-modern" />
                </div>
                <textarea placeholder="Сообщение" rows="4" class="input-modern"></textarea>
                <button type="submit" class="btn btn-accent">ОТПРАВИТЬ <span class="arrow">→</span></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-grid grid-4">
          <div class="footer-col info-col">
            <div class="footer-logo">ZBG</div>
            <p class="footer-about">Мы воплощаем в жизнь самые смелые инженерные и архитектурные решения, обеспечивая безопасность и комфорт вашего будущего.</p>
            <div class="footer-social">
              <a href="#" class="social-link">FB</a>
              <a href="#" class="social-link">IG</a>
              <a href="#" class="social-link">TG</a>
            </div>
          </div>
          
          <div class="footer-col">
            <h4 class="footer-h">Навигация</h4>
            <ul class="footer-links">
              <li><a href="#about">О нас</a></li>
              <li><a href="#services">Услуги</a></li>
              <li><a href="#projects">Проекты</a></li>
              <li><a href="#contacts">Контакты</a></li>
            </ul>
          </div>
          
          <div class="footer-col">
            <h4 class="footer-h">Услуги</h4>
            <ul class="footer-links">
              <li>Пожарная безопасность</li>
              <li>Вентиляция и ОВКВ</li>
              <li>Общее строительство</li>
              <li>Дизайн интерьера</li>
            </ul>
          </div>
          
          <div class="footer-col newsletter-col">
            <h4 class="footer-h">Информационный бюллетень</h4>
            <p class="newsletter-text">Подпишитесь, чтобы получать обновления и новости о нас.</p>
            <form class="newsletter-form">
              <input type="email" placeholder="Ваш Email" class="newsletter-input" />
              <button type="submit" class="newsletter-btn">→</button>
            </form>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p class="copyright">&copy; 2026 Zafar Business Group. Все права защищены.</p>
          <div class="footer-meta">
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const currentSlide = ref(0)
const heroSlides = [
  {
    title: 'Вложите в пожарные системы и защитите своё Здание',
    description: 'Инвестируйте в системы пожарной безопасности, чтобы предотвратить угрозу пожара. Это поможет защитить ваш труд и инвестиции.',
    image: '/images/hero.png'
  },
  {
    title: 'Профессиональное движение воздуха в вашем Здании',
    description: 'Создайте здоровую среду с нашими системами кондиционирования и вентиляции. Чистый и свежий воздух — наша забота.',
    image: '/images/hero.png'
  },
  {
    title: 'Сантехника и электрика — долговечная Гарантия',
    description: 'Обеспечиваем безопасную и эффективную работу инженерных систем с вниманием к каждой детали.',
    image: '/images/hero.png'
  }
]

const services = [
  {
    title: 'Общее строительство',
    text: 'Хорошая коммуникация имеет решающее значение. Полный цикл возведения зданий любой сложности.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/></svg>'
  },
  {
    title: 'Архитектура и дизайн',
    text: 'Некоторые компании специализируются на определенных проектах, мы же создаем уникальные решения.',
    icon: '📐'
  },
  {
    title: 'Дизайн интерьера',
    text: 'Искусство и наука улучшения внутреннего пространства для комфорта и эстетики вашего бренда.',
    icon: '🏠'
  },
  {
    title: 'Пожарная безопасность',
    text: 'Профессиональное проектирование и установка систем предотвращения и защиты от огня.',
    icon: '🔥'
  },
  {
    title: 'ОВКВ и Вентиляция',
    text: 'Создание идеального микроклимата с интеллектуальным контролем воздушных потоков.',
    icon: '🌬️'
  },
  {
    title: 'Реновация зданий',
    text: 'Мы поддерживаем открытость в процессе обновления и восстановления существующих объектов.',
    icon: '🛠️'
  }
]

const portfolio = [
  {
    title: 'Промышленный дизайн',
    category: 'Промышленный',
    desc: 'Строительство объектов для производства и переработки.',
    image: '/images/hero.png'
  },
  {
    title: 'Современная вилла',
    category: 'Жилой',
    desc: 'Создание премиальных жилых пространств с уникальной архитектурой.',
    image: '/images/hero.png'
  }
]

const team = [
  { name: 'Jo\'rayev Bahodir', role: 'Генеральный директор' },
  { name: 'Kurbanov Jalol', role: 'Главный инженер' },
  { name: 'Abdurozokov Husniddin', role: 'Архитектор' },
  { name: 'Qahhorov Muhammadbobur', role: 'Технический эксперт' }
]

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el))

  // Simple slide intervals
  setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % heroSlides.length
  }, 5000)
})
</script>

<style scoped>
.hero {
  position: relative;
  height: 90vh;
  background: var(--bg-dark);
}

.hero-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0.3;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, var(--bg-dark) 0%, transparent 100%);
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  color: #fff;
  max-width: 900px;
}

.hero-title {
  font-size: 4rem;
  line-height: 1.1;
  margin-bottom: 24px;
}

.hero-description {
  font-size: 1.25rem;
  opacity: 0.8;
  margin-bottom: 48px;
}

.hero-btns {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.btn-outline-white {
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255,255,255,0.2);
}

.benefits-sec {
  margin-top: -60px;
  position: relative;
  z-index: 30;
}

.benefit-card {
  background: #fff;
  padding: 48px;
  box-shadow: 0 40px 100px rgba(0,0,0,0.05);
}

.benefit-icon {
  font-size: 2.5rem;
  margin-bottom: 24px;
}

.benefit-title {
  font-family: 'Unbounded', sans-serif;
  font-size: 1.25rem;
  margin-bottom: 16px;
}

.benefit-text {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.experience-badge {
  position: absolute;
  bottom: 40px;
  right: -40px;
  background: var(--bg-dark);
  color: #fff;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.exp-num {
  font-family: 'Unbounded', sans-serif;
  font-size: 3rem;
  font-weight: 900;
  color: var(--accent-blue);
  line-height: 1;
}

.exp-text {
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.1em;
}

.about-image {
  position: relative;
}

.about-highlights {
  display: grid;
  gap: 32px;
  margin-top: 48px;
}

.highlight-item h4 {
  font-size: 1rem;
  margin-bottom: 8px;
}

.highlight-item p {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.counters-grid {
  padding: 80px 0;
  text-align: center;
}

.c-num {
  font-family: 'Unbounded', sans-serif;
  font-size: 3.5rem;
  font-weight: 900;
  color: var(--accent-blue);
}

.c-label {
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 700;
  opacity: 0.6;
}

.cta-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px;
}

.cta-title {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.cta-actions {
  text-align: right;
}

.cta-contact {
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
}

.cta-contact .label {
  font-size: 0.8rem;
  opacity: 0.5;
}

.cta-contact .value {
  font-family: 'Unbounded', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
}

.blog-item {
  padding: 40px;
}

.blog-meta {
  display: flex;
  gap: 20px;
  font-size: 0.75rem;
  font-weight: 800;
  color: var(--accent-blue);
  text-transform: uppercase;
  margin-bottom: 16px;
}

.blog-title {
  font-size: 1.1rem;
  margin-bottom: 20px;
}

.blog-link {
  font-weight: 800;
  font-size: 0.8rem;
  text-transform: uppercase;
}

.footer {
  padding: 80px 0;
  background: #fff;
  border-top: 1px solid rgba(0,0,0,0.05);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-logo {
  font-family: 'Unbounded', sans-serif;
  font-weight: 900;
  font-size: 1.5rem;
}

.footer-social {
  display: flex;
  gap: 24px;
  font-weight: 800;
  font-size: 0.8rem;
}

.bg-dark { background: var(--bg-dark); }
.text-white { color: #fff; }

@media (max-width: 968px) {
  .grid-4 { grid-template-columns: 1fr 1fr; gap: 40px; }
  .cta-content { flex-direction: column; text-align: center; gap: 40px; }
  .cta-actions { text-align: center; }
  .experience-badge { position: static; margin-top: 20px; }
  .hero-title { font-size: 2.5rem; }
}
</style>
