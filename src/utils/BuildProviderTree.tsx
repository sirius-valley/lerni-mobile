import { Persistor } from 'redux-persist';
import React, { FunctionComponent, ReactNode } from 'react';

export interface PersistGateProps {
  persistor: Persistor;
  onBeforeLift?(): void | Promise<void>;
  children?: ReactNode | ((bootstrapped: boolean) => ReactNode);
  loading?: ReactNode;
}

type ComponentWithProps =
  | [((args: any) => JSX.Element | ReactNode) | FunctionComponent<PersistGateProps>, any]
  | [(args: any) => JSX.Element | ReactNode, null];

export const buildProviderTree = (componentsWithProps: ComponentWithProps[]) => {
  const initialComponent = ({ children }: { children: ReactNode }) => <>{children}</>;
  return componentsWithProps.reduce(
    (AccumulateComponent: any, [Provider, props = {}]: ComponentWithProps) => {
      return ({ children }: { children: ReactNode }) => {
        return (
          <AccumulateComponent>
            <Provider {...props}>{children}</Provider>
          </AccumulateComponent>
        );
      };
    },
    initialComponent,
  );
};
