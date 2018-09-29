import React from 'react'
import Alert from './alert'
import StackedCard from './stackedCard'

export default () => (
  <div className="container mx-auto flex flex-col">
    <div className="text-2xl text-center bg-grey-light p-4">
      parcel, react, and tailwind
    </div>
    <Alert color="green" title="Ok!" message="Everything is good." />
    <Alert color="red" title="Oh noes!" message="Put out the fire!" />
    <Alert color="orange" title="Warning..." message="Network is slow." />
    <Alert color="blue" title="Already added" message="No action required" />
    <StackedCard />
  </div>
)
