function Profile(){
    return(
        <div className="section">
            <div className="section-header">
                <i class="fas fa-user-circle" />
                PROFILE
            </div>
            <div className="item">
                <img
                    src="cv-pic-1.jpg"
                    className="inline-img"
                    alt="Profile"
                />
                <p>
                    IT consultant with a background as a software and game developer. Hands on experience with 
                    all stages of development. Developed tools and SPAs for TopDanmark's insurer's, both frontend
                    and backend. Took a smaller leadership role to introduce new team members. Worked in agile
                    environments using SCRUM and SAFe. Worked with teams of all sizes, from 5 to 80+ employees.
                    Passionate about UX design, web development, cyber security, and game development.
                </p>
            </div>
        </div>
    );
}

export default Profile;