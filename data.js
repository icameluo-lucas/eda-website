// EDA Website Mock Data
const courses = [
  {
    id: 1,
    title: "AI剧本创作实务",
    description: "学习如何使用AI工具进行剧本创作，掌握从构思到完成的全流程。",
    instructor: "陈俊铭",
    instructorTitle: "澳门科技大学教授",
    students: 2092,
    lessons: 2,
    rating: 4.8,
    category: "人工智能",
    tags: ["AI", "剧本", "创作"],
    image: "https://via.placeholder.com/300x169/1890ff/ffffff?text=AI剧本创作",
    duration: "2小时"
  },
  {
    id: 2,
    title: "Midjourney 图像生成高级技术",
    description: "深入学习Midjourney的高级功能，掌握专业级图像生成技巧。",
    instructor: "武瑶",
    instructorTitle: "中国传媒大学教师",
    students: 2036,
    lessons: 9,
    rating: 4.9,
    category: "人工智能",
    tags: ["Midjourney", "AI绘画", "图像生成"],
    image: "https://via.placeholder.com/300x169/52c41a/ffffff?text=Midjourney高级",
    duration: "9小时"
  },
  {
    id: 3,
    title: "设计策展：策划元宇宙",
    description: "探索元宇宙中的设计策展理念，学习如何在虚拟空间中策划展览。",
    instructor: "程可槑",
    instructorTitle: "中央美术学院设计学院数码媒体工作室教授",
    students: 4368,
    lessons: 1,
    rating: 4.7,
    category: "设计方法论",
    tags: ["元宇宙", "策展", "设计"],
    image: "https://via.placeholder.com/300x169/faad14/ffffff?text=元宇宙策展",
    duration: "1小时"
  },
  {
    id: 4,
    title: "电子商务基础课程",
    description: "全面了解电子商务的基础知识，包括平台运营、营销策略等。",
    instructor: "陈光巨",
    instructorTitle: "原北京师范大学副校长",
    students: 132,
    lessons: 32,
    rating: 4.5,
    category: "职场技能",
    tags: ["电商", "基础", "运营"],
    image: "https://via.placeholder.com/300x169/f5222d/ffffff?text=电商基础",
    duration: "32小时"
  },
  {
    id: 5,
    title: "AIGC与设计学专业",
    description: "探讨AIGC技术在设计学专业中的应用和发展前景。",
    instructor: "陈俊铭",
    instructorTitle: "澳门科技大学教授",
    students: 3962,
    lessons: 14,
    rating: 4.8,
    category: "人工智能",
    tags: ["AIGC", "设计", "专业"],
    image: "https://via.placeholder.com/300x169/1890ff/ffffff?text=AIGC设计",
    duration: "14小时"
  },
  {
    id: 6,
    title: "3分钟学会：视频动作迁移",
    description: "快速掌握视频动作迁移技术，轻松制作专业级视频效果。",
    instructor: "武瑶",
    instructorTitle: "中国传媒大学教师",
    students: 172,
    lessons: 2,
    rating: 4.6,
    category: "新媒体运营",
    tags: ["视频", "动作迁移", "教程"],
    image: "https://via.placeholder.com/300x169/52c41a/ffffff?text=视频动作迁移",
    duration: "2小时"
  }
];

const categories = [
  "专业提升",
  "职场技能", 
  "社会教育",
  "兴趣爱好"
];

const tags = [
  "人工智能",
  "产品设计",
  "程序设计",
  "公民教育",
  "健康教育",
  "办公效率",
  "项目管理",
  "游戏设计",
  "新媒体运营"
];