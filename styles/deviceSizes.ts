export type DeviceType = keyof typeof device

export const device = {
  mobileS: `(max-width: 400px)`,
  mobile: `(max-width: 550px)`,
  tablet: `(max-width: 700px)`,
  tabletL: `(max-width: 850px)`,
  desktopS: `(max-width: 950px)`,
  desktop: `(max-width: 990px)`,
}