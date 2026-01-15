// Inline GoalIcon enum
enum GoalIcon {
  Home = 'Home',
  Car = 'Car',
  Travel = 'Travel',
  Education = 'Education',
  Retirement = 'Retirement',
  Other = 'Other',
}

// Common function to get goal icon label from icon value
export const getGoalIconLabel = (icon: GoalIcon | string | null | undefined): string => {
  if (!icon) return '--';

  const iconLabelMap: Record<string, string> = {
    [GoalIcon.Home]: 'Home',
    [GoalIcon.Car]: 'Car',
    [GoalIcon.Travel]: 'Travel',
    [GoalIcon.Education]: 'Education',
    [GoalIcon.Retirement]: 'Retirement',
    [GoalIcon.Other]: 'Other',
  };

  return iconLabelMap[icon] || icon;
};

// Common function to get all goal icon options for dropdowns
export const getGoalIconOptions = () =>
  Object.entries(GoalIcon).map(([key, value]) => ({
    value,
    label: key
  }));
