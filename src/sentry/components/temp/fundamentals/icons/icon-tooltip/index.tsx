import React from 'react';
import Tooltip, { TooltipProps } from '../../../atoms/tooltip';
import InfoIcon from '../info-icon';
import IconProps from '../types/icon-type';
import XCircleIcon from '../x-circle-icon';
import AlertIcon from '../alert-icon';

type IconTooltipProps = TooltipProps & {
	type?: 'info' | 'warning' | 'error';
} & Pick<IconProps, 'size'>;

const IconTooltip: React.FC<IconTooltipProps> = ({ type = 'info', size = 16, content, ...props }) => {
	const icon = (type: IconTooltipProps['type']) => {
		switch (type) {
			case 'warning':
				return <AlertIcon size={size} className="flex text-orange-40" />;
			case 'error':
				return <XCircleIcon size={size} className="flex text-rose-40" />;
			default:
				return <InfoIcon size={size} className="flex text-grey-40" />;
		}
	};

	return (
		<Tooltip content={content} {...props}>
			{icon(type)}
		</Tooltip>
	);
};

export default IconTooltip;
