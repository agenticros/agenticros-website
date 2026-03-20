import Header from './components/Header'
import Hero from './components/Hero'
import HeroVideo from './components/HeroVideo'
import HowItWorks from './components/HowItWorks'
import QuickStart from './components/QuickStart'
import Features from './components/Features'
import AgentTools from './components/AgentTools'
import DeploymentModes from './components/DeploymentModes'
import TryIt from './components/TryIt'
import Skills from './components/Skills'
import Packages from './components/Packages'
import WorksWith from './components/WorksWith'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bg-deep text-text-primary font-body">
      <Header />
      <main>
        <Hero />
        <HeroVideo />
        <HowItWorks />
        <QuickStart />
        <Features />
        <AgentTools />
        <DeploymentModes />
        <TryIt />
        <Skills />
        <Packages />
        <WorksWith />
        <Footer />
      </main>
    </div>
  )
}

export default App
