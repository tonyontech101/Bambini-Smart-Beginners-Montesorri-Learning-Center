export default function Teacher() {
  return (
    <div id="teacher" className="grid items-center gap-8 md:grid-cols-2">
      <div className="rounded-3xl bg-gradient-to-br from-violet-100 to-fuchsia-100 p-10 text-center text-5xl">
        👩‍🏫
      </div>
      <div>
        <h2 className="mb-3 text-2xl font-bold text-[var(--navy)]">Meet Our Teacher</h2>
        <p className="text-gray-600 leading-8 italic border-l-4 border-violet-400 pl-4 mb-4">
          &quot;I believe every child has a unique spark. My goal is to provide the environment where that spark becomes a flame of curiosity.&quot;
        </p>
        <p className="text-gray-600 leading-8">
          Our lead teacher is passionate about early childhood education and is dedicated to creating a nurturing learning environment.
        </p>
        <div className="mt-4 p-4 bg-violet-50 rounded-2xl border border-violet-100">
           <span className="font-bold text-violet-700">💡 Teacher Fun Fact:</span> 
           <p className="text-sm text-gray-600">Teacher Sarah loves collecting unique seashells for our sensory play activities!</p>
        </div>
      </div>
    </div>
  )
}