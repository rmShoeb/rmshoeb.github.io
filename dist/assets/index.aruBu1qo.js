(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function c(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=c(n);fetch(n.href,r)}})();const t=`<section class="section">\r
    <h2 class="section-title">{title}</h2>\r
    <div class="{section-class}" id="{section-id}">{section-content}</div>\r
</section>`,l=`<div class="certification-item">\r
    <a href="{link}" target="_blank" class="certification-link">\r
        <h4 class="cert-name">{name}</h4>\r
        <p class="cert-platform">{platform}</p>\r
        <p class="cert-year">{year}</p>\r
    </a>\r
</div>`,m=[{name:"Java Foundations Professional - Jetbrains",platform:"LinkedIn Learning",year:"2025",link:"https://www.linkedin.com/learning/certificates/3145939194a6303872097f6161280bf69200436a9ff2fc8b472714a8cd532af4?trk=share_certificate"},{name:"Deep Learning Specialization - DeepLearning.AI",platform:"Coursera",link:"https://coursera.org/share/3f6d5aa6644d75a7a99479763c557ee3",year:"2020"},{name:"Version Control with Git - Atlassian",platform:"Coursera",link:"https://coursera.org/share/b3a8c88c38245e10854bfeb52dfc5b0e",year:"2020"},{name:"Using Databases with Python - University of Michigan",platform:"Coursera",link:"https://coursera.org/share/4ecad7f7becb6bbcfd7be776df94e9dd",year:"2021"},{name:"Natural Language Processing in Python",platform:"Datacamp",link:"https://www.datacamp.com/statement-of-accomplishment/track/c37f5380b493232d2feb249f9e86b39b5e99316b"},{name:"Deep Learning for NLP in Python",platform:"Datacamp",link:"https://www.datacamp.com/statement-of-accomplishment/track/a23bc7ac58a1a17f2fb9e2aaa682f9c22f0f7d88"}];function p(){const a=m.map(e=>l.replace("{name}",e.name).replace("{platform}",e.platform).replace("{year}",e.year||"N/A").replace("{link}",e.link||"#")).join("");return t.replace("{title}",'<i class="fa-solid fa-certificate"></i> Certifications').replace("{section-class}","certifications-grid").replace("{section-id}","certifications-container").replace("{section-content}",a)}const d=`<div class="timeline-item">\r
    <div class="timeline-marker"></div>\r
    <div class="timeline-content">\r
        <h3 class="item-title">{degree}</h3>\r
        <p class="item-company">{institution}</p>\r
        <p class="item-duration"><i class="fa-solid fa-calendar-days"></i> {duration}</p>\r
        <p class="item-location"><i class="fa-solid fa-location-pin"></i> {location}</p>\r
    </div>\r
</div>`,u=[{institution:"Rajshahi University of Engineering and Technology",degree:"B.Sc. Engg. in Computer Science and Engineering",duration:"January, 2017 - August, 2023",location:"Rajshahi, Bangladesh"}];function f(){const a=u.map(e=>d.replace("{institution}",e.institution).replace("{degree}",e.degree).replace("{duration}",e.duration).replace("{location}",e.location??"")).join("");return t.replace("{title}",'<i class="fa-solid fa-user-graduate"></i> Education').replace("{section-class}","timeline").replace("{section-id}","education-container").replace("{section-content}",a)}const g=`<div class="timeline-item">\r
    <div class="timeline-marker"></div>\r
    <div class="timeline-content">\r
        <h3 class="item-title">{role}</h3>\r
        <p class="item-company"><i class="fa-solid fa-business-time"></i> {company}</p>\r
        <p class="item-duration"><i class="fa-solid fa-calendar-days"></i> {duration}</p>\r
        <p class="item-description">{description}</p>\r
    </div>\r
</div>`,h=[{company:"Enosis Solutions",role:"Senior Software Engineer",duration:"November, 2024 - Current",description:"As a key contributor to a large-scale Manufacturing & Quality Assurance Platform, I drove the modernization of the front-end by migrating critical components from AngularJS to modern Angular. My work spanned the full stack with over 1,000 commits across the Java Spring backend and multiple database layers, where I collaborated on crucial enterprise integrations with ERP and authentication systems. Throughout these projects, including leading a comprehensive migration of legacy popup components, I maintained high code quality through systematic refactoring and documentation."},{company:"Enosis Solutions",role:"Software Engineer",duration:"November, 2022 - October, 2024",description:"I delivered significant performance optimizations and architectural improvements across a full-stack enterprise manufacturing platform. With over 400 commits, I led the modernization of the reporting infrastructure to support rich text and images, and architected critical validation systems to enhance data integrity. My work also focused on resolving complex database integration challenges and refactoring the Java data access layer, which improved query efficiency and reduced algorithmic complexity for a 10x performance gain."}];function y(){const a=h.map(e=>g.replace("{company}",e.company).replace("{role}",e.role).replace("{duration}",e.duration).replace("{description}",e.description??"")).join("");return t.replace("{title}",'<i class="fa-solid fa-suitcase"></i> Work Experience').replace("{section-class}","timeline").replace("{section-id}","experience-container").replace("{section-content}",a)}const b=`<header class="header">\r
    <div class="header-content">\r
        <h1 class="name" id="name">{name}</h1>\r
        <p class="title" id="title">{title}</p>\r
        <div class="contact-info">\r
            <span id="email">{email}</span>\r
            <span id="location">{location}</span>\r
        </div>\r
    </div>\r
</header>`,i={name:"Riyad Morshed Shoeb",title:"Software Engineer",email:"riyad.m.shoeb@gmail.com",location:"Netrokona, Bangladesh",summary:"Interested in the fields of Machine Learning, Natural Language Processing as well as Web Development with a background knowledge in Spring framework, Angular, MS SQL Server and Oracle database, along with basic concepts of C, C++ and Python. Currently exploring new opportunities to enhance my skills. Interested in learning new technologies. Looking forward to meet professionals with similar interests & ideas. Always curious to learn more about technology."};function k(){return b.replace("{name}",i.name).replace("{title}",i.title).replace("{email}",i.email).replace("{location}",i.location)}const v='<span class="language-item">{language}</span>',w=["Bengali","English"];function S(){return t.replace("{title}","Languages").replace("{section-class}","languages-list").replace("{section-id}","languages-container").replace("{section-content}",w.map(a=>v.replace("{language}",a)).join(""))}const L=`<a href="{url}" target="_blank" rel="noopener noreferrer" class="platform-item">\r
    <span class="platform-icon"><i class="{icon}"></i></span>\r
    <span class="platform-name">{name}</span>\r
    <span class="platform-username">{username}</span>\r
</a>`,C=[{name:"LinkedIn",username:"",url:"https://www.linkedin.com/in/rmshoeb",icon:"fa-brands fa-linkedin"},{name:"GitHub",username:"",url:"https://github.com/rmshoeb",icon:"fa-brands fa-github"},{name:"HackerRank",username:"",url:"https://hackerrank.com/rmshoeb",icon:"fa-brands fa-hackerrank"},{name:"Kaggle",username:"",url:"https://www.kaggle.com/riyadmorshedshoeb",icon:"fa-brands fa-kaggle"},{name:"LeetCode",username:"",url:"https://leetcode.com/rmshoeb"},{name:"CodeChef",username:"",url:"https://www.codechef.com/users/rmshoeb"},{name:"Codeforces",username:"",url:"https://codeforces.com/profile/rmShoeb"}];function P(){const a=C.map(e=>L.replace("{url}",e.url).replace("{icon}",e.icon||"fa-solid fa-user").replace("{name}",e.name).replace("{username}",e.username)).join("");return t.replace("{title}","Platforms").replace("{section-class}","platforms-list").replace("{section-id}","platforms-container").replace("{section-content}",a)}const E=`<div class="skill-item">\r
    <!-- <span class="skill-icon">{icon}</span> -->\r
    <span class="skill-name">{name}</span>\r
</div>`,T=[{name:"Java",category:"programming",icon:"☕"},{name:"JavaScript",category:"programming"},{name:"TypeScript",category:"programming"},{name:"Python",category:"programming",icon:"🐍"},{name:"Angular",category:"framework",icon:"🅰️"},{name:"Spring",category:"framework",icon:"🟢"},{name:"MS SQL Server",category:"database"},{name:"Oracle",category:"database"},{name:"MySQL",category:"database"},{name:"SqLite",category:"database"},{name:"PostgreSQL",category:"database"},{name:"VS Code",category:"tool",icon:"🔧"},{name:"Intellij IDEA",category:"tool",icon:"🔧"},{name:"Jasper Report",category:"tool",icon:"🔧"},{name:"Git",category:"tool",icon:"🔧"},{name:"Azure DevOps",category:"tool",icon:"🔧"},{name:"Jira",category:"tool",icon:"🔧"},{name:"Latex",category:"other"},{name:"Natural Language Processing",category:"other"},{name:"Malware",category:"other"}];function A(){const a=T.map(e=>E.replace("{name}",e.name).replace("{icon}",e.icon||"🛠️")).join("");return t.replace("{title}","Technical Skills and Interests").replace("{section-class}","skills-grid").replace("{section-id}","skills-container").replace("{section-content}",a)}const I=`<section class="section">\r
    <h2 class="section-title">Summary</h2>\r
    <p id="summary">{content}</p>\r
</section>`;function M(){return I.replace("{content}",i.summary)}const x=`{header}\r
\r
<div class="main-content">\r
    <!-- Left Column -->\r
    <aside class="sidebar">\r
        {skills}\r
        {platforms}\r
        {languages}\r
        <!-- {references} -->\r
    </aside>\r
\r
    <!-- Right Column -->\r
    <main class="main-section">\r
        {summary}\r
        {experience}\r
        {education}\r
        {certifications}\r
    </main>\r
</div>`;class N{initialize(){return x.replace("{header}",k()).replace("{skills}",A()).replace("{platforms}",P()).replace("{languages}",S()).replace("{summary}",M()).replace("{experience}",y()).replace("{education}",f()).replace("{certifications}",p())}}document.addEventListener("DOMContentLoaded",()=>{const a=new N,e=document.querySelector("#app");e.innerHTML=a.initialize()});
