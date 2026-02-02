'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { name: '首页', href: '/' },
    { 
      name: '探索', 
      href: '#',
      dropdown: [
        { name: 'AI教程', href: '/tutorials' },
        { name: '项目案例', href: '/projects' },
        { name: '知识库', href: '/knowledge' },
      ]
    },
    { name: 'AI工具', href: '/tools' },
    { name: '动态', href: '/blog' },
    { name: '关于', href: '/about' },
  ];

  const userMenu = [
    { name: '个人中心', href: '/dashboard' },
    { name: '我的文章', href: '/dashboard/posts' },
    { name: '设置', href: '/settings' },
    { name: '退出', href: '/logout' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 neon-border rounded-lg flex items-center justify-center">
              <span className="text-2xl">🤖</span>
            </div>
            <span className="neon-text text-xl font-bold">大熊的AI世界</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <button className="px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors flex items-center space-x-1">
                    <span>{item.name}</span>
                    <svg className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link href={item.href} className="px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors">
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 glass-card rounded-lg shadow-xl py-2 animate-fade-in">
                    {item.dropdown.map((dropItem) => (
                      <Link
                        key={dropItem.name}
                        href={dropItem.href}
                        className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-colors"
                      >
                        {dropItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search */}
            <button className="p-2 text-gray-400 hover:text-cyan-400 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* User Menu */}
            <div className="relative group">
              <button className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-pink-500 flex items-center justify-center">
                  <span className="text-sm">🐻</span>
                </div>
                <span>大熊</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className="absolute right-0 top-full mt-2 w-48 glass-card rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {userMenu.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/login" className="cyber-button">
              登录
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-400"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-card border-t border-white/10">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <hr className="my-3 border-white/10" />
            <Link href="/login" className="block px-4 py-2 text-center cyber-button" onClick={() => setIsOpen(false)}>
              登录
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
