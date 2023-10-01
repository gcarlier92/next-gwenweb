import React from "react";
import {
  CalendarIcon,
  FolderIcon,
  PencilIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { NavItem } from "./Sidebar";

export const defaultNavItems: NavItem[] = [
  {
    label: "Paintings",
    href: "/paintings",
    icon: <PencilIcon className="w-6 h-6" />,
  },
  {
    label: "Rolls",
    href: "/rolls",
    icon: <UserGroupIcon className="w-6 h-6" />,
  },
  {
    label: "Biography",
    href: "/biography",
    icon: <FolderIcon className="w-6 h-6" />,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: <CalendarIcon className="w-6 h-6" />,
  },
];
