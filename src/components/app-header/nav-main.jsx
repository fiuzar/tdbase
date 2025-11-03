"use client"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import LogATrade from "../app/log-a-trade";
import CreateTradeAccount from "../app/create-trade-account";
import RiskCalculator from "../app/risk-calculator";
import Link from "next/link";

export function NavMain({
  items
}) {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <LogATrade />
          </SidebarMenuItem>
          <SidebarMenuItem className="flex items-center gap-2">
            <CreateTradeAccount />
          </SidebarMenuItem>
          <SidebarMenuItem className="flex items-center gap-2">
            <RiskCalculator />
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          {items.map((item) => (
            <Link key={item.title} href={item.url} className="no-underline cursor-pointer">
              <SidebarMenuItem>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </Link>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
