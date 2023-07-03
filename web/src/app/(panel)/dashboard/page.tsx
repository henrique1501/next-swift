import { Slider } from './components/Slider'
import { metrics } from './metrics'

export default function Dashboard() {
  return (
    <div className="px-4 pt-4 lg:px-0">
      <div className="pl-4">
        <Slider metrics={metrics} />
      </div>
    </div>
  )
}
