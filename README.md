# 大熊的AI世界

🚀 个人博客 | AI工具平台 | 知识库

## ✨ 功能特性

- 🎨 **赛博朋克风格** - 科技感十足的霓虹视觉效果
- 📝 **博客系统** - 文章发布、分类、标签管理
- 🚀 **项目展示** - 项目案例分享与演示
- 🛠️ **AI工具箱** - 集成多种AI工具
- 🧠 **知识库** - 从Clawdbot同步的智慧大脑
- 👥 **用户系统** - 注册、登录、个人中心
- 💬 **评论系统** - 互动与反馈

## 🛠️ 技术栈

- **前端**: Next.js 14 + React + TypeScript
- **样式**: Tailwind CSS + 自定义霓虹效果
- **后端**: Next.js API Routes + Prisma
- **数据库**: PostgreSQL + Supabase
- **认证**: NextAuth.js
- **部署**: Vercel

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 配置环境变量

```bash
cp .env.example .env
# 编辑 .env 文件，填入你的配置
```

### 3. 设置数据库

```bash
# 如果使用Supabase，直接在Supabase中创建数据库
# 运行Prisma迁移
npx prisma migrate dev
```

### 4. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000

## 📁 项目结构

```
dxb-ai-world/
├── app/                    # Next.js App Router页面
│   ├── about/            # 关于页面
│   ├── blog/            # 博客
│   ├── dashboard/       # 个人中心
│   ├── knowledge/       # 知识库
│   ├── login/          # 登录
│   ├── projects/       # 项目展示
│   ├── register/       # 注册
│   ├── tools/          # AI工具箱
│   └── page.tsx        # 首页
├── components/           # React组件
├── prisma/              # 数据库Schema
├── public/              # 静态资源
└── styles/              # 全局样式
```

## 🔧 配置说明

### 数据库配置

1. 使用Supabase创建PostgreSQL数据库
2. 获取数据库URL和API Key
3. 填入`.env`文件的`DATABASE_URL`

### Clawdbot集成

1. 获取Clawdbot Gateway Token
2. 填入`.env`文件的`CLAWDBOT_API_TOKEN`

## 📝 主要页面

| 页面 | 路径 | 描述 |
|-----|------|-----|
| 首页 | `/` | 展示网站介绍和最新内容 |
| 博客 | `/blog` | 文章列表和详情 |
| 项目 | `/projects` | 项目案例展示 |
| 工具 | `/tools` | AI工具箱 |
| 知识库 | `/knowledge` | 智慧大脑知识库 |
| 关于 | `/about` | 关于大熊 |
| 个人中心 | `/dashboard` | 用户仪表盘 |
| 登录 | `/login` | 用户登录 |
| 注册 | `/register` | 用户注册 |

## 🎨 设计风格

网站采用赛博朋克风格，包含：

- 霓虹渐变效果
- 玻璃拟态卡片
- 动态光效动画
- 科技感排版

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交Issue和Pull Request！

## 📧 联系方式

- Email: hello@dxb.ai
- Telegram: @dxb_ai

---

Made with 🐻 by 大熊
