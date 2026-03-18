import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Navbar } from "./components/Navbar";
import { PostCard } from "./features/home/components/PostCard";
import { Sidebar } from "./features/home/components/Sidebar";
import { ContentToolbar } from "./features/home/components/ContentToolbar";
import { HomePage } from "./pages/HomePage";
import { HomeLayout } from "./layouts/HomeLayout";
export function Test() {
  return (
    <>
      {/* <Navbar />
      <ContentToolbar />

      <Button color="primary">Click me</Button>
      <Input label="Test Input" placeholder="Enter something..." />
      <PostCard
        title="Sample Post"
        excerpt="This is a sample post excerpt."
        subject="Sample Subject"
        time="2 hours ago"
        votes="10"
        comments={5}
        tags={[{ name: "gopt", color: "bg-green-500" }]}
      />
      <Sidebar /> */}
      <HomePage />
    </>
  );
}
