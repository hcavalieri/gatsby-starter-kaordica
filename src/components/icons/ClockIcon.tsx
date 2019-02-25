// Example Icon
import * as React from 'react';

import BaseIcon, { IIconProps } from './BaseIcon';

export const ClockIcon = (props: IIconProps) => {
  return (
    <BaseIcon {...props}>
      <svg
        className={props.classes ? props.classes : ''}
        aria-label={props.title ? props.title : 'Ícone de um relógio'}
        aria-hidden={props.hidden ? true : false}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 67 67"
      >
        <path d="M33.075.955c-8.782 0-17.062 3.382-23.335 9.52C3.467 16.616.08 24.759.08 33.528c0 8.77 3.387 16.913 9.66 23.052 6.273 6.138 14.553 9.52 23.335 9.52 8.781 0 17.061-3.382 23.334-9.52 6.273-6.14 9.66-14.282 9.66-23.052s-3.513-16.913-9.66-23.051C50.262 4.337 41.856.955 33.075.955zm0 60.76c-15.808 0-28.73-12.653-28.73-28.188 0-15.534 12.922-28.188 28.73-28.188 15.807 0 28.603 12.654 28.603 28.188 0 15.535-12.796 28.188-28.603 28.188z" />
        <path d="M47.25 42.923l-12.294-9.396V14.735c0-1.253-1.004-2.13-2.133-2.13s-2.133 1.003-2.133 2.13V34.53c0 .627.251 1.378.879 1.754L44.74 46.431c.377.25.879.501 1.38.501.628 0 1.255-.25 1.757-.877.502-1.002.376-2.38-.628-3.132z" />
      </svg>
    </BaseIcon>
  );
};

export default ClockIcon;
