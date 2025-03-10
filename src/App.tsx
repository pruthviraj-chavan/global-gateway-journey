
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import MainFooter from "./components/MainFooter";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Importing SEO metadata
const seoMetadata = {
  title: "Emprise Study Abroad | Your Gateway to Global Education",
  description: "Emprise Study Abroad - Top overseas education consultants in Kolhapur, India. Get expert guidance for MBBS in Russia, UK education, scholarship assistance, and IELTS coaching.",
  keywords: "study abroad, MBBS in Russia, UK education, overseas education consultants, study abroad consultants, IELTS coaching, visa assistance, scholarships abroad, Kolhapur, India",
  ogTitle: "Emprise Study Abroad | Your Gateway to Global Education",
  ogDescription: "Expert overseas education consultants in Kolhapur, India. Get guidance for MBBS in Russia, UK education, and more.",
  ogType: "website",
  ogUrl: "https://emprisestudyabroad.com",
  ogImage: "/og-image.png"
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Helmet>
      <title>{seoMetadata.title}</title>
      <meta name="description" content={seoMetadata.description} />
      <meta name="keywords" content={seoMetadata.keywords} />
      <meta property="og:title" content={seoMetadata.ogTitle} />
      <meta property="og:description" content={seoMetadata.ogDescription} />
      <meta property="og:type" content={seoMetadata.ogType} />
      <meta property="og:url" content={seoMetadata.ogUrl} />
      <meta property="og:image" content={seoMetadata.ogImage} />
      
      {/* Additional SEO metadata */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoMetadata.ogTitle} />
      <meta name="twitter:description" content={seoMetadata.ogDescription} />
      <meta name="twitter:image" content={seoMetadata.ogImage} />
      
      {/* Locale and canonical */}
      <meta property="og:locale" content="en_US" />
      <link rel="canonical" href={seoMetadata.ogUrl} />
    </Helmet>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <MainFooter />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
