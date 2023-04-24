export const Icons = ['arrowDown', 'arrowUp', 'arrowLeft', 'arrowRight'] as const

export type IconType = (typeof Icons)[number]
