import ProspectingWidgetEmbed from "@/components/ProspectingWidgetEmbed";
import Seo from "@/components/Seo";
import { pageMeta } from "@/content/site";

export default function FreeVisibilityReportPage() {
  return (
    <>
      <Seo {...pageMeta.freeVisibilityReport} path="/free-visibility-report" />
      <main className="homepage-shell relative overflow-hidden">
        <ProspectingWidgetEmbed variant="page" />
      </main>
    </>
  );
}
