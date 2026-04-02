import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FileText, Tag, Settings, X } from "lucide-react";

// Validation Schema
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
    reset,
    formState: { errors },
  } = useForm<CreatePostFormData>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      tags: ["Exam Prep", "Fast Feedback"],
      aiTool: "ChatGPT",
      subject: "Computer Science",
    },
  });

  const tags = watch("tags");

  const onSubmit = (data: CreatePostFormData) => {
    const cleaned = {
      ...data,
      title: data.title.trim(),
      description: data.description.trim(),
    };
    console.log("Publishing Post:", cleaned);
    reset();
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
      {/* Header */}
      <div className="w-full flex md:flex-row md:items-end mb-8 gap-4 border-b border-slate-200 pb-8 justify-center">
        <h1 className="text-4xl font-black text-primary mb-2">
          Share an AI Learning Chat
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 w-full max-w-4xl justify-center">
        <div className="lg:col-span-12 space-y-8">
          
          {/* Section 1 */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-xs font-bold">
                1
              </span>
              <FileText className="text-primary bg-slate-50 p-2 rounded-lg w-10 h-10" />
              <h3 className="font-bold text-primary text-lg">Post Details</h3>
            </div>

            <div className="space-y-5">
              {/* Title */}
              <div>
                <label htmlFor="title" className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">
                  Post Title
                </label>
                <input
                  id="title"
                  autoFocus
                  maxLength={100}
                  {...register("title")}
                  className="w-full rounded-xl border-slate-200 bg-[#f8fafc] focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 p-4 text-lg font-bold outline-none transition-all duration-200"
                  placeholder="e.g. Learn Binary Search Trees with ChatGPT"
                />
                {errors.title && (
                  <p className="text-red-500 text-xs mt-2 font-bold">
                    {errors.title.message}
                  </p>
                )}
              </div>

              {/* Description */}
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">
                  Short Description
                </label>
                <textarea
                  maxLength={300}
                  {...register("description")}
                  className="w-full rounded-xl border-slate-200 bg-[#f8fafc] focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 p-4 text-sm font-medium outline-none transition-all duration-200"
                  placeholder="What did this AI chat help you understand?"
                  rows={4}
                />
                {errors.description && (
                  <p className="text-red-500 text-xs mt-2 font-bold">
                    {errors.description.message}
                  </p>
                )}
              </div>

              {/* Chat Link */}
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">
                  AI Chat Link
                </label>
                <input
                  {...register("chatLink")}
                  className="w-full rounded-xl border-slate-200 bg-[#f8fafc] p-4 text-sm font-medium outline-none transition-all duration-200"
                  placeholder="https://chat.openai.com/..."
                />
                {errors.chatLink && (
                  <p className="text-red-500 text-xs mt-2 font-bold">
                    {errors.chatLink.message}
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* Section 2 */}
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
                    className="px-3 py-1.5 rounded-full bg-primary text-white text-[11px] font-bold flex items-center gap-1 hover:opacity-90 transition"
                  >
                    {tag}
                    <X
                      size={14}
                      className="cursor-pointer hover:scale-110 transition"
                      onClick={() => removeTag(tag)}
                    />
                  </span>
                ))}
              </div>

              <input
                type="text"
                className="w-full rounded-xl border-slate-200 bg-[#f8fafc] p-4 text-sm font-medium outline-none transition-all duration-200"
                placeholder="Search or add custom tags..."
              />
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-xs font-bold">
                3
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
                  className="w-full rounded-xl border-slate-200 bg-[#f8fafc] p-3 text-sm font-bold outline-none transition-all duration-200"
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
                  className="w-full rounded-xl border-slate-200 bg-[#f8fafc] p-3 text-sm font-bold outline-none transition-all duration-200"
                >
                  <option>Computer Science</option>
                  <option>AI & ML</option>
                  <option>Mathematics</option>
                </select>
              </div>
            </div>
          </section>

          {/* Buttons */}
          <div className="flex gap-3 justify-end">
            <button
              type="button"
              className="px-6 py-2.5 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-100 border border-slate-200 transition-all duration-200"
            >
              Cancel
            </button>

            <button
              onClick={handleSubmit(onSubmit)}
              className="px-8 py-2.5 rounded-xl text-sm font-bold text-white bg-primary hover:bg-slate-800 active:scale-95 shadow-lg shadow-primary/10 transition-all duration-200"
            >
              Share Post
            </button>
          </div>

        </div>
      </div>
    </main>
  );
};