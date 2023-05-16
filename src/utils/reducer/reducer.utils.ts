import { AnyAction } from 'redux';

type Matchable<AC extends () => AnyAction> = AC & {
  type: ReturnType<AC>['type'];
  match(action: AnyAction): action is ReturnType<AC>;
};

type ActionWithoutArg = () => AnyAction & { type: string };
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ActionWithArg = (...args: any[]) => AnyAction & { type: string };

export function withMatcher<AC extends ActionWithoutArg>(
  actionCreatorFn: AC,
): Matchable<AC>;

export function withMatcher<AC extends ActionWithArg>(
  actionCreatorFn: AC,
): Matchable<AC>;

export function withMatcher<AC extends ActionWithArg | ActionWithoutArg>(
  actionCreatorFn: AC,
) {
  const type = actionCreatorFn().type;
  const match = (action: AnyAction) => action.type === type;
  return Object.assign(actionCreatorFn, { type, match });
}

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;
};

export function createAction<T extends string, P>(
  type: T,
  payload: P,
): ActionWithPayload<T, P>;

export function createAction<T extends string>(
  type: T,
  payload: void,
): Action<T>;

export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}
