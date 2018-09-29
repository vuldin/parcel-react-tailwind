import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
//import { library } from '@fortawesome/fontawesome-svg-core'
//library.add(faTimes)

export default ({ color = 'red', title, message }) => (
  <div
    className={`mt-2 bg-${color}-lightest border border-${color}-light text-${color}-dark px-4 py-3 rounded relative`}
    role="alert"
  >
    <strong className="font-bold">{title}</strong>
    <span className="block sm:inline pl-4">{message}</span>
    <span className="absolute pin-t pin-b pin-r px-4 py-3 cursor-pointer">
      <FontAwesomeIcon icon={faTimes} />
    </span>
  </div>
)
