const GITHUB_REPO = "ccarolsevero/LaisBaroni";
const GITHUB_BRANCH = "main";

export function mediaUrl(image?: string) {
  if (!image?.trim()) return "";
  const value = image.trim();
  if (/^https?:\/\//i.test(value)) return value;

  const publicPath = value.startsWith("/") ? value : `/${value}`;
  const onVercel = process.env.VERCEL === "1";
  const inBrowser =
    typeof window !== "undefined" &&
    window.location.hostname !== "localhost" &&
    window.location.hostname !== "127.0.0.1";

  if (publicPath.startsWith("/uploads/") && (onVercel || inBrowser)) {
    return `https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}/public${publicPath}`;
  }

  return publicPath;
}
