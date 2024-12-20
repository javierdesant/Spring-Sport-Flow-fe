function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="w-full bg-forest-green-600 p-4 text-white text-center">
        <h1 className="text-3xl md:text-6xl">Spring Sport Flow</h1>
      </header>
      <main className="flex-1 p-4 flex flex-col items-center justify-center">
        <div className="max-w-md w-full bg-white p-8 rounded shadow">
          <h2 className="text-2xl mb-4 text-center">Welcome</h2>
          <p className="text-center mb-8">Manage your sports activities with ease.</p>
          <div className="flex flex-col space-y-4">
            <button className="bg-forest-green text-white py-2 px-4 rounded hover:bg-forest-green-200">
              Log In
            </button>
            <button className="bg-golden-yellow-700 text-white py-2 px-4 rounded hover:bg-golden-yellow-400">
              Register
            </button>
          </div>
        </div>
      </main>
      <footer className="w-full bg-forest-green-600 p-4 text-white text-center">
        <p>&copy; 2023 Spring Sport Flow</p>
      </footer>
    </div>
  );
}

export default App;