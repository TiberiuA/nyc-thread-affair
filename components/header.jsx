export default function Header() {
  return (
    <header className="header container mt-4">
    <section className="header-secondary d-flex justify-content-between">
      <div className="header-connect"></div>
      <ul>
          <li>
            <a href="tel:+1-877-66-1840" title="call us">
              <i className="fa-solid fa-phone">
                </i>Tol Free 1-877-666--1840</a>
          </li>

          <li>
            <a href="mailto:office@threadaffiars.com" title="Email us">
            office@threadaffiars.com</a>
          </li>
        </ul>

      <div className="header-controls"></div>
      <section className="user-controls">
        <a href="http://" title="Account">
        <img src="/images/user-avatar.png" alt="User"></img>
        <i class="fa-solid fa-angle-down"></i></a>
      </section>

      <section className="cart-controls">
        <a href="http://" title=";Cart"><i className="fas fa-shopping-cart"></i>
        <span className="cart-qty">3</span>
        </a>
      </section>

    </section>

    <section className="header-primary">

    </section>
  </header>
  )
}
