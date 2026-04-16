import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-2 pl-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500">
            <Editor
              apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
              initialValue={defaultValue}
              onEditorChange={onChange}
              init={{
                height: 600,
                menubar: false,

                plugins: [
                  "lists",
                  "link",
                  "image",
                  "code",
                  "help",
                  "wordcount",
                  "blockquote",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "fullscreen",
                  "media",
                  "table",
                  "emoticons",
                  "insertdatetime",
                  "charmap",
                  "directionality",
                  "advlist",
                  "autolink",
                ],

                toolbar:
                  "undo redo | blocks | fontfamily fontsize | bold italic underline | forecolor backcolor | " +
                  "alignleft aligncenter alignright | bullist numlist | blockquote | " +
                  "link image media | table | code fullscreen preview | emoticons | help",

                branding: false,
                resize: true,

                content_style: `
                  body {
                    font-family: Inter, system-ui, -apple-system, sans-serif;
                    font-size: 16px;
                    line-height: 1.75;
                    max-width: 750px;
                    margin: 0 auto;
                    padding: 24px;
                    color: #111827;
                    background: #ffffff;
                  }

                  p {
                    margin: 0 0 12px;
                  }

                  h1, h2, h3 {
                    font-weight: 600;
                    letter-spacing: -0.02em;
                    margin-top: 16px;
                  }

                  blockquote {
                    border-left: 3px solid #e5e7eb;
                    padding-left: 12px;
                    color: #6b7280;
                    font-style: italic;
                  }

                  img {
                    max-width: 100%;
                    border-radius: 6px;
                  }

                  a {
                    color: #4f46e5;
                    text-decoration: none;
                  }
                `,
              }}
            />
          </div>
        )}
      />
    </div>
  );
}
