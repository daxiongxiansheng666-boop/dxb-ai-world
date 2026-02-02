import Link from 'next/link';

export const metadata = {
  title: '项目案例 - 大熊的AI世界',
  description: '真实AI项目实战经验分享',
};

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Jarvis AI助手',
      description: '基于Clawdbot的私人AI助手，支持多平台接入（TG/微信/飞书），具备完整的记忆系统和自动化能力。',
      fullDescription: `Jarvis是一个功能完整的私人AI助手系统，基于Clawdbot框架构建。

主要功能：
• 多平台支持：Telegram、微信、飞书、钉钉
• 长期记忆：RAG知识库，记住所有对话和资料
• 自动化：定时任务、系统监控、自动备份
• 插件系统：可扩展的功能模块

技术栈：
• Clawdbot（AI框架）
• Node.js + TypeScript
• Google Calendar/Drive API
• 多平台Webhook集成`,
      tags: ['AI助手', 'Clawdbot', '多平台', '自动化'],
      tech: ['Node.js', 'TypeScript', 'Google API'],
      image: '/images/jarvis.png',
      gradient: 'from-cyan-500 to-blue-500',
      features: ['多平台接入', '长期记忆', '自动化', '插件系统'],
      demo: '#',
      github: '#'
    },
    {
      title: '智能知识库系统',
      description: 'RAG增强的个人知识管理系统，连接你的所有笔记和文档，实现智能检索和问答。',
      fullDescription: `基于RAG（检索增强生成）技术的个人知识管理系统。

主要功能：
• 文档索引：支持Markdown、PDF、Word等格式
• 智能检索：语义搜索，找到最相关的内容
• 知识问答：基于知识库的回答，准确率高达90%+
• 自动同步：与Notion、Obsidian等工具联动

技术栈：
• Clawdbot + RAG
• Qdrant向量数据库
• OpenAI/Claude Embeddings`,
      tags: ['RAG', '知识管理', '向量数据库'],
      tech: ['RAG', 'Qdrant', 'Embeddings'],
      image: '/images/knowledge.png',
      gradient: 'from-pink-500 to-purple-500',
      features: ['语义搜索', '自动索引', '知识问答'],
      demo: '#',
      github: '#'
    },
    {
      title: 'AI代码审查助手',
      description: '自动审查代码质量，提供优化建议的智能工具，集成到CI/CD流程中。',
      fullDescription: `AI驱动的代码审查工具，帮助团队提高代码质量。

主要功能：
• 自动化审查：PR提交后自动审查
• 多维度检查：代码风格、安全、性能、最佳实践
• 优化建议：具体的改进代码建议
• 趋势分析：代码质量趋势报告

技术栈：
• Claude Code API
• GitHub Actions
• Node.js`,
      tags: ['AI', '代码审查', 'CI/CD'],
      tech: ['Claude', 'GitHub Actions', 'Node.js'],
      image: '/images/codereview.png',
      gradient: 'from-yellow-500 to-orange-500',
      features: ['自动审查', '安全检测', '性能优化'],
      demo: '#',
      github: '#'
    },
    {
      title: 'AI内容生成平台',
      description: '支持文章、广告、文案等多种内容类型的AI生成平台，集成多个AI模型。',
      fullDescription: `企业级AI内容生成平台，支持多种内容类型和AI模型。

主要功能：
• 多模型支持：Claude、GPT、Midjourney等
• 模板系统：预设多种内容模板
• 批量生成：大规模内容生产
• 版权管理：内容版权追踪

技术栈：
• Next.js + React
• 多API集成
• PostgreSQL`,
      tags: ['内容生成', '多模型', '企业级'],
      tech: ['Next.js', '多API', 'PostgreSQL'],
      image: '/images/content.png',
      gradient: 'from-green-500 to-teal-500',
      features: ['多模型', '模板库', '批量生成'],
      demo: '#',
      github: '#'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm mb-6">
            🚀 项目展示
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">项目案例</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            真实AI项目实战经验分享，包含完整的技术方案和源码。
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={project.title} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}>
              {/* Image/Icon */}
              <div className={`w-full lg:w-1/2 ${project.gradient} rounded-2xl p-8 flex items-center justify-center aspect-video relative overflow-hidden group`}>
                <div className="absolute inset-0 bg-black/20" />
                <span className="text-8xl relative z-10 group-hover:scale-110 transition-transform duration-500">
                  {project.gradient.includes('cyan') ? '🤖' : 
                   project.gradient.includes('pink') ? '🧠' :
                   project.gradient.includes('yellow') ? '💻' : '📝'}
                </span>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-4">{project.title}</h2>
                <p className="text-gray-400 mb-6">{project.description}</p>
                
                <div className="glass-card rounded-lg p-4 mb-6">
                  <h4 className="text-cyan-400 text-sm font-semibold mb-2">主要功能</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature} className="text-gray-300 text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs text-gray-500">#{t}</span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Link href={project.demo} className="cyber-button">
                    查看演示
                  </Link>
                  <Link href={project.github} className="px-6 py-2 border border-gray-600 rounded-lg text-gray-400 hover:border-cyan-400 hover:text-cyan-400 transition-colors">
                    源码
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
