import { AppRouter } from "@/router";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>
        <AppRouter />
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
