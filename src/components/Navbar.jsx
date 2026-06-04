export default function Navbar() {
  return (
    <header className="w-full bg-[#FAF9F6] border-b border-gray-100 px-6 py-4 flex items-center justify-between">

      {/* Logo */}
      <a
        href="/"
        className="text-2xl font-serif font-semibold italic text-gray-900 tracking-wide hover:opacity-80 transition-opacity"
      >
        Sennelier & Son
      </a>

      <div className="flex items-center space-x-8">

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium tracking-wider text-gray-600">
          <a href="/Pigments" className="hover:text-gray-900 transition-colors uppercase">
            Pigments
          </a>

          <a href="/brushes" className="hover:text-gray-900 transition-colors uppercase">
            Brushes
          </a>

          <a href="/papers" className="hover:text-gray-900 transition-colors uppercase">
            Papers
          </a>

          <a href="/archieve" className="hover:text-gray-900 transition-colors uppercase">
            Archive
          </a>
        </nav>

        {/* Search */}
        <a
          href="/"
          className="flex items-center space-x-2 text-sm font-medium text-gray-800 hover:text-black transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.603 10.601Z"
            />
          </svg>

          <span>Search</span>
        </a>

      </div>
    </header>
  );
}