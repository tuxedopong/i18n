import { LANGUAGE } from "../languages";
import { T_GENERAL } from "./general";
import { T_STADIUM } from "./stadium";
import { T_TOURNAMENT } from "./tournament";

export const T = {
  // General Terms
  ...T_GENERAL,

  // STADIUM-specific
  ...T_STADIUM,

  // View: Tournament or League
  ...T_TOURNAMENT,

  // View: Search
  SEARCH_HEADER_GENERIC: {
    [LANGUAGE.EN]: "Find your competition.",
    [LANGUAGE.ES]: "Encuentra tu competencia.",
  },
  SEARCH_CTA_CREATE: {
    [LANGUAGE.EN]: "or, create your own",
  },
  SEARCH_VIEWING: {
    [LANGUAGE.EN]: "Viewing",
  },
  SEARCH_ACTIVE: {
    [LANGUAGE.EN]: "Active",
  },
  SEARCH_PAST: {
    [LANGUAGE.EN]: "Past",
  },
  SEARCH_ANY_SPORT: {
    [LANGUAGE.EN]: "Any Sport",
  },
  SEARCH_ANYWHERE: {
    [LANGUAGE.EN]: "Anywhere",
  },

  // View: Community
  COMMUNITY_PAGE_TITLE: {
    [LANGUAGE.EN]: "Community",
  },

  // View: Admin
  ADMIN_PAGE_TITLE: {
    [LANGUAGE.EN]: "Admin",
  },

  // View: Account
  ACCOUNT_PAGE_TITLE: {
    [LANGUAGE.EN]: "My Account",
  },
};
