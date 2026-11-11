const whatsappLink = 'https://wa.me/2348061157832?text=Hello%20Naomi%20House%20of%20Shades%2C%20I%27d%20like%20to%20make%20an%20enquiry.';

export default function Home() {
  return (
    <main className="page-shell">
      <div className="glow glow-one" />
      <div className="glow glow-two" />
      <section className="content">
        <div className="brand-mark" aria-hidden="true">N</div>
        <p className="eyebrow">STYLE • PROTECTION • CLARITY</p>
        <h1>NESTY LUXE <span>HOUSE OF SHADES</span></h1>
        <p className="tagline">See the World in Style.</p>
        <div className="flyer-frame">
          <img src="/naomi-house-of-shades.png" alt="Naomi House of Shades — sunglasses and eyeglasses" />
        </div>
        <p className="intro">Find the frames that express your style. Explore our collection of sunglasses and eyeglasses.</p>
        <a className="whatsapp-button" href={whatsappLink} target="_blank" rel="noreferrer">
          <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3.2A12.3 12.3 0 0 0 5.4 21.7L4 28l6.5-1.7A12.4 12.4 0 1 0 16 3.2Zm0 22.5c-1.9 0-3.7-.5-5.3-1.5l-.4-.2-3.8 1 1-3.7-.3-.4A10.1 10.1 0 1 1 16 25.7Zm5.5-7.6c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.6-1.8-1.8-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.8s1.2 3.2 1.4 3.4c.2.2 2.4 3.7 5.8 5.1.8.4 1.4.6 1.9.7.8.3 1.5.2 2 .1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.5Z"/></svg>
          <span><small>CHAT WITH US ON WHATSAPP</small><strong>0806 115 7832</strong></span>
          <span className="arrow">↗</span>
        </a>
        <p className="footer-line">LOOK GOOD. FEEL GREAT.</p>
      </section>
    </main>
  );
}
