import Avatar from 'components/Avatar'

function App() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-blue-600">
            Welcome to
          </h2>
          <p className="my-3 text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Our Spaceship
          </p>
          <p className="text-xl text-gray-400">
            We&rsquo;re Currently Building The New Wave 🛠️
          </p>
          <p className="text-xl text-blue-500">Be Ready.</p>
          <p className="mt-5">
            <Avatar
              size="large"
              src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80"
            />
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
