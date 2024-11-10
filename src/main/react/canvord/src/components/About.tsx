import embedMsg from './assets/embed.png';
function About() {
    return (
        <>
            <div className="main" id="about">
                <div className="main__container">
                    <div className="main__content">
                        <h2>Canvas integration for Discord</h2>
                        <br/>
                        <h1>Notifications, Homework, Reminders</h1>
                        <p>
                            View your Canvas notifications, homework, and reminders in Discord.
                            Share upcoming assignments with your friends and classmates.
                        </p>
                    </div>
                    <div className="main__img--container">
                        <img src={embedMsg} alt="Canvord" className="main__img--card"/>
                    </div>
                </div>
            </div>

        </>
    );
}

export default About;