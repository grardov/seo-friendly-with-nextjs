import Nav from "../src/components/Nav"
import '../styles.css';

export default function App({ Component, pageProps }) {
  return (
    <div className="container">
      <Nav />
      <div className="wrapper">
        <Component { ...pageProps } />
      </div>
    </div>
  )
}
