export const BACKGROUND_ICONS_COLORS = {
    dark_yellow: '--yellow-700',
    yellow: '--yellow-500',
    light_black: 'base-text',
    purple: '--purple-500'
}

export interface backgroundProps{
    presetcolors: keyof typeof BACKGROUND_ICONS_COLORS
}