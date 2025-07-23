import { MessageSquareMore } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { UserNav } from "./user-nav";

// Menu items.
const recentChats = [
  {
    title: "Responsive Navbar with Tailwind CSS",
    slug: "responsive-navbar-with-tailwind-css",
    id: 1,
  },
  {
    title: "Create beautiful landing pages with Tailwind CSS",
    slug: "create-beautiful-landing-pages-with-tailwind-css",
    id: 2,
  },
  {
    title: "Design system for Tailwind CSS",
    slug: "design-system-for-tailwind-css",
    id: 3,
  },
  {
    title: "How to use Tailwind CSS with Next.js",
    slug: "how-to-use-tailwind-css-with-nextjs",
    id: 4,
  },
  {
    title: "Learn Tailwind CSS by building a website",
    slug: "learn-tailwind-css-by-building-a-website",
    id: 5,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-slate-500">
      <SidebarContent className="bg-black text-foreground">
        <SidebarGroup>
          <SidebarGroupLabel className="text-foreground flex items-center justify-start">
            <MessageSquareMore className="mr-2" />
            Chats
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {recentChats.map((chat) => (
                <SidebarMenuItem key={chat.title}>
                  <SidebarMenuButton asChild className="rounded">
                    <a href={chat.slug}>
                      <span>{chat.title.slice(0, 25).concat("...")}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <UserNav
        user={{
          name: "John Doe",
          email: "admin@wanchat.com",
          avatar: "https://github.com/shadcn.png",
        }}
      />
    </Sidebar>
  );
}
