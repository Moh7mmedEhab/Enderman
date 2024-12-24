const main = document.querySelector("main");

const active = document.querySelector(".active");

const menu = document.querySelector(".menu");

const list = document.querySelector("nav ul");

const loading = document.querySelector(".loading");

setTimeout(() => {

    loading.style.opacity = 0;

    setTimeout(() => {

        document.body.removeChild(loading);

    }, 250);

}, 2500);

let toggle = false;

const pages = {

    "home" : `<section class="home container">

        <div class="card">

            <img src="Assets/Images/skymay.png" alt="Icon" />

            <div class="content">

                <h3 role="paragraph">

                    SKYMAY Community

                </h3>

                <p>

                    SKYMAY is a vibrant and engaging community that explores new horizons in gaming. Join us to discover new adventures and collaborate with fellow gamers!

                </p>

                <a href="https://www.roblox.com/communities/34470587/SKYMAY-community#!/about">

                    Join

                </a>

            </div>

        </div>

        <div class="card">

            <img src="Assets/Images/endercraft_server.png" alt="Icon" />

            <div class="content">

                <h3 role="paragraph">

                    Endercraft Server

                </h3>

                <p>

                    The Endercraft server offers an immersive experience in Minecraft, with custom-built maps and unique gameplay. Become part of a friendly and supportive player base.

                </p>

                <a href="minecraft://?addExternalServer=EnderXcraft.aternos.me|EnderXcraft.aternos.me:41739">

                    Join

                </a>

            </div>

        </div>

        <div class="card">

            <img src="Assets/Images/enderflame_clan.png" alt="Icon" />

            <div class="content">

                <h3 role="paragraph">

                    Enderflame Clan

                </h3>

                <p>

                    Enderflame Clan is a competitive gaming group focused on Minecraft and Roblox. Join us for exciting tournaments, teamwork, and community events!

                </p>

                <a href="https://www.enderflameclan.com/">

                    Join

                </a>

            </div>

        </div>

    </section>`,

    "about" : `<section class="about">

        <div class="overlay container">

            <h1>

                About Our Communities

            </h1>

            <br />

            <h3 role="paragrapth">

                1. SKYMAY Community ( Roblox )

            </h3>

            <br />

            <p>

                SKYMAY is a vibrant Roblox community focused on creating immersive experiences and collaborative gameplay. It offers an inclusive environment where players can come together to explore new games, build creative worlds, and participate in community events. The community encourages creativity and teamwork, welcoming players who are passionate about game development and playing together in an interactive environment. Whether you are a beginner or a seasoned Roblox player, SKYMAY provides opportunities to learn, grow, and enjoy the vast world of Roblox games.

            </p>

            <br />

            <p>

                <b>Requirements:</b> To join SKYMAY, players should be enthusiastic about Roblox, participate in events, and adhere to the community's code of conduct. Members are encouraged to contribute positively by participating in games and activities, maintaining a respectful and friendly atmosphere.

            </p>

            <br />

            <h3 role="paragrapth">

                2. Endercraft Server ( Minecraft Bedrock )

            </h3>

            <br />

            <p>

                Endercraft Server is a Minecraft Bedrock edition server that focuses on providing an exceptional gaming experience through custom maps, mods, and engaging game modes. The community is built around collaboration, creativity, and friendly competition. Players work together to create impressive structures, explore new environments, and compete in various challenges. The server aims to offer a fun and safe space for Minecraft players, with a focus on teamwork and respect for others.

            </p>

            <br />

            <p>

                <b>Requirements:</b> Players need a Minecraft Bedrock Edition account and a willingness to participate in the server's various game modes. Respecting the server rules, being active in events, and working well with other players are essential to being part of the Endercraft community.

            </p>

            <br />

            <h3>

                3. Enderflame Clan ( Free Fire )

            </h3>

            <br />

            <p>

                Enderflame Clan is a competitive Free Fire clan that focuses on bringing together skilled players for intense battles and team-based competitions. The clan hosts tournaments and events where players can showcase their skills and engage in friendly competition. The community values teamwork, skill development, and a positive attitude toward gaming. Players of all levels are welcome to join, but the focus is on competitive gameplay and constant improvement.

            </p>

            <br />

            <p>

                <b>Requirements:</b> To join Enderflame Clan, players must demonstrate a strong command of Free Fire gameplay, exhibit teamwork skills, and be actively involved in clan activities and events. A positive attitude and commitment to improving as a team are key qualities for membership.

            </p>

        </div>

    </section>`,

    "contact" : `    <section class="contact container">

        <form action="https://formsubmit.co/your@email.com" method="post">

            <label for="name">Name : </label>

            <input type="text" placeholder="Enter Your Name : " class="name" id="name" required name="name" />

            <label for="email">Email : </label>

            <input type="email" placeholder="Enter Your Email : " class="email" id="email" required name="email" />

            <label for="message">Message : </label>

            <textarea type="email" placeholder="Enter Your Message : " class="message" id="message" required name="message"></textarea>

            <button type="submit">Send</button>

        </form>

        <div class="socials">

            <a href="https://chat.whatsapp.com/L5xOmdoq9ecB07g94Oh0O4" class="fa-brands fa-whatsapp icon">



            </a>

            <a href="https://www.facebook.com/groups/367172479250562?_rdc=1&_rdr" class="fa-brands fa-facebook icon">



            </a>

            <a href="https://discord.com/invite/AD2WMrAa" class="fa-brands fa-discord icon">



            </a>

        </div>

        <h6>

            &copy; 2024 EnderX | All Rights Reserved.

        </h6>

    </section>`

};

if (!pages[active.getAttribute("page")]) {

    main.innerHTML = ``;

} else {

    main.innerHTML = pages[active.getAttribute("page")];

}

window.addEventListener("resize", () => {

    if (window.innerWidth >= 768 && toggle == true) {

        menu.click();

    }

});

menu.addEventListener("click", () => {

    if (!toggle) {

        list.style.height = "fit-content";

        list.style.padding = "20px";

        toggle = true;

    } else {

        list.style.height = "0%";

        list.style.padding = "0px";

        toggle = false;

    }

});

const links = document.querySelectorAll("nav ul li a");

links.forEach(link => {

    link.addEventListener("click", () => {

        links.forEach(element => {

            element.classList.remove("active");

        });

        link.classList.add("active");

        if (!pages[link.getAttribute("page")]) {

            main.innerHTML = ``;

        } else {

            main.innerHTML = pages[link.getAttribute("page")];

        }

        if (window.innerWidth <= 768) {

            menu.click();

        }

    });

});