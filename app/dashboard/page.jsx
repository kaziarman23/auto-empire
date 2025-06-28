import { AppSidebar } from "@/shadcn/components/app-sidebar"
import { ChartAreaInteractive } from "@/shadcn/components/chart-area-interactive"
import { DataTable } from "@/shadcn/components/data-table"
import { SectionCards } from "@/shadcn/components/section-cards"
import { SiteHeader } from "@/shadcn/components/site-header"
import { SidebarInset, SidebarProvider } from "@/shadcn/components/ui/sidebar"

import data from "./data.json"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
