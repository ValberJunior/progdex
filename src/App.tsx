import AppRouter from 'routes';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <AppRouter/>
    </RecoilRoot>
  );
}

export default App;
