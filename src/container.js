import Alert from './Alert'
import StackedCard from './StackedCard'

const alerts = [
  { color: 'green', title: 'Ok!', message: 'Everything is good.' },
  { color: 'red', title: 'Oh noes!', message: 'Put out the fire!' },
  { color: 'yellow', title: 'Warning...', message: 'Network is slow.' },
  {
    color: 'blue',
    title: 'Already added',
    message: 'No action required.',
  },
]

export default function Container() {
  return (
    <div className="container mx-auto flex flex-col">
      <header className="text-2xl text-center bg-grey-300 p-4">
        parcel, react, tailwind, unstated, cypress
      </header>
      <section id="notifications">
        {alerts.map((alert, i) => (
          <Alert
            key={i}
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
  )
}
