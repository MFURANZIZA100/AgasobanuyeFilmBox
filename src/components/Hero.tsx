export  default function Hero() {
  return (
    <div className="relative">
      <div className="h-[500px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxhZnJpY2FuJTIwY2luZW1hJTIwbW92aWUlMjBwb3N0ZXJzfGVufDB8fHx8MTc0NzIwMDcxM3ww&ixlib=rb-4.1.0" 
          alt="Cinema" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/30 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Murakaza neza kuri <br />
              <span className="text-red-500">AgasobanuyeFilmbox</span>
            </h1>
            <p className="text-lg max-w-2xl mb-8">
              Urubuga ruzwi cyane mu gutanga amafilime menshi yagiye ashyirwaho 
              ibisobanuro mu Kinyarwanda. Murishimire amafilime y'amoko atandukanye.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#movies" className="bg-red-900 hover:bg-red-800 text-white px-6 py-3 rounded-md font-medium inline-block text-center">
                Browse Movies
              </a>
              <a href="/categories" className="bg-transparent border-2 border-white hover:bg-white hover:text-red-900 text-white px-6 py-3 rounded-md font-medium inline-block text-center transition-colors">
                View Categories
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 