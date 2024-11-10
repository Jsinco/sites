import canvasLogo from './assets/canvas.svg';
import discordLogo from './assets/discord.svg';
import './Header.css';


const logos = [canvasLogo, discordLogo];


const placeLogos = (amount: number) => {
    for (let i = 0; i < amount; i++) {

        const logo = document.createElement('img');
        logo.src = logos[Math.floor(Math.random() * logos.length)];
        logo.className = 'logo';
        logo.style.top = `${Math.random() * 90}vh`;
        logo.style.left = `${Math.random() * 90}vw`;
        logo.style.width = `${Math.random() * 30 + 10}px`;
        logo.style.opacity = `${Math.random()}`;
        document.body.appendChild(logo);
    }
    return null;
}

function Header() {
    return (
        <header>
            <div className="circle"></div>

            <section className="gradient-background">
                <div className="background__container">
                    <h1 className="background__heading">
                        <p>
                            Canvas integration into Discord
                        </p>
                    </h1>
                </div>
                <button onClick={() => window.location.href = 'https://discord.com/oauth2/authorize?client_id=1304648030397661296'}>
                    Click to Invite
                </button>

                {/* Scattered logos in the background */}
                <div className="logos-container">
                    {placeLogos(15)}
                </div>
            </section>
        </header>
    );
}

export default Header;
