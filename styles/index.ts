import { color, ColorType } from './colors'
import { backgrounds, BGType } from './backgrounds'
import { shadow, ShadowType } from './shadows'
import { gradient, GradientType } from './gradients'
import { device, DeviceType } from './deviceSizes'
import mixin from './mixins'

export { 
  color, 
  backgrounds, 
  shadow, 
  gradient, 
  mixin,
  device
}

export type { 
  ColorType, 
  BGType, 
  ShadowType,
  GradientType,
  DeviceType 
}