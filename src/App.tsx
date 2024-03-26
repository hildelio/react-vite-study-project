import AsideBar from './components/AsideBar'
import Footer from './components/Footer'
import Header from './components/Header'
import "./css/App.css"

function App() {
  return (
    <div className='app'>
      <Header className='header' />
      <AsideBar className='sidebar' />
      <main className='main'>componente principal vai ser colocado aqui</main>
      <Footer className='footer' />
    </div>
  )
}

export default App
