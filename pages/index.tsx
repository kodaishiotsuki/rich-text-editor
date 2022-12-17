import { EditorContent, useEditor, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import RichEditorToolbar from "../components/rich-editor-toolbar";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import { lowlight } from "lowlight";
import { useForm } from "react-hook-form";

const Home = () => {
  //react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const editor = useEditor({
    extensions: [
      StarterKit,
      TaskItem.configure({
        nested: true,
      }),
      TaskList,
      Link.configure({
        openOnClick: true,
      }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
      Placeholder.configure({
        placeholder: "Write something …",
      }),
    ],
    content: "",
    editorProps: {
      attributes: {
        class: "prose prose-base m-5 focus:outline-none text-left",
      },
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="rounded-md overflow-hidden border-gray-500 border-2 bg-white w-2/3 h-[50vh] mx-auto mt-10">
      <RichEditorToolbar editor={editor} />
      <div className="p-4">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Home;
