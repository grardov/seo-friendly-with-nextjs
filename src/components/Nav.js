import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="items">
        <li className="item">
          <Link href="/"><a>Home</a></Link>
        </li>
        <li className="item">
          <Link href="/about"><a>About</a></Link>
        </li>
        <li className="item">
          <Link href="/contact"><a>Contact</a></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
