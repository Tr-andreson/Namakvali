

export const Banner = () => {
  return (
    <div className="relative">
      <img
        className="w-full h-[90vh] object-cover transition-transform duration-1000 ease-out"
        src="./banner/3.jpg"
        alt="Uttarakhand landscape banner"
      />
      <div className="absolute bottom-62 left-6 lg:left-36">
        <h1 className="text-white text-3xl lg:text-7xl font-bold text-shadow-black">Explore The Escense of
          <span className="text-[#fcc306] pl-4">
            Uttarakhand
          </span>
        </h1>
        <p className="text-white mt-8">Bring home the flavors of uthrakhand</p>
      </div>
    </div>
  )
}
