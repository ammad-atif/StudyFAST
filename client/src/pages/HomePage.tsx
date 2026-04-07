// import { Navbar } from "../components/global/Navbar";
import { Sidebar } from "../components/home/Sidebar";
import { ContentToolbar } from "../components/home/ContentToolbar";
import { PostCard } from "../components/home/PostCard";

export const HomePage = () => {
  const mockPosts = [
    {
      title:
        "Efficiently Scaling Distributed Databases: A Deep Dive into Sharding",
      excerpt:
        "Machine learning has revolutionized how we approach problem-solving in software engineering. From predictive analytics to autonomous systems, artificial intelligence continues to transform industries worldwide. Developers today must understand neural networks, data preprocessing, and model optimization techniques. The intersection of data science and web development creates exciting opportunities for building intelligent applications. Cloud platforms now offer managed services for deploying machine learning models at scale. Understanding algorithms, data structures, and computational complexity remains fundamental to success. Whether building recommendation engines or natural language processors, engineers need solid foundations in mathematics and statistics. The future demands continuous learning as new frameworks and technologies emerge daily. Communities share knowledge through open-source projects, research papers, and collaborative development. Success requires curiosity and persistence always.",
      subject: "Computer Science",
      time: "2 hours ago",
      votes: "1.2k",
      comments: 14,
      tags: [
        { name: "ChatGPT-4", color: "bg-emerald-500" },
        { name: "Gemini Ultra", color: "bg-blue-500" },
      ],
    },
    {
      title:
        "Efficiently Scaling Distributed Databases: A Deep Dive into Sharding",
      excerpt:
        "Machine learning has revolutionized how we approach problem-solving in software engineering. From predictive analytics to autonomous systems, artificial intelligence continues to transform industries worldwide. Developers today must understand neural networks, data preprocessing, and model optimization techniques. The intersection of data science and web development creates exciting opportunities for building intelligent applications. Cloud platforms now offer managed services for deploying machine learning models at scale. Understanding algorithms, data structures, and computational complexity remains fundamental to success. Whether building recommendation engines or natural language processors, engineers need solid foundations in mathematics and statistics. The future demands continuous learning as new frameworks and technologies emerge daily. Communities share knowledge through open-source projects, research papers, and collaborative development. Success requires curiosity and persistence always.",
      subject: "Computer Science",
      time: "2 hours ago",
      votes: "1.2k",
      comments: 14,
      tags: [
        { name: "ChatGPT-4", color: "bg-emerald-500" },
        { name: "Gemini Ultra", color: "bg-blue-500" },
      ],
    },
    {
      title:
        "Efficiently Scaling Distributed Databases: A Deep Dive into Sharding",
      excerpt:
        "Machine learning has revolutionized how we approach problem-solving in software engineering. From predictive analytics to autonomous systems, artificial intelligence continues to transform industries worldwide. Developers today must understand neural networks, data preprocessing, and model optimization techniques. The intersection of data science and web development creates exciting opportunities for building intelligent applications. Cloud platforms now offer managed services for deploying machine learning models at scale. Understanding algorithms, data structures, and computational complexity remains fundamental to success. Whether building recommendation engines or natural language processors, engineers need solid foundations in mathematics and statistics. The future demands continuous learning as new frameworks and technologies emerge daily. Communities share knowledge through open-source projects, research papers, and collaborative development. Success requires curiosity and persistence always.",
      subject: "Computer Science",
      time: "2 hours ago",
      votes: "1.2k",
      comments: 14,
      tags: [
        { name: "ChatGPT-4", color: "bg-emerald-500" },
        { name: "Gemini Ultra", color: "bg-blue-500" },
      ],
    },
    {
      title:
        "Efficiently Scaling Distributed Databases: A Deep Dive into Sharding",
      excerpt:
        "Machine learning has revolutionized how we approach problem-solving in software engineering. From predictive analytics to autonomous systems, artificial intelligence continues to transform industries worldwide. Developers today must understand neural networks, data preprocessing, and model optimization techniques. The intersection of data science and web development creates exciting opportunities for building intelligent applications. Cloud platforms now offer managed services for deploying machine learning models at scale. Understanding algorithms, data structures, and computational complexity remains fundamental to success. Whether building recommendation engines or natural language processors, engineers need solid foundations in mathematics and statistics. The future demands continuous learning as new frameworks and technologies emerge daily. Communities share knowledge through open-source projects, research papers, and collaborative development. Success requires curiosity and persistence always.",
      subject: "Computer Science",
      time: "2 hours ago",
      votes: "1.2k",
      comments: 14,
      tags: [
        { name: "ChatGPT-4", color: "bg-emerald-500" },
        { name: "Gemini Ultra", color: "bg-blue-500" },
      ],
    },
    {
      title:
        "Efficiently Scaling Distributed Databases: A Deep Dive into Sharding",
      excerpt:
        "Machine learning has revolutionized how we approach problem-solving in software engineering. From predictive analytics to autonomous systems, artificial intelligence continues to transform industries worldwide. Developers today must understand neural networks, data preprocessing, and model optimization techniques. The intersection of data science and web development creates exciting opportunities for building intelligent applications. Cloud platforms now offer managed services for deploying machine learning models at scale. Understanding algorithms, data structures, and computational complexity remains fundamental to success. Whether building recommendation engines or natural language processors, engineers need solid foundations in mathematics and statistics. The future demands continuous learning as new frameworks and technologies emerge daily. Communities share knowledge through open-source projects, research papers, and collaborative development. Success requires curiosity and persistence always.",
      subject: "Computer Science",
      time: "2 hours ago",
      votes: "1.2k",
      comments: 14,
      tags: [
        { name: "ChatGPT-4", color: "bg-emerald-500" },
        { name: "Gemini Ultra", color: "bg-blue-500" },
      ],
    },
    {
      title:
        "Efficiently Scaling Distributed Databases: A Deep Dive into Sharding",
      excerpt:
        "In this thread, we explore the nuances of horizontal scaling vs sharding in modern OS environments...",
      subject: "Machine learning ",
      time: "2 hours ago",
      votes: "1.2k",
      comments: 14,
      tags: [
        { name: "ChatGPT-4", color: "bg-emerald-500" },
        { name: "Gemini Ultra", color: "bg-blue-500" },
      ],
    },
    {
      title:
        "Efficiently Scaling Distributed Databases: A Deep Dive into Sharding",
      excerpt:
        "In this thread, we explore the nuances of horizontal scaling vs sharding in modern OS environments...",
      subject: "Computer Science",
      time: "2 hours ago",
      votes: "1.2k",
      comments: 14,
      tags: [
        { name: "ChatGPT-4", color: "bg-emerald-500" },
        { name: "Gemini Ultra", color: "bg-blue-500" },
      ],
    },
    {
      title:
        "Efficiently Scaling Distributed Databases: A Deep Dive into Sharding",
      excerpt:
        "lorem1111111111111111111111111111111111111111111111111111111...",
      subject: "Computer Science",
      time: "2 hours ago",
      votes: "1.2k",
      comments: 14,
      tags: [
        { name: "ChatGPT-4", color: "bg-emerald-500" },
        { name: "Gemini Ultra", color: "bg-blue-500" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* <Navbar /> */}
      <main className="w-screen lg:max-w-5xl mx-auto flex gap-x-8 mt-10 px-4">
        {/* Main Content Area with Sidebar */}

        {/* Sidebar */}
        <aside className="h-[calc(100vh-6rem)] w-1/3 hidden md:block sticky top-0 overflow-auto">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <section className="flex-1 space-y-4">
          {/*Content Toolbar */}
          <div className="sticky top-0 z-10 bg-background-light">
            <ContentToolbar />
          </div>

          {/* Posts Feed */}
          <div className="space-y-4">
            {mockPosts.map((post, idx) => (
              <PostCard key={idx} {...post} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
