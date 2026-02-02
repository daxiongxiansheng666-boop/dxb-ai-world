import Link from 'next/link';

export default function Footer() {
  const footerLinks = {
    探索: [
      { name: 'AI教程', href: '/tutorials' },
      { name: '项目案例', href: '/projects' },
      { name: '知识库', href: '/knowledge' },
    ],
    工具: [
      { name: 'AI对话', href: '/tools/chat' },
      { name: '图像生成', href: '/tools/image' },
      { name: '代码助手', href: '/tools/code' },
    ],
    关于: [
      { name: '关于我', href: '/about' },
      { name: '联系方式', href: '/contact' },
      { name: '赞助支持', href: '/sponsor' },
    ],
  };

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', href: '#' },
    { name: 'Twitter', icon: '🐦', href: '#' },
    { name: 'Telegram', icon: '✈️', href: '#' },
    { name: 'Email', icon: '📧', href: 'mailto:hello@dxb.ai' },
  ];

  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 neon-border rounded-lg flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <span className="neon-text text-xl font-bold">大熊的AI世界</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              探索AI的无限可能，分享知识与创意，打造下一代智能应用。
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  title={social.name}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2024 大熊的AI世界. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-500 hover:text-cyan-400 text-sm">
              隐私政策
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-cyan-400 text-sm">
              服务条款
            </Link>
            <Link href="/sitemap" className="text-gray-500 hover:text-cyan-400 text-sm">
              网站地图
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
