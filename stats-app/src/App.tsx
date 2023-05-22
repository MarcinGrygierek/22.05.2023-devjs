import { ChakraProvider } from '@chakra-ui/react';
import { Dashboard } from './Dashboard';

const App = () => {
  return (
    <ChakraProvider>
        <Dashboard />
    </ChakraProvider>
  );
}

export default App;
