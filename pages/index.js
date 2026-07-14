import Head from 'next/head';

const services = [
  ['Security cameras', 'New installs, replacements, recorder setup, remote viewing, cable runs, and troubleshooting for homes and businesses.'],
  ['Ethernet and WiFi', 'Ethernet drops, access points, routers, switches, dead zones, weak signal, and network cleanup.'],
  ['AV and connected devices', 'Televisions, receivers, speakers, streaming devices, smart-home equipment, displays, and conference-room setup.'],
  ['Data transfer and computer setup', 'Moving files to a new computer, drive evaluation, backup setup, and practical recovery attempts.'],
];

const navLinks = [
  ['Repair', 'https://armortechrepair.com'],
  ['Solutions', 'https://armortech-solutions.com'],
  ['Labs', 'https://armortechlabs.com'],
  ['Protect', 'https://armortechprotect.com'],
  ['Shop', 'https://armortechrepair.shop'],
  ['My Account', 'https://armortechrepair.com/login'],
];

export default function Home() {
  return (
    <>
      <Head>
        <title>ArmorTech Solutions | Cameras, Ethernet, WiFi & AV</title>
        <meta name="description" content="Security camera installation, Ethernet wiring, WiFi troubleshooting, AV setup, data transfer, and small-business technology service." />
      </Head>

      <header className="siteHeader">
        <nav className="siteNav" aria-label="ArmorTech navigation">
          <a href="/" className="brandLink">ARMORTECH SOLUTIONS</a>
          <div className="navLinks">
            {navLinks.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
          </div>
          <a href="https://armortechrepair.com/contact" className="navButton">Request a quote</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">Cameras • Ethernet • WiFi • AV • Data transfer</p>
          <h1>Clean installs, working networks, and technology that is easier to manage.</h1>
          <p>
            ArmorTech Solutions installs and troubleshoots the wiring, cameras, network
            equipment, displays, and connected devices behind homes, rentals, offices,
            shops, and small commercial properties.
          </p>
          <div className="heroButtons">
            <a href="https://armortechrepair.com/contact">Request a quote</a>
            <a href="tel:2282155595">Call 228-215-5595</a>
          </div>
        </section>

        <section className="section">
          <h2>Services</h2>
          <div className="grid">
            {services.map(([title, text]) => (
              <article className="card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section darkBand">
          <h2>What to send for a quote</h2>
          <p>
            Send the service address, clear photos, equipment count, model numbers when
            available, where cables may need to run, and what you want the finished system
            to do. Some jobs require a site visit before final pricing.
          </p>
          <div className="heroButtons">
            <a href="mailto:service@armortechrepair.com">Email project details</a>
            <a href="https://armortechrepair.com/contact">Use the contact form</a>
          </div>
        </section>

        <section className="section">
          <h2>Homes, rentals, and small businesses</h2>
          <p>
            We work with homeowners, landlords, Airbnb hosts, property managers, offices,
            stores, restaurants, hotels, and other locations that need practical technology
            support without a large managed-IT contract.
          </p>
        </section>

        <section className="notice">
          <h2>Scope and licensing</h2>
          <p>
            Existing wiring, access, wall construction, equipment compatibility, travel,
            and hidden damage can change the final scope. ArmorTech does not perform licensed
            electrical, fire-alarm, or regulated life-safety work unless properly licensed or
            coordinated through a qualified provider.
          </p>
        </section>

        <section className="cta">
          <h2>Have a camera, network, AV, or data project?</h2>
          <p>Send the location, photos, equipment count, and the result you need.</p>
          <div className="contactBox">
            <a href="https://armortechrepair.com/contact">Request a quote</a>
            <a href="mailto:service@armortechrepair.com">service@armortechrepair.com</a>
            <a href="tel:2282155595">228-215-5595</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <h3>ArmorTech Solutions</h3>
        <p>Security cameras, Ethernet, WiFi, AV, data transfer, and small-business technology support.</p>
        <div className="footerLinks">
          {navLinks.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
          <a href="https://iq.armortechrepair.com">Repair Diagnosis</a>
        </div>
        <p className="finePrint">© 2026 ArmorTech Solutions. All rights reserved.</p>
      </footer>
    </>
  );
}
