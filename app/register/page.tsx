'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 处理注册逻辑
    console.log('Register:', form);
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
            <h1 className="text-2xl font-bold text-white">创建账户</h1>
            <p className="text-gray-400 mt-2">加入AI世界，开启智能之旅</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-300 text-sm mb-2">昵称</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="大熊"
                required
              />
            </div>

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

            <div>
              <label className="block text-gray-300 text-sm mb-2">确认密码</label>
              <input
                type="password"
                value={form.confirmPassword}
                onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="flex items-start">
              <input type="checkbox" className="mt-1 mr-2" required />
              <span className="text-gray-400 text-sm">
                我已阅读并同意{' '}
                <Link href="/terms" className="text-cyan-400 hover:text-cyan-300">服务条款</Link>
                {' '}和{' '}
                <Link href="/privacy" className="text-cyan-400 hover:text-cyan-300">隐私政策</Link>
              </span>
            </div>

            <button type="submit" className="w-full cyber-button">
              创建账户
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-gray-400 mt-6">
            已有账户?{' '}
            <Link href="/login" className="text-cyan-400 hover:text-cyan-300">
              立即登录
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
