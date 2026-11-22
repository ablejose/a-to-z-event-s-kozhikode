import type { EventConfig } from "@/config/event-schema";
import { fromBusiness, type BusinessInput } from "@/events/from-business";
import active from "@/events/active.json";

/** A TO Z business details and media live in this single client configuration. */
export const event: EventConfig = fromBusiness(active as unknown as BusinessInput);
export default event;
