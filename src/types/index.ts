// Core IDE Types
export interface FileEntry {
  name: string
  path: string
  type: 'file' | 'directory'
  size?: number
  lastModified?: Date
  content?: string
}

export interface Project {
  id: string
  name: string
  description?: string
  rootPath: string
  files: FileEntry[]
  createdAt: Date
  updatedAt: Date
}

// AI Provider Types
export interface AIProvider {
  id: string
  name: string
  type: 'openai' | 'anthropic' | 'google' | 'local' | 'custom'
  apiKey?: string
  baseUrl?: string
  models: AIModel[]
  isActive: boolean
}

export interface AIModel {
  id: string
  name: string
  displayName: string
  maxTokens: number
  supportsTools: boolean
  supportsImages?: boolean
  costPer1kTokens?: {
    input: number
    output: number
  }
}

export interface ChatMessage {
  id: string
  role: 'system' | 'user' | 'assistant' | 'tool'
  content: string | ContentPart[]
  timestamp: Date
  toolCalls?: ToolCall[]
  toolCallId?: string
}

export interface ContentPart {
  type: 'text' | 'image'
  text?: string
  imageUrl?: string
}

export interface ToolCall {
  id: string
  type: 'function'
  function: {
    name: string
    arguments: string
  }
}

export interface ToolResult {
  toolCallId: string
  result: any
  error?: string
}

// Editor Types
export interface EditorTab {
  id: string
  path: string
  name: string
  content: string
  isDirty: boolean
  language: string
  isActive: boolean
}

export interface EditorState {
  tabs: EditorTab[]
  activeTabId: string | null
  splitView: boolean
}

// Terminal Types
export interface TerminalSession {
  id: string
  name: string
  workingDirectory: string
  isActive: boolean
  history: string[]
}

// Settings Types
export interface UserSettings {
  theme: 'light' | 'dark' | 'system'
  fontSize: number
  fontFamily: string
  tabSize: number
  wordWrap: boolean
  minimap: boolean
  autoSave: boolean
  aiProvider: string
  apiKeys: Record<string, string>
}

// File System Types
export interface VirtualFileSystem {
  readFile(path: string): Promise<string>
  writeFile(path: string, content: string): Promise<void>
  deleteFile(path: string): Promise<void>
  renameFile(oldPath: string, newPath: string): Promise<void>
  readDirectory(path: string): Promise<FileEntry[]>
  createDirectory(path: string): Promise<void>
  deleteDirectory(path: string, recursive?: boolean): Promise<void>
  exists(path: string): Promise<boolean>
  stat(path: string): Promise<FileEntry>
}

// Tool Types
export interface Tool {
  name: string
  description: string
  parameters: {
    type: 'object'
    properties: Record<string, any>
    required?: string[]
  }
}

export interface ToolContext {
  fileSystem: VirtualFileSystem
  workingDirectory: string
  project: Project
}
