import React from "react";
import GridTop from "./components/grid_top";
import GridMiddleChar from "./components/grid_middle_char"
import GridMiddleSelector from "./components/grid_middle_selector"
import GridBottom from "./components/grid_bottom"

const App = ()=> {
    return (
        <div id="grid">
            <GridTop/>
            <GridMiddleChar />
            <GridMiddleSelector />
            <GridBottom />
        </div>
    )
}

export default App