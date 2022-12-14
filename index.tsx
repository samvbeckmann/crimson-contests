import App from './src/App';
import { createRoot } from 'react-dom/client';
import './src/index.css';
import './src/react-split-flap-effect/styles.css';

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
