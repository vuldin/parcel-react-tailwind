import { Subscribe } from 'unstated'

import Alert from './alert'
import StackedCard from './stackedCard'
import alertsContainer from './alertsContainer'

export default () => {
  return (
    <Subscribe to={[alertsContainer]}>
      {(alertsContainer) => (
        <div className="container mx-auto flex flex-col">
          <header className="text-2xl text-center bg-grey-300 p-4">
            parcel, react, tailwind, unstated, cypress
          </header>
          <section id="notifications">
            {alertsContainer.state.alerts.map((alert, i) => (
              <Alert
                key={i}
                remove={() => alertsContainer.removeIndex(i)}
                color={alert.color}
                title={alert.title}
                message={alert.message}
              />
            ))}
          </section>
          <main className="mx-auto">
            <StackedCard />
          </main>
          <footer className="text-2xl text-center bg-grey-light mt-4 p-4">
            footer content
          </footer>
        </div>
      )}
    </Subscribe>
  )
}
