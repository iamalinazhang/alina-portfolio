/**
 * Header 组件
 * 网站顶部导航栏
 */

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  // 导航链接
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/papers", label: "Papers" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <header className="border-b border-border">
      <nav className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / 网站名称 */}
        <Link href="/" className="text-lg font-semibold text-primary hover:text-accent transition">
          Alina Zhang
        </Link>

        {/* 导航链接 */}
        <ul className="flex gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm transition ${
                    isActive
                      ? "text-accent font-semibold"
                      : "text-secondary hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
