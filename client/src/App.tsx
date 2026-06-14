import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense, useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import GHLChatWidget from "./components/GHLChatWidget";

const AIReceptionistPage = lazy(() => import("@/pages/AIReceptionistPage"));
const AISearchTrustAuditPage = lazy(
  () => import("@/pages/AISearchTrustAuditPage")
);
const AISearchTrustLeakFieldKitPage = lazy(
  () => import("@/pages/AISearchTrustLeakFieldKitPage")
);
const AISearchTrustLeakFieldKitThankYouPage = lazy(
  () => import("@/pages/AISearchTrustLeakFieldKitThankYouPage")
);
const AIAgencySpringfieldPage = lazy(
  () => import("@/pages/AIAgencySpringfieldPage")
);
const VisibilityReportPage = lazy(() => import("@/pages/VisibilityReportPage"));
const BuildInPublicPage = lazy(() => import("@/pages/BuildInPublicPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const CiviveOSPage = lazy(() => import("@/pages/CiviveOSPage"));
const CiviveOSOfferPage = lazy(() => import("@/pages/CiviveOSOfferPage"));
const FAQPage = lazy(() => import("@/pages/FAQPage"));
const FreeVisibilityReportPage = lazy(
  () => import("@/pages/FreeVisibilityReportPage")
);
const IndustriesPage = lazy(() => import("@/pages/IndustriesPage"));
const IndustryPage = lazy(() => import("@/pages/IndustryPage"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const ProspectingReportPage = lazy(
  () => import("@/pages/ProspectingReportPage")
);
const ResourceArticlePage = lazy(() => import("@/pages/ResourceArticlePage"));
const ResourcesPage = lazy(() => import("@/pages/ResourcesPage"));
const ServicePage = lazy(() => import("@/pages/ServicePage"));
const SpringfieldServiceAreaPage = lazy(
  () => import("@/pages/SpringfieldServiceAreaPage")
);
const VisibilitySystemPage = lazy(() => import("@/pages/VisibilitySystemPage"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));

function RouteScrollReset() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route
        path={"/ai-agency-springfield-mo"}
        component={AIAgencySpringfieldPage}
      />
      <Route path={"/ai-search-report"} component={VisibilityReportPage} />
      <Route
        path={"/ai-search-trust-audit"}
        component={AISearchTrustAuditPage}
      />
      <Route
        path={"/ai-search-trust-leak-field-kit"}
        component={AISearchTrustLeakFieldKitPage}
      />
      <Route
        path={"/ai-search-trust-leak-field-kit/thank-you"}
        component={AISearchTrustLeakFieldKitThankYouPage}
      />
      <Route
        path={"/free-visibility-report"}
        component={FreeVisibilityReportPage}
      />
      <Route path={"/prospecting-report"}>
        {() => <ProspectingReportPage />}
      </Route>
      <Route path={"/report/:slug"}>
        {params => <ProspectingReportPage slug={params.slug} />}
      </Route>
      <Route path={"/visibility-system"} component={VisibilitySystemPage} />
      <Route path={"/industries"} component={IndustriesPage} />
      <Route path={"/industries/:slug"}>
        {params => <IndustryPage slug={params.slug} />}
      </Route>
      <Route path={"/services/:slug"}>
        {params => <ServicePage slug={params.slug} />}
      </Route>
      <Route
        path={"/service-areas/springfield-mo"}
        component={SpringfieldServiceAreaPage}
      />
      <Route path={"/faq"} component={FAQPage} />
      <Route path={"/resources/:slug"}>
        {params => <ResourceArticlePage slug={params.slug} />}
      </Route>
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
          <RouteScrollReset />
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
