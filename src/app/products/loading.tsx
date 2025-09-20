import { LoaderCircle } from "lucide-react";
import React from "react";

export default function Loading() {
  return (
    <div className="flex h-screen justify-center items-center">
      <LoaderCircle className="animate-spin" size={70} />
    </div>
  );
}
