export default function Home() {
  return (
    <main style={{maxWidth: 960, margin: "40px auto", padding: "0 16px", fontFamily: "system-ui, Arial"}}>
      <h1 style={{fontSize: 36, marginBottom: 12}}>MAXIMAX Multi Services</h1>
      <p style={{fontSize: 18, lineHeight: 1.6}}>
        Immigration • Taxes • Translations — <strong>MAXIMAX ALWAYS MAXIMIZED</strong>
      </p>

      <section style={{marginTop: 32}}>
        <h2>Services</h2>
        <ul>
          <li>Immigration forms & filings</li>
          <li>Tax preparation (personal & business)</li>
          <li>Certified translations (Kreyòl • English • Español)</li>
        </ul>
      </section>

      <section style={{marginTop: 24}}>
        <a href="/contact" style={{padding: "10px 16px", background: "#000", color: "#fff", borderRadius: 8, textDecoration: "none"}}>
          Contact Us
        </a>
        <a href="/upload" style={{padding: "10px 16px", marginLeft: 12, border: "1px solid #000", borderRadius: 8, textDecoration: "none"}}>
          Secure Upload
        </a>
      </section>
    </main>
  );
}
