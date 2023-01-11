import { add_homepage_images } from "utils/global-utils";

const social_media = [
  { label: "facebook", ref: "https://www.facebook.com/andrerodrigoweb" },
  {
    label: "instagram",
    ref: "https://www.instagram.com/andre.creativedesign/"
  },
  {
    label: "linkedin",
    ref: "https://www.linkedin.com/in/andr%C3%A9-rodrigues-4b4a9b188/"
  }
];

const categories = {
  tech: "technology",
  games: "gaming"
};

const blog = {
  //Categories are displayed by this order
  categories: [
    { display_name: "Top articles", name: "top" },
    { display_name: "Recent", name: "recent" },
    { display_name: "Lifestyle", name: "lifestyle" },
    { display_name: "Career", name: "career" },
    { display_name: "Technology", name: categories.tech },
    { display_name: "Gaming", name: categories.games },
    { display_name: "All", name: "all" }
  ],
  articles: [
    {
      id: "c5d2a482-199c-11ed-861d-0242ac120002",
      title:
        "Transform Your Home into a Smart Home: 5 Ways to Automate Your House",
      description:
        "Are you tired of constantly forgetting to turn off the lights or adjust the thermostat when you leave the house? It might be time to consider automating your home. In this blog post, we'll give you five ways to transform your home into a smart home, including using smart thermostats, smart lighting, smart appliances, smart security systems, and smart home hubs. Automating your home can make your life easier, save you energy and money, and give you peace of mind. Learn how to get started with home automation today.",
      category: categories.tech,
      date: "13, Jan 2023",
      isTopArticle: false,
      meta_tags: [
        "home automation",
        "smart home",
        "smart thermostat",
        "smart lighting",
        "smart appliances",
        "smart security",
        "smart home hub",
        "energy efficiency",
        "convenience",
        "security"
      ],
      image_src:
        "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      content: (
        <div>
          <h2 className="section-title">Take control of your home</h2>
          <p>
            Are you tired of constantly forgetting to turn off the lights or
            adjust the thermostat when you leave the house? It might be time to
            consider automating your home.
          </p>
          <br />
          <p>
            Home automation refers to the use of technology to control and
            manage the various systems and devices in your home, such as
            lighting, heating and cooling, and appliances. Not only can home
            automation make your life easier and more convenient, it can also
            help you save energy and money.
          </p>
          <br />
          <p>Here are five ways to automate your home:</p>
          <h2 className="section-title">1. Smart thermostats</h2>
          <p>
            A smart thermostat allows you to control the temperature in your
            home remotely using a smartphone app. Some models can even learn
            your schedule and adjust the temperature accordingly, helping you
            save energy and money on your heating and cooling bills.
          </p>
          <h2 className="section-title">2. Smart lighting</h2>
          <p>
            With smart lighting, you can control your lights using a smartphone
            app or voice commands. This allows you to turn lights on and off,
            dim them, or change their color from anywhere in your home. Smart
            lighting can also be programmed to turn off when you leave the
            house, helping you save energy.
          </p>
          <h2 className="section-title">3. Smart appliances</h2>
          <p>
            There are now a variety of smart appliances available, such as
            refrigerators, washing machines, and dryers, that can be controlled
            and monitored using a smartphone app. This can be especially helpful
            for managing your household chores when you&apos;re away from home.
          </p>
          <h2 className="section-title">4. Smart security</h2>
          <p>
            Smart security systems can include door and window sensors, motion
            detectors, and cameras that can be monitored and controlled using a
            smartphone app. This can give you peace of mind when you&apos;re
            away from home and alert you to any potential threats.
          </p>
          <h2 className="section-title">5. Smart home hubs</h2>
          <p>
            If you want to integrate multiple smart home devices, you may want
            to consider using a smart home hub. These devices allow you to
            control and manage all of your smart home devices using a single app
            or voice commands.
          </p>
        </div>
      ),
      writer: "Andre Rodrigues"
    },
    {
      id: "c5d2a482",
      title: "The Top 5 Cybersecurity Threats of 2022: What You Need to Know",
      description:
        "Stay ahead of the curve and protect yourself and your business from the latest cybersecurity threats. In this blog post, we'll outline the top five threats to watch out for in 2022, including ransomware, cloud security breaches, Internet of Things vulnerabilities, supply chain attacks, and artificial intelligence and machine learning attacks. Stay informed and follow best practices to reduce the risk of a cybersecurity incident.",
      category: categories.tech,
      date: "3, Jan 2023",
      isTopArticle: true,
      meta_tags: [
        "cybersecurity",
        "cyber threats",
        "ransomware",
        "cloud security",
        "Internet of Things",
        "IoT vulnerabilities",
        "supply chain attacks",
        "artificial intelligence",
        "machine learning",
        "cybersecurity best practices"
      ],
      image_src:
        "https://images.unsplash.com/photo-1496096265110-f83ad7f96608?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      content: (
        <div>
          <h2 className="section-title">The world is changing rapidly</h2>
          <p>
            As technology continues to advance and permeate every aspect of our
            lives, cybersecurity threats are becoming increasingly sophisticated
            and widespread. From ransomware attacks that can cripple businesses
            to supply chain breaches that can compromise entire industries, the
            risks to our personal and professional data are numerous and
            ever-evolving. That&apos;s why it&apos;s more important than ever to
            stay informed about the latest cybersecurity threats and take steps
            to protect yourself and your business. In this article, we&apos;ll
            provide an overview of the top five cybersecurity threats to watch
            out for in 2022, so you can be prepared and stay one step ahead of
            the bad guys.
          </p>
          <h2 className="section-title">1. Ransomware</h2>
          <p>
            Ransomware is a type of malware that encrypts a victim&apos;s files.
            The attacker then demands a ransom from the victim to restore access
            to the files; hence the name ransomware. In recent years, ransomware
            attacks have become more common and more costly, with some attacks
            resulting in millions of dollars in damages. To protect yourself
            from ransomware attacks, it&apos;s important to keep your software
            and systems up to date, regularly back up your data, and be cautious
            about opening suspicious emails or links.
          </p>
          <h2 className="section-title">2. Cloud security breaches</h2>
          <p>
            As more businesses and individuals use cloud-based services to store
            and access data, the risk of cloud security breaches increases.
            Hackers may target cloud servers to access sensitive data or to
            disrupt services. To reduce the risk of a cloud security breach,
            it&apos;s important to use strong passwords, enable two-factor
            authentication, and only store and access data on secure and
            reputable cloud platforms.
          </p>
          <h2 className="section-title">
            3. Internet of Things (IoT) vulnerabilities
          </h2>
          <p>
            The Internet of Things (IoT) refers to the interconnectedness of
            devices and systems, such as smart home devices, industrial control
            systems, and medical devices. While the IoT has many benefits, it
            also introduces new vulnerabilities that can be exploited by
            hackers. To protect yourself from IoT-related threats, it&apos;s
            important to secure your home Wi-Fi network, use strong passwords
            for your IoT devices, and only purchase IoT devices from reputable
            manufacturers.
          </p>
          <h2 className="section-title">4. Supply chain attacks</h2>
          <p>
            A supply chain attack occurs when a hacker targets a company&apos;s
            supply chain, such as by inserting malware into a software update or
            infiltrating a vendor&apos;s network. Supply chain attacks can be
            difficult to detect and can have severe consequences, such as a data
            breach or the disruption of critical services. To protect against
            supply chain attacks, it&apos;s important for companies to carefully
            vet their vendors and suppliers and to implement strong
            cybersecurity measures throughout their supply chain.
          </p>
          <h2 className="section-title">
            5. Artificial intelligence (AI) and machine learning (ML) attacks
          </h2>
          <p>
            As artificial intelligence (AI) and machine learning (ML) become
            more prevalent, they also introduce new cybersecurity threats. For
            example, hackers may use AI to automate the creation of phishing
            emails or to bypass security measures. To protect against AI- and
            ML-related threats, it&apos;s important to stay up to date with the
            latest developments in these fields and to use AI and ML responsibly
            and ethically.
          </p>
          <h2 className="section-title">Conclution</h2>
          <p>
            By understanding the top cybersecurity threats of 2022, you can take
            steps to protect yourself and your business. Stay vigilant, keep
            your software and systems up to date, and be cautious about opening
            suspicious emails or links. By following these best practices, you
            can reduce the risk of a cybersecurity incident and protect your
            data and systems.
          </p>
        </div>
      ),
      writer: "Andre Rodrigues"
    },
    {
      id: "c5d2a482-532",
      title:
        "Protecting Your Personal Information Online: A Beginner's Guide to Cybersecurity",
      description:
        "In today's digital age, it's crucial to protect your personal information online. In this blog post, we'll provide a beginner's guide to cybersecurity and give you tips on how to keep your data safe. Learn how to use strong, unique passwords, be cautious about the information you share online, use two-factor authentication, recognize phishing scams, keep your software and systems up to date, and use secure networks and connections. Follow these best practices to reduce the risk of identity theft and other cyber threats.",
      category: categories.tech,
      date: "5, Jan 2023",
      isTopArticle: false,
      meta_tags: [
        "cybersecurity",
        "personal information",
        "online privacy",
        "identity theft",
        "phishing scams",
        "strong passwords",
        "password management",
        "two-factor authentication",
        "software updates",
        "antivirus software",
        "firewall",
        "secure networks",
        "virtual private network",
        "HTTPS"
      ],
      image_src:
        "https://images.unsplash.com/photo-1563452619267-bc16ef6cecec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      content: (
        <div>
          <p>
            In today&apos;s digital age, it&apos;s important to be aware of the
            risks to your personal information online and to take steps to
            protect yourself. From identity theft to phishing scams, there are
            many threats to your personal data and privacy. In this article,
            we&apos;ll provide a beginner&apos;s guide to cybersecurity and give
            you some tips on how to keep your personal information safe online.
          </p>

          <h2 className="section-title">Use strong, unique passwords</h2>

          <p>
            One of the most basic and important steps you can take to protect
            your personal information online is to use strong, unique passwords
            for each of your online accounts. A strong password should be at
            least 8 characters long and include a combination of letters,
            numbers, and special characters. Avoid using personal information,
            such as your name or birthdate, in your passwords. It&apos;s also a
            good idea to use a password manager to store and manage your
            passwords securely.
          </p>

          <h2 className="section-title">
            Be cautious about the information you share online
          </h2>

          <p>
            Be mindful about the personal information you share online,
            especially on social media and public forums. Avoid sharing
            sensitive information, such as your home address or financial
            information, and be cautious about sharing personal details, such as
            your full name or birthdate. These pieces of information can be used
            by identity thieves to gain access to your accounts or to
            impersonate you online.
          </p>

          <h2 className="section-title">Use two-factor authentication</h2>

          <p>
            Two-factor authentication (2FA) adds an extra layer of security to
            your online accounts by requiring you to provide a second form of
            authentication, in addition to your password, to log in. This can be
            a code sent to your phone, a security token, or a biometric factor,
            such as your fingerprint or facial recognition. Enabling 2FA can
            help prevent unauthorized access to your accounts, even if your
            password is compromised.
          </p>

          <h2 className="section-title">Be aware of phishing scams</h2>

          <p>
            Phishing scams are fraudulent emails or websites that aim to trick
            you into divulging your personal information, such as your login
            credentials or financial information. These scams often use fake or
            misleading branding to appear legitimate, and they may ask you to
            click on a link or download an attachment. To protect yourself from
            phishing scams, be cautious about opening emails or links from
            unfamiliar sources, and be wary of emails or websites that ask for
            personal information or financial details. It&apos;s also a good
            idea to use a spam filter to block suspicious emails.
          </p>

          <h2 className="section-title">
            Keep your software and systems up to date
          </h2>
          <p>
            Keeping your software and systems up to date is important for
            protecting your personal information online. Software updates often
            include security fixes and patches that can help protect against
            vulnerabilities and threats. Make sure to regularly update your
            operating system, web browsers, and other software, and consider
            setting up automatic updates to ensure you&apos;re always running
            the latest version. Additionally, make sure to use reputable and
            up-to-date antivirus and firewall software to help protect your
            device and network.
          </p>
          <p>
            In addition to updating your software, it&apo;s important to use
            reputable and up-to-date antivirus and firewall software to help
            protect your device and network. Antivirus software helps to detect
            and remove malware, such as viruses and ransomware, that can
            compromise your personal information and damage your device. A
            firewall is a security system that controls incoming and outgoing
            network traffic based on predetermined security rules. By using both
            antivirus and firewall software, you can help prevent malware
            infections and unauthorized access to your device and network.
          </p>
          <br />
          <p>
            It&apos;s also a good idea to keep your internet router and other
            internet-connected devices, such as smart home devices, up to date.
            These devices may have security vulnerabilities that can be
            exploited by hackers, so it&apos;s important to ensure they are
            running the latest software and firmware.
          </p>
          <h2 className="section-title">Use secure networks and connections</h2>
          <p>
            When accessing your personal information online, it&apos;s important
            to use secure networks and connections. Avoid using public Wi-Fi
            networks, as they can be less secure and more vulnerable to threats.
            Instead, use a private or secure network, such as a virtual private
            network (VPN), when accessing sensitive information online. You
            should also make sure to use secure connections when making online
            transactions, such as using HTTPS instead of HTTP.
          </p>
          <h2 className="section-title">Conclusion</h2>
          <p>
            By following these tips and best practices, you can help protect
            your personal information online and reduce the risk of identity
            theft and other cyber threats. Stay vigilant and take steps to
            secure your online accounts and activities, and you can enjoy the
            benefits of the internet with peace of mind.
          </p>
        </div>
      ),
      writer: "Andre Rodrigues"
    },
    {
      id: "d5d6a482-532",
      title:
        "Don't Let Your Vacation be Ruined by a Cyber Attack: How to Secure Your Devices Before You Go",
      description:
        "In this blog post, we'll provide tips on how to secure your devices before you go, including updating your software and devices, using a virtual private network (VPN), enabling two-factor authentication (2FA), and being aware of phishing scams. Follow these best practices to help protect your data and enjoy your vacation with peace of mind.",
      category: categories.tech,
      date: "8, Jan 2023",
      isTopArticle: false,
      meta_tags: [
        "cybersecurity",
        "traveling abroad",
        "personal information",
        "software updates",
        "virtual private network",
        "VPN",
        "two-factor authentication",
        "2FA",
        "phishing scams",
        "public Wi-Fi",
        "private networks",
        "firmware",
        "encryption",
        "IP address",
        "smart home devices"
      ],
      image_src:
        "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      content: (
        <div>
          <p>
            Traveling abroad can be an exciting and rewarding experience, but
            it&apos;s important to remember that your devices and data may be at
            risk when you&apos;re in a foreign country. From public Wi-Fi
            networks to unfamiliar SIM cards, there are many potential threats
            to your cybersecurity when you&apos;re on the go. In this article,
            we&apos;ll provide some tips on how to secure your devices and
            protect your personal information before you set off on your next
            vacation.
          </p>

          <h2 className="section-title">Update your software and systems</h2>
          <p>
            Before you leave, make sure to update your operating system, web
            browsers, and other software to the latest versions. Software
            updates often include security fixes and patches that can help
            protect against vulnerabilities and threats. It&apos;s also a good
            idea to use reputable and up-to-date antivirus and firewall software
            to help protect your device and network. Don&apos;t forget to update
            your internet router and other internet-connected devices, such as
            smart home devices, as well.
          </p>

          <h2 className="section-title">Use a virtual private network (VPN)</h2>
          <p>
            A virtual private network (VPN) is a tool that encrypts your
            internet connection and hides your IP address, making it more
            difficult for hackers to track your online activities and steal your
            personal information. When you&apos;re traveling abroad, a VPN can
            be especially useful for protecting your data on public Wi-Fi
            networks, which are often less secure than private networks. There
            are many VPN providers to choose from, so be sure to research and
            select one that offers strong encryption and a good track record of
            protecting user privacy.
          </p>

          <h2 className="section-title">
            Turn off automatic connections to open networks
          </h2>
          <p>
            When traveling, you may come across open Wi-Fi networks, such as
            those in airports or coffee shops. While it can be tempting to
            connect to these networks to save data on your phone plan, they can
            be less secure and more vulnerable to threats. To protect your
            device and data, turn off the automatic connection feature for open
            networks and only connect to networks you trust. Consider using a
            virtual private network (VPN) to encrypt your internet connection
            and protect your data from prying eyes.
          </p>

          <h2 className="section-title">Use strong, unique passwords</h2>
          <p>
            I can&apos;t emphasize this enough: one of the most basic and
            important steps you can take to protect your personal information
            online is to use strong, unique passwords for each of your online
            accounts. A strong password should be at least 8 characters long and
            include a combination of letters, numbers, and special characters.
            Avoid using personal information, such as your name or birthdate, in
            your passwords.
            <br />
            Now, remembering all of them can be a problem, that&apos;s why
            it&apos;s also a good idea to use a password manager to store and
            manage your passwords securely.
          </p>

          <h2 className="section-title">Be aware of phishing scams</h2>
          <p>
            Phishing scams are fraudulent emails or websites that aim to trick
            you into divulging your personal information, such as your login
            credentials or financial information. These scams often use fake or
            misleading branding to appear legitimate, and they may ask you to
            click on a link or download an attachment. To protect yourself from
            phishing scams, be cautious about opening emails or links from
            unfamiliar sources, and be wary of emails or websites that ask for
            personal information or financial details. It&apos;s also a good
            idea to use a spam filter to block suspicious emails.
          </p>
          <h2 className="section-title">Back up your data</h2>
          <p>
            Before you set off on your vacation, it&apos;s a good idea to back
            up your data to ensure that you won&apos;t lose any important
            information if something happens to your device. There are several
            options for backing up your data, including using an external hard
            drive, cloud storage services, or backing up to another device.
            Choose a method that works best for you and your needs, and make
            sure to regularly back up your data to keep it safe and secure.
          </p>
          <p>
            In addition to backing up your data, it&apos;s also a good idea to
            create copies of important documents, such as your passport, travel
            itinerary, and insurance information. You can store these copies
            digitally, or bring physical copies with you on your trip. This can
            be especially useful in the event that you lose your passport or
            other documents while you&apos;re abroad.
          </p>

          <h2 className="section-title">Conclusion</h2>
          <p>
            By following these tips and best practices, you can help protect
            your personal information and devices while traveling abroad. Stay
            vigilant and take steps to secure your online accounts and
            activities, and you can enjoy your vacation with peace of mind.
            Remember to update your software and devices, use a virtual private
            network (VPN), enable two-factor authentication (2FA), and be aware
            of phishing scams. With these precautions in place, you can
            confidently explore the world and stay safe from cyber threats.
          </p>
        </div>
      ),
      writer: "Andre Rodrigues"
    },
    {
      id: "d509s2a482-532",
      title: "How to spot and avoid phishing scams?",
      description:
        "In this article, we'll provide some tips on how to spot and avoid phishing scams, so you can protect yourself and your personal data. We'll cover how to identify suspicious emails, be cautious about sharing personal information, and use two-factor authentication to add an extra layer of security to your online accounts.",
      category: categories.tech,
      date: "10, Jan 2023",
      isTopArticle: false,
      meta_tags: [
        "cybersecurity",
        "phishing scams",
        "personal information",
        "suspicious emails",
        "fraudulent websites",
        "two-factor authentication",
        "2FA",
        "spam",
        "unsolicited requests",
        "sensitive information",
        "login credentials",
        "financial details",
        "spam filters",
        "antivirus software"
      ],
      content: (
        <div>
          <h2 className="section-title">Look out for suspicious emails</h2>
          <p>
            Phishing scams often use emails to trick you into giving away your
            personal information. These emails may appear to be from legitimate
            sources, such as banks, government agencies, or well-known
            companies, but they are actually designed to steal your information.
            To spot suspicious emails, look out for the following red flags:
          </p>

          <ul>
            <li>Unfamiliar sender or recipient</li>
            <li>Misspellings or poor grammar</li>
            <li>Urgent or threatening language</li>
            <li>Incorrect branding or logos</li>
            <li>Links or attachments from unfamiliar sources</li>
          </ul>
          <p>
            If you receive an email that seems suspicious, do not click on any
            links or download any attachments. Instead, delete the email and
            report it as spam, or contact the supposed sender directly to verify
            its authenticity.
          </p>

          <h2 className="section-title">
            Be cautious about sharing personal information
          </h2>
          <p>
            Phishing scams may try to trick you into sharing your personal
            information, such as your name, address, phone number, or financial
            details. To avoid falling victim to these scams, be cautious about
            sharing personal information online, especially with unfamiliar
            sources. Never provide personal information in response to an
            unsolicited request, and be especially wary of emails or websites
            that ask for sensitive information, such as login credentials or
            financial details.
          </p>
        </div>
      ),
      image_src:
        "https://images.unsplash.com/photo-1563115298-e9585e7943d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      writer: "Andre Rodrigues"
    },
    {
      id: "d509s2a482-532-k924",
      title: "Become a Pro: Secrets to Dominating in CS:GO",
      description:
        "Learn how to become a pro in Counter-Strike: Global Offensive (CS:GO) with our insider tips and strategies. From aiming and map knowledge to communication and focus, we cover all the essentials you need to dominate the competition. Improve your gameplay and take your CS:GO skills to the next level with our comprehensive guide. Don't miss out on the secrets to mastering the game.",
      category: categories.games,
      date: "1, Dez 2022",
      isTopArticle: false,
      meta_tags: [
        "CS:GO",
        "counter-strike:global offensive",
        "gaming",
        "pro tips",
        "aim training",
        "map knowledge",
        "crosshair placement",
        "communication",
        "teamwork",
        "focus",
        "strategies",
        "esports",
        "fps",
        "competitive gaming"
      ],
      content: (
        <div>
          <p>
            Counter-Strike: Global Offensive (CS:GO) is a popular and
            competitive first-person shooter game that requires a high level of
            skill and strategy to master. Whether you&apos;re a casual player or
            aspiring to become a professional, there are many ways to improve
            your game and dominate the competition.
          </p>
          <h2 className="section-title">Practice your aim</h2>
          <p>
            One of the most important aspects of CS:GO is your aim. Being able
            to hit your targets quickly and accurately is crucial for success in
            the game. To improve your aim, consider using aim training maps and
            software that are specifically designed to help you hone your
            skills. Additionally, playing deathmatch and aim maps can help you
            build muscle memory and get used to different movement and recoil
            patterns.
          </p>
          <h2 className="section-title">Learn the maps</h2>
          <p>
            Knowing the layout and common choke points of the maps you play on
            can give you a significant advantage over your opponents. Practice
            each map individually, learning the common strategies and angles
            used by both the Terrorist and Counter-Terrorist teams. Pay
            attention to where the bomb sites are located, where enemies are
            likely to come from and where you can take cover. The more you know
            about a map, the better your chances of predicting and countering
            enemy movements.{" "}
          </p>
          <h2 className="section-title">Improve your crosshair placement</h2>
          <p>
            An essential aspect of your aim is your crosshair placement. The
            position of your crosshair can affect the speed and accuracy of your
            shots, so it&apos;s important to get it right. To improve your
            crosshair placement, practice aiming at head level while moving,
            strafing, and jumping. This will help you learn how to quickly and
            accurately place your crosshair where you need it to be, improving
            your chances of making headshots and taking out enemies quickly.{" "}
          </p>
          <h2 className="section-title">Stay focused and communicate</h2>
          <p>
            CS:GO is a fast-paced game that requires you to be constantly aware
            of your surroundings. Stay focused and keep your mind on the task at
            hand. Additionally, communication is crucial in the game, whether
            you&apos;re playing solo or with a team. Keep your microphone open
            and communicate with your teammates, relaying information about
            enemy locations, weapon upgrades, and strategy. Clear and concise
            communication can make a big difference in the outcome of a match.
          </p>
          <h2 className="section-title">Keep learning</h2>
          <p>
            CS:GO is a complex and constantly evolving game, so there&apos;s
            always something new to learn. Watch professional players and take
            note of their strategies, pay attention to updates to the game and
            keep an open mind to new tactics and techniques. Practice makes
            perfect, so the more you play and learn, the better you&apos;ll
            become.{" "}
          </p>
          <h2 className="section-title">Conclusion</h2>
          <p>
            In conclusion, becoming a pro at CS:GO requires a combination of
            practice, knowledge, and strategy. Improving your aim, learning the
            maps, and perfecting your crosshair placement are key to dominating
            the game. Additionally, staying focused and communicating
            effectively with your team can give you a significant advantage over
            your opponents. The more you play and learn about the game, the
            better you will become. Remember that CS:GO is a constantly evolving
            game and that you should always be open to learning new tactics and
            strategies. With dedication and hard work, you can take your CS:GO
            game to the next level and become a pro.
          </p>
        </div>
      ),
      image_src:
        "https://images.unsplash.com/photo-1637594439872-44d1b1fe0a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      writer: "Andre Rodrigues"
    }
  ]
};

const translator = {
  language: "pt",
  components: {
    homepage: {
      heading: {
        pt: [""],
        en: [""]
      },
      subtitle: {
        pt: [""],
        en: [""]
      },
      action_button: {
        pt: [""],
        en: [""]
      }
    },
    about: {
      heading: {
        pt: ["André Rodrigo é um programador criativo residente em Portugal."],
        en: ["André Rodrigo is a creative web developer from Portugal"]
      },
      introduction: {
        pt: [
          "Desde que tornei a minha paixão numa carreira, estou continuamente a desenvolver e a entregar projetos há cerca de 4 anos. A minha atenção aos detalhes, visão criativa do mundo e natureza meticulosa são os principais contributos da minha identidade para o desenvolvimento e criação de soluções personalizadas ao projeto. Ao longo da minha carreira, desenvolvi soluções para diversos sectores, desde pequenos negócios a trabalhadores independentes dedico-me "
        ],
        en: [
          " Since turning my passion into a career, I&apos;ve been continuously creating and delivering projects for almost 4 years. My eye for detail, creative view of the world, and meticulous nature help me make a difference and deliver unique and personalized solutions. I've created and delivered solutions for various types of projects, from small businesses to independent workers, I'm here to help you bring your website vision to life so you can free up your time to do what you do best - running your awesome business, of course!",
          "When I'm not busy making website dreams come true, you can find me relaxing at home in Lisbon, with my partner or unique friends, laughing with silly jokes, taking a walk, making something fun, or eating an amazing croissant accompained by jazz oldies."
        ]
      },

      education_title: {
        pt: ["Formação"],
        en: ["Education"]
      },
      courses: {
        pt: [
          "Front-End Libraries Certification",
          "Back-End Development and APIs Certification",
          "Algorithms and Data Structures Certification",
          "Responsive Web Design Certification",
          "Design Thinking Certification",
          "UX/UI Fundamentals Certification"
        ]
      }
    },
    testimonials: {
      heading: {
        pt: ["Testemunhos que nos enchem o coração"],
        en: ["Sweet testimonials from warming people"]
      },
      question: {
        pt: ["Gostaria de ver o seu feedback aqui?", "Vamos conversar"],
        en: ["Would you like to be next?", "Let's talk!"]
      }
    },
    work_category_page: {
      heading: {
        pt: [""],
        en: [""]
      },
      description: {
        pt: [""],
        en: [""]
      }
    }
  },

  gettext(component, content) {
    return translator.components[component][content][translator.language];
  }
};

export { social_media, blog, translator };
