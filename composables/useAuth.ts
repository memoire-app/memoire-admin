export const useAuth = () => {
  const checkAuth = async () => {
    try {
      const headers = useRequestHeaders();
      const runtimeConfig = useRuntimeConfig();
      return $fetch(`/me`, {
        baseURL: runtimeConfig.public.BACK_ADMIN_URL as string,
        headers,
        credentials: "include",
      });
    } catch {
      return false;
    }
  };

  return {
    checkAuth,
  };
};
