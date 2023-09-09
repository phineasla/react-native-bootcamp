import React, {Children, cloneElement} from 'react';
import {
  StyleSheet,
  View,
  DimensionValue,
  ViewProps,
  ViewStyle,
} from 'react-native';

import {HSpacer, VSpacer} from './Spacer';
import {FlexDirection} from '../types/styles.types';

function stackChildren(
  children: React.ReactNode,
  direction: FlexDirection,
  divider?: React.ReactElement,
  space?: DimensionValue,
) {
  const childrenArray = Children.toArray(children).filter(Boolean);
  const useHSpacer = direction === 'column' || direction === 'column-reverse';
  let spacer: React.ReactElement;
  if (divider) {
    const spacingProps: ViewStyle = useHSpacer
      ? {marginVertical: space}
      : {marginHorizontal: space};
    spacer = cloneElement(divider, spacingProps);
  } else if (useHSpacer) {
    spacer = <HSpacer height={space} />;
  } else {
    spacer = <VSpacer width={space} />;
  }
  return childrenArray.reduce<React.ReactNode[]>((output, child, i) => {
    output.push(child);
    if (i < childrenArray.length - 1) {
      output.push(cloneElement(spacer, {key: `spacer-${i}`}));
    }
    return output;
  }, []);
}

const REVERSE_MAP: Record<FlexDirection, FlexDirection> = {
  row: 'row-reverse',
  'row-reverse': 'row',
  column: 'column-reverse',
  'column-reverse': 'column',
};

export type StackProps = React.PropsWithChildren &
  ViewProps & {
    divider?: React.ReactElement;
    flexDirection: FlexDirection;
    reversed?: boolean;
    space?: DimensionValue;
  };

export function Stack(props: StackProps) {
  const direction = props.reversed
    ? REVERSE_MAP[props.flexDirection]
    : props.flexDirection;
  const styles = StyleSheet.compose(props.style, {flexDirection: direction});
  const children = stackChildren(
    props.children,
    direction,
    props.divider,
    props.space,
  );
  return (
    <View {...props} style={styles}>
      {children}
    </View>
  );
}

export type HStackProps = Partial<StackProps>;

export function HStack(props: HStackProps) {
  return <Stack flexDirection="row" {...props} />;
}

export type VStackProps = Partial<StackProps>;

export function VStack(props: HStackProps) {
  return <Stack flexDirection="column" {...props} />;
}
