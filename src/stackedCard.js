import img from '../media/card-top.jpg'

export default function StackedCard() {
  return (
    <div
      id="card"
      className="mt-2 self-center max-w-sm rounded overflow-hidden shadow-lg"
    >
      <img className="w-full" src={img} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-grey-800 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-grey-300 rounded-full px-3 py-1 text-sm font-semibold text-grey-800 mr-2">
          #photography
        </span>
        <span className="inline-block bg-grey-300 rounded-full px-3 py-1 text-sm font-semibold text-grey-800 mr-2">
          #travel
        </span>
        <span className="inline-block bg-grey-300 rounded-full px-3 py-1 text-sm font-semibold text-grey-800">
          #winter
        </span>
      </div>
    </div>
  )
}
