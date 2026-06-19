import { useState } from 'react'
import './App.css'

function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 80"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Daily Grind - Port Isaac"
    >
      <text
        x="200"
        y="42"
        textAnchor="middle"
        fontFamily="'Playfair Display', serif"
        fontWeight="900"
        fontSize="46"
        fill="currentColor"
        letterSpacing="3"
      >
        DAILY GRIND
      </text>
      <text
        x="200"
        y="68"
        textAnchor="middle"
        fontFamily="'Playfair Display', serif"
        fontWeight="400"
        fontSize="16"
        fill="currentColor"
        letterSpacing="8"
      >
        PORT ISAAC
      </text>
    </svg>
  )
}

interface MenuCategory {
  title: string
  items: string[]
}

const menuData: MenuCategory[] = [
  {
    title: 'Freshly Ground Cornish Coffee',
    items: ['Americano', 'Cappuccino', 'Flat White', 'Mocca'],
  },
  {
    title: 'Breakfast Sandwiches',
    items: [
      '2 x Rasher Bacon (locally sourced)',
      '2 x Sausage (locally sourced)',
      '2 x Free Range Eggs',
      'B.L.T',
      'Meat Feast - Double Bacon, Double Sausage',
      'Full Monty - 2 x Bacon, 2 x Sausage, 1 x Egg',
    ],
  },
  {
    title: 'Pasties / Sausage Rolls',
    items: [
      'Traditional Steak',
      'Vegetarian / Vegan',
      'Cheese & Onion',
      'Sausage Roll',
    ],
  },
  {
    title: 'Freshly Made Sandwiches',
    items: [
      'Egg Mayo',
      'Tuna Mayo',
      'Cheese',
      'Ham & Cheese',
    ],
  },
  {
    title: 'Also Available',
    items: [
      'Delux Hot Chocolate',
      'Milk Shakes',
      'Large Selection of Teas',
      'Cold Drinks',
      'Freshly baked cakes & biscuits',
      'A selection of savoury delights',
      'Callistick Cornish Ice Creams',
    ],
  },
]

const galleryImages = [
  { src: '/gallery/shopfront.jpg', alt: 'Daily Grind shopfront' },
  { src: '/gallery/coffee-cup.jpg', alt: 'Coffee at Daily Grind' },
  { src: '/gallery/sandwich.jpg', alt: 'Bacon sandwich with Cornish coffee' },
  { src: '/gallery/interior.jpg', alt: 'Inside Daily Grind' },
  { src: '/gallery/menu-board.jpg', alt: 'Our menu board' },
  { src: '/gallery/coach-tours.jpg', alt: 'Vintage coach tours sign' },
  { src: '/gallery/insta-1.jpg', alt: 'Daily Grind' },
  { src: '/gallery/insta-2.jpg', alt: 'Daily Grind' },
  { src: '/gallery/insta-3.jpg', alt: 'Daily Grind' },
  { src: '/gallery/insta-4.jpg', alt: 'Daily Grind' },
  { src: '/gallery/insta-5.jpg', alt: 'Daily Grind' },
  { src: '/gallery/insta-6.jpg', alt: 'Daily Grind' },
]

function Gallery() {
  const [selected, setSelected] = useState<number | null>(null)

  const close = () => setSelected(null)
  const prev = () => setSelected(i => i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null)
  const next = () => setSelected(i => i !== null ? (i + 1) % galleryImages.length : null)

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <div className="gallery-grid">
          {galleryImages.map((img, i) => (
            <div className="gallery-item" key={img.src} onClick={() => setSelected(i)}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
      {selected !== null && (
        <div className="lightbox" onClick={close}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={close} aria-label="Close">&times;</button>
            <button className="lightbox-prev" onClick={prev} aria-label="Previous">&lsaquo;</button>
            <img src={galleryImages[selected].src} alt={galleryImages[selected].alt} className="lightbox-img" />
            <button className="lightbox-next" onClick={next} aria-label="Next">&rsaquo;</button>
          </div>
        </div>
      )}
    </section>
  )
}

function App() {
  return (
    <div className="app">
      <nav className="nav">
        <div className="nav-inner">
          <Logo className="nav-logo" />
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#find-us">Find Us</a></li>
          </ul>
        </div>
      </nav>

      <section className="hero" id="hero">
        <div className="hero-content">
          <Logo className="hero-logo" />
          <p className="hero-tagline">Freshly Ground Cornish Coffee & More</p>
          <p className="hero-location">Port Isaac, Cornwall</p>
          <div className="hero-social">
            <a href="https://www.facebook.com/lazydayscafeportisaac" target="_blank" rel="noreferrer" className="social-link">Facebook</a>
            <a href="https://www.instagram.com/dailygrind_portisaac/" target="_blank" rel="noreferrer" className="social-link">Instagram</a>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="container">
          <h2 className="section-title">About Us</h2>
          <div className="about-content">
            <p>
              Daily Grind is a neighbourhood coffee shop on the Cornish coast,
              nestled in the heart of Port Isaac. We serve freshly ground coffee
              from Cornish &#174; Tea and Coffee, alongside breakfast
              sandwiches, pasties, and homemade cakes.
            </p>
            <p>
              You will find us at 14 New Road, next door to Penally House. Grab a
              seat at our outdoor tables and enjoy your coffee with views of the
              village, or pick up something fresh to take on your walk down to the
              harbour.
            </p>
            <p>
              We also stock a selection of locally made fudge, freshly baked
              biscuits, and Callistick Cornish ice creams.
            </p>
          </div>
        </div>
      </section>

      <Gallery />

      <section className="menu" id="menu">
        <div className="container">
          <h2 className="section-title">Menu</h2>
          <p className="menu-subtitle">Come in, enjoy or just say hello...</p>
          <div className="menu-grid">
            {menuData.map((category) => (
              <div className="menu-category" key={category.title}>
                <h3 className="menu-category-title">{category.title}</h3>
                <ul className="menu-items">
                  {category.items.map((item) => (
                    <li key={item} className="menu-item">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="menu-note">All prices on menu inside. Toasted sandwiches also available.</p>
        </div>
      </section>

      <section className="find-us" id="find-us">
        <div className="container">
          <h2 className="section-title">Find Us</h2>
          <div className="find-us-content">
            <div className="find-us-card">
              <h3>Address</h3>
              <p>14 New Road<br />Port Isaac<br />PL29 3SB</p>
            </div>
            <div className="find-us-card">
              <h3>Services</h3>
              <ul>
                <li>Outdoor seating</li>
                <li>In-store pickup</li>
                <li>Curbside pickup</li>
              </ul>
            </div>
            <div className="find-us-card">
              <h3>Follow Us</h3>
              <div className="social-links-vertical">
                <a href="https://www.facebook.com/lazydayscafeportisaac" target="_blank" rel="noreferrer">Facebook</a>
                <a href="https://www.instagram.com/dailygrind_portisaac/" target="_blank" rel="noreferrer">Instagram</a>
              </div>
              <p className="find-us-meta">100% recommended &middot; 75 reviews</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <Logo className="footer-logo" />
          <div className="footer-social">
            <a href="https://www.facebook.com/lazydayscafeportisaac" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://www.instagram.com/dailygrind_portisaac/" target="_blank" rel="noreferrer">Instagram</a>
          </div>
          <p className="footer-copy">&copy; {new Date().getFullYear()} Daily Grind, Port Isaac. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
