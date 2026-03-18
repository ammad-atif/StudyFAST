import { HomeLayout } from "../layouts/HomeLayout";
import { PostCard } from "../features/home/components/PostCard";
export const HomePage = () => {
  const mockPosts = [
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
    // Add more posts here...
  ];

  return (
    <HomeLayout>
      <div className="space-y-4">
        {mockPosts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </HomeLayout>
  );
};
