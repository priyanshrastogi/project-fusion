import React from 'react';
import { TamaguiProvider, createTamagui } from 'tamagui';
import { config } from '@tamagui/config/v3';
import Navigator from './navigation/navigator';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <TamaguiProvider config={createTamagui(config)}>
      <QueryClientProvider client={queryClient}>
        <Navigator />
      </QueryClientProvider>
    </TamaguiProvider>
  );
};

export default App;