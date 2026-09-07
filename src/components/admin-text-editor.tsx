"use client";

import { useEffect, useRef } from "react";

type Props = {
  value: string;
  onChange: (html: string) => void;
};

const buttonClass =
  "rounded-full px-3 py-1.5 text-[12px] font-medium text-ink ring-1 ring-mist transition hover:bg-paper";

export function AdminTextEditor({ value, onChange }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) el.innerHTML = value || "";
    // Só preenche na entrada da tela, para o cursor não pular enquanto escreve.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function exec(command: string, argument?: string) {
    ref.current?.focus();
    document.execCommand(command, false, argument);
    onChange(ref.current?.innerHTML ?? "");
  }

  return (
    <div className="mt-1 overflow-hidden rounded-2xl border border-mist bg-white">
      <div className="flex flex-wrap gap-2 border-b border-mist bg-paper px-3 py-2">
        <button type="button" className={buttonClass} onClick={() => exec("bold")}>
          Negrito
        </button>
        <button
          type="button"
          className={buttonClass}
          onClick={() => exec("formatBlock", "h2")}
        >
          Título
        </button>
        <button
          type="button"
          className={buttonClass}
          onClick={() => exec("insertUnorderedList")}
        >
          Lista
        </button>
      </div>
      <div
        ref={ref}
        contentEditable
        suppressContentEditableWarning
        role="textbox"
        aria-label="Texto do artigo"
        className="prose-article min-h-88 px-4 py-4 text-[15px] outline-none"
        onInput={() => onChange(ref.current?.innerHTML ?? "")}
      />
    </div>
  );
}
