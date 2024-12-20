function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="w-full bg-blue-600 p-4 text-white text-center">
        <h1 className="text-3xl md:text-6xl">Spring Sport Flow</h1>
      </header>
      <main className="flex-1 p-4 flex flex-col items-center justify-center">
        <div className="max-w-md w-full bg-white p-8 rounded shadow">
          <h2 className="text-2xl mb-4 text-center">Welcome</h2>
          <p className="text-center mb-8">Manage your sports activities with ease.</p>
          <div className="flex flex-col space-y-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
              Log In
            </button>
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">
              Register
            </button>
          </div>
        </div>
      </main>
      <footer className="w-full bg-blue-600 p-4 text-white text-center">
        <p>&copy; 2023 Spring Sport Flow</p>
      </footer>
    </div>
  );
}

export default App;