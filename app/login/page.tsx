'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 处理登录逻辑
    console.log('Login:', form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="glass-card rounded-2xl p-8 neon-border">
          {/* Header */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 neon-border rounded-xl flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <span className="neon-text text-xl font-bold">大熊的AI世界</span>
            </Link>
            <h1 className="text-2xl font-bold text-white">欢迎回来</h1>
            <p className="text-gray-400 mt-2">登录你的账户</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-300 text-sm mb-2">邮箱</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-2">密码</label>
              <input
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-gray-400 text-sm">记住我</span>
              </label>
              <Link href="/forgot-password" className="text-cyan-400 hover:text-cyan-300 text-sm">
                忘记密码?
              </Link>
            </div>

            <button type="submit" className="w-full cyber-button">
              登录
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-white/10" />
            <span className="px-4 text-gray-500 text-sm">或</span>
            <div className="flex-grow border-t border-white/10" />
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <span className="text-xl mr-2">🔗</span>
              <span className="text-gray-300 text-sm">GitHub</span>
            </button>
            <button className="flex items-center justify-center px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <span className="text-xl mr-2">🔵</span>
              <span className="text-gray-300 text-sm">Google</span>
            </button>
          </div>

          {/* Footer */}
          <p className="text-center text-gray-400 mt-6">
            还没有账户?{' '}
            <Link href="/register" className="text-cyan-400 hover:text-cyan-300">
              立即注册
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
