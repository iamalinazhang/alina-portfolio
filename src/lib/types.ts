/**
 * 全局类型定义
 * 包含：论文、项目、打卡、用户数据的类型声明
 */

// ============ 论文相关类型 ============
export interface Paper {
  // 基础信息
  id: string; // 唯一标识（UUID）
  title: string; // 论文标题
  authors: string[]; // 作者列表

  // 分类与标签
  category: "AI" | "ML" | "NLP" | "CV" | "Other"; // 主分类
  tags: string[]; // 自定义标签（如 'Transformer', 'BERT'）

  // 论文元数据
  abstract: string; // 摘要
  link?: string; // 论文链接（arXiv、ACL 等）
  publishDate: string; // 发表日期（YYYY-MM-DD）
  conference?: string; // 会议名称

  // 用户笔记
  notes?: string; // 用户笔记（Markdown）
  rating?: number; // 评分（1-5）

  // 记录信息
  addedDate: string; // 添加到列表的日期
  lastModified: string; // 最后修改日期
}

// ============ 打卡相关类型 ============
export interface CheckinRecord {
  date: string; // YYYY-MM-DD 格式
  paperId: string; // 关联的论文 ID
  paperTitle: string; // 论文标题快照
}

export interface CheckinStats {
  totalCount: number; // 总打卡数
  currentStreak: number; // 当前连续打卡天数
  longestStreak: number; // 最长连续打卡天数
  checkinsByMonth: Record<string, number>; // 按月份统计（YYYY-MM: count）
  checkinsByYear: Record<string, number>; // 按年份统计（YYYY: count）
  lastCheckinDate?: string; // 最后打卡日期
}

// ============ 项目相关类型 ============
export interface Project {
  id: string; // 唯一标识
  title: string; // 项目名称
  description: string; // 项目描述
  technologies: string[]; // 技术栈
  githubLink: string; // GitHub 仓库链接
  demoLink?: string; // 在线演示链接
  imageUrl?: string; // 项目图片
  startDate: string; // 开始日期（YYYY-MM-DD）
  endDate?: string; // 结束日期（YYYY-MM-DD，如果仍在进行则为空）
  featured: boolean; // 是否作为特色项目展示
}

// ============ 用户相关类型 ============
export interface UserProfile {
  name: string; // 姓名
  title: string; // 职位/身份（如 "PhD Student in AI"）
  bio: string; // 个人简介
  email: string; // 邮箱
  social: {
    github?: string; // GitHub 链接
    linkedIn?: string; // LinkedIn 链接
    twitter?: string; // Twitter 链接
    website?: string; // 个人网站
  };
  avatar?: string; // 头像 URL
}
