export const orderCancellation = [
  {
    id: 1,
    events_id: 1,
    event: "order placed",
    parent_events_id: null,
    is_default: "True",
  },
  {
    id: 2,
    events_id: 2,
    event: "shipped",
    parent_events_id: [1, 7],
    is_default: "True",
  },
  {
    id: 3,
    events_id: 3,
    event: "out for delivery",
    parent_events_id: [2],
    is_default: "True",
  },
  {
    id: 4,
    events_id: 4,
    event: "cancelled",
    parent_events_id: [3],
    is_default: "True",
  },
];
export const orderReturn = [
  {
    id: 1,
    events_id: 1,
    event: "order placed",
    parent_events_id: null,
    is_default: "True",
  },
  {
    id: 2,
    events_id: 2,
    event: "shipped",
    parent_events_id: [1, 7],
    is_default: "True",
  },
  {
    id: 3,
    events_id: 3,
    event: "out for delivery",
    parent_events_id: [2],
    is_default: "True",
  },
  {
    id: 5,
    events_id: 5,
    event: "delivered",
    parent_events_id: [3],
    is_default: "True",
  },
  {
    id: 6,
    events_id: 6,
    event: "return",
    parent_events_id: [5],
    is_default: "True",
  },
];
