import Head from 'next/head';

export default function Home() {
  const navLinks = [
    { label: 'Repair', href: 'https://armortechrepair.com' },
    { label: 'Solutions', href: 'https://armortech-solutions.com' },
    { label: 'Labs', href: 'https://armortechlabs.com' },
    { label: 'Protect', href: 'https://armortechprotect.com' },
    { label: 'Shop', href: 'https://armortechrepair.shop' },
    { label: 'My Account', href: 'https://armortechrepair.com/login' },
  ];

  const services = [
    {
      title: 'Security Camera Installation',
      text:
        'Camera installs, replacements, system upgrades, recorder setup, remote viewing, cabling, troubleshooting, and clean mounting for homes and businesses.',
    },
    {
      title: 'Ethernet Wiring & Drops',
      text:
        'Ethernet runs, wall plates, cable routing, access point lines, camera lines, office drops, structured wiring, and low-voltage cleanup.',
    },
    {
      title: 'WiFi & Network Troubleshooting',
      text:
        'Dead zones, weak signal, router issues, access points, switches, device connectivity, network cleanup, and performance troubleshooting.',
    },
    {
      title: 'Low-Voltage Installs',
      text:
        'Camera cabling, network cabling, AV wiring, device wiring, equipment connections, and clean system installation support.',
    },
    {
      title: 'AV & Smart Home Setup',
      text:
        'TV mounting coordination, receivers, speakers, streaming devices, smart hubs, smart cameras, connected devices, and home technology setup.',
    },
    {
      title: 'Data Recovery & Transfer',
      text:
        'Computer migration, data transfer, drive evaluation, file recovery attempts, backups, business computer setup, and device replacement transitions.',
    },
    {
      title: 'Commercial Technology Support',
      text:
        'Support for offices, rental properties, hotels, retail locations, small businesses, conference rooms, displays, cameras, WiFi, and technology infrastructure.',
    },
    {
      title: 'Property & Rental Tech',
      text:
        'Airbnb, rental units, landlords, property managers, cameras, WiFi, smart locks, smart TVs, guest network issues, and device turnover support.',
    },
    {
      title: 'System Troubleshooting',
      text:
        'When something is not working but the cause is unclear, ArmorTech traces the failure path across wiring, devices, network equipment, power, and configuration.',
    },
  ];

  const installTypes = [
    'Security Cameras',
    'NVR / DVR Setup',
    'Remote Camera Viewing',
    'Ethernet Drops',
    'Access Points',
    'WiFi Troubleshooting',
    'Router Setup',
    'Network Switches',
    'Cable Cleanup',
    'Low-Voltage Wiring',
    'Smart Home Devices',
    'AV Equipment',
    'TV / Display Setup',
    'Conference Rooms',
    'Data Transfer',
    'Drive Evaluation',
    'Backup Setup',
    'Business Tech Support',
    'Rental Property Tech',
    'Hotel Technology',
    'Office Technology',
    'Retail Technology',
    'Network Documentation',
    'System Cleanup',
  ];

  const processSteps = [
    {
      title: '1. Scope The Job',
      text:
        'ArmorTech reviews what you need installed, repaired, moved, connected, or cleaned up. Photos, location, device count, and equipment details help speed up quoting.',
    },
    {
      title: '2. Confirm The Path',
      text:
        'For wiring and installs, ArmorTech reviews cable routes, mounting locations, access points, attic/crawl access, equipment placement, and power/network requirements.',
    },
    {
      title: '3. Quote The Work',
      text:
        'You receive a clear quote for labor, materials, equipment, troubleshooting, site visit, or installation before work proceeds.',
    },
    {
      title: '4. Install Or Troubleshoot',
      text:
        'ArmorTech completes the wiring, setup, mounting, configuration, troubleshooting, cleanup, or system support needed.',
    },
    {
      title: '5. Test The System',
      text:
        'Cameras, network drops, WiFi, devices, remote access, displays, or data transfers are tested before the job is considered complete.',
    },
    {
      title: '6. Document The Setup',
      text:
        'For accounts and repeat customers, system notes, device locations, service history, and future support details can connect to My Account.',
    },
  ];

  const customerTypes = [
    'Homeowners',
    'Small Businesses',
    'Property Managers',
    'Airbnb Hosts',
    'Rental Properties',
    'Hotels',
    'Retail Stores',
    'Offices',
    'Restaurants',
    'Commercial Facilities',
    'Warehouses',
    'Multi-Location Accounts',
  ];

  const accountItems = [
    'Payment History',
    'Service History',
    'Pending Orders',
    'Mail-In Orders',
    'Protect Membership Status',
    'Device Vault',
    'Network Notes',
    'Camera System Notes',
    'Quotes & Invoices',
    'Shop Orders',
  ];

  return (
    <>
      <Head>
        <title>ArmorTech Solutions | Cameras, Ethernet, WiFi, Low Voltage, AV & Data Recovery</title>
        <meta
          name="description"
          content="ArmorTech Solutions provides security camera installation, Ethernet wiring, WiFi troubleshooting, low-voltage installs, AV setup, smart home support, data recovery, and commercial technology service."
        />
      </Head>

      <header className="siteHeader">
        <nav className="siteNav">
          <a href="/" className="brandLink">
            ARMORTECH SOLUTIONS
          </a>

          <div className="navLinks">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <a href="https://armortechrepair.com/contact" className="navButton">
            Request Quote
          </a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">
            Cameras • Ethernet • WiFi • Low Voltage • AV • Data Recovery
          </p>

          <h1>
            Professional Installs And System Support For Connected Homes And Businesses.
          </h1>

          <p>
            ArmorTech Solutions handles the systems behind the devices: security
            cameras, Ethernet wiring, WiFi, low-voltage cabling, AV setup, smart
            home devices, commercial technology, data transfer, and system troubleshooting.
          </p>

          <div className="heroButtons">
            <a href="https://armortechrepair.com/contact">Request Solutions Quote</a>
            <a href="#services">View Services</a>
            <a href="tel:2282155595">Call 228-215-5595</a>
          </div>

          <div className="heroNotice">
            <strong>Diagnosis App Notice:</strong> ArmorTech IQ is best for device
            symptoms, appliance issues, TV problems, computer issues, console symptoms,
            and repair direction. For camera installs, Ethernet wiring, WiFi design,
            data recovery, or low-voltage projects, request a Solutions quote instead.
          </div>
        </section>

        <section className="section" id="services">
          <h2>Solutions Services</h2>
          <p>
            Built for installations, wiring, troubleshooting, upgrades, system cleanup,
            and business technology support.
          </p>

          <div className="grid">
            {services.map((service) => (
              <div className="card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section darkBand">
          <h2>Common Install And Support Types</h2>
          <p>
            ArmorTech Solutions focuses on the systems that keep homes, rentals,
            offices, and businesses connected.
          </p>

          <div className="pills">
            {installTypes.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>How A Solutions Job Works</h2>
          <p>
            Installs and troubleshooting jobs need a clean scope. ArmorTech keeps
            it simple: understand the goal, confirm the path, quote the work,
            complete the job, test the system, and document what matters.
          </p>

          <div className="grid">
            {processSteps.map((step) => (
              <div className="card" key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section darkBand">
          <h2>Who We Support</h2>
          <p>
            ArmorTech Solutions supports residential, rental, commercial, and
            managed-property technology needs.
          </p>

          <div className="pills">
            {customerTypes.map((customer) => (
              <span key={customer}>{customer}</span>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Data Recovery And Transfer</h2>
          <p>
            ArmorTech Solutions can assist with data transfer, computer migration,
            drive evaluation, file recovery attempts, backup setup, and moving data
            from old devices to new systems.
          </p>

          <div className="splitGrid">
            <div className="card">
              <h3>Data Transfer</h3>
              <p>
                Moving files, folders, photos, documents, bookmarks, user profiles,
                and common data from one device to another.
              </p>
            </div>

            <div className="card">
              <h3>Recovery Attempts</h3>
              <p>
                Evaluation for accessible drives, failing drives, corrupted data,
                external drives, old computers, and backup options. Severe physical
                drive damage may require a specialty cleanroom provider.
              </p>
            </div>
          </div>
        </section>

        <section className="section darkBand">
          <h2>My Account Access</h2>
          <p>
            Customers use one ArmorTech account across the ecosystem. Payment
            history, service history, pending orders, mail-in orders, Protect
            memberships, Device Vault, quotes, and invoices connect through
            armortechrepair.com.
          </p>

          <div className="pills">
            {accountItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="heroButtons">
            <a href="https://armortechrepair.com/login">Open My Account</a>
            <a href="https://armortechrepair.com/portal">Customer Portal</a>
          </div>
        </section>

        <section className="notice">
          <h2>Important Solutions Notice</h2>
          <p>
            ArmorTech Solutions provides technology installation, troubleshooting,
            cabling, configuration, and support services. Scope, access, materials,
            equipment compatibility, building conditions, and existing wiring can
            affect final pricing.
          </p>
          <p>
            ArmorTech Solutions does not perform licensed electrical work, fire alarm
            work, life-safety system installation, or regulated specialty work unless
            properly licensed or coordinated through an approved qualified provider.
          </p>
          <p>
            For camera, Ethernet, WiFi, and low-voltage projects, site conditions
            may require a site visit before a final quote can be provided.
          </p>
        </section>

        <section className="cta">
          <p className="eyebrow">Request A Clean Scope</p>
          <h2>Need Cameras, Ethernet, WiFi, AV, Data, Or Business Tech Help?</h2>
          <p>
            Send the location, photos, device count, what you need installed or fixed,
            and what outcome you want. ArmorTech will help determine the right service path.
          </p>

          <div className="contactBox">
            <a href="https://armortechrepair.com/contact">Request Quote</a>
            <a href="mailto:service@armortechrepair.com">Email ArmorTech</a>
            <a href="tel:2282155595">Call 228-215-5595</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <h3>ArmorTech Solutions</h3>
        <p>
          Security cameras, Ethernet wiring, WiFi, low-voltage installs, AV setup,
          smart home support, commercial technology, data transfer, and system troubleshooting.
        </p>

        <div className="footerLinks">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href="https://iq.armortechrepair.com">Repair Diagnosis</a>
        </div>

        <p className="finePrint">
          © 2026 ArmorTech Solutions. All rights reserved.
        </p>
      </footer>
    </>
  );
}