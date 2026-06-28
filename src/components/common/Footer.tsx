/**
 * Footer 组件
 * 网站底部页脚
 */

import { userProfile } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* 社交链接 */}
        <div className="flex justify-center gap-6 mb-8">
          {userProfile.social.github && (
            <a
              href={userProfile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition text-sm"
            >
              GitHub
            </a>
          )}
          {userProfile.social.linkedIn && (
            <a
              href={userProfile.social.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition text-sm"
            >
              LinkedIn
            </a>
          )}
          {userProfile.social.twitter && (
            <a
              href={userProfile.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition text-sm"
            >
              Twitter
            </a>
          )}
          <a
            href={`mailto:${userProfile.email}`}
            className="text-secondary hover:text-accent transition text-sm"
          >
            Email
          </a>
        </div>

        {/* 分隔线 */}
        <div className="border-t border-border my-8"></div>

        {/* 版权信息 */}
        <div className="text-center text-sm text-secondary">
          <p>© {currentYear} {userProfile.name}. All rights reserved.</p>
          <p className="mt-2 text-xs">
            Built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Next.js
            </a>
            {" "}and{" "}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Tailwind CSS
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
