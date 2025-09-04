# 🚀 ThinkBackCode

> Open-source browser-based IDE with AI-powered coding assistance. Built from KiloCode, designed to work like Roo Code but in your browser with flexible API key integration.

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![Monaco Editor](https://img.shields.io/badge/Monaco%20Editor-007ACC?logo=visual-studio-code&logoColor=white)](https://microsoft.github.io/monaco-editor/)

## ✨ Features

- 🎨 **VS Code-like Interface** - Familiar editor experience with Monaco Editor
- 🤖 **AI-Powered Assistance** - Integrated AI chat with multiple provider support
- 📁 **Virtual File System** - Complete file management in your browser
- 💻 **Integrated Terminal** - Full terminal experience with command execution
- 🔑 **Flexible API Keys** - Bring your own API keys from any LLM provider
- 🌐 **Browser-Based** - No installation required, works entirely in your browser
- 🔒 **Secure** - Client-side encryption for API keys and sensitive data
- 📱 **Progressive Web App** - Install as a native app on any device
- 🎯 **Open Source** - Fully open source with Apache 2.0 license

## 🎯 Vision

Transform the way developers code by providing a powerful, AI-enhanced IDE that runs entirely in the browser. ThinkBackCode aims to democratize access to advanced development tools while maintaining the flexibility to use your preferred AI providers.

## 🏗️ Architecture

```
ThinkBackCode Browser IDE
├── 🎨 Frontend (Next.js 15 + TypeScript)
│   ├── Monaco Editor (Code Editor)
│   ├── File Explorer (Virtual File System)
│   ├── Terminal (xterm.js)
│   ├── AI Chat Interface
│   └── Settings Panel
├── 🔧 Core Services
│   ├── File System Abstraction (IndexedDB + OPFS)
│   ├── AI Provider Integration
│   ├── Tool System (File ops, Search, etc.)
│   └── Terminal Execution Environment
├── 🤖 AI Integration Layer
│   ├── Multi-Provider Support
│   ├── API Key Management
│   └── Custom Endpoint Support
└── 🚀 Deployment
    ├── Vercel/Netlify Hosting
    ├── Docker Self-Hosting
    └── Progressive Web App
```

## 🚀 Quick Start

### Try Online (Coming Soon)
Visit [thinkbackcode.dev](https://thinkbackcode.dev) to try ThinkBackCode instantly in your browser.

### Self-Hosting with Docker
```bash
# Clone the repository
git clone https://github.com/TheMailmans/thinkbackcode.git
cd thinkbackcode

# Run with Docker Compose
docker-compose up -d

# Open http://localhost:3000
```

### Development Setup
```bash
# Clone the repository
git clone https://github.com/TheMailmans/thinkbackcode.git
cd thinkbackcode

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## 🤖 Supported AI Providers

ThinkBackCode supports a wide range of AI providers. Simply add your API key to get started:

### Cloud Providers
- **OpenAI** - GPT-4, GPT-3.5-turbo, GPT-4-turbo
- **Anthropic** - Claude 3.5 Sonnet, Claude 3 Haiku, Claude 3 Opus
- **Google** - Gemini Pro, Gemini Flash, Gemini Pro Vision
- **ThinkBackCode** - Native integration with premium models

### Local Providers
- **Ollama** - Run models locally
- **LM Studio** - Local model hosting
- **Custom Endpoints** - Any OpenAI-compatible API

### Enterprise
- **Azure OpenAI** - Enterprise OpenAI deployment
- **AWS Bedrock** - Amazon's AI service
- **Google Vertex AI** - Google Cloud AI platform

## 🔑 API Key Management

ThinkBackCode provides secure, flexible API key management:

- **🔒 Encrypted Storage** - All API keys encrypted with AES-256
- **☁️ Optional Cloud Sync** - Sync settings across devices
- **🔄 Easy Switching** - Switch between providers instantly
- **📊 Usage Tracking** - Monitor your API usage and costs
- **⚡ Multiple Keys** - Use different keys for different projects

## 📚 Documentation

- [📋 Project Roadmap](./PROJECT_ROADMAP.md) - Development phases and timeline
- [🏗️ Architecture Guide](./ARCHITECTURE.md) - Technical architecture details
- [🔌 API Integration](./API_INTEGRATION.md) - Provider integration guide
- [🚀 Deployment Guide](./docs/DEPLOYMENT.md) - Self-hosting instructions
- [🔧 Development Guide](./docs/DEVELOPMENT.md) - Contributing guidelines

## 🛠️ Development Status

**Current Phase**: Architecture & Planning  
**Target Launch**: Q2 2025

### Roadmap Progress
- [x] **Phase 0**: Project Planning & Architecture Design
- [ ] **Phase 1**: Foundation (Weeks 1-2)
  - [ ] Next.js application setup
  - [ ] Monaco Editor integration
  - [ ] Virtual file system (IndexedDB)
  - [ ] Basic AI provider system
- [ ] **Phase 2**: Core Features (Weeks 3-4)
  - [ ] Terminal integration (xterm.js)
  - [ ] Tool system migration
  - [ ] File operations interface
  - [ ] AI chat functionality
- [ ] **Phase 3**: Advanced Features (Weeks 5-6)
  - [ ] Settings & API key management
  - [ ] Plugin system
  - [ ] Performance optimization
  - [ ] Theme support
- [ ] **Phase 4**: Polish & Deploy (Week 7)
  - [ ] UI/UX refinements
  - [ ] Testing & documentation
  - [ ] Production deployment

## 🤝 Contributing

We welcome contributions from the community! ThinkBackCode is built to be open, extensible, and community-driven.

### Ways to Contribute
- 🐛 **Bug Reports** - Help us identify and fix issues
- 💡 **Feature Requests** - Suggest new features and improvements
- 🔧 **Code Contributions** - Submit pull requests
- 📚 **Documentation** - Improve docs and tutorials
- 🎨 **Themes & Plugins** - Create extensions for the community

### Getting Started
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

## 📄 License

ThinkBackCode is licensed under the Apache License 2.0. See [LICENSE](./LICENSE) for details.

## 🙏 Acknowledgments

ThinkBackCode is built upon the excellent work of:
- **[KiloCode](https://github.com/Kilo-Org/kilocode)** - Original VS Code extension
- **[Roo Code](https://github.com/RooCodeInc/Roo-Code)** - Inspiration for browser-based IDE
- **[Monaco Editor](https://microsoft.github.io/monaco-editor/)** - VS Code editor engine
- **[xterm.js](https://xtermjs.org/)** - Terminal emulation
- **[Next.js](https://nextjs.org/)** - React framework

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=TheMailmans/thinkbackcode&type=Date)](https://star-history.com/#TheMailmans/thinkbackcode&Date)

## 📞 Support & Community

- 💬 **Discord** - [Join our Discord server](https://discord.gg/thinkbackcode)
- 🐛 **Issues** - [GitHub Issues](https://github.com/TheMailmans/thinkbackcode/issues)
- 💡 **Discussions** - [GitHub Discussions](https://github.com/TheMailmans/thinkbackcode/discussions)
- 📧 **Email** - [support@thinkbackcode.dev](mailto:support@thinkbackcode.dev)

---

**Built with ❤️ by the ThinkBackCode community**

*Empowering developers with AI-enhanced coding tools that work anywhere, anytime.*
