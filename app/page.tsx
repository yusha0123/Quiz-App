import QuizSettings from "@/components/quiz-settings";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  return (
    <main className="wrapper">
      <div className="bg-white p-3 shadow-md w-full md:w-[90%] lg:w-[70%] max-w-4xl rounded-md">
        <h1 className="heading">Welcome to Quizy</h1>
        <Separator />
        <div className="grid grid-cols-1 md:grid-cols-2 p-5 md:p-10 gap-4">
          <div className="relative h-full">
            <Image
              src={"/logo.png"}
              alt="banner-image"
              priority
              width={500}
              height={500}
              className="object-cover object-center"
            />
          </div>
          <QuizSettings />
        </div>
      </div>
    </main>
  );
}
