import Link from 'next/link';

export const metadata = {
  title: 'AI工具箱 - 大熊的AI世界',
  description: '集成多种AI工具，对话、图像、代码一应俱全',
};

export default function ToolsPage() {
  const tools = [
    {
      name: 'AI对话',
      description: '与AI进行智能对话，支持多种模型和场景。',
      icon: '💬',
      color: 'from-cyan-500 to-blue-500',
      status: 'ready',
      features: ['多模型切换', '对话历史', '快捷指令']
    },
    {
      name: '图像生成',
      description: '利用AI生成图像，支持多种风格和尺寸。',
      icon: '🎨',
      color: 'from-pink-500 to-purple-500',
      status: 'ready',
      features: ['多种风格', '尺寸可选', '批量生成']
    },
    {
      name: '代码助手',
      description: 'AI辅助编程，提供代码建议和优化。',
      icon: '💻',
      color: 'from-yellow-500 to-orange-500',
      status: 'ready',
      features: ['代码补全', 'Bug修复', '代码解释']
    },
    {
      name: '文档分析',
      description: '上传文档，AI自动分析和总结内容。',
      icon: '📄',
      color: 'from-green-500 to-teal-500',
      status: 'coming',
      features: ['PDF解析', '内容总结', '问答交互']
    },
    {
      name: '语音合成',
      description: '将文本转换为自然语音，支持多种音色。',
      icon: '🎤',
      color: 'from-red-500 to-pink-500',
      status: 'coming',
      features: ['多种音色', '情感调节', '批量合成']
    },
    {
      name: '视频处理',
      description: 'AI驱动的视频分析和处理工具。',
      icon: '🎬',
      color: 'from-indigo-500 to-purple-500',
      status: 'coming',
      features: ['视频摘要', '场景检测', '字幕生成']
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm mb-6">
            工具中心
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">AI工具箱</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            集成多种AI工具，满足你的各种需求。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {tools.map((tool) => (
            <div key={tool.name} className="glass-card rounded-xl overflow-hidden card-hover group relative">
              {tool.status === 'coming' && (
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded">
                    即将上线
                  </span>
                </div>
              )}
              
              <div className={`h-40 bg-gradient-to-r ${tool.color} flex items-center justify-center relative`}>
                <span className="text-7xl group-hover:scale-110 transition-transform duration-500">{tool.icon}</span>
                {tool.status === 'ready' && (
                  <div className="absolute bottom-4 right-4 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                )}
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{tool.description}</p>
                
                <div className="space-y-1 mb-4">
                  {tool.features.map((feature) => (
                    <div key={feature} className="text-gray-500 text-xs flex items-center">
                      <span className="w-3 h-3 mr-1 text-cyan-400">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>

                {tool.status === 'ready' ? (
                  <Link href={`/tools/${tool.name.toLowerCase().replace(/\s+/g, '-')}`} className="cyber-button w-full text-center block">
                    立即使用
                  </Link>
                ) : (
                  <span className="w-full py-3 rounded-lg border border-gray-600 text-gray-500 cursor-not-allowed block text-center">
                    即将上线
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
