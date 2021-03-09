function Skills(){
    return(
        <div className="section">
            <div className="section-header">
                <i class="fas fa-brain" />
                SKILLS
            </div>
            <div className="skills-content">
                <div className="item-inline">
                    <span className="item-inline-header">Languages:</span>
                    <span className="item-inline-content">C#, C++, CSS, HTML, Java, JavaScript, Python, Shader languages, SQL, TypeScript</span>
                </div>
                <div className="item-inline">
                    <span className="item-inline-header">Tools/Frameworks:</span>
                    <span className="item-inline-content">Azure, Git, Jenkins, JIRA, React, TeamCity, Unity, Unreal Engine</span>
                </div>
                <div className="item-inline">
                    <span className="item-inline-header">Concepts:</span>
                    <span className="item-inline-content">Agile, Research, SAFe, SCRUM, SOLID design, Team management</span>
                </div>
            </div>
        </div>
    );
}

export default Skills;