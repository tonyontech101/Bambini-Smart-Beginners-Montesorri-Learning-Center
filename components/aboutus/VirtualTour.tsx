export default function VirtualTour() {
  return (
    <div id="tour" className="text-center space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-[var(--navy)] mb-2">
          🏫 Take a Virtual Tour
        </h2>
        <p className="mx-auto max-w-2xl text-gray-600 leading-7">
          Explore our prepared environment from the comfort of your home. 
          See how our classrooms are designed to inspire independence and curiosity.
        </p>
      </div>

      {/* Portrait Video Container */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-[400px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
          <video 
            className="w-full h-full object-cover"
            controls
            playsInline
            autoPlay
            loop
            poster="/images/tour-thumbnail.jpg" // Optional: add a thumbnail image
          >
            <source src="/videos/tour.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Trust-Building Overlay Tag */}
          
        </div>
      </div>
    </div>
  )
}