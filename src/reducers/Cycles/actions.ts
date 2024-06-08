import { Cycle } from "./reducer";

export enum ActionTypes {
  add_new_cycle = "add_new_cycle",
  interrupt_current_cycle = "interrupt_current_cycle",
  mark_current_cycle_as_finished = "mark_current_cycle_as_finished",
}

interface addNewCycleActionType {
  type: ActionTypes.add_new_cycle;
  payload: {
    newCycle: Cycle;
  };
}

interface markCurrentCycleAsFinishedActionType {
  type: ActionTypes.mark_current_cycle_as_finished;
}

interface interruptCurrentCycleActionType {
  type: ActionTypes.interrupt_current_cycle;
}

export type cycleActionsType =
  | addNewCycleActionType
  | markCurrentCycleAsFinishedActionType
  | interruptCurrentCycleActionType;

export function addNewCycleAction(newCycle: Cycle): addNewCycleActionType {
  return {
    type: ActionTypes.add_new_cycle,
    payload: {
      newCycle,
    },
  };
}

export function markCurrentCycleAsFinishedAction(): markCurrentCycleAsFinishedActionType {
  return {
    type: ActionTypes.mark_current_cycle_as_finished,
  };
}

export function interruptCurrentCycleAction(): interruptCurrentCycleActionType {
  return {
    type: ActionTypes.interrupt_current_cycle,
  };
}
