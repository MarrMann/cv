import './App.css';
import Education from './Education';
import Experience from './Experience';
import Header from './Header';
import Profile from './Profile';
import Skills from './Skills';

function App() {
    return (
        <div className="App">
            <div id="pdf">
                <Header />
                <Profile />
                <Experience />
                <Education />
                <Skills />
            </div>
        </div>
    );
}

export default App;
