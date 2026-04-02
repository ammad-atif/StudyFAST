import { HomeLayout } from "../layouts/HomeLayout";
import { PostCard } from "../features/home/components/PostCard";

export const HomePage = () => {
  const mockPosts = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
  ];

  return (
    <HomeLayout>
      <div className="max-w-3xl mx-auto space-y-5 px-2">
        {mockPosts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </HomeLayout>
  );
};