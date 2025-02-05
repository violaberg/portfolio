const projects = [
  {
    id: "1",
    name: "Infinity Health Hub",
    description: "Infinity Health Hub is an online forum designed to support neurodivergent women at every life stage. It provides a safe space to connect, share experiences, and access tailored health resources — from mental health and reproductive care to pregnancy, postnatal support, and menopause. This project was developed during a Code Institute hackathon in collaboration with Trust in Soda, April 2024.",
    image: "/images/project_1.png",
    repo: "https://github.com/violaberg/infinity-health-hub",
    demo: "https://infinity-hub-15161149b9fb.herokuapp.com/",
    goal: "The main goal of this project is to provide a solution for X.",
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    contribution: "I contributed to the project by implementing X and Y.",
    techStack: [
      { "name": "Python", "icon": "/icons/python.svg" },
      { "name": "Django", "icon": "/icons/django.svg" },
      { "name": "Bootstrap", "icon": "/icons/bootstrap.svg" },
    ],
  },
  {
    id: "2",
    name: "Bling It",
    description: "Bling It is a fictional e-commerce gemstone shop inspired by my love for diamonds and rubies. It offers a curated selection of gemstones, each with detailed specs, pricing, and images. Users can easily browse categories, add items to their wishlist, and leave reviews.  This platform blends convenience, information, and passion for gemstones into a comprehensive digital marketplace. The shop also features a secure checkout process for a smooth shopping experience.",
    image: "/images/project_2.png",
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
      { "name": "Python", "icon": "/icons/python.svg" },
      { "name": "Django", "icon": "/icons/django.svg" },
      { "name": "Bootstrap", "icon": "/icons/bootstrap.svg" },
      { "name": "AWS", "icon": "/icons/amazonwebservices.svg" },
    ],
  },
  {
    id: "3",
    name: "Wine O'Clock",
    description: "Wine O'Clock is a fictional wine cellar nested in the heart of the world-renowned Bordeaux wine region in France. Born from my deep passion for wine and the enchanting allure of France, this project invites enthusiasts to embark on an unforgettable journey into the captivating realms of winemaking. The site shares a brief narrative about Wine O'Clock, offering a glimpse into its rich history and commitment to the craft. Immerse yourself in our curated gallery, adorned with exquisite photos captured by owners, reviews left by cherished visitors, creating a tapestry of memories that resonate with the essence of our vineyard, or read our blog if you crave some more info about all things wine. Whether you're a seasoned connoisseur or a curious explorer, Wine O'Clock has something for everyone.",
    image: "/images/project_3.png",
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
      { "name": "Python", "icon": "/icons/python.svg" },
      { "name": "Django", "icon": "/icons/django.svg" },
      { "name": "Bootstrap", "icon": "/icons/bootstrap.svg" },
    ],
  },
  {
    id: "4",
    name: "ForThe50",
    description: "For the 50 is a platform dedicated to shedding light on modern slavery, which affects an estimated 50 million people worldwide—1 in every 150 individuals. While awareness is growing, much more needs to be done. This initiative aims to amplify the voices of those impacted, educate the public, and provide actionable resources. Beyond raising awareness, For the 50 equips users with the knowledge to recognize modern slavery, offers guidance on reporting, and connects individuals with essential support services. Together, we can take a stand and work toward a future free from exploitation.",
    image: "/images/project_4.png",
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
      { "name": "Python", "icon": "/icons/python.svg" },
      { "name": "Django", "icon": "/icons/django.svg" },
      { "name": "Bootstrap", "icon": "/icons/bootstrap.svg" },
      { "name": "JavaScript", "icon": "/icons/javascript.svg" },
      { "name": "ChartJS", "icon": "/icons/chartdotjs.svg" },
    ],
  },
];

export default projects;
