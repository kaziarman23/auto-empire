"use client";

import * as React from "react";
import {
  AlignStartVertical,
  ChartBarBig,
  ChartLine,
  CircleDollarSign,
  CopyPlus,
  House,
  Info,
  LayoutDashboardIcon,
  LayoutList,
  ListMinus,
  User,
  UserPen,
} from "lucide-react";
import Loading from "@/app/loading";
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
import Image from "next/image";
import logo from "@/public/images/Other_Images/logo.png";
import Link from "next/link";
import useCurrentUser from "../hooks/useCurrentUser";
import { NavSecondary } from "./nav-secondary";

const data = {
  navMainAdmin: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Profile",
      url: "/dashboard/profile",
      icon: User,
    },
    {
      title: "Analytics",
      url: "/dashboard/analytics",
      icon: ChartLine,
    },
    {
      title: "Manage Users",
      url: "/dashboard/manageUsers",
      icon: UserPen,
    },
    {
      title: "Manage Orders",
      url: "/dashboard/manageOrders",
      icon: ChartBarBig,
    },
    {
      title: "Manage Cars",
      url: "/dashboard/manageCars",
      icon: LayoutList,
    },
  ],
  navMainUser: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Profile",
      url: "/dashboard/profile",
      icon: User,
    },
    {
      title: "My Cars",
      url: "/dashboard/myCars",
      icon: ListMinus,
    },
    {
      title: "Transections",
      url: "/dashboard/transections",
      icon: CircleDollarSign,
    },
  ],
  navSecondary: [
    {
      title: "Home",
      url: "/",
      icon: House,
    },
    {
      title: "Inventory",
      url: "/inventory",
      icon: AlignStartVertical,
    },
    {
      title: "Help",
      url: "/contact",
      icon: Info,
    },
  ],
};

export function AppSidebar({ ...props }) {
  const { user, isLoading, isError, error } = useCurrentUser();

  if (isLoading) return <Loading />;
  if (isError) {
    return <p>Error: {error?.message || "Failed to load user data."}</p>;
  }

  const userData = {
    name: user.userName,
    email: user.userEmail,
    avatar: user.userPhoto,
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
        <NavMain
          items={
            user.userRole === "admin" ? data.navMainAdmin : data.navMainUser
          }
        />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userData} />
      </SidebarFooter>
    </Sidebar>
  );
}
