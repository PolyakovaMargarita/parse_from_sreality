import { memo, FC, MouseEvent } from 'react';

import Sprite from '../../../images/sprite.svg';

import s from './MyIcon.module.css';

interface MyIconProps {
  image: string;
  width: string;
  height: string;
  color?: string;
  onClick?: (event: MouseEvent<SVGSVGElement>) => void;
  fill?: string;
}

const MyIcon: FC<MyIconProps> = ({ image, width, height, color, onClick, fill }) => (
  <svg
    className={`${onClick ? s.clicked : ''}`}
    width={width}
    height={height}
    fill={fill}
    color={color}
    onClick={onClick}
  >
    <use href={Sprite + `#${image}`} />
  </svg>
);

export default memo(MyIcon);
