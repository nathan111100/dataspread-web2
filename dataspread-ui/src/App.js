import React, {Component} from 'react';
import './App.css';
import DSGrid from './dsgrid';
import Toolbar from './Components/Menu/toolbar'
import StartupBox from './Components/StatupBox'
import Navigation from "./Components/Navigation";

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            bookId:"",
            filename:"",
            hasFileOpened: false,
            username:""

        }
        this.onSelectFile = this.onSelectFile.bind(this)

    }

    onSelectFile (bookId) {
        this.setState({
            bookId: bookId,
            hasFileOpened: true
        })
    }

    componentDidUpdate() {
        if (this.grid!==null)
        {
            this.grid.loadBook();
        }
    }

    render () {
        // console.log(this)
        this.grid = null;
        if (!this.state.hasFileOpened) {
            return (
                <div>
                    <Toolbar username={this.state.username} onSelectFile={this.onSelectFile} />
                    <StartupBox username={this.state.username} onSelectFile={this.onSelectFile}/>
                </div>
            )
        } else {
            return (
                <div>
                    <Toolbar username={this.state.username} onSelectFile={this.onSelectFile} />
                    <Navigation bookId={this.state.bookId} ref={ref => this.grid = ref} />
                    <DSGrid bookId={this.state.bookId} ref={ref => this.grid = ref} />
                </div>
            )
        }
        
    }
}

export default App;
