import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FileText, Tag, Settings, X } from "lucide-react";

// 1. Define Validation Schema
const createPostSchema = z.object({
  title: z.string().min(10, "Title must be at least 10 characters").max(100),
  description: z.string().min(20, "Please provide a more detailed description"),
  tags: z.array(z.string()).min(1, "Select at least one tag"),
  chatLink: z.string().url("Please enter a valid AI chat URL"),
  aiTool: z.string(),
  subject: z.string(),
  suggestedSubject: z.string().optional(),
});

type CreatePostFormData = z.infer<typeof createPostSchema>;

export const CreatePostPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<CreatePostFormData>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      tags: ["Exam Prep", "Fast Feedback"],
      aiTool: "ChatGPT",
      subject: "Computer Science",
    },
  });

  // Watch values for Live Preview
  const tags = watch("tags");

  const onSubmit = (data: CreatePostFormData) => {
    console.log("Publishing Post:", data);
  };

  const removeTag = (tagToRemove: string) => {
    const currentTags = tags || [];
    setValue(
      "tags",
      currentTags.filter((t: string) => t !== tagToRemove),
    );
  };

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-4 py-8 flex flex-col items-center">
      {/* Header Section */}
      <div className="w-full flex md:flex-row md:items-end  mb-8 gap-4 border-b border-slate-200 pb-8 justify-center">
        <h1 className="text-4xl font-black text-primary mb-2">
          Share an AI Learning Chat
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 w-full max-w-4xl justify-center">
        {/* Left: Form Sections */}
        <div className="lg:col-span-12 space-y-8">
          {/* Section 1: Post Details */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-xs font-bold">
                1
              </span>
              <FileText className="text-primary bg-slate-50 p-2 rounded-lg w-10 h-10" />
              <h3 className="font-bold text-primary text-lg">Post Details</h3>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">
                  Post Title
                </label>
                <input
                  {...register("title")}
                  className="w-full rounded-xl border-slate-200 bg-[#f8fafc] focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 p-4 text-lg font-bold outline-none transition-all"
                  placeholder="Example: Understanding Binary Search Trees using ChatGPT"
                />
                {errors.title && (
                  <p className="text-red-500 text-xs mt-2 font-bold">
                    {errors.title.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">
                  Short Description
                </label>
                <textarea
                  {...register("description")}
                  className="w-full rounded-xl border-slate-200 bg-[#f8fafc] focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 p-4 text-sm font-medium outline-none transition-all"
                  placeholder="Explain what concept this AI chat helped you understand."
                  rows={4}
                />
              </div>
            </div>
          </section>

          {/* Section 2: Tags */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-xs font-bold">
                2
              </span>
              <Tag className="text-primary bg-slate-50 p-2 rounded-lg w-10 h-10" />
              <h3 className="font-bold text-primary text-lg">Tags Selection</h3>
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-primary text-white text-[11px] font-bold flex items-center gap-1"
                  >
                    {tag}{" "}
                    <X
                      size={14}
                      className="cursor-pointer"
                      onClick={() => removeTag(tag)}
                    />
                  </span>
                ))}
              </div>
              <input
                className="w-full rounded-xl border-slate-200 bg-[#f8fafc] p-4 text-sm font-medium outline-none"
                placeholder="Search or add custom tags..."
              />
            </div>
          </section>

          {/* Section 3: AI Settings */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-xs font-bold">
                4
              </span>
              <Settings className="text-primary bg-slate-50 p-2 rounded-lg w-10 h-10" />
              <h3 className="font-bold text-primary text-lg">AI Settings</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">
                  AI Tool
                </label>
                <select
                  {...register("aiTool")}
                  className="w-full rounded-xl border-slate-200 bg-[#f8fafc] p-3 text-sm font-bold outline-none"
                >
                  <option>ChatGPT</option>
                  <option>Gemini</option>
                  <option>Claude</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">
                  Subject
                </label>
                <select
                  {...register("subject")}
                  className="w-full rounded-xl border-slate-200 bg-[#f8fafc] p-3 text-sm font-bold outline-none"
                >
                  <option>Computer Science</option>
                  <option>AI & ML</option>
                  <option>Mathematics</option>
                </select>
              </div>
            </div>
          </section>

          {/* Publish Button */}
          <div className="flex  gap-3 justify-end ">
            <button className="px-6 py-2.5 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-100 border border-slate-200 transition-all">
              Cancel
            </button>
            <button
              onClick={handleSubmit(onSubmit)}
              className="px-8 py-2.5 rounded-xl text-sm font-bold text-white bg-primary hover:bg-slate-800 shadow-lg shadow-primary/10 transition-all"
            >
              Share Post
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
