
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Helmet>
      <title>Emprise Study Abroad | Your Gateway to Global Education</title>
      <meta name="description" content="Emprise Study Abroad - Top overseas education consultants in Kolhapur, India. Get expert guidance for MBBS in Russia, UK education, scholarship assistance, and IELTS coaching." />
      <meta name="keywords" content="study abroad, MBBS in Russia, UK education, overseas education consultants, study abroad consultants, IELTS coaching, visa assistance, scholarships abroad, Kolhapur, India" />
      <meta property="og:title" content="Emprise Study Abroad | Your Gateway to Global Education" />
      <meta property="og:description" content="Expert overseas education consultants in Kolhapur, India. Get guidance for MBBS in Russia, UK education, and more." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://emprisestudyabroad.com" />
      <meta property="og:image" content="/og-image.png" />
    </Helmet>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
