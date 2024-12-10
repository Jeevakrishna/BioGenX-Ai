import "./globals.css";
import { Bricolage_Grotesque } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Metadata } from "next";

const bric = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "X Bio Generator",
  description:
    "Let AI create your perfect Twitter bio! Just answer a few questions, and we'll craft one that truly represents you.",
  metadataBase: new URL("https://twitter-ai-bio.vercel.app"),
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          bric.className,
          "min-h-svh relative h-full w-full bg-background"
        )}
      >
        <ThemeProvider attribute="class">
          <div className="absolute invisible dark:visible bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <TooltipProvider>{children}</TooltipProvider>
          <footer className="p-4 relative text-center text-muted-foreground">
            <p>
              Made with ❤️ by{" "}
              <a
                href="https://www.linkedin.com/in/jeevakrishna73/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                SeventyThree
              </a>
            </p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}