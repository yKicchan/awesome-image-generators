import React, { useCallback } from "react";
import { toPng } from "html-to-image";

export const useDownload = (ref: React.RefObject<HTMLElement>, filename: string) => useCallback(() => {
  if (ref.current === null) {
    return;
  }

  toPng(ref.current, { cacheBust: true })
    .then((dataUrl) => {
      const link = document.createElement("a");
      link.download = `${filename}.png`;
      link.href = dataUrl;
      link.click();
    })
    .catch((err) => {
      console.error(err);
    });
}, [ref, filename]);
