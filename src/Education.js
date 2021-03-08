function Education(){
    return(
        <div className="section">
            <div className="section-header">
                <i class="fas fa-graduation-cap" />
                EDUCATION
            </div>
            <div className="item">
                <div className="item-header">
                    <div className="item-title">MSc. of IT in Games Technology</div>
                    <div className="item-date">Aug 2015 - Jun 2017</div>
                </div>
                <ul>
                    <li>Gradepoint average: 10.67</li>
                    <li>Based my thesis on Martin Fasterholdt's thesis <a className="inline-link" href="http://martinf.dk/jump/">You Say Jump, I Say How High?</a></li>
                    <li>Thesis included hacking into games to analyze positional data, in order to analyze 3d movement in games</li>
                    <li>Key coursework: game engines, game development, game design, business and marking, research</li>
                </ul>
            </div>
            <div className="item">
                <div className="item-header">
                    <div className="item-title">BSc. of Science in Medialogy</div>
                    <div className="item-date">Aug 2012 - Jun 2015</div>
                </div>
                <ul>
                    <li>Gradepoint average: 9.4</li>
                    <li>Key coursework: experiments, research, data structures, algorithms, 3d rendering, statistics, human perception</li>
                </ul>
            </div>
        </div>
    );
}

export default Education;