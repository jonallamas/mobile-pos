'use client'

import { FlexCustom } from './style'

interface FlexProps {
  children: any
  gap?: 0 | 2 | 4 | 8 | 16 | 24
  direction?: 'row' | 'column'
  flex?: 0 | 1 | 'initial'
  justify?: 'start' | 'end' | 'space-between' | 'center'
  align?: 'start' | 'center' | 'end'
}

export default function Flex(props: FlexProps) {
  const {
    children,
    gap = 0,
    direction = 'row',
    flex = 'initial',
    justify = 'start',
    align = 'start'
  } = props

  return (
    <FlexCustom
      $gap={`${gap}px`}
      $direction={direction}
      $flex={flex}
      $justify={justify}
      $align={align}
    >
      {children}
    </FlexCustom>
  )
}
