import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useModalStore from "@/hooks/useModalStore";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const ResultModal = () => {
  const { isOpen, type, onClose, additionalData } = useModalStore();
  const open = isOpen && type === "showResults";
  const router = useRouter();

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center text-xl md:text-2xl">
            Quiz Result
          </DialogTitle>
        </DialogHeader>
        <Separator />
        <DialogDescription>
          <div className="flex items-center flex-col py-6 md:py-10 lg:py-12">
            <h3 className="text-lg md:2xl text-primary font-semibold tracking-wide">
              You scored: {`${additionalData?.score}/${additionalData?.limit}`}
            </h3>
            <Button
              onClick={() => {
                router.push("/");
                onClose();
              }}
              className="mt-3 md:mt-5"
            >
              Play Again
            </Button>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default ResultModal;
