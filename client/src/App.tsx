import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import GHLChatWidget from "./components/GHLChatWidget";
import Home from "./pages/Home";

const AIAgencySpringfieldPage = lazy(() => import("@/pages/AIAgencySpringfieldPage"));
const AuditPage = lazy(() => import("@/pages/AuditPage"));
const VisibilitySystemPage = lazy(() => import("@/pages/VisibilitySystemPage"));
const IndustriesPage = lazy(() => import("@/pages/IndustriesPage"));
const IndustryPage = lazy(() => import("@/pages/IndustryPage"));
const FAQPage = lazy(() => import("@/pages/FAQPage"));
const ResourcesPage = lazy(() => import("@/pages/ResourcesPage"));
const BuildInPublicPage = lazy(() => import("@/pages/BuildInPublicPage"));
const CiviveOSPage = lazy(() => import("@/pages/CiviveOSPage"));
const CiviveOSOfferPage = lazy(() => import("@/pages/CiviveOSOfferPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const AIReceptionistPage = lazy(() => import("@/pages/AIReceptionistPage"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route
        path={"/ai-agency-springfield-mo"}
        component={AIAgencySpringfieldPage}
      />
      <Route path={"/ai-search-audit"} component={AuditPage} />
      <Route path={"/visibility-system"} component={VisibilitySystemPage} />
      <Route path={"/industries"} component={IndustriesPage} />
      <Route path={"/industries/:slug"}>
        {(params) => <IndustryPage slug={params.slug} />}
      </Route>
      <Route path={"/faq"} component={FAQPage} />
      <Route path={"/resources"} component={ResourcesPage} />
      <Route path={"/build-in-public"} component={BuildInPublicPage} />
      <Route path={"/civive-os"} component={CiviveOSPage} />
      <Route path={"/civive-os-offer"} component={CiviveOSOfferPage} />
      <Route path={"/contact"} component={ContactPage} />
      <Route path={"/ai-receptionist"} component={AIReceptionistPage} />
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
          <Suspense fallback={null}>
            <Router />
          </Suspense>
          <Footer />
          <GHLChatWidget />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
