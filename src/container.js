import React from 'react'
import Alert from './alert'
import StackedCard from './stackedCard'
import { Subscribe } from 'unstated'
import alertsContainer from './alertsContainer'

export default () => {
  return (
    <Subscribe to={[alertsContainer]}>
      {alertsContainer => (
        <div className="container mx-auto flex flex-col">
          <div className="text-2xl text-center bg-grey-light p-4">
            parcel, react, tailwind, unstated, cypress
          </div>
          {alertsContainer.state.alerts.map((alert, i) => (
            <Alert
              key={i}
              remove={() => alertsContainer.removeIndex(i)}
              color={alert.color}
              title={alert.title}
              message={alert.message}
            />
          ))}
          <StackedCard />
        </div>
      )}
    </Subscribe>
  )
}
