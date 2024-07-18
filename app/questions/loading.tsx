import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <Loader2 className="size-10 text-white animate-spin" />
    </div>
  );
};

export default Loading;
