export default function Navbar() {
  return (
    <header className="w-full bg-[#FAF9F6] border-b border-gray-100 px-6 py-4 flex items-center justify-between">

      {/* Logo Redirect to Home */}
      <a
        href="/"
        className="text-2xl font-serif font-semibold italic text-gray-900 tracking-wide hover:opacity-80 transition-opacity"
      >
        Sennelier & Son
      </a>

      <div className="flex items-center space-x-8">

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium tracking-wider text-gray-600">
          <a
            href="/Pigments"
            className="hover:text-gray-900 transition-colors uppercase"
          >
            Pigments
          </a>

          <a
            href="/brushes"
            className="hover:text-gray-900 transition-colors uppercase"
          >
            Brushes
          </a>

          <a
            href="/papers"
            className="hover:text-gray-900 transition-colors uppercase"
          >
            Papers
          </a>

          <a
            href="/archieve"
            className="hover:text-gray-900 transition-colors uppercase"
          >
            Archive
          </a>
        </nav>

        {/* Search Button Redirect to Home */}
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

        {/* Basket Button Redirect to Home */}
        <a
          href="/"
          className="flex items-center space-x-2 bg-[#090B0E] hover:bg-gray-800 text-white px-5 py-2.5 rounded-full transition-colors text-sm font-medium"
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
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>

          <span>Basket (0)</span>
        </a>

      </div>
    </header>
  );
}