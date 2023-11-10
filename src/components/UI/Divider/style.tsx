'use client'

import { styled } from 'styled-components'
import theme from '@/styles/theme'

interface DividerCustomProps {
  $x?: number
  $y?: number
}

export const DividerCustom = styled.div<DividerCustomProps>`
  width: 100%;

  min-height: ${props => props.$y}px;
`
