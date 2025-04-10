export default function VideoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Video</h1>

      <div className="content-area mb-8">
        <p className="mb-6">Video delle edizioni del Premio Aniello De Vita.</p>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Edizione 2023</h2>
          <p className="mb-2">Link alla diretta TV ed 2023</p>
          <div className="bg-gray-200 aspect-video rounded-md flex items-center justify-center mb-4">
            <p className="text-gray-500">Video player 2023</p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Edizione 2024</h2>
          <p className="mb-2">Link alla diretta TV ed 2024</p>
          <div className="bg-gray-200 aspect-video rounded-md flex items-center justify-center mb-4">
            <p className="text-gray-500">Video player 2024</p>
          </div>
        </div>
      </div>
    </div>
  )
}

