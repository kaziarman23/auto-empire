"use client";

import * as React from "react";
import {
  BarChartIcon,
  CameraIcon,
  FileCodeIcon,
  FileTextIcon,
  LayoutDashboardIcon,
  ListIcon,
  UserPen,
  UserRoundPlus,
  UsersIcon,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";

import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useSelector } from "react-redux";
import Image from "next/image";
import logo from "@/public/images/Other_Images/logo.png";
import Link from "next/link";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Users",
      url: "/dashboard/users",
      icon: ListIcon,
    },
    {
      title: "Manage Users",
      url: "/dashboard/manageUsers",
      icon: UserPen,
    },
    {
      title: "Analytics",
      url: "/dashboard/analytics",
      icon: BarChartIcon,
    },
    {
      title: "Profile",
      url: "/dashboard/profile",
      icon: UserRoundPlus,
    },
  ],
  
};

export function AppSidebar({ ...props }) {
  const userInfo = useSelector((state) => state.user);
  const userData = {
    name: userInfo.userName,
    email: userInfo.userEmail,
    avatar:
      userInfo?.userPhoto ||
      "https://i.pinimg.com/736x/b1/29/06/b12906975778b10f8a64557289d058e5.jpg",
  };

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="/">
                <Image alt="logo" src={logo} className="h-5 w-5" />
                <span className="text-base font-semibold">Auto Empire</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userData} />
      </SidebarFooter>
    </Sidebar>
  );
}
