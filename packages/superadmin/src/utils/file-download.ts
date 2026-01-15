// In your download utility file (src/utils/download.ts)
export const downloadFile = (url: string, fileName?: string) => {
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", fileName || "download");
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
