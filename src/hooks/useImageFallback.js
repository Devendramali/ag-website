import { useState } from "react";

export default function useImageFallback() {
  const [err, setErr] = useState(false);
  return [err, setErr];
}