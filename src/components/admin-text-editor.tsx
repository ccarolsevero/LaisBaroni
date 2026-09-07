"use client";

import { useCallback, type ReactNode } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";
import { mediaUrl } from "@/lib/media";

type Props = {
  value: string;
  onChange: (html: string) => void;
};

function ToolButton({
  active,
  onClick,
  children,
}: {
  active?: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onMouseDown={(event) => event.preventDefault()}
      onClick={onClick}
      className={`rounded-lg px-2.5 py-1.5 text-[12px] font-medium transition ${
        active ? "bg-ink text-white" : "text-ink hover:bg-white"
      }`}
    >
      {children}
    </button>
  );
}

export function AdminTextEditor({ value, onChange }: Props) {
  const editor = useEditor({
    immediatelyRender: false,
    shouldRerenderOnTransaction: true,
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
        code: false,
        codeBlock: false,
        link: {
          openOnClick: false,
          autolink: true,
          HTMLAttributes: {
            rel: "noopener noreferrer",
            target: "_blank",
          },
        },
      }),
      Placeholder.configure({
        placeholder: "Escreva o texto aqui...",
      }),
      Image,
    ],
    content: value || "",
    editorProps: {
      attributes: {
        class: "tiptap prose-article min-h-88 px-4 py-4 text-[15px] outline-none",
      },
    },
    onUpdate: ({ editor: current }) => onChange(current.getHTML()),
  });

  const setLink = useCallback(() => {
    if (!editor) return;
    const previous = String(editor.getAttributes("link").href ?? "");
    const url = window.prompt("Cole o link", previous || "https://");
    if (url === null) return;
    if (!url.trim()) {
      editor.chain().focus().unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url.trim() }).run();
  }, [editor]);

  const addImage = useCallback(() => {
    if (!editor) return;
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/jpeg,image/png,image/webp,image/gif";
    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;
      const form = new FormData();
      form.append("file", file);
      const res = await fetch("/api/admin/upload", { method: "POST", body: form });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.url) {
        window.alert(data.error || "Não foi possível enviar a imagem.");
        return;
      }
      editor.chain().focus().setImage({ src: mediaUrl(String(data.url)) }).run();
    };
    input.click();
  }, [editor]);

  if (!editor) {
    return <div className="mt-1 min-h-88 rounded-2xl border border-mist bg-white" />;
  }

  return (
    <div className="mt-1 overflow-hidden rounded-2xl border border-mist bg-white">
      <div className="flex flex-wrap gap-1 border-b border-mist bg-paper px-2 py-2">
        <ToolButton
          active={editor.isActive("bold")}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          Negrito
        </ToolButton>
        <ToolButton
          active={editor.isActive("italic")}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          Itálico
        </ToolButton>
        <ToolButton
          active={editor.isActive("underline")}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          Sublinhado
        </ToolButton>
        <ToolButton
          active={editor.isActive("heading", { level: 2 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        >
          Título
        </ToolButton>
        <ToolButton
          active={editor.isActive("heading", { level: 3 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        >
          Subtítulo
        </ToolButton>
        <ToolButton
          active={editor.isActive("bulletList")}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          Lista
        </ToolButton>
        <ToolButton
          active={editor.isActive("orderedList")}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          Numerada
        </ToolButton>
        <ToolButton
          active={editor.isActive("blockquote")}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        >
          Citação
        </ToolButton>
        <ToolButton active={editor.isActive("link")} onClick={setLink}>
          Link
        </ToolButton>
        <ToolButton onClick={addImage}>Imagem</ToolButton>
        <ToolButton onClick={() => editor.chain().focus().undo().run()}>Desfazer</ToolButton>
        <ToolButton onClick={() => editor.chain().focus().redo().run()}>Refazer</ToolButton>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}
