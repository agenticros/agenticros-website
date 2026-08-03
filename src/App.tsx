import Header from './components/Header'
import Hero from './components/Hero'
import HeroVideo from './components/HeroVideo'
import HowItWorks from './components/HowItWorks'
import QuickStart from './components/QuickStart'
import ChoosePath from './components/ChoosePath'
import Features from './components/Features'
import Missions from './components/Missions'
import Teleop from './components/Teleop'
import AgentTools from './components/AgentTools'
import DeploymentModes from './components/DeploymentModes'
import Simulation from './components/Simulation'
import TryIt from './components/TryIt'
import Skills from './components/Skills'
import Memory from './components/Memory'
import Packages from './components/Packages'
import Cloud from './components/Cloud'
import WorksWith from './components/WorksWith'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bg-deep text-text-primary font-body">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <HeroVideo />
        <QuickStart />
        <ChoosePath />
        <Features />
        <Missions />
        <AgentTools />
        <DeploymentModes />
        <Simulation />
        <TryIt />
        <Teleop />
        <Memory />
        <Packages />
        <Skills />
        <Cloud />
        <WorksWith />
        <Footer />
      </main>
    </div>
  )
}

export default App
