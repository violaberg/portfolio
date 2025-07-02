const projects = [
  {
    id: "1",
    name: "Infinity Health Hub",
    description: "Infinity Health Hub is the premier online forum dedicated to providing tailored support for neurodivergent women at every stage of life. With a focus on how neurodiversity and life-stage interact in health considerations, Infinity Hub offers a safe and inclusive space where members can connect, share experiences, and access targeted health support. From sexual and mental health guidance in young adulthood to tailored reproductive health resources and holistic care guides during pregnancy, postnatal periods, and menopause, Infinity Hub is committed to empowering neurodivergent women to thrive across all life stages. Join our community and discover the support you need to navigate your well-being effectively and authentically. This site was created as part of a Code Institute hackathon in collaboration with Trust in Soda, April 2024.",
    image: "/images/project_1-min.png",
    repo: "https://github.com/violaberg/infinity-health-hub",
    demo: "https://infinity-health-hub-399deb558281.herokuapp.com/",
    goal: "The goal of this project was to create a clear and informative platform dedicated to raising awareness about neurodivergent conditions and their impact on females. The site should offer tailored content based on the user’s life stage and neurodiversity, ensuring a personalized and relevant experience. Provides a safe and supportive space where users can engage at their own pace, allowing for a gradual and comfortable exploration of their identity. A moderated forum to encourage peer-to-peer discussions while maintaining a secure environment. Designed with accessibility and responsiveness in mind to ensure inclusivity and ease of use across all devices.",
    features: [
      'User Authentication – Users can register, log in, and manage their accounts securely, ensuring a personalized experience while accessing forum discussions and saving resources.',
      'Accessible Information Resources – Guest users can browse and read articles to learn about neurodivergent conditions, with the option to filter content based on life stage and neurodiversity for a more relevant experience.',
      'Moderated Broadcast Resources – Articles are created by site admins and available on the Resources page, ensuring reliable and curated information. Users can refine their reading by filtering articles based on life stage and neurodivergence.',
      'Private, Moderated Peer-to-Peer Discussions – The discussion forum allows users to create posts tagged with specific life stages and neurodivergences, ensuring that only relevant users can view and engage in discussions. Replies and posts are moderated for safety and privacy.',
      'Progressive Reveal & Anonymity Features – Users can create an alias instead of displaying their username and upload an avatar to maintain privacy. This allows for gradual identity sharing, offering comfort and security in engaging with the community.',
      'Saved Articles – Users can save resources of interest to build a personalized reading list, making it easy to revisit helpful articles.',
      'About Us – A dedicated section outlines the mission and values of the platform, explaining its commitment to supporting neurodivergent individuals.'
    ],
    colorScheme: [
      {
        type: "intro",
        text: "The color palette for Infinity Health Hub is designed to create a welcoming and calming environment, ensuring accessibility and comfort for neurodivergent users. Soft, pastel tones provide a gentle and reassuring atmosphere, promoting ease of navigation and reducing visual stress. Warmer, earthy shades add a sense of grounding and stability, while deep, rich hues offer contrast for readability and emphasis. The harmonious balance of colors fosters an inclusive and engaging experience, reflecting the supportive and safe space that Infinity Health Hub aims to provide."
      },
      {
        color: "#ffe4d1",
        description: "A soft, pastel pink that brings warmth and comfort, evoking feelings of safety and inclusivity."
      },
      {
        color: "#feeeba",
        description: "A gentle, muted yellow that symbolizes positivity and awareness, creating an uplifting and engaging experience."
      },
      {
        color: "#dbead5",
        description: "A calming, natural green that represents growth, balance, and harmony, promoting a sense of stability."
      },
      {
        color: "#f4f5e0",
        description: "A delicate cream shade that enhances readability and provides a neutral backdrop for content."
      },
      {
        color: "#404040",
        description: "A deep gray that adds contrast for readability, ensuring an accessible and inclusive user experience."
      },
      {
        color: "#033500",
        description: "A rich, dark green that signifies depth, wisdom, and security, reinforcing the sense of trust within the community."
      },
      {
        color: "#eeada0",
        description: "A deeper shade of pink that introduces warmth and personality while maintaining a sense of calm and reassurance."
      },
    ],
    contribution: "I contributed to this hackathon project by designing the logo and creating the About page, which includes an FAQ section. I also worked on the overall site styling, carefully selecting colors to ensure a visually accessible and non-overwhelming experience for users. Our team was fortunate to have a neurodivergent member who provided valuable insights into what works best for individuals like her, helping us refine the design for inclusivity and usability.",
    techStack: [
      { name: "Python", icon: "/icons/python.svg" },
      { name: "Django", icon: "/icons/django.svg" },
      { name: "Bootstrap", icon: "/icons/bootstrap.svg" },
    ],
  },
  {
    id: "2",
    name: "Bling It",
    description: "Bling It is a fictional e-commerce gemstone shop inspired by my love for diamonds and rubies. It offers a curated selection of gemstones, each with detailed specs, pricing, and images. Users can easily browse categories, add items to their wishlist, and leave reviews.  This platform blends convenience, information, and passion for gemstones into a comprehensive digital marketplace. The shop also features a secure checkout process for a smooth shopping experience.",
    image: "/images/project_2-min.png",
    repo: "https://github.com/violaberg/bling-it",
    demo: "https://bling-it-242ac659e1b6.herokuapp.com/",
    goal: "The goal of this project is to provide gemstone enthusiasts and collectors with an exceptional online shopping experience, create a fully responsive and user-friendly design, allowing seamless browsing across devices while ensuring it features a curated collection of gemstones with detailed descriptions, intuitive navigation, and advanced search capabilities. Have an option to create wishlists, leave reviews, and read others' experiences, as well as develop a secure checkout process with Stripe that ensures safe transactions, while SEO best practices enhance visibility.",
    features: ['Product Management for Admins – Allows administrators to add, edit, update, and delete products as needed.',
      'Contact Information Accessibility – Provides clear contact details for customer support and inquiries.',
      'Categorized Gemstone Listings – Organizes products into specific categories for easier browsing.',
      'Advanced Sorting and Search Functionality – Includes robust search capabilities and sorting options to help users find products efficiently.',
      'Product Rating and Reviews – Allows users to leave reviews and ratings on products, enhancing community engagement.',
      'Administrative Review Management – Provides admins with the ability to delete inappropriate or false reviews.',
      'Order Confirmation Notifications – Sends confirmation emails to users after successful purchases.',
      'Personalized User Profiles – Offers users a personalized profile to manage their information and view order history.',
      'Wishlist Functionality – Enables users to save products for future reference or purchase.',
      'Subscription Services – Allows users to subscribe to newsletters or updates for the latest information and promotions.',
      'Interactive Contact Form – Allows users to reach out with questions or feedback through a user-friendly form.'
    ],
    colorScheme: [
      {
        type: "intro",
        text: "The chosen color palette combines the purity of white with the warmth of goldenrod and the depth of midnight blue, creating a harmonious balance of sophistication and elegance. The colors work together to highlight the beauty of gemstones and create a luxurious, visually engaging and immersive experience for users."
      },
      {
        color: "#ffffff",
        description: "White represents purity and elegance. It serves as a clean and neutral backdrop, allowing other design elements to stand out vividly."
      },
      {
        color: "#daa520",
        description: "Goldenrod is a warm and luxurious yellow-gold color, reminiscent of precious metals and sun-kissed hues. It adds a touch of sophistication and vibrancy."
      },
      {
        color: "#880101",
        description: "Deep Red is a rich and intense hue that evokes a sense of passion and power. Its deep, ruby-like shade adds a touch of boldness and luxury, enhancing the visual impact and creating a striking contrast against lighter colors."
      },
      {
        color: "#020c1b",
        description: "Midnight Blue is a deep, rich shade of blue that conveys mystery, elegance, and depth. It provides a striking contrast and a sense of tranquility."
      },
    ],
    contribution: "As this project was my final Full-Stack milestone project for the Code Institute diploma, specializing in e-commerce I developed it entirely on my own, handling everything from planning and design to backend and frontend implementation, as well as deployment. I designed and built a fully responsive and user-friendly interface using HTML, CSS, and JavaScript. The backend was developed with Django and PostgreSQL, ensuring secure user authentication and efficient data management. Integrated Stripe to provide a seamless and secure checkout experience. Full CRUD functionality was implemented, allowing users to manage their profiles, purchase products, and leave reviews. I also structured and optimized the database to support product management, order processing, and user interactions. Beyond development, I planned the business model, SEO strategy, and digital marketing approach to improve visibility and user engagement. SEO best practices were applied to enhance search rankings, and the project was successfully deployed on Heroku to ensure stability and performance. This project allowed me to refine my skills in e-commerce development, database management, and full-stack deployment while also deepening my understanding of marketing and business strategy.",
    techStack: [
      { name: "Python", icon: "/icons/python.svg" },
      { name: "Django", icon: "/icons/django.svg" },
      { name: "Bootstrap", icon: "/icons/bootstrap.svg" },
      { name: "AWS", icon: "/icons/amazonwebservices.svg" },
      { name: "Stripe", icon: "/icons/stripe.svg" },
    ],
  },
  {
    id: "3",
    name: "Wine O'Clock",
    description: "Wine O'Clock is a fictional wine cellar nested in the heart of the world-renowned Bordeaux wine region in France. Born from my deep passion for wine and the enchanting allure of France, this project invites enthusiasts to embark on an unforgettable journey into the captivating realms of winemaking. The site shares a brief narrative about Wine O'Clock, offering a glimpse into its rich history and commitment to the craft. Immerse yourself in our curated gallery, adorned with exquisite photos captured by owners, reviews left by cherished visitors, creating a tapestry of memories that resonate with the essence of our vineyard, or read our blog if you crave some more info about all things wine. Whether you're a seasoned connoisseur or a curious explorer, Wine O'Clock has something for everyone.",
    image: "/images/project_3-min.png",
    repo: "https://github.com/violaberg/wine-o-clock",
    demo: "https://wine-o-clock-223a2b0e8720.herokuapp.com/",
    goal: "The goal of project was to create a fully responsive, user-friendly platform where wine enthusiasts can explore content, share their experiences, and connect with others. It includes comprehensive features for both users and admins, such as login and full CRUD functionality. The site encourages community interaction by allowing users to contribute photos and reviews, while fostering a passion for wine and travel.",
    features: [
      'Home Page – A welcoming page with a short quote.',
      'About Page – Describes the mission and philosophy behind Wine O&apos;Clock, emphasizing its connection to the world of wine.',
      'Gallery – A curated selection of images to look through uploaded by staff member to get a better feel of what vineyard has to offer.',
      'Reviews – Customer testimonials sharing their experiences at Wine O&apos;Clock vineyard.',
      'Blog – A space for posts and insights into wine-related topics.',
      'Contact Page – A page with contact form for reaching out with questions, feedback or to book a visit.',
      'User Register/ Login – The Wine O&apos;Clock website features user registration and login, enabling users to leave reviews and comments.',
      'Responsive and Accessible Design – Optimized for all devices and includes accessibility features to ensure inclusivity.'
    ],
    colorScheme: [
      {
        type: "intro",
        text: "The color palette for the Wine O'Clock app evokes a sense of timeless elegance and refined luxury, inspired by the world of wines. Soft, light tones create a serene foundation, symbolizing clarity and purity, while rich, warm hues infuse the design with sophistication and excellence. Accents of deep, bold shades introduce a touch of depth and complexity, reflecting the essence of aged wines and the world they come from. The carefully selected palette flows seamlessly, capturing the spirit of the winemaking journey from vine to cellar, and creating a harmonious visual experience that mirrors the luxury of Bordeaux wines."
      },
      {
        color: "#fafafa",
        description: "Seasalt is a soft and inviting shade symbolizing purity and clarity, reminiscent of the winemaking process."
      },
      {
        color: "#daa520",
        description: "Muted Gold represents the allure of gold, mirroring the excellence and sophistication associated with wines, bringing warmth to the project."
      },
      {
        color: "#4c0013",
        description: "Deep, juicy tones of bordeaux that evoke the essence of rich red wines, accentuating the luxurious world of Bordeaux wines."
      },
      {
        color: "#000000",
        description: "Classic Black represents the depth and complexity found in a perfectly aged bottle, embodying the rich history and quality of wine."
      },
    ],
    contribution: "As the sole developer of the Wine O'Clock app, I was responsible for every aspect of its creation. From designing the user interface and crafting the user experience to setting up the backend and implementing secure user authentication, I handled all technical aspects. This project was developed as part of my full-stack diploma at Code Institute, allowing me to showcase my skills in both front-end and back-end development.",
    techStack: [
      { name: "Python", icon: "/icons/python.svg" },
      { name: "Django", icon: "/icons/django.svg" },
      { name: "Bootstrap", icon: "/icons/bootstrap.svg" },
    ],
  },
  {
    id: "4",
    name: "ForThe50",
    description: "For the 50 is a platform dedicated to shedding light on modern slavery, which affects an estimated 50 million people worldwide—1 in every 150 individuals. While awareness is growing, much more needs to be done. This initiative aims to amplify the voices of those impacted, educate the public, and provide actionable resources. Beyond raising awareness, For the 50 equips users with the knowledge to recognize modern slavery, offers guidance on reporting, and connects individuals with essential support services. Together, we can take a stand and work toward a future free from exploitation.",
    image: "/images/project_4-min.png",
    repo: "https://github.com/violaberg/ForThe50",
    demo: "https://forthe50-67eaa7388853.herokuapp.com/",
    goal: "This project aims to educate users on Modern Slavery and Human Trafficking, provide key contacts for reporting and support, and outline signs to recognize potential victims. It is designed for individuals seeking information, those looking for help or advice, and users who want to report suspected cases. The platform raises awareness with data-driven insights and survivor stories, provides key resources and reporting contacts, and empowers users with the knowledge to identify and address potential cases. It also ensures accessibility through responsive design and language options, making the information more inclusive and widely available.",
    features: [
      'Informative Home Page – Provides an overview of modern slavery and human trafficking, explaining its different forms, global impact, and the importance of awareness.',
      'Survivor Stories – Shares real-life experiences from survivors, giving a human perspective to the issue and fostering empathy.',
      'Knowledge Center – Offers educational resources to help users identify signs of modern slavery and understand how they can help.',
      'Statistics Page – Displays data-driven insights using visually appealing graphs based on official reports from the UK and Ireland.',
      'Report a Crime – Dedicated reporting page with a form that allows users to report suspected cases directly to relevant authorities.',
      'Chatbot Support – An interactive chatbot that provides support to users.',
      'Multi-Language Support – Provides language options to make the platform accessible to a wider audience.',
      'Contact and Help Resources – Lists key contacts, including helplines and organizations that offer support for victims and those seeking advice.',
      'Responsive and Accessible Design – Optimized for all devices and includes accessibility features to ensure inclusivity.'
    ],
    colorScheme: [
      {
        type: "intro",
        text: "The color palette for ForThe50 was carefully chosen to ensure clarity, accessibility, and impact. Inspired by similar awareness-focused platforms, the colors create a clean and structured design that allows users to absorb critical information without unnecessary distractions."
      },
      {
        color: "#ffffff",
        description: "White represents purity and neutrality, allowing the focus to remain on the important information, with a sense of openness and clarity."
      },
      {
        color: "#ffeb3b",
        description: "Yellow symbolizes hope, attention, and urgency, encouraging users to act and raise awareness about modern slavery and human trafficking."
      },
      {
        color: "#e41d24",
        description: "Red represents danger, emergency, and the urgency of addressing the issue, highlighting the immediate need for action."
      },
      {
        color: "#b1181d",
        description: "Dark red conveys the serious, intense nature of modern slavery, reinforcing the gravity of the subject matter."
      },
      {
        color: "#700000",
        description: "Burgundy symbolizes depth, strength, and resilience, evoking a sense of determination in the fight against modern slavery."
      },
      {
        color: "#cacaca",
        description: "Light gray adds a subtle, neutral tone, helping to balance the intensity of other colors while maintaining a clean and simple design."
      },
      {
        color: "#5e6572",
        description: "Dark gray conveys seriousness, trust, and professionalism, grounding the design and giving users a sense of stability."
      },
      {
        color: "#000000",
        description: "Black represents the stark reality of modern slavery, creating contrast and drawing attention to the critical information."
      }
    ],
    contribution: "I played a key role in shaping For the 50 by designing and developing the Statistics page, which presents impactful data through visually engaging charts created with Chart.js. I also contributed to the project's UI/UX, color scheme and font selection, ensuring accessibility and a cohesive visual identity. Additionally, I helped team members navigate version control, resolving merge conflicts and improving their understanding of collaborative development workflows.",
    techStack: [
      { name: "Python", icon: "/icons/python.svg" },
      { name: "Django", icon: "/icons/django.svg" },
      { name: "Bootstrap", icon: "/icons/bootstrap.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "ChartJS", icon: "/icons/chartdotjs.svg" },
    ],
  },
  {
    id: "5",
    name: "SparkSync",
    description: "SparkSync is a modern digital dating platform designed to foster meaningful and authentic connections. It emphasizes inclusivity, welcoming individuals of all backgrounds, genders, and orientations. User safety is a top priority, with features like AI-driven security, profile verification, and user-controlled boundaries. The platform offers enhanced matchmaking, allowing users to find compatible partners based on shared values, interests, and relationship goals. With a personalized experience, users can customize their preferences and dating journey. SparkSync aims to create a supportive community where everyone feels safe, heard, and valued. Join SparkSync today to embark on your journey towards meaningful connections.",
    image: "/images/project_5-min.png",
    repo: "https://github.com/violaberg/dating-app",
    demo: "https://sparksync-7438f8dc8240.herokuapp.com/",
    goal: "The primary goal of SparkSync is to create a digital dating platform that focuses on fostering meaningful connections, ensuring user safety, promoting inclusivity, and providing an accessible user experience.",
    features: [
      'Home Page – A modern and inviting homepage that introduces SparkSync and its mission.',
      'Sign Up & Login – A seamless registration and login process for users to create and access their profiles.',
      'Profile Creation – Users can build detailed profiles with preferences, interests, and a photo.',
      'Messaging System – Secure in-app messaging for meaningful conversations.',
      'Safety & Security – Profile verification, privacy controls, and reporting features to ensure a safe dating experience.',
      'Inclusivity & Accessibility – Designed to be welcoming for all genders, sexual orientations, and backgrounds, with an intuitive user experience.',
      'Personalized Preferences – Users can filter and refine their matches based on specific dating preferences.',
      'Mobile-Friendly Design – Fully responsive platform optimized for all devices.',
    ],
    colorScheme: [
      {
        type: "intro",
        text: "The color scheme combines deep, romantic burgundies with neutral tones to create an elegant and intimate atmosphere. The rich red hues evoke passion and warmth, symbolizing the spark of connection and romance. The soft, neutral shades provide a calming backdrop, ensuring readability and accessibility."
      },
      {
        color: "#fafafa",
        description: "Seasalt was used for content areas requiring high brightness and clarity."
      },
      {
        color: "#f5f5ee",
        description: "Cool ivory was used in main background gradient, providing a slighty warmer, inviting atmosphere while being easier on the eyes."
      },
      {
        color: "#fa9ca1",
        description: "Pink adds a soft, romantic touch to features."
      },
      {
        color: "#520408",
        description: "Light burgundy was used for hover states and secondary elements."
      },
      {
        color: "#2d0709",
        description: "Dark burgundy adds depth and sophistication."
      },
      {
        color: "#b10009",
        description: "Red was added as accent color for important elements."
      },
      {
        color: "#1b1b1b",
        description: "Charcoal was used for main text providing strong contrast and readability."
      },
    ],
    contribution: "As the SCRUM lead for this hackathon project (2nd place), I ensured the team remained organized and efficient by managing a Kanban board. I also contributed to development by overseeing Git workflows, designing the user interface, and implementing key pages, including the Team, FAQ, Privacy Policy, and Contact pages.",
    techStack: [
      { name: "Python", icon: "/icons/python.svg" },
      { name: "Django", icon: "/icons/django.svg" },
      { name: "Bootstrap", icon: "/icons/bootstrap.svg" },
      { name: "Resend", icon: "/icons/resend.svg" },
      { name: "Redis", icon: "/icons/redis.svg" },
    ],
  },
  {
    id: "6",
    name: "Dottie",
    description: "Dottie is an innovative, open-source AI-powered application designed to be the ultimate period companion for adolescent girls. More than just a tracking app, Dottie serves as a friendly digital bestie that empowers young people with essential knowledge about their menstrual health through accessible, AI-driven guidance. At its core, Dottie functions as an intelligent symptom checker specifically crafted for adolescent girls and their caregivers. The app helps users distinguish between normal and abnormal menstruation patterns, providing peace of mind and educational insights delivered through a warm, approachable digital mascot that makes discussing periods feel natural and comfortable. Mission-Driven Design Dottie's mission centers on empowering adolescent girls with comprehensive knowledge about their menstrual health. By combining cutting-edge AI technology with a user-friendly interface, the app makes menstrual health education accessible to everyone, regardless of background or previous knowledge. Vision for the Future The app works toward creating a world where young people truly understand their bodies, recognize menstrual health as a vital sign of overall wellness, and feel confident and empowered when seeking medical care. Dottie breaks down barriers and stigma surrounding menstruation, fostering open conversations about reproductive health. Open Source Impact As an open-source project, Dottie represents a community-driven approach to menstrual health education. This transparency ensures the app remains accessible, continuously improved by contributors worldwide, and free from commercial biases that might compromise its educational mission. Whether you're a teen experiencing your first period, a parent supporting your child's journey, or a caregiver seeking reliable menstrual health information, Dottie provides the knowledge, support, and confidence needed to navigate menstrual health with understanding and empowerment.",
    image: "/images/project_6.png",
    repo: "https://github.com/violaberg/dottie",
    demo: "https://dottie-lmcreans-projects.vercel.app/",
    goal: "To empower adolescent girls with knowledge about their menstrual health through accessible, friendly AI-powered guidance. The project aims to provide a safe space for users to learn about menstruation, understand their bodies, and make informed decisions about their health.",
    features: [
      'AI-powered symptom assessment tailored to menstrual patterns, delivering personalized guidance on what is normal and when to seek medical advice.',
      'Friendly 3D mascot interface designed to reduce stigma and make interactions approachable and comforting.',
      'Light and dark mode support, ensuring visual comfort and accessibility across different user environments.',
      'Conversation-style chat interface, guiding adolescents and caregivers through assessments with age-appropriate language.',
      'Personalized educational content, offering explanations tailored to users’ age and health literacy.',
      'Symptom-to-action recommendations, helping users decide whether their symptoms are normal, need monitoring, or require medical attention.',
      'Progressive Web App (PWA) capabilities, including manifest configuration and cross-device compatibility for an app-like experience.',
      'Responsive design and mobile-friendly UI, including a sheet-style mobile navbar and smooth layout transitions across devices.',
    ],
    colorScheme: [
      {
        color: "#ffffff",
        description: "Pure white for main backgrounds and text contrast."
      },
      {
        color: "#fdf2f8",
        description: "Very light pink background used for soft, feminine sections."
      },
      {
        color: "#db2777",
        description: "Bright pink accent color for primary buttons and highlights."
      },
      {
        color: "#be185d",
        description: "Deeper pink for hover states and darker pink accents."
      },
      {
        color: "#f1f5f9",
        description: "Light blue-gray background for clean, neutral sections."
      },
      {
        color: "#f2f2f2",
        description: "Light neutral gray for background areas and cards."
      },
      {
        color: "#e2e8f0",
        description: "Medium light gray for subtle borders and dividers."
      },
      {
        color: "#4b5563",
        description: "Dark gray for secondary text and less prominent elements."
      },
      {
        color: "#27272a",
        description: "Very dark gray for primary headings and important text."
      },
      {
        color: "#020817",
        description: "Near-black color for high contrast text and dark elements."
      },
      {
        color: "#1f2937",
        description: "Dark gray background for dark theme sections."
      },
      {
        color: "#111827",
        description: "Very dark gray for primary dark theme backgrounds."
      },
    ],
    contribution: "As a contributor and designated Code Owner for the Dottie 3D mascot project, I helped shape the visual identity and user experience of the application. I enhanced the 3D teardrop mascot by refining the eye highlights, smoothing the model’s geometry, and adjusting the mouth shape to create a more approachable and expressive character. I implemented a dark mode toggle using Tailwind CSS, with a focus on accessibility and eye comfort, including global variables and intuitive sun and moon icons. To improve readability and maintain consistency, I updated the UI’s color palette to use higher-contrast shades throughout the app. I also reworked the favicon setup and introduced a valid site.webmanifest file to improve support for progressive web app features and cross-device compatibility. On the navigation side, I rebuilt the mobile navbar into a modern sheet-style drawer, improving interaction and layout responsiveness for both logged-in and logged-out users. As a Code Owner, I regularly reviewed and approved pull requests, ensured code quality, and opened new issues to guide and support the ongoing development of the project.",
    techStack: [
      { name: "NodeJS", icon: "/icons/node.svg" },
      { name: "ExpressJS", icon: "/icons/express.svg" },
      { name: "React", icon: "/icons/react.svg" },
      { name: "Typescript", icon: "/icons/typescript.svg" },
      { name: "Tailwind", icon: "/icons/tailwindcss.svg" },
    ],
  },
];

export default projects;
