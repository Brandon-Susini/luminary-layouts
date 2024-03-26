import './style/App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App({ Page }) {
  return (
    <div className="app">
      <Header />
        <Page />
      <Footer />
    </div>
  )
}

export default App
