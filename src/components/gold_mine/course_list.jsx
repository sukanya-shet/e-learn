let courses = [
  {
    id: 0,
    image:
      "https://www.learningcrux.com/image/5dfd08d88db79d1302e13b10?width=250",
    keywords: "web dev",
    title: "Web development 101",
    desc:
      "At 50+ hours, this Web Development course is without a doubt the most comprehensive web development course available online. Even if you have zero programming experience, this course will take you from beginner to mastery.",
    weblink:
      "https://www.learningcrux.com/course/the-complete-2020-web-development-bootcamp"
  },
  {
    id: 1,
    image:
      "https://portswigger.net/cms/images/24/a4/8376e72f5203-article-academy_social_media_graphics_article.png",
    keywords: "web testing | security",
    title: "Web Security",
    desc:
      "Brand new learning resource providing free training on web security vulnerabilites, techniques for finding and exploiting bugs, and defensive measures for avoiding them.",
    weblink: "https://portswigger.net/web-security"
  },
  {
    id: 2,
    image:
      "https://www.learningcrux.com/image/5f65214a66a5a77c77cfbae5?width=250",
    keywords: "data structures | algorithms | dsa",
    title: "Algorithms",
    desc:
      "Learn, Analyse and Implement Data Structures and Algorithms with this course",
    weblink:
      "https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O"
  },
  {
    id: 3,
    image:
      "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fdaily-now-res.cloudinary.com%2Fimage%2Fupload%2Fv1606054811%2Fopengraph%2FOpen_Grap_-_Home2.png",
    keywords: "tech news | chrome extension",
    title: "daily.dev - News for Busy Developers",
    desc:
      "daily.dev is the easiest way to stay updated on the latest programming news, a news aggregator especially for software developers. With daily.dev, you will stay updated with the best articles from the best tech publications on any topic. ",
    weblink:
      "https://chrome.google.com/webstore/detail/dailydev-news-for-busy-de/jlmpjdjjbgclbocgajdjefcidcncaied"
  },
  {
    id: 4,
    image: "https://devincept.tech/assets/img/Devincept.gif",
    keywords: "Ml | machine learning",
    title: "Machine Learning Project",
    desc:
      "Learn in-demand skills by implementing for Free. An environment, where you not only have to read or watch videos but interactive modules where you can test your skills and compete with other participants.",
    weblink: "https://devincept.tech/pricing.html"
  },

  {
    id: 5,
    image:
      "data:image/jpeg;base64,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",
    keywords: "compilers",
    title: "Compiler Design",
    desc:
      "This playlist contains all the compiler design lectures required for preparing for various competitive exams and interviews including GATE.",
    weblink:
      "https://www.youtube.com/playlist?list=PLEbnTDJUr_IcPtUXFy2b1sGRPsLFMghhS"
  },
  {
    id: 6,
    image:
      "https://i.ytimg.com/vi/lxm6ez2cx6Y/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA8qS8bjPBVdZ-4XGxz4rDvvhLNlg",
    keywords: "aptitude",
    title: "Aptitude",
    desc:
      "Aptitude Made Easy is an initiative by freshersworld.com.It consists of series of videos on different skill enhancement topics .By these we want all freshers and the candidates who are attending for the next competitive exams to be interview ready.",
    weblink:
      "https://www.youtube.com/playlist?list=PLjLhUHPsqNYkcq6YOfiywbTfnvf_TN7i9"
  },
  {
    id: 7,
    image:
      "https://www-freecodecamp-org.cdn.ampproject.org/ii/w680/s/www.freecodecamp.org/news/content/images/2020/10/cover-1.jpg",
    keywords: "linux commands",
    title: "The Linux Command Handbook",
    desc:
      "This Linux Command Handbook will cover 60 core Bash commands you will need as a developer. Each command includes example code and tips for when to use it.",
    weblink:
      "https://www-freecodecamp-org.cdn.ampproject.org/c/s/www.freecodecamp.org/news/the-linux-commands-handbook/amp/"
  },
  {
    id: 8,
    image: "https://edyoda.s3.amazonaws.com/media/blog-images/3.png",
    keywords: "big data",
    title: "Big Data Courses",
    desc:
      "Explore our big data courses to build a strong foundation of distributed file systems, big data processing techniques, big data analytics & much more and master the skills for the future.",
    weblink: "https://www.edyoda.com/courses/big-data"
  }
];
let intern = [
  {
    id: 1,
    title: "Gyan Pro",
    role: "Business analyst",
    desc: "To handle the buisness analysis",
    weblink: "https://gyanpro.com"
  },
  {
    id: 2,
    title: "Windhya",
    role: "Choose field of interest",
    desc:
      "A 4 week online internship where you are required to complete 4 simple projects assigned ",
    weblink: "http://widhya.org/winternship"
  },
  {
    id: 3,
    title: "Raijnan",
    role: "Student Ambassador",
    desc:
      "Student ambassador is an wonderful Platform to learn and earn simultaneously. ",
    weblink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdZGIqpQnk2N00j22Dqhy6EcLxkEXtTNS1wBNRRlC60p1-X5A/viewform"
  },
  {
    id: 4,
    title: "MLH Fellowship",
    role: "Software engineer",
    desc:
      "The MLH Fellowship is a 12-week internship alternative for aspiring software engineers.",
    weblink: "https://fellowship.mlh.io/"
  }
];

export { courses, intern };
