import React from "react";
import "./App.css";
import Header from "../Header/Header";
import SearchBox from "../SearchBox/SearchBox";
import ResultsContainer from "../ResultsContainer/ResultsContainer";

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            headerText: "Name It!",
            headerExpanded: true,
            suggestedNames: [],
        };
    }
    handleInputChange = (inputText) => {
        this.setState({
            headerExpanded: !(inputText),
            suggestedNames: inputText ? name(inputText) : [],
        });
    }
    render() {
        return (
            <div>
                <Header
                    headerExpanded={this.state.headerExpanded}
                    headTitle={this.state.headerText} />
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
                {/* <h3>{this.state.headerText}</h3>
                <button onClick={
                    () => {
                        this.setState({
                            headerText: "LALALAAL"
                        })
                    }
                }>MAgic Boom</button> */}
            </div>
        )
    }
}
// function App() {
//     return <h1>this is functional comp </h1>
// }

export default App;