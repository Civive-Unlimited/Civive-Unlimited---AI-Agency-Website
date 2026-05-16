import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import AIReceptionistPage from "@/pages/AIReceptionistPage";
import AIAgencySpringfieldPage from "@/pages/AIAgencySpringfieldPage";
import AuditPage from "@/pages/AuditPage";
import BuildInPublicPage from "@/pages/BuildInPublicPage";
import ContactPage from "@/pages/ContactPage";
import CiviveOSPage from "@/pages/CiviveOSPage";
import CiviveOSOfferPage from "@/pages/CiviveOSOfferPage";
import FAQPage from "@/pages/FAQPage";
import FreeVisibilityReportPage from "@/pages/FreeVisibilityReportPage";
import IndustriesPage from "@/pages/IndustriesPage";
import IndustryPage from "@/pages/IndustryPage";
import NotFound from "@/pages/NotFound";
import ProspectingReportPage from "@/pages/ProspectingReportPage";
import ResourceArticlePage from "@/pages/ResourceArticlePage";
import ResourcesPage from "@/pages/ResourcesPage";
import ServicePage from "@/pages/ServicePage";
import SpringfieldServiceAreaPage from "@/pages/SpringfieldServiceAreaPage";
import VisibilitySystemPage from "@/pages/VisibilitySystemPage";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import GHLChatWidget from "./components/GHLChatWidget";

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
      <Route path={"/ai-search-audit"} component={AuditPage} />
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
          <Router />
          <Footer />
          <GHLChatWidget />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
