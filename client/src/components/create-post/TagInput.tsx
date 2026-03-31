// components/global/TagInput.tsx
import { X } from "lucide-react";
import React, { useState, type KeyboardEvent } from "react";

interface TagInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  tags_value?: string[]; // This comes from react-hook-form's watch
  onTagsChange?: (newTags: string[]) => void; // Callback to update form
  maxTags?: number;
}

export const TagInput = React.forwardRef<HTMLInputElement, TagInputProps>(
  (
    { label, error, tags_value = [], maxTags = 10, onTagsChange, ...props },
    ref,
  ) => {
    const [input, setInput] = useState("");
    const [inputError, setInputError] = useState("");

    const addTag = (tagToAdd: string) => {
      const trimmed = tagToAdd.trim();

      if (!trimmed) return;

      if (trimmed.length < 2) {
        setInputError("Tag must be at least 2 characters");
        return;
      }

      if (trimmed.length > 20) {
        setInputError("Tag must not exceed 20 characters");
        return;
      }

      if (tags_value.some((t) => t.toLowerCase() === trimmed.toLowerCase())) {
        setInputError("Tag already exists");
        return;
      }
      if (tags_value.length >= maxTags) {
        setInputError(`You can only add up to ${maxTags} tags`);
        return;
      }
      onTagsChange?.([...tags_value, trimmed]);
      setInput("");
      setInputError("");
    };

    const removeTag = (tagToRemove: string) => {
      const filtered_value: string[] = tags_value.filter(
        (t) => t !== tagToRemove,
      );
      onTagsChange?.(filtered_value);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        addTag(input);
      }
    };

    return (
      <div>
        {label && (
          <label className="block text-primary text-[13px] font-bold mb-2">
            {label}
          </label>
        )}

        <div className="flex gap-2">
          <input
            ref={ref}
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setInputError("");
            }}
            onKeyDown={handleKeyDown}
            className={`
                w-full  p-4 rounded-xl text-sm border border-slate-300 transition-all text-primary placeholder:text-slate-400  focus:border-primary
             ${inputError || error ? "border-red-500 bg-red-50" : ""}
            `}
            {...props}
          />
          <button
            type="button"
            onClick={() => addTag(input)}
            disabled={tags_value.length >= maxTags}
            className="px-6 h-12 rounded-xl bg-primary text-white text-sm font-semibold 
                       hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            Add
          </button>
        </div>

        {inputError && (
          <span className="text-red-500 text-[11px] font-semibold ml-1 block mt-1">
            {inputError}
          </span>
        )}
        {error && (
          <span className="text-red-500 text-[11px] font-semibold ml-1 block mt-1">
            {error}
          </span>
        )}

        {tags_value.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {tags_value.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-primary text-white text-sm 
                           flex items-center gap-2"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  className="hover:opacity-70 hover:cursor-pointer"
                >
                  <X size={16} />
                </button>
              </span>
            ))}
          </div>
        )}
      </div>
    );
  },
);

TagInput.displayName = "TagInput";
