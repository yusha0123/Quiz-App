import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="wrapper">
      <Loader2 className="h-10 w-10 text-primary animate-spin" />
    </div>
  );
};

export default Loading;
