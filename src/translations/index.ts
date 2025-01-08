import { LANGUAGE } from "../languages";
import { T_GENERAL } from "./general";
import { T_STADIUM } from "./stadium";

export const T = {
  // General Terms
  ...T_GENERAL,

  // STADIUM-specific
  ...T_STADIUM,

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

  // View: Tournament
  TOURNAMENT_OVERVIEW: {
    [LANGUAGE.EN]: "Overview",
  },
  TOURNAMENT_ENTRY_FORM: {
    [LANGUAGE.EN]: "Entry Form",
  },
  TOURNAMENT_ENTER_PIN_TO_REPORT: {
    [LANGUAGE.EN]: "Enter PIN code to report scores",
  },
  TOURNAMENT_TEST: {
    [LANGUAGE.EN]: "Test2",
  },
};
