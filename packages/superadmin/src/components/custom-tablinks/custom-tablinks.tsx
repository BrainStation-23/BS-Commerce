import { Container, Tab, Tabs } from '@mui/material';
import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export interface CustomTabItem {
  label: string;
  to: string;
}

export interface CustomTabLinksProps {
  tabs: CustomTabItem[];
  currentTab?: number;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
}

const CustomTabLinks = ({ tabs, currentTab, maxWidth = 'lg' }: CustomTabLinksProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const activeTab = useMemo(() => {
    // If currentTab is provided, use it
    if (currentTab !== undefined) {
      return currentTab;
    }

    // Match based on pathname only (ignore query parameters)
    const currentPath = location.pathname;
    const index = tabs.findIndex((tab) => {
      // Extract pathname from tab.to (in case it has query params)
      const tabPath = tab.to.split('?')[0];
      return tabPath === currentPath;
    });
    return index !== -1 ? index : 0;
  }, [currentTab, location.pathname, tabs]);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    navigate(tabs[newValue].to);
  };

  return (
    <Container
      maxWidth={maxWidth}
      sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', width: '100%' }}
    >
      <Tabs value={activeTab} onChange={handleTabChange}>
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>
    </Container>
  );
};

export default CustomTabLinks;
