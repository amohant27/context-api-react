import React,{Component} from 'react';
import ProductList from './components/ProductList/ProductList';
import MyProvider from './MyProvider';

class App extends Component {
    render() {
        return (
            <MyProvider>
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">Welcome to my web store</h1>
                    </header>
                    <ProductList />
                </div>
            </MyProvider>
        );
    }
}

export default App;