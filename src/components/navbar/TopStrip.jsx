import { useState, useRef, useEffect } from "react";

/**
 * Deterministic Icon: color is applied to the <svg> via text-* classes,
 * and stroke/fill is explicitly set on each path to avoid inheritance issues.
 */
function Icon({
  children,
  className = "",
  size = 16,
  title,
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden={title ? "false" : "true"}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export default function TopStrip({
  phone = "+880 1XX-XXX-XXXX",
  email = "info@fzfashion.com",
  address = "House 256, Road: 03 (East Side) DOHS Baridhara,",
  onSearch,
}) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  const handleSearch = () => {
    if (onSearch) onSearch(query);
    setSearchOpen(false);
  };

  const handleKeyToggle = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setSearchOpen((s) => !s);
    }
  };

  return (
    <div className="bg-secondary dark:bg-secondary border-b border-accent text-sm text-body dark:text-body transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          {/* Left: Contact Info */}
          <div className="flex items-center gap-5 min-w-0">
            {/* Phone */}
            <a
              href={`tel:${phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 truncate group"
              aria-label={`Call ${phone}`}
            >
              <Icon className="w-4 h-4 text-primary group-hover:text-accent" title="Phone">
                <path
                  d="M3 5.5a2.5 2.5 0 012.5-2.5h1.2a1 1 0 01.98.79l.44 2.45a1 1 0 01-.27.88L6.9 9.9a16 16 0 006.2 6.2l3.23-1.2a1 1 0 01.88-.27l2.45.44a1 1 0 01.79.98v1.2A2.5 2.5 0 0118.5 21H18A17 17 0 013 5.5z"
                  className="stroke-current"
                  fill="none"
                  strokeWidth="1.2"
                />
              </Icon>
              <span className="text-xs sm:text-sm truncate">{phone}</span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${email}`}
              className="hidden sm:flex items-center gap-2 hover:text-accent transition-colors truncate"
              aria-label={`Email ${email}`}
            >
              <Icon className="w-4 h-4 text-accent" title="Email">
                <path
                  d="M3 6.5v11a2 2 0 002 2h14a2 2 0 002-2v-11"
                  className="stroke-current"
                  fill="none"
                  strokeWidth="1.2"
                />
                <path
                  d="M21 6l-9 6-9-6"
                  className="stroke-current"
                  fill="none"
                  strokeWidth="1.2"
                />
              </Icon>
              <span className="text-xs sm:text-sm truncate">{email}</span>
            </a>

            {/* Location */}
            <div
              className="hidden md:flex items-center gap-2 truncate hover:text-primary transition-colors"
              title={address}
              aria-label={`Address ${address}`}
            >
              <Icon className="w-4 h-4 text-heading dark:text-heading" title="Location">
                <path
                  d="M12 2a6 6 0 00-6 6c0 4.5 6 12 6 12s6-7.5 6-12a6 6 0 00-6-6z"
                  className="stroke-current"
                  fill="none"
                  strokeWidth="0.8"
                />
                <circle cx="12" cy="8" r="1.5" className="fill-current" />
              </Icon>
              <span className="text-xs sm:text-sm truncate">{address}</span>
            </div>
          </div>

          {/* Right: Search + Socials */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="relative">
              <button
                onClick={() => setSearchOpen((s) => !s)}
                onKeyDown={handleKeyToggle}
                aria-expanded={searchOpen}
                aria-controls="topstrip-search-popover"
                aria-label="Toggle search"
                className="p-1 rounded-md hover:bg-neutral dark:hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors"
              >
                <Icon className="w-4 h-4 text-heading dark:text-neutral" title="Search">
                  <path
                    d="M21 21l-4.35-4.35"
                    className="stroke-current"
                    fill="none"
                    strokeWidth="1.2"
                  />
                  <circle
                    cx="11"
                    cy="11"
                    r="6"
                    className="stroke-current"
                    fill="none"
                    strokeWidth="1.2"
                  />
                </Icon>
              </button>

              {searchOpen && (
                <div
                  id="topstrip-search-popover"
                  role="dialog"
                  aria-label="Search"
                  className="absolute right-0 mt-2 w-56 bg-neutral dark:bg-primary border border-accent rounded-md shadow-lg p-2 z-50 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <input
                      ref={inputRef}
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                      placeholder="Search..."
                      aria-label="Search input"
                      className="w-full text-sm bg-transparent outline-none px-2 py-1 text-heading dark:text-neutral"
                    />
                    <button
                      onClick={handleSearch}
                      aria-label="Submit search"
                      className="p-1 rounded-md hover:bg-accent transition-colors"
                    >
                      <Icon className="w-4 h-4 text-heading" title="Submit">
                        <path
                          d="M21 21l-4.35-4.35"
                          className="stroke-current"
                          fill="none"
                          strokeWidth="1.2"
                        />
                        <circle
                          cx="11"
                          cy="11"
                          r="6"
                          className="stroke-current"
                          fill="none"
                          strokeWidth="1.2"
                        />
                      </Icon>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {/* Twitter (X) */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded hover:bg-accent transition-colors"
                aria-label="Open Twitter"
              >
                <Icon className="w-4 h-4 text-blue-400" title="Twitter">
                  <path
                    d="M22 5.92a8.18 8.18 0 01-2.36.65 4.12 4.12 0 001.8-2.27 8.22 8.22 0 01-2.6.99 4.11 4.11 0 00-7 3.75A11.65 11.65 0 013 4.8a4.11 4.11 0 001.27 5.48 4.05 4.05 0 01-1.86-.51v.05a4.11 4.11 0 003.29 4.03 4.13 4.13 0 01-1.85.07 4.12 4.12 0 003.84 2.86A8.25 8.25 0 012 19.54a11.63 11.63 0 006.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.35-.01-.53A8.36 8.36 0 0022 5.92z"
                    className="fill-current"
                  />
                </Icon>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded hover:bg-accent transition-colors"
                aria-label="Open LinkedIn"
              >
                <Icon className="w-4 h-4 text-blue-700" title="LinkedIn">
                  <path
                    d="M4.98 3.5a2.5 2.5 0 11-.02 0zM3 8.98h4v12H3zM9 8.98h3.82v1.64h.05c.53-1 1.84-2.06 3.8-2.06 4.06 0 4.81 2.67 4.81 6.14v7.28h-4v-6.45c0-1.54-.03-3.52-2.15-3.52-2.15 0-2.48 1.68-2.48 3.41v6.56H9z"
                    className="fill-current"
                  />
                </Icon>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded hover:bg-accent transition-colors"
                aria-label="Open Facebook"
              >
                <Icon className="w-4 h-4 text-blue-600" title="Facebook">
                  <path
                    d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 4.99 3.66 9.12 8.44 9.95v-7.04H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34v7.04C18.34 21.19 22 17.06 22 12.07z"
                    className="fill-current"
                  />
                </Icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
