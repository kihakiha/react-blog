import React from 'react';
import { TMods, cn } from '../../../libs/classNames/classNames';
import starIcon from '@/shared/assets/icons/star.svg'
import { Icon } from '../../Icon';

import styles from './StarRating.module.scss';

interface IStarRatingProps {
  className?: string;
  onSelect?: (starsCount: number) => void;
  size?: number;
  selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5]

export const StarRating = (props: IStarRatingProps) => {
  const {
    className = '',
    size = 30,
    onSelect,
    selectedStars = 0,
  } = props

  const [currentStarsCount, setCurrentStarsCount] = React.useState(0);
  const [isSelected, setIsSelected] = React.useState(Boolean(selectedStars));

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount)
    }
  }

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0)
    }
  }

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount)
      setCurrentStarsCount(starsCount)
      setIsSelected(true)
    }
  }

  return (
    <div className={cn(styles.StarRating, {}, [className])}>
      {stars.map((star) => (
        <Icon
          className={
            cn(
              styles.starIcon,
              { [styles.selected]: isSelected },
              [currentStarsCount >= star ? styles.hovered : styles.primary]
            )
          }
          Svg={starIcon}
          key={star}
          width={size}
          height={size}
          onMouseLeave={onLeave}
          onMouseEnter={onHover(star)}
          onClick={onClick(star)}
        />
      ))}
    </div>
  );
};
