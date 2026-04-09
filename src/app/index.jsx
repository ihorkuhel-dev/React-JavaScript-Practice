import { createRoot } from "react-dom/client";
import './styles/global.scss'

const App = () => {
    return (
        <div>
            <h1>React 19</h1>
        </div>
    )
}

const root = createRoot(document.getElementById('root'))
root.render(<App/>)