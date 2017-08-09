import React from 'react';
import {Route} from 'react-router-dom'
import Pokedex from '../pokedex'

const App = () => (
    <div>
        {/*<header>*/}
        {/*<Link to="/">Home</Link>*/}
        {/*<Link to="/about-us">About</Link>*/}
        {/*<Link to="/pokemon">Pokedex</Link>*/}
        {/*</header>*/}
        
        <main>
            <Route exact path="/" component={Pokedex}/>
            {/*<Route exact path="/about-us" component={About} />*/}
            {/*<Route exact path="/pokemon" component={Pokedex} />*/}
        </main>
    </div>
)

export default App