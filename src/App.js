import React from 'react';
import Home from './pages/Home';
import { Route, BrowserRouter as Router } from 'react-router-dom';
function App() {
    return (
        <Router>
            <Route
                path='/'
                exact={true}
                render={(props) => {
                    return (
                        <div className="App">
                            <Home />
                        </div>

                    )
                }}
            />
        </Router>
    )
}

export default App;
