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
      "https://i.ytimg.com/an_webp/SH5F-rwWEog/mqdefault_6s.webp?du=3000&sqp=CKDJhYAG&rs=AOn4CLDwEtuwLx1e2nqFUyIYl8pZrQlXfw",
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
  },
  {
    id: 9,
    image:
      "data:image/png;base64,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",
    keywords: "web dev",
    title: "Web Design",
    desc:
      "freeCodeCamp is a proven path to your first software developer job. More than 40,000 people have gotten developer jobs after completing this – including at big companies like Google and Microsoft.",
    weblink: "https://www.freecodecamp.org/learn"
  },
  {
    id: 10,
    image:
      "https://i.ytimg.com/vi/14cMhrp5wlk/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBW1NEH09ceZ1Lcxl6BtUeUQNCP8Q",
    keywords: "electronice | control system",
    title: "Discrete Control",
    desc:
      "Frequency methods with transfer functions, understanding how to design control systems in the discrete or Z domain.",
    weblink:
      "https://www.youtube.com/playlist?list=PLUMWjy5jgHK0MLv6Ksf-NHi7Ur8NRNU4Z"
  },
  {
    id: 11,
    image:
      "data:image/png;base64,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",
    keywords: "data science | ML",
    title: "Kaggle courses",
    desc:
      "Gain the skills you need to do independent data science projects.We pare down complex topics to their key practical components, so you gain usable skills in a few hours",
    weblink: "https://www.kaggle.com/learn/overview"
  },
  {
    id: 12,
    image:
      "https://yt3.ggpht.com/ytc/AAUvwnhibIhAJa3MHx2F4sQwgaGpZsUTy6IVj5zIkDDkug=s88-c-k-c0x00ffffff-no-rj",
    keywords: "engineering",
    title: "Learn Engineering",
    desc:
      "Our videos are designed to clear misconceptions, create a passion for engineering and explain complicated technologies in a simple way. ",
    weblink: "https://www.youtube.com/c/LearnEngineering/playlists"
  },
  {
    id: 13,
    image:
      "https://yt3.ggpht.com/ytc/AAUvwnj3Yrct2w2epcZhRiNythNLqIEV93CI19sW5t1kZQ=s176-c-k-c0x00ffffff-no-rj-mo",
    keywords: "engineering maths",
    title: "3Blue1Brown",
    desc:
      "Combination of math and entertainment. Explanations to be driven by animations and for difficult problems to be made simple with changes in perspective. ",
    weblink: "https://www.youtube.com/results?search_query=1blue3brown"
  },
  {
    id: 14,
    image:
      "https://yt3.ggpht.com/ytc/AAUvwnjEkKLjVVfaGrs4Y-teISVqFmssnK7Ia19fLGi-=s88-c-k-c0x00ffffff-no-rj",
    keywords: "statistics | maths",
    title: "StatQuest",
    desc: "Breaks down the major methodologies into easy to understand pieces",
    weblink: "https://www.youtube.com/channel/UCtYLUTtgS3k1Fg4y5tAhLbw"
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
