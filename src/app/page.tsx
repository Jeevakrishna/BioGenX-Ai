import Output from "@/components/home/Output";
import ThemeTogglebutton from "@/components/home/ThemeChanger";
import UserInput from "@/components/home/UserInput";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { BioProvider } from "@/context/BioContext";
import { ChevronRight, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative grid  grid-cols-1 slg:grid-cols-2 gap-12  px-4 py-12 sm:py-16 sm:px-8 md:px-10 slg:p-16 lg:p-24">
      <ThemeTogglebutton />
      <div className="col-span-full group w-full flex flex-col items-center justify-center space-y-2 sm:space-y-4 mb-4 text-center">
        <Link href="https://x.com/jeevakrish73" target="_blank" className="hover:scale-105 transition-all duration-500 hover:-rotate-2" >
          <AnimatedGradientText className="px-6 py-2 rounded-full">
            <Star className="size-5 fill-yellow-300 text-yellow-400" />
            <hr className="mx-2 h-4 w-[1px] bg-gray-300" />
            Connect with me on X!
            <ChevronRight className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedGradientText>
        </Link>
        <h1 className="font-bold tracking text-4xl md:text-5xl slg:text-6xl text-center w-full max-w-2xl lg:w-[90%] mx-auto pt-4">
          
          <span className="bg-gradient-to-r font-extrabold text-5xl md:text-6xl slg:text-7xl from-green-300 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
          Create the perfect X Bio with AI!
          </span>{" ✨"}
          <br />
        </h1>
        <p className=" font-bold tracking text-1xl md:text-xl slg:text-1xl text-center w-full max-w-1xl lg:w-[100%] mx-auto pt-4 text-sm sm:text-base  md:text-lg text-muted-foreground">
        Answer a few quick questions, and we’ll craft a bio that perfectly reflects you.
        </p>
      </div>

      <BioProvider>
        <UserInput />
        <Output />
      </BioProvider>
    </main>
  );
}