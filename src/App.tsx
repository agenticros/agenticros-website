import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import QuickStart from './components/QuickStart'
import Features from './components/Features'
import AgentTools from './components/AgentTools'
import DeploymentModes from './components/DeploymentModes'
import TryIt from './components/TryIt'
import Packages from './components/Packages'
import WorksWith from './components/WorksWith'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bg-deep text-text-primary font-body">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <QuickStart />
        <Features />
        <AgentTools />
        <DeploymentModes />
        <TryIt />
        <Packages />
        <WorksWith />
        <Footer />
      </main>
    </div>
  )
}

export default App
