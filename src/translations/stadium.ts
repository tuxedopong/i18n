import { LANGUAGE } from "../languages";
import { TRANSLATION_MAP } from "../types";

export const T_STADIUM: Record<string, TRANSLATION_MAP> = {
  STADIUM_TAGLINE: {
    [LANGUAGE.EN]: "For Competition",
    [LANGUAGE.ES]: "Para competir",
  },
  STADIUM_IS_NOW_FREE: {
    [LANGUAGE.EN]: "STADIUM is now 100% free for organizers.",
  },
  STADIUM_HELP_US_KEEP_IT_FREE: {
    [LANGUAGE.EN]:
      "Help us keep it free - and get extra perks - with a monthly subscription (starting at just $2).",
  },
  STADIUM_SUBSCRIBE_TO_SUPPORT: {
    [LANGUAGE.EN]: "Subscribe to Support STADIUM",
  },
};
