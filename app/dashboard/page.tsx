'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const metadata = {
  title: '个人中心 - 大熊的AI世界',
  description: '管理你的个人资料和内容',
};

export default function DashboardPage() {
  const router = useRouter();

  // 路由守卫：检查登录状态
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [router]);
  const stats = {
    posts: 12,
    projects: 5,
    tools: 8,
    following: 156
  };

  const recentActivity = [
    { title: '发布了新文章《AI编程助手对比评测》', time: '2小时前' },
    { title: '更新了项目Jarvis AI助手', time: '1天前' },
    { title: '新增工具图像生成', time: '2天前' },
    { title: '修改了个人资料', time: '3天前' },
  ];

  const quickActions = [
    { name: '写文章', icon: '✏️', href: '/dashboard/posts/new', color: 'from-cyan-500 to-blue-500' },
    { name: '加项目', icon: '🚀', href: '/dashboard/projects/new', color: 'from-pink-500 to-purple-500' },
    { name: '传工具', icon: '🛠️', href: '/dashboard/tools/new', color: 'from-yellow-500 to-orange-500' },
    { name: '改设置', icon: '⚙️', href: '/settings', color: 'from-green-500 to-teal-500' },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">个人中心</h1>
            <p className="text-gray-400 mt-1">管理你的内容和设置</p>
          </div>
          <Link href="/settings" className="cyber-button">
            编辑资料
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {Object.entries(stats).map(([key, value]) => (
            <div key={key} className="glass-card rounded-xl p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">{value}</div>
              <div className="text-gray-500 text-sm capitalize">{key === 'tools' ? 'AI工具' : key}</div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {quickActions.map((action) => (
            <Link key={action.name} href={action.href} className="glass-card rounded-xl p-6 card-hover text-center group">
              <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-r ${action.color} flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform`}>
                {action.icon}
              </div>
              <span className="text-gray-300">{action.name}</span>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="glass-card rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4">最近动态</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <span className="text-gray-300 text-sm">{activity.title}</span>
                  <span className="text-gray-500 text-sm">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="glass-card rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4">AI工具使用统计</h2>
            <div className="space-y-4">
              {[
                { name: 'AI对话', usage: '87%', color: 'from-cyan-500 to-blue-500' },
                { name: '代码助手', usage: '65%', color: 'from-pink-500 to-purple-500' },
                { name: '图像生成', usage: '43%', color: 'from-yellow-500 to-orange-500' },
                { name: '文档分析', usage: '28%', color: 'from-green-500 to-teal-500' },
              ].map((stat) => (
                <div key={stat.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300 text-sm">{stat.name}</span>
                    <span className="text-gray-500 text-sm">{stat.usage}</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: stat.usage, background: `linear-gradient(90deg, ${stat.color.replace('from-', '').split(' to-').join(',')})` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Subscriptions */}
        <div className="mt-8 glass-card rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">订阅管理</h2>
          <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-cyan-500/10 to-pink-500/10 border border-cyan-500/30">
            <div>
              <h3 className="text-white font-medium">Clawdbot Pro</h3>
              <p className="text-gray-400 text-sm">专业版订阅，有效期至 2025-02-01</p>
            </div>
            <span className="tag">已激活</span>
          </div>
        </div>
      </div>
    </div>
  );
}
