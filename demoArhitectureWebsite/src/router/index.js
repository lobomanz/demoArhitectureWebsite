// router/index.ts or index.js
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import Work from "@/views/Work.vue";
import Refrences from "@/views/Refrences.vue";
import Project from "@/views/Project.vue";
import Contact from "@/views/Contact.vue";
import Services from "@/views/Services.vue";
import Service from "@/views/Service.vue";
import People from "@/views/People.vue";
import SiteInProgress from "@/views/SiteInProgress.vue";

export const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: SiteInProgress,
  //   meta: {
  //     mode: 1,
  //     title: "Site in progress",
  //     description: "Site is currently in progress",
  //   },
  // },
  {
    path: "/",
    name: "preview",
    component: HomeView,
    meta: {
      mode: 1,
      title: "Home - demoArhitectureWebsite",
      description: "See all of our projects",
    },
  },
  {
    path: "/refrences",
    name: "refrences",
    component: Refrences,
    meta: {
      title: "Refrences - all our projects at one point",
      description: "List of everything you need to know about our projects",
    },
  },
  {
    path: "/work",
    name: "work",
    component: Work,
    meta: {
      title: "Work - our projects in their glorious form",
      description: "Look at a more detailed version of each of our projects",
    },
  },
  {
    path: "/project/:id",
    name: "project",
    component: Project,
    meta: {
      title: "Project - a detailed view of a specific project",
      description: "Look at a more detailed version of a certain project",
    },
  },
  {
    path: "/people",
    name: "people",
    component: People,
    meta: {
      title: "About Us - learn more about our people",
      description: "Learn more about our company and people.",
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
    meta: {
      mode: 2,
      title: "Contact - here is how to get in touch with us",
      description: "Learn more about our company e-mails and contact.",
    },
  },
  {
    path: "/services",
    name: "services",
    component: Services,
    meta: {
      title: "Services - all our services at one place",
      description: "Learn more about the services we offer.",
    },
  },
  {
    path: "/service/:id",
    name: "service",
    component: Service,
    meta: {
      title: "Service - a specific service",
      description: "Learn more about a specific service.",
    },
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
});

export default router;
