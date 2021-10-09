import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default ({ color = 'red', title, message, remove }) => (
  <div
    className={`mt-2 bg-${color}-300 border border-${color}-500 text-${color}-800 px-4 py-3 rounded relative`}
    role="alert"
    id={`${color}-toast`}
  >
    <strong className="font-bold">{title}</strong>
    <span className="block sm:inline pl-4">{message}</span>
    <span
      className="absolute pin-t pin-b pin-r px-4 py-3 cursor-pointer"
      onClick={remove}
      title="remove"
    >
      <FontAwesomeIcon icon={faTimes} />
    </span>
  </div>
)
