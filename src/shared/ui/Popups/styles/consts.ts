import { TDropDownDirection } from '../../../types/ui'
import styles from './popups.module.scss'

export const mapDirectionClass: Record<TDropDownDirection, string> = {
  'bottom left': styles.optionBottomLeft,
  'bottom right': styles.optionBottomRight,
  'top left': styles.optionTopLeft,
  'top right': styles.optionTopRight,
}
