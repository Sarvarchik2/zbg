<template>
  <main>
    <TheHeader />

    <!-- Hero Slider Concept -->
    <section class="hero">
      <TransitionGroup name="fade">
        <div v-for="(slide, index) in heroSlides" :key="index" 
             class="hero-slide" 
             v-show="currentSlide === index">
          <div class="hero-bg" :style="{ backgroundImage: `url(${slide.image})` }"></div>
          <div class="hero-overlay"></div>
          <div class="container hero-content">
            <h1 class="hero-title" data-aos>{{ slide.title }}</h1>
            <p class="hero-description" data-aos>{{ slide.description }}</p>
            <div class="hero-btns" data-aos>
              <a href="#contacts" class="btn btn-primary">{{ t.btnDiscuss }} <span class="arrow">→</span></a>
              <a href="#services" class="btn btn-outline-white">{{ t.btnOurServices }}</a>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </section>

    <!-- Top Features (Benefits) -->
    <section id="benefits" class="benefits-sec">
      <div class="container grid-3">
        <div v-for="(benefit, index) in benefits" :key="index" class="benefit-card no-padding overflow-hidden card-rounded" data-aos :style="{ transitionDelay: (index * 0.1) + 's' }">
          <div class="benefit-icon-img overflow-hidden" style="height: 220px;">
            <img :src="benefit.image" :alt="benefit.title" class="full-img" />
          </div>
          <div style="padding: 40px;">
            <h3 class="benefit-title">{{ benefit.title }}</h3>
            <p class="benefit-text">{{ benefit.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about-sec bg-white">
        <div class="grid-2 about-wrapper" data-aos>
          <div class="about-image-side">
            <div class="image-container borderless-img-card overflow-hidden">
              <img src="/about_zbg_building_1775798859126.png" alt="О компании" class="full-img" />
            </div>
            <div class="experience-badge-new card-rounded">
              <span class="badge-num">25</span>
              <span class="badge-txt">Лет опыта</span>
            </div>
          </div>
        <div class="about-content-side" data-aos>
          <span class="tag">О компании Best Service Group</span>
          <h2 class="section-title main-title">Мировые стандарты инжиниринга в Узбекистане</h2>
          <p class="section-desc">Многие современные строительные компании уделяют особое внимание экологически безопасным методам строительства, внедряя экологически чистые материалы и энергоэффективные системы для снижения воздействия на окружающую среду.</p>
          
          <div class="highlights-grid">
            <div class="highlight-item-new">
              <div class="icon-circle">✓</div>
              <div class="highlight-info">
                <h4>Услуги по всему миру</h4>
                <p>Мы предоставляем прозрачные сметы расходов и строго придерживаемся сроков.</p>
              </div>
            </div>
            <div class="highlight-item-new">
              <div class="icon-circle">✓</div>
              <div class="highlight-info">
                <h4>Надежное управление</h4>
                <p>Наша компания умеет эффективно управлять сложными бюджетами и проектами.</p>
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

    <!-- Services Section Showcase -->
    <section id="services" class="services-showcase bg-white">
      <div class="container">
        <div class="section-header-centered mb-100" data-aos>
          <span class="tag">{{ t.servicesTag }}</span>
          <h2 class="section-title main-title">{{ t.servicesTitle }}</h2>
          <p class="section-desc centered">{{ t.servicesDesc }}</p>
        </div>
        
        <div class="services-list-detailed">
          <div v-for="(service, index) in servicesDetailed" :key="index" 
               class="service-block" :class="{ 'reverse': index % 2 !== 0 }" data-aos>
            <div class="service-image-side">
              <div class="service-img-wrapper borderless-img-card overflow-hidden">
                <img :src="service.image" :alt="service.title" class="service-main-img" />
              </div>
            </div>
            <div class="service-content-side">
              <div class="service-info-card">
                <div class="service-number-tag">0{{ index + 1 }}</div>
                <h3 class="service-title-large text-uppercase">{{ service.title }}</h3>
                <p class="service-description-long">{{ service.description }}</p>
                <ul class="service-features-list">
                  <li v-for="feat in service.features" :key="feat">
                    <span class="check-icon">✓</span> {{ feat }}
                  </li>
                </ul>
                <a href="#contacts" class="btn btn-primary">{{ t.btnLearnMore }} <span class="arrow">→</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Work Process Section -->
    <section class="process-section bg-light">
      <div class="container">
        <div class="section-header text-center mb-80">
          <span class="tag">{{ t.processTag }}</span>
          <h2 class="section-title">{{ t.processTitle }}</h2>
        </div>
        
        <div class="process-steps-grid">
          <div v-for="(step, index) in processSteps" :key="index" class="process-step-card" data-aos :style="{ transitionDelay: (index * 0.1) + 's' }">
            <div class="step-num-circle">{{ index + 1 }}</div>
            <h4 class="step-title">{{ step.title }}</h4>
            <p class="step-desc">{{ step.desc }}</p>
            <div class="step-visual">
               <div class="line-animated"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section Showcase -->
    <section id="projects" class="portfolio-showcase">
      <div class="container">
        <div class="section-header-flex mb-80" data-aos>
          <div class="header-left">
            <span class="tag">{{ t.portfolioTag }}</span>
            <h2 class="section-title">{{ t.portfolioTitle }}</h2>
          </div>
          <div class="header-right">
            <p class="section-desc max-400">{{ t.portfolioDesc }}</p>
          </div>
        </div>
        
        <div class="portfolio-grid-modern">
          <div v-for="(project, index) in portfolio" :key="index" 
               class="portfolio-card-detailed" data-aos :style="{ transitionDelay: (index * 0.1) + 's' }">
            <div class="p-img-box borderless-img-card overflow-hidden">
              <img :src="project.image" :alt="project.title" class="p-main-img" />
              <div class="p-overlay-content">
                <span class="p-category">{{ project.category }}</span>
                <h3 class="p-title-white">{{ project.title }}</h3>
              </div>
            </div>
            <div class="p-info-bottom">
              <p class="p-short-desc">{{ project.desc }}</p>
              <a href="#" class="p-link-arrow">Смотреть кейс →</a>
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
              <img :src="member.image" :alt="member.name" />
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
          <p class="testimonial-text">Best Service Group выбирают лучшие материалы и технологии, которые создают целостный и визуально приятный вид, отражая индивидуальность и вкус клиента. Это новый уровень инжиниринга.</p>
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

    <!-- Contact Section -->
    <section id="contacts" class="contacts-section">
      <div class="container">
        <div class="contact-card-modern card-rounded bg-dark text-white overflow-hidden">
          <div class="grid-2 contact-inner">
            <div class="contact-text-side" data-aos>
              <h2 class="cta-title white-text" v-html="t.contactTitle"></h2>
              <div class="contact-details">
                <div class="detail-item">
                  <span class="d-label">Телефон</span>
                  <span class="d-value">+998 99 560 01 01</span>
                </div>
                <div class="detail-item">
                  <span class="d-label">Почта</span>
                  <span class="d-value">info@bs-group.uz</span>
                </div>
              </div>
            </div>
            <div class="contact-form-side" data-aos>
              <form class="modern-form">
                <div class="input-group">
                  <input type="text" placeholder="Ваше имя" required />
                </div>
                <div class="input-group">
                  <input type="email" placeholder="Электронная почта" required />
                </div>
                <div class="input-group">
                  <textarea placeholder="Ваше сообщение" rows="4"></textarea>
                </div>
                <button type="submit" class="btn btn-accent full-width" @click.prevent>
                  Отправить заявку <span class="arrow">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Full Premium Footer -->
    <footer class="main-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col brand-col">
            <div class="footer-logo">
              <img src="/images/logo.png" alt="Best Service Group" class="footer-logo-img" />
            </div>
            <p class="footer-desc">{{ t.footerDesc }}</p>
            <div class="social-links">
              <a href="#" class="social-icon">Instagram</a>
              <a href="#" class="social-icon">Telegram</a>
              <a href="#" class="social-icon">Facebook</a>
            </div>
          </div>
          
          <div class="footer-col">
            <h4 class="footer-title">Навигация</h4>
            <ul class="footer-links">
              <li><a href="#about">О нас</a></li>
              <li><a href="#services">Услуги</a></li>
              <li><a href="#projects">Проекты</a></li>
              <li><a href="#team">Команда</a></li>
            </ul>
          </div>
          
          <div class="footer-col">
            <h4 class="footer-title">Услуги</h4>
            <ul class="footer-links">
              <li><a href="#">Строительство</a></li>
              <li><a href="#">Архитектура</a></li>
              <li><a href="#">Дизайн интерьера</a></li>
              <li><a href="#">Пожарные системы</a></li>
              <li><a href="#">Вентиляция</a></li>
            </ul>
          </div>
          
          <div class="footer-col">
            <h4 class="footer-title">Контакты</h4>
            <ul class="footer-contact">
              <li>Ташкент, Узбекистан</li>
              <li>+998 99 560 01 01</li>
              <li>info@bs-group.uz</li>
              <li>Пн — Сб: 09:00 — 18:00</li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="copy">© 2026 Best Service Group. Все права защищены.</div>
          <div class="legal-links">
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  </main>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { useLocale } from '~/composables/useLocale'

const { locale } = useLocale()

const translations = {
  RU: {
    navAbout: 'О нас',
    navServices: 'Услуги',
    navProjects: 'Проекты',
    navContacts: 'Контакты',
    btnDiscuss: 'Обсудить проект',
    btnOurServices: 'Наши услуги',
    servicesTag: 'Наши компетенции',
    servicesTitle: 'Реализуйте проекты своей мечты',
    servicesDesc: 'Комплексный подход к строительству и инженерным системам мирового уровня.',
    btnLearnMore: 'Узнать подробнее',
    processTag: 'Наш процесс',
    processTitle: 'Путь к идеальному результату',
    portfolioTag: 'Портфолио',
    portfolioTitle: 'Знаковые проекты',
    portfolioDesc: 'Мы гордимся каждым объектом, внедряя лучшие инженерные практики.',
    contactTitle: 'Обсудим ваш проект?',
    footerDesc: 'Современные инженерные решения и строительство премиум-класса в Узбекистане. 25 лет опыта и качества.'
  },
  UZ: {
    navAbout: 'Biz haqimizda',
    navServices: 'Xizmatlar',
    navProjects: 'Loyihalar',
    navContacts: 'Kontaktlar',
    btnDiscuss: 'Loyihani muhokama qilish',
    btnOurServices: 'Xizmatlarimiz',
    servicesTag: 'Bizning kompetensiyalarimiz',
    servicesTitle: 'Orzuingizdagi loyihalarni amalga oshiring',
    servicesDesc: 'Qurilish va muhandislik tizimlariga jahon darajasidagi kompleks yondashuv.',
    btnLearnMore: 'Batafsil ma\'lumot',
    processTag: 'Ish jarayoni',
    processTitle: 'Mukammal natijaga yo\'l',
    portfolioTag: 'Portfolio',
    portfolioTitle: 'Ramziy loyihalar',
    portfolioDesc: 'Biz har bir ob\'ekt bilan faxrlanamiz va eng yaxshi muhandislik amaliyotlarini joriy etamiz.',
    contactTitle: 'Loyihangizni muhokama qilamizmi?',
    footerDesc: 'O\'zbekistonda zamonaviy muhandislik echimlari va premium darajadagi qurilish. 25 yillik tajriba va sifat.'
  }
}

const t = computed(() => translations[locale.value])

const currentSlide = ref(0)
const heroSlides = [
  {
    title: 'Вложите в пожарные системы и защитите своё Здание',
    description: 'Инвестируйте в системы пожарной безопасности, чтобы предотвратить угрозу пожара. Это поможет защитить ваш труд и инвестиции.',
    image: '/hero_fire_safety_new_1775798814187.png'
  },
  {
    title: 'Профессиональное движение воздуха в вашем Здании',
    description: 'Создайте здоровую среду с нашими системами кондиционирования и вентиляции. Чистый и свежий воздух — наша забота.',
    image: '/hero_hvac_new_1775798831744.png'
  },
  {
    title: 'Сантехника и электрика — долговечная Гарантия',
    description: 'Обеспечиваем безопасную и эффективную работу инженерных систем с вниманием к каждой детали.',
    image: '/hero_engineering_new_1775798846437.png'
  }
]

const benefits = [
  { title: 'Лучшая инженерия', text: 'Мы используем передовые решения для надежной работы всех систем.', image: '/benefit_engineering_new_1775798882847.png' },
  { title: 'Умные технологии', text: 'Интеграция систем автоматизации и энергоэффективности.', image: '/benefit_tech_new_1775798896230.png' },
  { title: 'Химические исследования', text: 'Контроль качества материалов и технический аудит.', image: '/benefit_research_new_1775798911158.png' }
]

const processSteps = [
  { title: 'Анализ', desc: 'Первичная консультация, изучение объекта и постановка задач.' },
  { title: 'Проектирование', desc: 'Разработка архитектурных и инженерных решений.' },
  { title: 'Строительство', desc: 'Реализация проекта с соблюдением всех стандартов.' },
  { title: 'Сдача', desc: 'Финальная проверка и передача готового объекта.' }
]

const servicesDetailed = [
  {
    title: 'Общее строительство',
    description: 'Мы реализуем масштабные строительные проекты любой сложности — от жилых комплексов до промышленных гигантов. Наш подход основан на инновационных монолитных технологиях и строгом контроле качества материалов.',
    image: '/service_construction_1775745929170.png',
    features: ['Монолитное строительство', 'Металлоконструкции', 'Промышленные объекты'],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/></svg>'
  },
  {
    title: 'Архитектура и дизайн',
    description: 'Создание знаковых объектов, которые формируют облик города. Мы разрабатываем уникальные архитектурные концепции, балансируя между смелой эстетикой и исключительной функциональностью каждого квадратного метра.',
    image: '/service_architecture_1775745948020.png',
    features: ['Эскизное проектирование', 'Рабочая документация', '3D-визуализация'],
    icon: '📐'
  },
  {
    title: 'Дизайн интерьера',
    description: 'Премиальные интерьерные решения для бизнеса и жизни. Мы создаем пространства, где каждая деталь — от световых сценариев до текстур материалов — работает на создание уникальной атмосферы успеха и комфорта.',
    image: '/service_interior_1775745964153.png',
    features: ['Авторский надзор', 'Комплектация мебелью', 'Освещение и декор'],
    icon: '🏠'
  },
  {
    title: 'Пожарная безопасность',
    description: 'Интеллектуальные системы защиты высочайшего уровня. Мы внедряем комплексные решения по обнаружению и тушению пожаров, интегрируя их в общую систему управления зданием (BMS) для максимальной безопасности.',
    image: '/service_fire_safety_2_1775746023265.png',
    features: ['Автоматическое пожаротушение', 'Оповещение и эвакуация', 'Огнезащита конструкций'],
    icon: '🔥'
  },
  {
    title: 'ОВКВ и Вентиляция',
    description: 'Идеальный микроклимата в любых условиях. Наши инженеры проектируют и монтируют энергоэффективные системы вентиляции и кондиционирования, обеспечивая чистый воздух и оптимальную температуру 365 дней в году.',
    image: '/service_hvac_1775745980971.png',
    features: ['Прецизионное кондиционирование', 'Рекуперация тепла', 'Приточно-вытяжная вентиляция'],
    icon: '🌬️'
  },
  {
    title: 'Реновация зданий',
    description: 'Вторая жизнь знаковых сооружений. Мы специализируемся на сложной реконструкции исторической и современной недвижимости, интегрируя в старые стены современные инженерные системы и передовую архитектуру.',
    image: '/service_renovation_1775745995925.png',
    features: ['Усиление конструкций', 'Замена инженерных сетей', 'Модернизация фасадов'],
    icon: '🛠️'
  }
]

const portfolio = [
  {
    title: 'Global Logistics Hub',
    category: 'Промышленный',
    desc: 'Крупнейший логистический центр с автоматизированными системами управления.',
    image: '/project_industrial_1775747005565.png'
  },
  {
    title: 'Aura Luxury Mall',
    category: 'Торговый',
    desc: 'Премиальный торговый центр с уникальной стеклянной архитектурой купола.',
    image: '/project_mall_1775747021374.png'
  },
  {
    title: 'Zenith Business Center',
    category: 'Офисный',
    desc: 'Инновационное офисное пространство класса А+ в центре столицы.',
    image: '/project_office_zenith_new_1775798953280.png'
  },
  {
    title: 'Nordic Residence',
    category: 'Жилой',
    desc: 'Жилой комплекс премиум-класса с собственной экосистемой.',
    image: '/project_residential_nordic_new_1775798928270.png'
  }
]

const team = [
  { name: 'Abdurozokov Husniddin', role: 'Директор', bio: 'Визионер и руководитель, обеспечивающий стратегическое развитие Best Service Group.', image: '/workers/abdurozoqov.jpeg' },
  { name: 'Jo\'rayev Bahodir', role: 'Главный инженер', bio: 'Эксперт мирового уровня в области сложных инженерных систем.', image: '/workers/juraev.jpeg' },
  { name: 'Toxirov Shavkat', role: 'Администратор', bio: 'Обеспечивает безупречную операционную деятельность и координацию проектов.', image: '/workers/toxirov.jpeg' },
  { name: 'Ishankulov Sardor', role: 'Электрик', bio: 'Специалист по высокоточному электромонтажу и системной интеграции.', image: '/workers/ishanqulov.jpeg' },
  { name: 'Qahhorov Muhammadbobur', role: 'Электрик', bio: 'Профессионал в области интеллектуальных систем безопасности и сетей.', image: '/workers/qahhorov.jpeg' },
  { name: 'Kurbanov Jalol', role: 'Специалист', bio: 'Технический эксперт, отвечающий за внедрение инновационных решений на объектах.', image: '/workers/kurbanov.jpeg' }
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
  margin-top: 100px;
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

@media (max-width: 768px) {
  .service-item {
  display: flex;
  align-items: center;
  gap: 80px;
}

.service-item:nth-child(even) {
  flex-direction: row-reverse;
}

@media (max-width: 968px) {
  .service-item, .service-item:nth-child(even) {
    flex-direction: column !important;
    gap: 40px;
    align-items: flex-start;
  }
  
  .service-content {
    order: 2;
  }
  
  .service-visual {
    order: 1;
    width: 100%;
  }
}

.hero-title {
    font-size: 2.5rem;
  }
  .hero-description {
    font-size: 1rem;
    margin-bottom: 24px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.8rem;
  }
  .hero-btns {
    flex-direction: column;
    width: 100%;
  }
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

.about-wrapper {
  display: flex;
  align-items: center;
  gap: 80px;
}

@media (max-width: 968px) {
  .about-wrapper {
    flex-direction: column-reverse; /* Text then Image or Image then Text? Usually Image then Text for visual context. */
    gap: 40px;
  }
}

.benefits-sec {
  margin-top: -60px;
  position: relative;
  z-index: 30;
}

@media (max-width: 968px) {
  .benefits-sec {
    margin-top: -30px;
    padding: 0 20px;
  }
}

.benefit-card {
  background: #fff;
  padding: 48px;
  box-shadow: 0 40px 100px rgba(0,0,0,0.05);
}

@media (max-width: 768px) {
  .benefit-card {
    padding: 30px;
  }
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
  color: var(--accent);
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
  color: var(--accent);
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
  color: var(--accent);
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
  .hero-title { font-size: 2rem; }
}

@media (max-width: 480px) {
  .grid-4 { grid-template-columns: 1fr; }
  .c-num { font-size: 2.5rem; }
}
</style>
