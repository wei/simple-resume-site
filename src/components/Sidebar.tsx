import type { NavItem, Personal } from "../types";
import { GitHubIcon, GlobeIcon, LinkedInIcon, MailIcon } from "./Icons";

interface SidebarProps {
  personal: Personal;
  navItems: NavItem[];
}

function Sidebar({ personal, navItems }: SidebarProps) {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <div className="flex items-center gap-4">
          <img
            src={personal.picture}
            alt={personal.name}
            className="rounded-full h-20 w-20 object-cover border-2 border-slate-200"
          />
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-800">{personal.name}</h1>
            <p className="hidden mt-2 max-w-sm leading-normal lg:block">{personal.tagline}</p>
          </div>
        </div>
        <p className="mt-4 max-w-md leading-normal lg:hidden">{personal.tagline}</p>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {navItems.map((item) => (
              <li key={item.name}>
                <a className="group flex items-center py-3" href={item.href}>
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-400 transition-all group-hover:w-16 group-hover:bg-slate-800 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-800">
                    {item.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <ul className="ml-1 mt-8 flex items-center" aria-label="Contact links">
        {personal.website && (
          <li className="mr-5 shrink-0">
            <a
              className="block hover:text-slate-800 transition-colors"
              href={personal.website}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Website (opens in a new tab)"
            >
              <span className="sr-only">Website</span>
              <GlobeIcon className="size-5" />
            </a>
          </li>
        )}
        {personal.linkedin && (
          <li className="mr-5 shrink-0">
            <a
              className="block hover:text-slate-800 transition-colors"
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn (opens in a new tab)"
            >
              <span className="sr-only">LinkedIn</span>
              <LinkedInIcon className="size-5" />
            </a>
          </li>
        )}
        {personal.email && (
          <li className="mr-5 shrink-0">
            <a
              className="block hover:text-slate-800 transition-colors"
              href={`mailto:${personal.email}`}
              aria-label={`Email ${personal.name}`}
            >
              <span className="sr-only">Email</span>
              <MailIcon className="size-5" />
            </a>
          </li>
        )}
        {personal.github && (
          <li className="mr-5 shrink-0">
            <a
              className="block hover:text-slate-800 transition-colors"
              href={personal.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub (opens in a new tab)"
            >
              <span className="sr-only">GitHub</span>
              <GitHubIcon className="size-5" />
            </a>
          </li>
        )}
      </ul>
    </header>
  );
}

export default Sidebar;
