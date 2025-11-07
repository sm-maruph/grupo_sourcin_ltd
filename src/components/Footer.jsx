import React from "react";

/**
 * Footer
 * - Responsive 4-column footer matching the provided design.
 * - Uses your semantic utilities: bg-primary-gradient / bg-primary / bg-neutral,
 *   text-heading, text-body, text-hover, bg-accent, etc.
 * - Accessible: landmarks, aria labels, keyboard-focus styles.
 *
 * Usage: <Footer />
 */

export default function Footer() {
  return (
    <footer className="bg-primary dark:bg-secondary text-heading transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand + Description */}
          <div>
            <a href="/" className="inline-flex items-center gap-3 mb-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-md bg-accent text-heading font-heading">
                <img
                  src="https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/logo/logo.jpeg" // 🔗 Replace with your own logo URL
                  alt="Company Logo"
                  className="w-10 h-10 rounded-full object-contain"
                />
              </div>
              <span className="sr-only">Grupo Sourcing Ltd.</span>
            </a>

            <p className="text-sm text-body max-w-sm">
              We are specialized in Knitwear, Sweater and Woven items. All are
              composite top class factories with all modern facilities and
              internationally certified.
            </p>

            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover:bg-accent transition-colors text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Twitter"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22 5.92a8.18 8.18 0 01-2.36.65 4.12 4.12 0 001.8-2.27 8.22 8.22 0 01-2.6.99 4.11 4.11 0 00-7 3.75A11.65 11.65 0 013 4.8a4.11 4.11 0 001.27 5.48 4.05 4.05 0 01-1.86-.51v.05a4.11 4.11 0 003.29 4.03 4.13 4.13 0 01-1.85.07 4.12 4.12 0 003.84 2.86A8.25 8.25 0 012 19.54a11.63 11.63 0 006.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.35-.01-.53A8.36 8.36 0 0022 5.92z" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover:bg-accent transition-colors text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Facebook"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 4.99 3.66 9.12 8.44 9.95v-7.04H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34v7.04C18.34 21.19 22 17.06 22 12.07z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover:bg-accent transition-colors text-pink-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.5A4.5 4.5 0 1016.5 13 4.5 4.5 0 0012 8.5zm5.25-2.75a1.125 1.125 0 11-1.125-1.125A1.125 1.125 0 0117.25 5.75z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Get Started */}
          <nav aria-label="Get started" className="flex flex-col gap-2">
            <h3 className="text-sm font-heading mb-2">Get Started</h3>
            <a
              href="#"
              className="text-body text-sm hover:text-hover hover:underline"
            >
              Knit Showroom
            </a>
            <a
              href="#"
              className="text-body text-sm hover:text-hover hover:underline"
            >
              Woven Showroom
            </a>
            <a
              href="#"
              className="text-body text-sm hover:text-hover hover:underline"
            >
              Sample Section
            </a>
            <a
              href="#"
              className="text-body text-sm hover:text-hover hover:underline"
            >
             Merchandising
            </a>
          </nav>

          {/* Column 3: About */}
          <nav aria-label="About" className="flex flex-col gap-2">
            <h3 className="text-sm font-heading mb-2">About</h3>
            <a
              href="#"
              className="text-body text-sm hover:text-hover hover:underline"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-body text-sm hover:text-hover hover:underline"
            >
              Clients
            </a>
            <a
              href="#"
              className="text-body text-sm hover:text-hover hover:underline"
            >
              Compliance
            </a>
            <a
              href="#"
              className="text-body text-sm hover:text-hover hover:underline"
            >
              Ethics
            </a>
          </nav>

          {/* Column 4: Locate Us */}
          <address className="not-italic text-sm text-body space-y-2">
            <h3 className="text-sm font-heading mb-2">Locate Us</h3>

            <p className="text-body text-sm">
             House 256, Road: 03 (East Side) DOHS
Baridhara, Dhaka-1206, Bangladesh 
            </p>

            <p className="text-body text-sm">
              <a
                href="mailto:zamal@gruposourcing.com"
                className="hover:text-hover hover:underline"
              >
                zamal@gruposourcing.com
              </a>
            </p>

            <p className="text-body text-sm">
              <a
                href="tel:+8801711556131"
                className="hover:text-hover hover:underline"
              >
                +88 01711556131
              </a>
            </p>

            <p className="text-body text-sm">
              <a
                href="tel:+8801711556131"
                className="hover:text-hover hover:underline"
              >
                +88 01711556131
              </a>
            </p>
          </address>
        </div>

        <div className="mt-10 border-t border-accent pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-body">
            &copy; {new Date().getFullYear()} GRUPOSOURCINGLTD. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-sm text-body hover:text-hover hover:underline"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-body hover:text-hover hover:underline"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
