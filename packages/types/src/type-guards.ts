/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { IChannel, IMessage, ITeam } from "./types";

/**
 * Check whether a given value is an array where
 * each member is of a specified type
 *
 * @param array - array to check
 * @param check - type guard to use when evaluating each item
 * @public
 */
export function isTypedArray<T>(
  array: unknown,
  check: (x: any) => x is T
): array is T[] {
  if (!Array.isArray(array)) {
    return false;
  }
  return !array.some((item) => !check(item));
}

/**
 * Check whether a given value is an {@link @shlack/types#ITeam}
 * @param arg - value to check
 * @beta
 *
 * @example
 * Here's an example of how to use this guard
 * ```ts
 * const team = { id: 'li', name: 'LinkedIn' };
 * isTeam(team); // true
 * ```
 */
export function isTeam(arg: any): arg is ITeam {
  return (
    typeof arg.name === "string" &&
    typeof arg.id === "string" &&
    Array.isArray(arg.channels)
  );
}

/**
 * Check whether a given value is an {@link @shlack/types#IChannel}
 * @param arg - value to check
 * @beta
 */
export function isChannel(arg: any): arg is IChannel {
  return (
    typeof arg.id === "string" &&
    typeof arg.teamId === "string" &&
    typeof arg.description === "string" &&
    typeof arg.name === "string"
  );
}

/**
 * Check whether a given value is an {@link @shlack/types#IMessage}
 * @param arg - value to check
 * @beta
 */
export function isMessage(arg: any): arg is IMessage {
  return (
    typeof arg.teamId === "string" &&
    typeof arg.channelId === "string" &&
    typeof arg.userId === "string" &&
    typeof arg.body === "string"
  );
}
