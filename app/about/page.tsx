import Link from 'next/link';

export const metadata = {
  title: '关于 - 大熊的AI世界',
  description: '关于大熊和他的AI世界',
};

export default function AboutPage() {
  const timeline = [
    { year: '2023', title: '开始探索AI', description: '第一次接触ChatGPT，开启AI探索之旅' },
    { year: '2024', title: '搭建知识库', description: '构建个人RAG知识库，实现长期记忆' },
    { year: '2024', title: 'Jarvis诞生', description: '基于Clawdbot打造私人AI助手' },
    { year: '2025', title: 'AI世界上线', description: '大熊的AI世界正式发布' },
  ];

  const skills = [
    { name: 'AI/ML', level: 85, color: 'from-cyan-500 to-blue-500' },
    { name: 'TypeScript/Node.js', level: 90, color: 'from-pink-500 to-purple-500' },
    { name: 'React/Next.js', level: 88, color: 'from-yellow-500 to-orange-500' },
    { name: 'Python', level: 75, color: 'from-green-500 to-teal-500' },
    { name: 'Cloud/DevOps', level: 70, color: 'from-red-500 to-pink-500' },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-20">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-pink-500 flex items-center justify-center text-6xl mb-6">
            🐻
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">大熊</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            AI创业者 | 独立开发者 | 终身学习者
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">GitHub</a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Telegram</a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Email</a>
          </div>
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">我的故事</h2>
            <div className="space-y-6">
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">🤖 与AI的结缘</h3>
                <p className="text-gray-400 text-sm">
                  2023年初，第一次接触ChatGPT，被其强大的能力震撼。从那时起，
                  开始深入研究AI技术，并将其应用到工作和生活中。
                </p>
              </div>
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-semibold text-pink-400 mb-2">🧠 智慧大脑</h3>
                <p className="text-gray-400 text-sm">
                  受到《思考的快与慢》和《第二大脑》启发，开始构建个人知识库。
                  利用RAG技术，让AI真正理解我的专业知识。
                </p>
              </div>
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">🚀 未来愿景</h3>
                <p className="text-gray-400 text-sm">
                  致力于打造下一代AI辅助工具，帮助更多人掌握AI，
                  用AI提升效率和创造力。
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">技能图谱</h2>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${skill.level}%`, background: `linear-gradient(90deg, ${skill.color.replace('from-', '').split(' to-').join(',')})` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 glass-card rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">技术栈</h3>
              <div className="flex flex-wrap gap-2">
                {['Clawdbot', 'Next.js', 'TypeScript', 'React', 'Node.js', 'Python', 'PostgreSQL', 'Docker', 'RAG', 'Vector DB'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-gray-400 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-10 text-center">时间线</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 to-pink-500" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={item.year} className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  <div className="w-5/12" />
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 rounded-full bg-cyan-500 border-4 border-black z-10" />
                  </div>
                  <div className="w-5/12 glass-card rounded-xl p-4">
                    <span className="text-cyan-400 text-sm">{item.year}</span>
                    <h4 className="text-white font-semibold mt-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="glass-card rounded-2xl p-8 text-center neon-border">
          <h2 className="text-2xl font-bold text-white mb-4">联系方式</h2>
          <p className="text-gray-400 mb-6">
            合作、咨询或交流AI技术，欢迎联系我
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="cyber-button">
              联系我
            </Link>
            <a href="mailto:hello@dxb.ai" className="px-6 py-3 border border-gray-600 rounded-lg text-gray-400 hover:border-cyan-400 hover:text-cyan-400 transition-colors">
              发送邮件
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
