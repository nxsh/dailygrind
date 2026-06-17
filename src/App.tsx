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
    title: 'Breakfast Sandwiches',
    items: [
      'Cornish Egg',
      'Bacon / Sausage',
      'Bacon & Cornish Egg',
      'B.L.T',
      'Bacon and Sausage',
    ],
  },
  {
    title: 'Pasties',
    items: [
      'Traditional Steak',
      'Vegetable',
      'Cheese',
      'Vegan',
      'Sausage Roll',
    ],
  },
  {
    title: 'Freshly Made Sandwiches',
    items: [
      'Ham',
      'Cheese',
      'Cheese & Onion',
      'Egg Mayonnaise',
      'Tuna Mayonnaise',
    ],
  },
  {
    title: 'Extra Fillings',
    items: ['Bacon', 'Cucumber', 'Lettuce', 'Onion'],
  },
]

function App() {
  return (
    <div className="app">
      <nav className="nav">
        <div className="nav-inner">
          <Logo className="nav-logo" />
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
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
        </div>
      </section>

      <section className="about" id="about">
        <div className="container">
          <h2 className="section-title">About Us</h2>
          <div className="about-content">
            <p>
              Daily Grind is a neighbourhood coffee shop on the Cornish coast,
              nestled in the heart of Port Isaac. We serve freshly ground coffee
              from DR Wakefield, a trusted Cornish roaster, alongside breakfast
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
              biscuits, and artisan products from across Cornwall.
            </p>
          </div>
        </div>
      </section>

      <section className="menu" id="menu">
        <div className="container">
          <h2 className="section-title">Menu</h2>
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
          <div className="menu-also">
            <h3 className="menu-category-title">Also Available</h3>
            <ul className="menu-items">
              <li className="menu-item">Freshly baked cakes and biscuits</li>
              <li className="menu-item">Full selection of freshly ground Cornish coffee</li>
              <li className="menu-item">Fudge</li>
            </ul>
          </div>
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
              <p>Find us on Facebook</p>
              <p className="find-us-meta">100% recommended &middot; 75 reviews</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <Logo className="footer-logo" />
          <p className="footer-copy">&copy; {new Date().getFullYear()} Daily Grind, Port Isaac. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
