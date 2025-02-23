import PirateDatingApp from './components/PirateDatingApp'

function App() {
  return (
    <PirateDatingApp type={window.location.pathname.includes('grindarr') ? 'grindr' : 'tinder'} />
  )
}

export default App 