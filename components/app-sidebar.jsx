"use client";

import * as React from "react";
import {
  BarChartIcon,
  LayoutDashboardIcon,
  ListIcon,
  UserPen,
  UserRoundPlus,
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
import { useSelector } from "react-redux";
import Image from "next/image";
import logo from "@/public/images/Other_Images/logo.png";
import Link from "next/link";
import { useGetUsersQuery } from "../app/redux/api/usersApi";

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
  const currentUser = useSelector((state) => state.user);
  const { data: userInfo, isLoading, isError, error } = useGetUsersQuery();

  if (isLoading) return <Loading />;
  if (isError)
    return <p>Error: {error?.message || "Failed to load user data."}</p>;

  if (!currentUser?.userEmail) return <Loading />;

  const usersArray = Array.isArray(userInfo) ? userInfo : userInfo?.users;

  const user = usersArray?.find(
    (user) =>
      user.userEmail?.toLowerCase().trim() ===
      currentUser.userEmail?.toLowerCase().trim(),
  );

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
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userData} />
      </SidebarFooter>
    </Sidebar>
  );
}
