'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './page.module.css'

// Icon Components
const CarIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" fill="currentColor"/>
  </svg>
)

const ExchangeIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z" fill="currentColor"/>
  </svg>
)

const CreditCardIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" fill="currentColor"/>
  </svg>
)

const ShieldIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" fill="currentColor"/>
  </svg>
)

// Quality Icon - Badge/Medal
const QualityIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
  </svg>
)

// Trust Icon - Shield with checkmark
const TrustIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99l7-3.6V7.03l-7 3.11-7-3.11v1.36l7 3.6z" fill="currentColor"/>
    <path d="M12 18.99c-3.67-.91-6-4.5-6-7.99v-4l6 2.67 6-2.67v4c0 3.49-2.33 7.08-6 7.99z" fill="currentColor"/>
    <path d="M10.5 13.5l-2-2L7 13l3.5 3.5 5-5-1.41-1.41L10.5 13.5z" fill="currentColor"/>
  </svg>
)

// Innovation Icon - Lightbulb
const InnovationIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z" fill="currentColor"/>
  </svg>
)

const LocationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
  </svg>
)

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
  </svg>
)

const EmailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
  </svg>
)

const ClockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" fill="currentColor"/>
  </svg>
)

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentCarSlide, setCurrentCarSlide] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const observerRef = useRef(null)

  // Hero slides data
  const heroSlides = [
    {
      id: 1,
      title: 'رحلتك المثالية تبدأ هنا',
      subtitle: 'اكتشف مجموعة واسعة من السيارات الفاخرة',
      image: '/media/main-background.jpeg'
    },
    {
      id: 2,
      title: 'جودة لا تضاهى',
      subtitle: 'سيارات مستعملة بجودة عالية وضمان شامل',
      image: '/media/main-2-background.png'
    },
    {
      id: 3,
      title: 'خدمات متكاملة',
      subtitle: 'من البيع إلى التمويل والصيانة',
      image: '/media/main-3-background.png'
    }
  ]

  // Services data
  const services = [
    {
      id: 1,
      icon: <CarIcon />,
      title: 'بيع السيارات الجديدة',
      description: 'مجموعة واسعة من أحدث الموديلات من أشهر الماركات العالمية'
    },
    {
      id: 2,
      icon: <ExchangeIcon />,
      title: 'بيع السيارات المستعملة',
      description: 'سيارات مستعملة بجودة عالية وفحص شامل قبل البيع'
    },
    {
      id: 4,
      icon: <ShieldIcon />,
      title: 'الضمان والصيانة',
      description: 'خدمات صيانة شاملة و ضمان ما بعد البيع'
    }
  ]

  // Car collection data
  const cars = [
    { id: 1, name: 'KIA', price: 'تبدأ من 120,000', image: '/media/make/kia.png' },
    { id: 2, name: 'HYUNDAI', price: '180,000', image: '/media/make/hyundai.png' },
    { id: 3, name: 'HONGQI', price: '250,000', image: '/media/make/hongqi.png' },
  ]

  // Car showcase slides data
  const carShowcaseSlides = [
    {
      id: 1,
      image: '/media/cars/creetaBackground.png',
      alt: 'Hyundai Creta'
    },
    {
      id: 2,
      image: '/media/cars/car0.png',
      alt: 'Car Showcase'
    },
    {
      id: 3,
      image: '/media/cars/car0.1.png',
      alt: 'Car Showcase'
    },
    {
      id: 4,
      image: '/media/cars/car1.png',
      alt: 'Car Showcase'
    },
    {
      id: 5,
      image: '/media/cars/car1.1.png',
      alt: 'Car Showcase'
    },
    {
      id: 6,
      image: '/media/cars/car1.2.png',
      alt: 'Car Showcase'
    },
    {
      id: 7,
      image: '/media/cars/car2.png',
      alt: 'Car Showcase'
    },
    {
      id: 8,
      image: '/media/cars/car2.1.png',
      alt: 'Car Showcase'
    },
    {
      id: 9,
      image: '/media/cars/car2.2.png',
      alt: 'Car Showcase'
    },
    {
      id: 10,
      image: '/media/cars/car3.png',
      alt: 'Car Showcase'
    },
    {
      id: 11,
      image: '/media/cars/car4.png',
      alt: 'Car Showcase'
    },
    {
      id: 12,
      image: '/media/cars/car4.1.png',
      alt: 'Car Showcase'
    },
    {
      id: 13,
      image: '/media/cars/car5.png',
      alt: 'Car Showcase'
    },
    {
      id: 14,
      image: '/media/cars/car6.png',
      alt: 'Car Showcase'
    },
    {
      id: 15,
      image: '/media/cars/car7.png',
      alt: 'Car Showcase'
    },
    {
      id: 16,
      image: '/media/cars/car7.1.png',
      alt: 'Car Showcase'
    },
    {
      id: 17,
      image: '/media/cars/car8.png',
      alt: 'Car Showcase'
    },
    {
      id: 18,
      image: '/media/cars/car8.1.png',
      alt: 'Car Showcase'
    },
    {
      id: 19,
      image: '/media/cars/car9.png',
      alt: 'Car Showcase'
    },
    {
      id: 20,
      image: '/media/cars/car9.1.png',
      alt: 'Car Showcase'
    },
    {
      id: 21,
      image: '/media/cars/car10.png',
      alt: 'Car Showcase'
    },
    {
      id: 22,
      image: '/media/cars/car10.1.png',
      alt: 'Car Showcase'
    }
  ]

  // Auto-rotate hero slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroSlides.length])

  // Auto-rotate car showcase slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCarSlide((prev) => (prev + 1) % carShowcaseSlides.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [carShowcaseSlides.length])

  // Intersection Observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true
            }))
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('[data-animate]')
    elements.forEach((el) => observerRef.current.observe(el))

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return (
    <main className={styles.main}>
      {/* Header */}
      <header id='header' className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logoContainer}>
            <Image
              src="/media/logo.png"
              alt="النيزك Logo"
              width={80}
              height={80}
              className={styles.logo}
            />
            <h1 className={styles.logoText}>النيزك</h1>
          </div>
          <nav id='nav' className={styles.nav}>
            <a href="#home" className={styles.navLink}>الرئيسية</a>
            <a href="#about" className={styles.navLink}>من نحن</a>
            <a href="#services" className={styles.navLink}>خدماتنا</a>
            <a href="#collection" className={styles.navLink}>المجموعة</a>
            <a href="#contact" className={styles.navLink}>اتصل بنا</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className={styles.hero}>
        <div className={styles.heroSlides}>
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`${styles.heroSlide} ${index === currentSlide ? styles.active : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className={styles.heroOverlay}></div>
              <div className={styles.heroContent}>
                <h2 className={styles.heroTitle}>{slide.title}</h2>
                <p className={styles.heroSubtitle}>{slide.subtitle}</p>
                <button className={styles.ctaButton}>اكتشف المزيد</button>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.slideIndicators}>
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === currentSlide ? styles.active : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Car Showcase Section */}
      <section className={styles.carShowcase}>
        <div className={styles.carShowcaseContainer}>
          <div className={styles.carShowcaseContent}>
            <h2 className={styles.carShowcaseTitle}>اكتشف مجموعتنا المميزة</h2>
            <p className={styles.carShowcaseSubtitle}>
              نقدم لك مجموعة واسعة من السيارات الفاخرة والحديثة، مصممة لتلبية جميع احتياجاتك
              وتطلعاتك. من السيارات الرياضية إلى السيارات العائلية، لدينا ما يناسبك.
            </p>
            <button className={styles.carShowcaseButton}>استكشف المجموعة</button>
          </div>
          <div className={styles.carShowcaseImageWrapper}>
            <div className={styles.carShowcaseSlides}>
              {carShowcaseSlides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`${styles.carShowcaseSlide} ${index === currentCarSlide ? styles.active : ''}`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    width={800}
                    height={600}
                    className={styles.carShowcaseImage}
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.about}>
        <h2 className="section-title" data-animate id="about-title">من نحن</h2>
        <div className={styles.aboutContent}>
            <div
              className={`${styles.aboutText} ${isVisible['about-text'] ? 'fade-in-up' : ''}`}
              data-animate
              id="about-text"
            >
              <h3 className={styles.aboutHeading}>قصة النيزك</h3>
              <p>
                النيزك هي وكالة سيارات رائدة تجمع بين الخبرة الطويلة والابتكار في عالم السيارات.
                نحن نؤمن بأن كل عميل يستحق تجربة استثنائية، ولهذا نقدم خدمات شاملة تغطي جميع
                احتياجاتك من شراء السيارات الجديدة والمستعملة إلى التمويل والصيانة.
              </p>
              <p>
                رسالتنا هي تقديم أفضل ما في عالم السيارات مع الحفاظ على أعلى معايير الجودة
                والشفافية. نحن فخورون بسمعتنا الطيبة وعلاقاتنا القوية مع عملائنا.
              </p>
              <div className={styles.values}>
                <div className={styles.valueItem}>
                  <div className={styles.valueIcon}><QualityIcon /></div>
                  <h4>الجودة</h4>
                  <p>نلتزم بأعلى معايير الجودة في كل ما نقدمه</p>
                </div>
                <div className={styles.valueItem}>
                  <div className={styles.valueIcon}><TrustIcon /></div>
                  <h4>الثقة</h4>
                  <p>علاقات طويلة الأمد مبنية على الثقة والشفافية</p>
                </div>
                <div className={styles.valueItem}>
                  <div className={styles.valueIcon}><InnovationIcon /></div>
                  <h4>الابتكار</h4>
                  <p>نواكب أحدث التطورات في عالم السيارات</p>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={styles.services}>
        <div className={styles.servicesContainer}>
          <h2 className="section-title" data-animate id="services-title">خدماتنا</h2>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`${styles.serviceCard} ${isVisible[`service-${service.id}`] ? 'fade-in-up' : ''}`}
                data-animate
                id={`service-${service.id}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Car Collection Section */}
      <section id="collection" className={styles.collection}>
        <div className={styles.collectionContainer}>
          <h2 className="section-title" data-animate id="collection-title">مجموعة السيارات</h2>
          <div className={styles.carsGrid}>
            {cars.map((car, index) => (
              <div
                key={car.id}
                className={`${styles.carCard} ${isVisible[`car-${car.id}`] ? 'fade-in-up' : ''}`}
                data-animate
                id={`car-${car.id}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.carImageContainer}>
                  <Image
                    src={car.image}
                    alt={car.name}
                    width={300}
                    height={150}
                    className={styles.carImage}
                  />
                  <div className={styles.carOverlay}>
                    <button className={styles.viewButton}>عرض المزيد </button>
                  </div>
                </div>
                <div className={styles.carInfo}>
                  <h3 className={styles.carName}>{car.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contact}>
        <div className={styles.contactContainer}>
          <h2 className="section-title" data-animate id="contact-title">اتصل بنا</h2>
          <section className={styles.contactFormSection}>
          <div className={styles.contactContent}>
            <div
              className={`${styles.contactInfo} ${isVisible['contact-info'] ? 'slide-in-right' : ''}`}
              data-animate
              id="contact-info"
            >
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}><LocationIcon /></div>
                <div>
                  <h4>العنوان</h4>
                  <p> 11 يونيو، طرابلس، ليبيا</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}><PhoneIcon /></div>
                <div>
                  <h4>الهاتف</h4>
                  <p dir='ltr'>+218 91 7002535</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}><EmailIcon /></div>
                <div>
                  <h4>البريد الإلكتروني</h4>
                  <p>info@alnayzak.com</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}><ClockIcon /></div>
                <div>
                  <h4>ساعات العمل</h4>
                  <p>السبت - الخميس: 9:00 ص - 9:00 م</p>
                  <p>الجمعة: 2:00 م - 9:00 م</p>
                </div>
              </div>
            </div>
          </div>

            <div
              className={`${styles.contactForm} ${isVisible['contact-form'] ? 'slide-in-left' : ''}`}
              data-animate
              id="contact-form"
            >
              <section className={styles.contactFormSection}>
                <Image src="/media/cars/carImg.jpeg" className={styles.contactFormImage} alt="Contact Form" width={500} height={500} />
              </section>
              {/* <form className={styles.form}>
                <div className={styles.formGroup}>
                  <input type="text" placeholder="الاسم الكامل" className={styles.formInput} />
                </div>
                <div className={styles.formGroup}>
                  <input type="email" placeholder="البريد الإلكتروني" className={styles.formInput} />
                </div>
                <div className={styles.formGroup}>
                  <input type="tel" placeholder="رقم الهاتف" className={styles.formInput} />
                </div>
                <div className={styles.formGroup}>
                  <textarea placeholder="الرسالة" rows="5" className={styles.formTextarea}></textarea>
                </div>
                <button type="submit" className={styles.submitButton}>إرسال الرسالة</button>
              </form> */}
            </div>
            </section>
            <div
            className={`${styles.mapContainer} ${isVisible['map'] ? 'fade-in' : ''}`}
            data-animate
            id="map"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.5247891234!2d13.175277315347493!3d32.8872096811292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13a891b8d4d3a3b9%3A0x9c7a6b5c4d3e2f1a!2s11%20June%20Street%2C%20Tripoli%2C%20Libya!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.mapIframe}
              title="موقع الشركة"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerContent}>
            <div className={styles.footerLogo}>
              <h3> شركة النيزك للسيارات</h3>
            </div>
            <p className={styles.footerText}>
              © 2025 النيزك جميع الحقوق محفوظة
        </p>
      </div>
        </div>
      </footer>
    </main>
  )
}