export function looksLikeHtml(content: string) {
  return /<\/?(p|h1|h2|h3|ul|ol|li|strong|em|div|br|a)\b/i.test(content);
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function inline(text: string) {
  return escapeHtml(text).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

export function markdownToSimpleHtml(markdown: string) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks: string[] = [];
  let paragraph: string[] = [];
  let list: string[] = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    blocks.push(`<p>${inline(paragraph.join(" "))}</p>`);
    paragraph = [];
  };
  const flushList = () => {
    if (!list.length) return;
    blocks.push(`<ul>${list.map((item) => `<li>${inline(item)}</li>`).join("")}</ul>`);
    list = [];
  };

  for (const line of lines) {
    const heading = /^(#{2,3})\s+(.+)$/.exec(line);
    const listItem = /^[-*]\s+(.+)$/.exec(line);
    if (heading) {
      flushParagraph();
      flushList();
      const tag = heading[1].length === 2 ? "h2" : "h3";
      blocks.push(`<${tag}>${inline(heading[2])}</${tag}>`);
      continue;
    }
    if (listItem) {
      flushParagraph();
      list.push(listItem[1]);
      continue;
    }
    if (!line.trim()) {
      flushParagraph();
      flushList();
      continue;
    }
    flushList();
    paragraph.push(line.trim());
  }
  flushParagraph();
  flushList();
  return blocks.join("");
}

export function contentToEditorHtml(content: string) {
  const trimmed = content.trim();
  if (!trimmed) return "";
  if (looksLikeHtml(trimmed)) return trimmed;
  return markdownToSimpleHtml(trimmed);
}

export function htmlToPlainText(html: string) {
  return html
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<\/p>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
