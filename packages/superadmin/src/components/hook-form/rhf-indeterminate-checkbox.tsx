import { ChangeEvent, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Collapse from '@mui/material/Collapse';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// ----------------------------------------------------------------------

interface NestedOption {
  label: string;
  value: any;
  options?: NestedOption[];
}

interface RHFIndeterminateCheckboxProps {
  name: string;
  options: NestedOption[];
  label?: string;
  spacing?: number;
  helperText?: React.ReactNode;
  collapsed?: boolean;
  isRequired?: boolean;
}

export default function RHFIndeterminateCheckbox({
  name,
  options,
  label,
  spacing = 1,
  helperText,
  collapsed = true,
  isRequired = false,
}: RHFIndeterminateCheckboxProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl error={!!error} component="fieldset">
          {label && (
            <FormLabel component="legend" sx={{ typography: 'body2' }}>
              {isRequired && label ? `${label}*` : label}
            </FormLabel>
          )}

          <Box>
            {options.map((option, index) => (
              <NestedCheckbox
                key={index}
                option={option}
                checked={field.value || {}}
                onChange={(newValue) => {
                  field.onChange({
                    ...field.value,
                    ...newValue,
                  });
                }}
                spacing={spacing}
                initialCollapsed={collapsed}
              />
            ))}
          </Box>

          {(!!error || helperText) && (
            <FormHelperText error={!!error}>{error ? error.message : helperText}</FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
}

// ----------------------------------------------------------------------

function getAllChildValues(opts: NestedOption[]): string[] {
  const values: string[] = [];
  opts.forEach((opt) => {
    if (opt.options && opt.options.length > 0) {
      values.push(...getAllChildValues(opt.options));
    } else {
      values.push(opt.value);
    }
  });
  return values;
}

interface NestedCheckboxProps {
  option: NestedOption;
  checked: Record<string, any>;
  onChange: (value: Record<string, any>) => void;
  spacing: number;
  level?: number;
  initialCollapsed?: boolean;
  isRequired?: boolean;
}

function NestedCheckbox({
  option,
  checked,
  onChange,
  spacing,
  level = 0,
  initialCollapsed = true,
  isRequired = false,
}: NestedCheckboxProps) {
  const { label, value, options = [] } = option;
  const hasChildren = options.length > 0;

  const childrenValues = hasChildren ? getAllChildValues(options) : [];
  const checkedChildrenCount = childrenValues.filter((val) => checked[val]).length;

  const [showChildren, setShowChildren] = useState(
    value === 'All' || value === 'all' ? true : !initialCollapsed
  );

  const isChecked = hasChildren
    ? checkedChildrenCount === childrenValues.length && childrenValues.length > 0
    : Boolean(checked[value]);

  const isIndeterminate =
    hasChildren && checkedChildrenCount > 0 && checkedChildrenCount < childrenValues.length;

  const handleParentChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    const newValues: Record<string, boolean> = {};

    if (!value.startsWith('group:') && value !== 'all') {
      newValues[value] = newChecked;
    }

    if (hasChildren) {
      const allChildValues = getAllChildValues(options);
      allChildValues.forEach((childVal) => {
        if (!childVal.startsWith('group:') && childVal !== 'all') {
          newValues[childVal] = newChecked;
        }
      });
    }

    onChange(newValues);

    if (newChecked) {
      setShowChildren(true);
    }
  };
  const handleExpandCollapse = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    event.stopPropagation();
    if (hasChildren) {
      setShowChildren((prev) => !prev);
    }
  };

  const handleLabelClick = () => {
    if (hasChildren) {
      setShowChildren((prev) => !prev);
    }
  };

  return (
    <Box sx={{ ml: level * 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: spacing }}>
        <Checkbox
          checked={isChecked}
          indeterminate={isIndeterminate}
          onChange={handleParentChange}
        />

        <Box
          onClick={handleLabelClick}
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexGrow: 1,
            fontSize: 'small',
            cursor: hasChildren ? 'pointer' : 'default',
          }}
        >
          {isRequired && label ? `${label}*` : label}
          {hasChildren && (
            <ExpandMoreIcon
              fontSize="small"
              onClick={handleExpandCollapse}
              sx={{
                ml: 1,
                cursor: 'pointer',
                transition: 'transform 0.25s ease',
                transform: showChildren ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            />
          )}
        </Box>
      </Box>

      {hasChildren && (
        <Collapse in={showChildren} timeout="auto" unmountOnExit>
          <Box>
            {options.map((childOption, index) => (
              <NestedCheckbox
                key={index}
                option={childOption}
                checked={checked}
                onChange={onChange}
                spacing={spacing}
                level={level + 1}
                initialCollapsed={initialCollapsed}
              />
            ))}
          </Box>
        </Collapse>
      )}
    </Box>
  );
}
