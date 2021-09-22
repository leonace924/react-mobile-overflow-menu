import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from 'pages/Home/Home';
import Loading from 'components/Loading/Loading';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <React.Suspense fallback={<Loading />}>
            <Route exact path="/" component={HomePage} />
          </React.Suspense>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
