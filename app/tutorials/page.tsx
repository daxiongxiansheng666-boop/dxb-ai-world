import Link from 'next/link';

export const metadata = {
  title: 'AI教程 - 大熊的AI世界',
  description: '系统化的AI学习路径，从入门到精通',
};

export default function TutorialsPage() {
  const tutorials = [
    {
      title: 'AI助手入门',
      description: '从零开始学习使用AI助手，掌握基本操作和提示词技巧。',
      icon: '🤖',
      color: 'from-cyan-500 to-blue-500',
      level: '入门',
      duration: '2小时',
      lessons: 8,
      popular: true
    },
    {
      title: 'RAG知识库构建',
      description: '学习如何构建个人知识库，让AI记住你的所有资料。',
      icon: '🧠',
      color: 'from-pink-500 to-purple-500',
      level: '进阶',
      duration: '4小时',
      lessons: 12,
      popular: true
    },
    {
      title: 'AI编程实战',
      description: '利用AI辅助编程，提升开发效率的完整指南。',
      icon: '💻',
      color: 'from-yellow-500 to-orange-500',
      level: '中级',
      duration: '3小时',
      lessons: 10,
      popular: false
    },
    {
      title: '提示词工程',
      description: '掌握提示词技巧，让AI输出更精准、更有价值。',
      icon: '✨',
      color: 'from-green-500 to-teal-500',
      level: '入门',
      duration: '1.5小时',
      lessons: 6,
      popular: true
    },
    {
      title: 'AI Agents开发',
      description: '构建自主AI代理，实现自动化任务处理。',
      icon: '🚀',
      color: 'from-red-500 to-pink-500',
      level: '高级',
      duration: '6小时',
      lessons: 15,
      popular: false
    },
    {
      title: '多模态AI应用',
      description: '结合图像、语音、文本的AI应用开发。',
      icon: '🎨',
      color: 'from-indigo-500 to-purple-500',
      level: '高级',
      duration: '5小时',
      lessons: 12,
      popular: false
    }
  ];

  const categories = ['全部', '入门', '中级', '进阶', '高级'];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm mb-6">
            📚 学习中心
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">AI教程</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            系统化的AI学习路径，从入门到精通，助你快速掌握AI技能。
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

        {/* Tutorials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial) => (
            <div key={tutorial.title} className="glass-card rounded-xl overflow-hidden card-hover group relative">
              {tutorial.popular && (
                <div className="absolute top-4 right-4">
                  <span className="tag-pink">热门</span>
                </div>
              )}
              
              <div className={`h-32 bg-gradient-to-r ${tutorial.color} flex items-center justify-center relative`}>
                <span className="text-6xl opacity-30">{tutorial.icon}</span>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="px-2 py-1 bg-black/50 rounded text-xs text-white">
                    {tutorial.level}
                  </span>
                  <span className="px-2 py-1 bg-black/50 rounded text-xs text-white">
                    ⏱️ {tutorial.duration}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {tutorial.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {tutorial.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">
                    📖 {tutorial.lessons} 节课
                  </span>
                  <Link href={`/tutorials/${tutorial.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                    开始学习 →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">更多教程正在制作中...</p>
          <Link href="/dashboard/create" className="cyber-button">
            贡献教程
          </Link>
        </div>
      </div>
    </div>
  );
}
