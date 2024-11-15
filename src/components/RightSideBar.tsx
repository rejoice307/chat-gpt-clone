import { LuCalendar, LuHome, LuInbox, LuSearch, LuSettings } from 'react-icons/lu'
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from './ui/sidebar'

const RightSideBar = () => {

  const items = [
    {
      title: "Home",
      url: "#",
      icon: LuHome,
    },
    {
      title: "Inbox",
      url: "#",
      icon: LuInbox,
    },
    {
      title: "Calendar",
      url: "#",
      icon: LuCalendar,
    },
    {
      title: "Search",
      url: "#",
      icon: LuSearch,
    },
    {
      title: "Settings",
      url: "#",
      icon: LuSettings,
    },
  ]
  

  return (
    <Sidebar side='right'>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Application</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
  )
}

export default RightSideBar