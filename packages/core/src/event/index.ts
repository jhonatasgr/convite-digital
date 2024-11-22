import type { IEvent } from './model/event'
import type { Guest } from './model/guest'
import { complementGuest } from './functions/complement-guest'
import { complementEvent } from './functions/complement-event'
import { createEmptyEvent } from './functions/create-empty-event'
import { createEmptyGuest } from './functions/create-empty-guest'

export type { IEvent, Guest }
export { complementEvent, complementGuest, createEmptyEvent, createEmptyGuest }
