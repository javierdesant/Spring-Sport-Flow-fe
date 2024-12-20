function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <header className="w-full bg-forest-green-600 p-4 text-center text-white">
        <h1 className="text-3xl md:text-6xl">Spring Sport Flow</h1>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center p-4">
        <div className="w-full max-w-md rounded bg-white p-8 shadow">
          <h2 className="mb-4 text-center text-2xl">Welcome</h2>
          <p className="mb-8 text-center">
            Manage your sports activities with ease.
          </p>
          <div className="flex flex-col space-y-4">
            <button className="rounded bg-forest-green px-4 py-2 text-white hover:bg-forest-green-200">
              Log In
            </button>
            <button className="rounded bg-golden-yellow-700 px-4 py-2 text-white hover:bg-golden-yellow-400">
              Register
            </button>
          </div>
        </div>
      </main>
      <footer className="w-full bg-forest-green-600 p-4 text-center text-white">
        <p>&copy; 2023 Spring Sport Flow</p>
      </footer>
    </div>
  );
}

export default App;
