import { unionize } from 'unionize';

export const Actions = unionize({
  Increment: {},
  Decrement: {},
  Reset: {},
}, { tag: 'type' });
