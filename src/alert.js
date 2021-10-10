export default function Alert({ color = 'red', title, message }) {
  return (
    <div
      className={`mt-2 bg-${color}-300 border border-${color}-500 text-${color}-800 px-4 py-3 rounded relative`}
      role="alert"
      id={`${color}-toast`}
    >
      <strong className="font-bold">{title}</strong>
      <span className="block sm:inline pl-4">{message}</span>
    </div>
  )
}
