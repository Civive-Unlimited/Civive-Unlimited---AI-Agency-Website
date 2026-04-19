import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import AIReceptionistPage from "@/pages/AIReceptionistPage";
import AuditPage from "@/pages/AuditPage";
import BuildInPublicPage from "@/pages/BuildInPublicPage";
import ContactPage from "@/pages/ContactPage";
import FAQPage from "@/pages/FAQPage";
import IndustriesPage from "@/pages/IndustriesPage";
import IndustryPage from "@/pages/IndustryPage";
import NotFound from "@/pages/NotFound";
import Platform from "@/pages/Platform";
import ResourcesPage from "@/pages/ResourcesPage";
import VisibilitySystemPage from "@/pages/VisibilitySystemPage";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import GHLChatWidget from "./components/GHLChatWidget";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/ai-search-audit"} component={AuditPage} />
      <Route path={"/visibility-system"} component={VisibilitySystemPage} />
      <Route path={"/industries"} component={IndustriesPage} />
      <Route path={"/industries/:slug"}>
        {(params) => <IndustryPage slug={params.slug} />}
      </Route>
      <Route path={"/faq"} component={FAQPage} />
      <Route path={"/resources"} component={ResourcesPage} />
      <Route path={"/build-in-public"} component={BuildInPublicPage} />
      <Route path={"/contact"} component={ContactPage} />
      <Route path={"/ai-receptionist"} component={AIReceptionistPage} />
      <Route path={"/platform"} component={Platform} />
      <Route path={"/privacy"} component={Privacy} />
      <Route path={"/terms"} component={Terms} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Navigation />
          <Router />
          <Footer />
          <GHLChatWidget />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
