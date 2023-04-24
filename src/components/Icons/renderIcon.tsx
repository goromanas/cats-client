import { ReactNode } from 'react'
import { ArrowDown, ArrowUp } from '.'
import { IconType } from './Icon.types'
import { ArrowLeft } from './ArrowLeft'
import { ArrowRight } from './ArrowRight'

export const renderIcon = (icon: IconType) => {
  const iconMap: Record<IconType, ReactNode> = {
    arrowDown: <ArrowDown />,
    arrowUp: <ArrowUp />,
    arrowLeft: <ArrowLeft />,
    arrowRight: <ArrowRight />
  }

  return iconMap[icon]
}
