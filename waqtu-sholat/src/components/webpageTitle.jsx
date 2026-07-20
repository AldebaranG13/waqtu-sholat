import { useEffect } from "react";

export default function WebpageTitle({ title }) {
  useEffect(() => {
    document.title = `Waqtu Sholat | ${title ?? "Settings"}`;
  }, [title]);

  return null;
}