import HeaderMark, { monthsAtCheq } from './HeaderMark.jsx'
import Navigation from './Navigation.jsx'

/**
 * Fixed header. It rides transparent over the dark hero, then settles into
 * a light glass bar once the document begins. The hairline underneath is the
 * read-progress meter.
 */
export default function Header({ navItems, activeId, onNavigate, scrolled, progress }) {
  return (
    <header className={`site-header ${scrolled ? 'is-settled' : ''}`}>
      <div className="site-header__inner">
        <a
          className="site-header__brand"
          href="#top"
          onClick={(event) => onNavigate?.(event, 'top')}
          aria-label={`Awe-inspiring ${monthsAtCheq()} months — back to top`}
        >
          <HeaderMark size={24} tone={scrolled ? 'dark' : 'light'} />
        </a>
        <Navigation items={navItems} activeId={activeId} onNavigate={onNavigate} />
      </div>
      <div
        className="site-header__progress"
        style={{ '--progress': `${progress}%` }}
        aria-hidden="true"
      />
    </header>
  )
}
