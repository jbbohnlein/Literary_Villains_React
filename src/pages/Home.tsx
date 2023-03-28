import Background from '../assets/images/rainbow_shelf.jpg'

function Home() {
  return (
    <div
      style={{ backgroundImage: `url(${ Background })` }}
      className='flex flex-row justify-center bg-cover bg-fixed bg-center bg-no-repeat'
      id='background-image'
      >
        <div className='flex place-items-start h-screen m-40'>
          <h1 className='bg-slate-700 h-fit p-12 text-yellow-300 border border-yellow-300 text-center rounded text-4xl'>Welcome to Best Book
            <p className='flex justify-center text-xl leading-loose'>Your online app for storing your
              favorite books
            </p>
          </h1>

          {/* TODO: Create the search bar here */}
          
        </div>
    </div>
  )
}

export default Home