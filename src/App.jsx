import Header from "./components/header";
import Hero from "./components/Hero";
import Arena from "./components/Arena";
import Characters from "./components/Characters";
import Footer from "./components/footer";
export const App = () => {
  return (
    <div className=''>

      <Header/>
      <Hero />
      <Characters />
      <Arena />
      <Footer />

      
    </div>
  )
}

export default App