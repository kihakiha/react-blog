import React from 'react';
import { Flex, IFlexProps } from '../../Flex/ui/Flex';

type IVStackProps = Omit<IFlexProps, 'direction'>

export const VStack = (props: IVStackProps) => {
  const { align = 'start' } = props;

  return (
    <Flex {...props} direction="column" align="start" />
  )
};
