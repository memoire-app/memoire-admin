import { useAuth } from "~/composables/useAuth.js";

export default defineNuxtRouteMiddleware(async (to) => {
  const { checkAuth } = useAuth();

  // Allow access to the index page without authentication
  if (to.path === "/") {
    return;
  }

  try {
    await checkAuth();
  } catch {
    return navigateTo("/");
  }
});
