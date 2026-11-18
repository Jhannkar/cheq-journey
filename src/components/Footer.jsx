export default function Footer({ text }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <p className="site-footer__text">{text}</p>
      </div>
    </footer>
  )
}
