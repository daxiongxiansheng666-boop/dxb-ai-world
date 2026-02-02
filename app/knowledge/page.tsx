import Link from 'next/link';

export const metadata = {
  title: '知识库 - 大熊的AI世界',
  description: '从Clawdbot同步的智慧大脑知识库',
};

export default function KnowledgePage() {
  const knowledgeCategories = [
    {
      name: '技术文档',
      icon: '📖',
      count: 156,
      description: '编程语言、框架、工具的详细文档和教程',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: '项目资料',
      icon: '📁',
      count: 42,
      description: '个人项目的设计文档、代码规范和架构设计',
      color: 'from-pink-500 to-purple-500'
    },
    {
      name: '思维模型',
      icon: '🧠',
      count: 38,
      description: '决策框架、思考方法和认知模型',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: '灵感想法',
      icon: '💡',
      count: 89,
      description: '随时记录的想法、创意和思考碎片',
      color: 'from-green-500 to-teal-500'
    },
    {
      name: '重要决策',
      icon: '⚖️',
      count: 23,
      description: '重大决策的思考过程和决策依据',
      color: 'from-red-500 to-pink-500'
    },
    {
      name: '人脉资料',
      icon: '👥',
      count: 67,
      description: '联系人信息、沟通记录和关系管理',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const recentUpdates = [
    { title: '影子·商业决策大脑 v2.2', time: '2小时前', type: '更新' },
    { title: 'RAG知识库搭建指南', time: '5小时前', type: '新增' },
    { title: 'AI Agent开发流程', time: '1天前', type: '更新' },
    { title: '系统架构设计原则', time: '2天前', type: '新增' },
    { title: 'Claude Code最佳实践', time: '3天前', type: '更新' },
  ];

  const stats = [
    { value: '415', label: '总条目' },
    { value: '12.3K', label: '总字数' },
    { value: '89%', label: 'AI引用率' },
    { value: '2h', label: '最近更新' },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm mb-6">
            🧠 智慧大脑
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">知识库</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            从Clawdbot同步的智慧大脑，让AI记住你的所有资料。
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card rounded-xl p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {knowledgeCategories.map((cat) => (
            <Link key={cat.name} href={`/knowledge/${cat.name}`} className="glass-card rounded-xl p-6 card-hover group">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${cat.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                {cat.icon}
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {cat.name}
                </h3>
                <span className="text-gray-500 text-sm">{cat.count} 篇</span>
              </div>
              <p className="text-gray-400 text-sm">{cat.description}</p>
            </Link>
          ))}
        </div>

        {/* Recent Updates */}
        <div className="glass-card rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-6">最近更新</h3>
          <div className="space-y-4">
            {recentUpdates.map((update, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg hover:bg-white/5 transition-colors">
                <div className="flex items-center space-x-4">
                  <span className={`w-2 h-2 rounded-full ${update.type === '新增' ? 'bg-green-500' : 'bg-cyan-500'}`} />
                  <span className="text-gray-300">{update.title}</span>
                </div>
                <span className="text-gray-500 text-sm">{update.time}</span>
              </div>
            ))}
          </div>
          <Link href="/knowledge/all" className="block text-center text-cyan-400 hover:text-cyan-300 mt-6 pt-4 border-t border-white/10">
            查看全部 →
          </Link>
        </div>

        {/* Search */}
        <div className="mt-12">
          <div className="glass-card rounded-xl p-8 text-center">
            <h3 className="text-xl font-semibold text-white mb-4">搜索知识库</h3>
            <div className="max-w-xl mx-auto relative">
              <input
                type="text"
                placeholder="输入关键词搜索..."
                className="w-full px-6 py-4 rounded-xl bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              支持语义搜索，AI会理解你的问题并找到最相关的内容
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
