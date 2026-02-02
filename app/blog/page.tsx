import Link from 'next/link';

export const metadata = {
  title: '动态 - 大熊的AI世界',
  description: '分享AI前沿技术、实战经验和最佳实践',
};

export default function BlogPage() {
  const posts = [
    {
      title: '如何用Claude Code打造你的AI助手',
      excerpt: '从零开始配置你的私人AI助手，包含完整教程和配置文件。让AI成为你的第二大脑，提升工作和学习效率。',
      date: '2024-01-15',
      category: '教程',
      readTime: '8分钟',
      views: 1234,
      tags: ['AI助手', 'Clawdbot', '教程']
    },
    {
      title: 'RAG实战：构建个人知识库',
      excerpt: '利用检索增强生成技术，让AI真正理解你的专业知识。从数据准备到向量数据库，再到RAG管道搭建的完整指南。',
      date: '2024-01-12',
      category: '技术',
      readTime: '12分钟',
      views: 892,
      tags: ['RAG', '向量数据库', '知识管理']
    },
    {
      title: 'AI编程助手对比评测',
      excerpt: 'Claude Code、Copilot、Cline三大AI编程工具横向评测，从功能、性能、价格等多个维度进行对比分析。',
      date: '2024-01-10',
      category: '评测',
      readTime: '15分钟',
      views: 2341,
      tags: ['AI编程', '工具评测', '对比']
    },
    {
      title: '提示词工程完全指南',
      excerpt: '掌握提示词技巧，让AI输出更精准、更有价值。从基础到高级，包含50+实用提示词模板。',
      date: '2024-01-08',
      category: '教程',
      readTime: '20分钟',
      views: 3456,
      tags: ['提示词', 'Prompt Engineering', '技巧']
    },
    {
      title: 'AI Agent开发入门',
      excerpt: '从零开始学习开发自主AI代理，掌握Agent的基本架构和开发流程。包含完整的代码示例和项目模板。',
      date: '2024-01-05',
      category: '技术',
      readTime: '18分钟',
      views: 1567,
      tags: ['AI Agent', '自动化', '开发']
    },
    {
      title: '我的AI工具箱2024',
      excerpt: '分享我日常使用的AI工具清单，包含效率工具、编程助手、写作工具等，每个工具都有详细的使用心得。',
      date: '2024-01-03',
      category: '分享',
      readTime: '10分钟',
      views: 2789,
      tags: ['工具分享', '效率', 'AI工具']
    }
  ];

  const categories = ['全部', '教程', '技术', '评测', '分享', '随笔'];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm mb-6">
            📝 博客
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">最新动态</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            分享AI前沿技术、实战经验和最佳实践。
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-6 py-2 rounded-full transition-colors ${
                cat === '全部'
                  ? 'bg-cyan-500 text-black'
                  : 'glass-card text-gray-400 hover:text-cyan-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.title} className="glass-card rounded-xl overflow-hidden card-hover">
              <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-pink-500/20 flex items-center justify-center">
                <span className="text-6xl">📝</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="tag">{post.category}</span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold text-white mb-3 hover:text-cyan-400 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs text-gray-500">#{tag}</span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-gray-500 text-sm">{post.date}</span>
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-500 text-sm">👁 {post.views}</span>
                    <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                      阅读更多 →
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-12">
          <button className="px-4 py-2 rounded-lg bg-white/5 text-gray-400 hover:text-cyan-400 transition-colors">
            ← 上一页
          </button>
          <button className="px-4 py-2 rounded-lg bg-cyan-500 text-black font-medium">1</button>
          <button className="px-4 py-2 rounded-lg bg-white/5 text-gray-400 hover:text-cyan-400 transition-colors">2</button>
          <button className="px-4 py-2 rounded-lg bg-white/5 text-gray-400 hover:text-cyan-400 transition-colors">3</button>
          <button className="px-4 py-2 rounded-lg bg-white/5 text-gray-400 hover:text-cyan-400 transition-colors">
            下一页 →
          </button>
        </div>
      </div>
    </div>
  );
}
