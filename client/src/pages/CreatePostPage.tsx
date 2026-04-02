import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card } from "../components/global/Card";
import { Button } from "../components/create-post/Button";
import { Input } from "../components/global/Input";
import { TextArea } from "../components/global/TextArea";
import { TagInput } from "../components/create-post/TagInput";

//Validation Schema
const createPostSchema = z.object({
  title: z.string().min(10, "Title must be at least 10 characters").max(100),
  description: z.string().min(20, "Please provide a more detailed description"),
  tags: z
    .array(z.string("Each tag must be a string"))
    .min(1, "Select at least one tag"),
  chatLink: z.string().url("Please enter a valid AI chat URL"),
  aiTool: z.string().min(2, "Please specify the AI tool used"),
  subject: z.string().min(2, "Please specify the subject area"),
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
    // 1. Don't show errors until the user leaves the field for the first time.
    mode: "onSubmit",
    reValidateMode: "onChange", // 2. Re-validate on change after the first error to provide instant feedback.
    // 3. Prevent multiple submissions while the API is hit.
    criteriaMode: "all",
    defaultValues: {
      tags: [],
    },
  });

  // Watch values for Live Preview
  const tags = watch("tags");

  const onSubmit = (data: CreatePostFormData) => {
    console.log("Form Data:", data);

    // Here you would typically send the data to your backend API
  };
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <Card
        title="Share an AI Learning Chat"
        description="Help others learn by sharing your AI-powered study sessions."
      ></Card>

      <div className="w-full max-w-4xl bg-white rounded-lg shadow border border-slate-100 p-8">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Post Title */}
          <Input
            label="Post Title"
            placeholder="Example: Understanding Binary Search Trees using ChatGPT"
            error={errors.title?.message}
            {...register("title")}
          />

          {/* Short Description */}
          <TextArea
            label="Short Description"
            placeholder="Explain what concept this AI chat helped you understand."
            error={errors.description?.message}
            {...register("description")}
            rows={4}
          />

          {/* Tags */}
          <TagInput
            label="Tags"
            placeholder="Type a tag and press Enter..."
            tags_value={tags}
            onTagsChange={(newTags) =>
              setValue("tags", newTags, { shouldValidate: true })
            }
            // onBlur={() => setValue("tags", tags, { shouldValidate: true })}
            error={errors.tags?.message}
            maxTags={10}
          />

          {/* AI Tool */}
          <Input
            label="AI Tool"
            placeholder="e.g., ChatGPT, Gemini, Claude"
            error={errors.aiTool?.message}
            {...register("aiTool")}
          />

          {/* Subject */}
          <Input
            label="Enter Subject"
            placeholder="e.g., Computer Science, Biology, History"
            error={errors.subject?.message}
            {...register("subject")}
          />

          {/* AI Chat URL */}
          <Input
            label="AI Chat URL"
            placeholder="Paste the URL of your AI chat session"
            error={errors.chatLink?.message}
            {...register("chatLink")}
          />

          {/* Buttons */}
          <div className="flex gap-3 justify-end pt-4">
            <Button type="button" variant="secondary">
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Share Post
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
};
