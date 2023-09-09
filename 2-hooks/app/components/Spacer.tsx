import React, {memo} from 'react';
import {View, ViewProps, ViewStyle} from 'react-native';

export type HSpacerProps = ViewProps &
  Pick<
    ViewStyle,
    'height' | 'minHeight' | 'maxHeight' | 'marginVertical' | 'paddingVertical'
  >;

export type VSpacerProps = ViewProps &
  Pick<
    ViewStyle,
    'width' | 'minWidth' | 'maxWidth' | 'marginHorizontal' | 'paddingHorizontal'
  >;

export type SpacerProps = HSpacerProps &
  VSpacerProps &
  Pick<ViewStyle, 'margin' | 'padding'>;

function SpacerComponent(props: SpacerProps) {
  const spacerStyle: ViewStyle = {
    height: props.height,
    minHeight: props.minHeight,
    maxHeight: props.maxHeight,
    minWidth: props.minWidth,
    maxWidth: props.maxWidth,
    margin: props.margin,
    marginVertical: props.marginVertical,
    marginHorizontal: props.marginHorizontal,
    padding: props.padding,
    paddingVertical: props.paddingVertical,
    paddingHorizontal: props.paddingHorizontal,
  };
  return <View {...props} style={[props.style, spacerStyle]} />;
}

export const Spacer = memo(SpacerComponent);

function HSpacerComponent(props: HSpacerProps) {
  return <Spacer {...props} />;
}

export const HSpacer = memo(HSpacerComponent);

function VSpacerComponent(props: VSpacerProps) {
  return <Spacer {...props} />;
}

export const VSpacer = memo(VSpacerComponent);
