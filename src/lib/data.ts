/**
 * 初始数据
 * 包含示例论文、项目、用户信息
 */

import { Paper, Project, UserProfile, CheckinRecord } from "./types";

// ============ 用户信息 ============
export const userProfile: UserProfile = {
  name: "Alina Zhang",
  title: "AI Researcher & PhD Student",
  bio: "Passionate about Natural Language Processing, Machine Learning, and building intelligent systems. Currently exploring the intersection of deep learning and language understanding.",
  email: "alina@example.com",
  social: {
    github: "https://github.com/iamalinazhang",
    linkedIn: "https://linkedin.com/in/alina-zhang",
    twitter: "https://twitter.com/alina_zhang",
    website: "https://alina-portfolio.vercel.app",
  },
  avatar: "/avatar.jpg",
};

// ============ 论文数据 ============
export const papers: Paper[] = [
  {
    id: "paper-001",
    title: "Attention Is All You Need",
    authors: ["Vaswani, A.", "Shazeer, N.", "Parmar, N.", "et al."],
    category: "AI",
    tags: ["Transformer", "NLP", "Architecture", "Deep Learning"],
    abstract:
      "The dominant sequence transduction models are based on complex recurrent or convolutional neural networks in an encoder-decoder configuration. The best performing models also connect the encoder and decoder through an attention mechanism. We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely. Experiments on two machine translation tasks show these models to be superior in quality while being more parallelizable and requiring significantly less time to train.",
    link: "https://arxiv.org/abs/1706.03762",
    publishDate: "2017-06-12",
    conference: "NeurIPS 2017",
    notes:
      "Revolutionary paper introducing the Transformer architecture. Key insight: Self-Attention mechanism enables parallel processing. Foundation for BERT, GPT, and modern LLMs.",
    rating: 5,
    addedDate: "2024-01-15",
    lastModified: "2024-01-20",
  },
  {
    id: "paper-002",
    title: "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
    authors: ["Devlin, J.", "Chang, M. W.", "Lee, K.", "Toutanova, K."],
    category: "NLP",
    tags: ["BERT", "Pre-training", "Language Model", "Transfer Learning"],
    abstract:
      "We introduce BERT, a new method of pre-training language representations which obtains state-of-the-art results on a wide array of Natural Language Processing (NLP) tasks. Unlike recent language representation models, BERT is designed to pre-train deep bidirectional representations by jointly conditioning on both left and right context in all layers.",
    link: "https://arxiv.org/abs/1810.04805",
    publishDate: "2018-10-11",
    conference: "NAACL 2019",
    notes:
      "Groundbreaking work on bidirectional pre-training. Demonstrates the power of transfer learning in NLP. Widely adopted in industry.",
    rating: 5,
    addedDate: "2024-01-16",
    lastModified: "2024-01-18",
  },
  {
    id: "paper-003",
    title: "Language Models are Unsupervised Multitask Learners",
    authors: ["Radford, A.", "Wu, J.", "Child, R.", "et al."],
    category: "NLP",
    tags: ["GPT-2", "Language Model", "Zero-shot Learning"],
    abstract:
      "Natural language processing tasks are typically approached with supervised learning on task-specific datasets. We demonstrate that language models begin to learn these tasks without any explicit supervision when trained on a new dataset of Internet text assemblies of unprecedented scale. By analyzing the models learned representations and continuing to train it on additional downstream tasks as examples of test set domain adaptation we show that a 1.5B parameter language model trained on WebText is able to achieve state-of-the-art or competitive performance on the majority of tested language tasks.",
    link: "https://d4mucfpksywv.cloudfront.net/better-language-models/language-models.pdf",
    publishDate: "2019-02-14",
    conference: "OpenAI Blog",
    notes:
      "GPT-2 paper. Shows that large-scale language models can perform various tasks without fine-tuning. Foundation for GPT-3 and future models.",
    rating: 4,
    addedDate: "2024-01-17",
    lastModified: "2024-01-19",
  },
  {
    id: "paper-004",
    title: "An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale",
    authors: ["Dosovitskiy, A.", "Beyer, L.", "Kolesnikov, A.", "et al."],
    category: "CV",
    tags: ["Vision Transformer", "ViT", "Image Classification"],
    abstract:
      "While the Transformer architecture has become the de-facto standard for natural language processing tasks, its applications to computer vision remain limited. In vision, attention is either applied in conjunction with convolutional networks, or used to replace certain components of convolutional networks while keeping their overall structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to sequences of image patches can perform very well on image classification tasks.",
    link: "https://arxiv.org/abs/2010.11929",
    publishDate: "2020-10-26",
    conference: "ICLR 2021",
    notes:
      "Vision Transformer (ViT) - applies Transformers directly to image patches. Shows CNNs are not necessary for vision. Opens new research directions.",
    rating: 5,
    addedDate: "2024-01-18",
    lastModified: "2024-01-20",
  },
  {
    id: "paper-005",
    title: "ImageNet-21K Pretraining for the Masses",
    authors: ["Ridnik, T.", "Lawen, H.", "Noy, A.", "et al."],
    category: "CV",
    tags: ["ImageNet", "Pre-training", "Computer Vision"],
    abstract:
      "ImageNet-1K is the de-facto standard for evaluating image classification models. However, pretraining on ImageNet-1K does not provide enough diversity for learning robust visual representations in the wild. In this work, we present ImageNet-21K, a large-scale annotated image dataset with 21,000 classes and 14M images collected from the open Internet. We show that models pretrained on ImageNet-21K achieve significantly better transfer learning performance on ImageNet-1K and other downstream tasks.",
    link: "https://arxiv.org/abs/2104.14294",
    publishDate: "2021-04-29",
    conference: "CVPR 2021",
    notes:
      "Large-scale pretraining dataset. Demonstrates importance of dataset diversity in computer vision.",
    rating: 4,
    addedDate: "2024-01-19",
    lastModified: "2024-01-20",
  },
];

// ============ 项目数据 ============
export const projects: Project[] = [
  {
    id: "project-001",
    title: "Neural Machine Translation System",
    description:
      "Built an end-to-end neural machine translation system using Transformer architecture. Achieved BLEU score of 28.5 on WMT14 English-German dataset.",
    technologies: ["Python", "PyTorch", "Transformer", "NLP"],
    githubLink: "https://github.com/iamalinazhang/nmt-transformer",
    demoLink: "https://nmt-demo.vercel.app",
    startDate: "2023-06-01",
    endDate: "2023-12-31",
    featured: true,
  },
  {
    id: "project-002",
    title: "Document Classification Engine",
    description:
      "Developed a document classification system using fine-tuned BERT model. Supports 50+ document categories with 95%+ accuracy.",
    technologies: ["Python", "BERT", "FastAPI", "PostgreSQL"],
    githubLink: "https://github.com/iamalinazhang/doc-classifier",
    startDate: "2023-09-15",
    endDate: "2024-03-30",
    featured: true,
  },
  {
    id: "project-003",
    title: "Sentiment Analysis Dashboard",
    description:
      "Real-time sentiment analysis dashboard for social media data. Processes 10K+ tweets/hour with 92% accuracy.",
    technologies: ["React", "Node.js", "TensorFlow", "Redis"],
    githubLink: "https://github.com/iamalinazhang/sentiment-dashboard",
    demoLink: "https://sentiment-dashboard.vercel.app",
    startDate: "2024-01-01",
    featured: false,
  },
  {
    id: "project-004",
    title: "Question Answering System",
    description:
      "Built a QA system using dense retrieval and reader models. Achieves F1 score of 85.2 on SQuAD 2.0 benchmark.",
    technologies: ["Python", "PyTorch", "DPR", "ELECTRA"],
    githubLink: "https://github.com/iamalinazhang/qa-system",
    startDate: "2023-04-01",
    endDate: "2023-10-15",
    featured: true,
  },
  {
    id: "project-005",
    title: "Named Entity Recognition Tool",
    description:
      "NER tool using state-of-the-art sequence labeling models. Supports multiple languages and achieves 94% F1 score.",
    technologies: ["Python", "spaCy", "Transformers", "FastAPI"],
    githubLink: "https://github.com/iamalinazhang/ner-tool",
    startDate: "2023-07-01",
    endDate: "2024-02-28",
    featured: false,
  },
];

// ============ 打卡记录示例 ============
export const checkinRecords: CheckinRecord[] = [
  {
    date: "2024-06-01",
    paperId: "paper-001",
    paperTitle: "Attention Is All You Need",
  },
  {
    date: "2024-06-02",
    paperId: "paper-002",
    paperTitle: "BERT: Pre-training of Deep Bidirectional Transformers",
  },
  {
    date: "2024-06-03",
    paperId: "paper-003",
    paperTitle: "Language Models are Unsupervised Multitask Learners",
  },
  {
    date: "2024-06-05",
    paperId: "paper-004",
    paperTitle: "An Image is Worth 16x16 Words",
  },
  {
    date: "2024-06-06",
    paperId: "paper-005",
    paperTitle: "ImageNet-21K Pretraining for the Masses",
  },
];
