import Link from 'next/link';

export default function Home() {
  const features = [
    {
      icon: '🧠',
      title: '智慧大脑',
      description: '基于RAG的知识库，让AI记住你的所有资料',
      href: '/knowledge',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: '🤖',
      title: 'AI工具箱',
      description: '集成多种AI工具，对话、图像、代码一应俱全',
      href: '/tools',
      color: 'from-pink-500 to-purple-500'
    },
    {
      icon: '📚',
      title: 'AI教程',
      description: '从入门到精通的系统化AI学习路径',
      href: '/tutorials',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: '🚀',
      title: '项目案例',
      description: '真实AI项目实战经验分享',
      href: '/projects',
      color: 'from-green-500 to-teal-500'
    }
  ];

  const stats = [
    { value: '100+', label: 'AI教程' },
    { value: '50+', label: '项目案例' },
    { value: '10k+', label: '访问量' },
    { value: '99.9%', label: '可用性' },
  ];

  const recentPosts = [
    {
      title: '如何用Claude Code打造你的AI助手',
      excerpt: '从零开始配置你的私人AI助手，包含完整教程和配置文件。',
      date: '2024-01-15',
      category: '教程',
      readTime: '8分钟'
    },
    {
      title: 'RAG实战：构建个人知识库',
      excerpt: '利用检索增强生成技术，让AI真正理解你的专业知识。',
      date: '2024-01-12',
      category: '技术',
      readTime: '12分钟'
    },
    {
      title: 'AI编程助手对比评测',
      excerpt: 'Claude Code、Copilot、Cline三大AI编程工具横向评测。',
      date: '2024-01-10',
      category: '评测',
      readTime: '15分钟'
    }
  ];

  const projects = [
    {
      title: 'Jarvis AI助手',
      description: '基于Clawdbot的私人AI助手，支持多平台接入。',
      tags: ['AI助手', 'Clawdbot', 'Telegram'],
      link: '#',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: '智能知识库系统',
      description: 'RAG增强的个人知识管理系统，连接你的所有笔记。',
      tags: ['RAG', '向量数据库', '知识管理'],
      link: '#',
      gradient: 'from-pink-500 to-purple-500'
    },
    {
      title: 'AI代码审查助手',
      description: '自动审查代码质量，提供优化建议的智能工具。',
      tags: ['AI', '代码审查', '自动化'],
      link: '#',
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm mb-6">
              🚀 欢迎来到大熊的AI世界
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">探索AI的</span>
            <br />
            <span className="neon-text">无限可能</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            分享AI前沿技术、实战经验和最佳实践，
            帮助你快速掌握AI工具，打造智能应用。
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/tutorials" className="cyber-button pulse-glow">
              开始学习
            </Link>
            <Link href="/tools" className="px-8 py-3 text-cyan-400 hover:text-white transition-colors">
              探索工具 →
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">
              <span className="gradient-text">核心功能</span>
            </h2>
            <p className="text-gray-400 mt-4">全方位AI解决方案，助力你的智能之旅</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <Link
                key={feature.title}
                href={feature.href}
                className="glass-card rounded-xl p-6 card-hover group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="section-title">
                <span className="gradient-text">最新文章</span>
              </h2>
              <p className="text-gray-400 mt-4">了解AI最新动态和技术趋势</p>
            </div>
            <Link href="/blog" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              查看全部 →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article key={post.title} className="glass-card rounded-xl overflow-hidden card-hover">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="tag">{post.category}</span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{post.date}</span>
                    <span className="text-cyan-400 text-sm group-hover:underline">阅读更多 →</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">
              <span className="gradient-text">项目展示</span>
            </h2>
            <p className="text-gray-400 mt-4">真实AI项目实战经验分享</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="glass-card rounded-xl overflow-hidden card-hover">
                <div className={`h-32 bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                  <span className="text-5xl opacity-30">🚀</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs text-gray-500">#{tag}</span>
                    ))}
                  </div>
                  <Link href={project.link} className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                    了解更多 →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/projects" className="cyber-button">
              查看全部项目
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card rounded-2xl p-12 neon-border">
            <h2 className="text-3xl font-bold text-white mb-4">
              准备好开启你的<span className="neon-text">AI之旅</span>了吗？
            </h2>
            <p className="text-gray-400 mb-8">
              加入大熊的AI世界，与志同道合的伙伴一起探索AI的无限可能。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/register" className="cyber-button pulse-glow">
                立即开始
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                了解更多 →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
