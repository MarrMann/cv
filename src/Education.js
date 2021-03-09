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
                    <li>Gradepoint average: 10.67 (4.00/4.00 GPA)</li>
                    <li>Based my thesis on Martin Fasterholdt's thesis <a className="inline-link" href="http://martinf.dk/jump/">You Say Jump, I Say How High?</a></li>
                    <li>Thesis included hacking into RAM and gather positional data, to analyze 3d movement in games</li>
                    <li>Key coursework: game engines, game development, game design, business and marking, research</li>
                </ul>
            </div>
            <div className="item">
                <div className="item-header">
                    <div className="item-title">BSc. of Science in Medialogy</div>
                    <div className="item-date">Aug 2012 - Jun 2015</div>
                </div>
                <ul>
                    <li>Gradepoint average: 9.4 (3.64/4.00 GPA)</li>
                    <li>Key coursework: experiments, research, data structures, algorithms, rendering, statistics, perception</li>
                </ul>
            </div>
        </div>
    );
}

export default Education;