import BottomNavigation from './src/navigation/BottomNavigator';
import React from 'react';

import {ShiftProvider} from './src/context/ShiftContext';
import {ErrorBoundary} from './src/components';

const App = () => {
  return (
    <ShiftProvider>
      <ErrorBoundary>
        <BottomNavigation />
      </ErrorBoundary>
    </ShiftProvider>
  );
};

export default App;
