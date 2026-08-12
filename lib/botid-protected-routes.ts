export type BotIdProtectedRoute = {
  path: string;
  method: string;
  advancedOptions?: {
    checkLevel?: "basic" | "deepAnalysis";
  };
};

export const botIdProtectedRoutes: BotIdProtectedRoute[] = [];
