import React from 'react'

export default () => (
  <div className="mt-2 self-center max-w-sm rounded overflow-hidden shadow-lg">
    <img
      className="w-full"
      src="https://tailwindcss.com/img/card-top.jpg"
      alt="Sunset in the mountains"
    />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
      <p className="text-grey-darker text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
        nihil.
      </p>
    </div>
    <div className="px-6 py-4">
      <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
        #photography
      </span>
      <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
        #travel
      </span>
      <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">
        #winter
      </span>
    </div>
  </div>
)
