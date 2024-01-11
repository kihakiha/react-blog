import React from 'react';
import { Flex, IFlexProps } from '../../Flex/ui/Flex';

type IHStackProps = Omit<IFlexProps, 'direction'>

export const HStack = (props: IHStackProps) => (
  <Flex direction="row" {...props} />
);
