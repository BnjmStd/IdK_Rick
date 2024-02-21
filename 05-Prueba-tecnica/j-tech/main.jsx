import { createRoot } from 'react-dom/client';


/* Components */
import App from './src/components/App';

const root = createRoot(document.getElementById('app'));

root.render(
    <App></App>
);