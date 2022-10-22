import AboutTitle from '../components/AboutTitle'
import AboutContent from '../components/AboutContent'

export default function about() {
  return (
    <div className="flex flex-col">
      <AboutTitle />
      <AboutContent />
    </div>
  )
}
