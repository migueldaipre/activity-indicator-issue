import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';

export const ActivityIndicatorWithRef = React.forwardRef<ActivityIndicator, ActivityIndicatorProps>(
  (props, ref) => <ActivityIndicator ref={ref} {...props} />
);
