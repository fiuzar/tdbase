import { SectionCards } from "@/components/app-header/section-cards"
import AnalyticsSection from "@/components/app-header/analytics-section"
import DashboardJournal from "@/components/app-header/dashboard_journal"
import RiskManagementPanel from "@/components/app-header/risk-management-panel"

export default function AppPage() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <SectionCards />
          <div className="grid grid-cols-1 lg:grid-cols-4 px-4 lg:px-6 gap-4 md:gap-6">
            <div className="col-span-3" >
              <DashboardJournal />
              <AnalyticsSection />
            </div>
            <div>
              <RiskManagementPanel />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}