import { Download as DownloadIcon } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { ButtonProps, Tooltip } from '@mui/material';
import React from 'react';

export interface FileDownloadProps extends Omit<ButtonProps, 'onClick'> {
    onDownload: () => void;
    isLoading?: boolean;
    disabled?: boolean;
    tooltip?: string;
    buttonSize?: 'small' | 'medium' | 'large';
    children?: React.ReactNode;
}

export const FileDownload: React.FC<FileDownloadProps> = ({
    onDownload,
    isLoading = false,
    disabled = false,
    tooltip,
    children,
    buttonSize = 'small',
    ...buttonProps
}) => {
    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        onDownload();
    };

    const button = (
        <LoadingButton
            sx={{ fontSize: 14, color: 'text.secondary' }}
            variant="outlined"
            startIcon={<DownloadIcon />}
            loading={isLoading}
            onClick={handleClick}
            size={buttonSize}
            disabled={disabled || isLoading}
            {...buttonProps}
        >
            {children || 'Download'}
        </LoadingButton>
    );

    if (tooltip) {
        return (
            <Tooltip title={tooltip}>
                {button}
            </Tooltip>
        );
    }

    return button;
};

export default FileDownload;
