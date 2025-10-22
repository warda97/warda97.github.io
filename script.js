// ==========================================
// Theme Toggle & Dark Mode
// ==========================================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const themeIcon = document.querySelector('.theme-icon');

// Load saved theme preference or default to light
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = html.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
    themeToggle.setAttribute('title', theme === 'light' ? 'Night Mode' : 'Light Mode');
}

// ==========================================
// Mobile Navigation Toggle
// ==========================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ==========================================
// Navbar Scroll Effect
// ==========================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ==========================================
// Active Navigation Link
// ==========================================
const sections = document.querySelectorAll('section[id]');

function updateActiveLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLink.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// ==========================================
// Animated Counter for Stats
// ==========================================
const statNumbers = document.querySelectorAll('.stat-number');
let hasAnimated = false;

function animateStats() {
    if (hasAnimated) return;
    
    const statsSection = document.querySelector('.stats-section');
    const statsSectionTop = statsSection.offsetTop;
    const statsSectionHeight = statsSection.offsetHeight;
    const scrollY = window.pageYOffset + window.innerHeight;
    
    if (scrollY > statsSectionTop + statsSectionHeight / 2) {
        hasAnimated = true;
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const increment = target / 50;
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    stat.textContent = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target;
                }
            };
            
            updateCounter();
        });
    }
}

window.addEventListener('scroll', animateStats);

// ==========================================
// Portfolio Filters
// ==========================================
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                card.style.display = 'flex';
                card.style.animation = 'fadeInUp 0.6s ease-out';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// ==========================================
// Project Modal
// ==========================================
const projectModal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');

// Mock project data - in production, this would come from a backend
const projectData = {
    project1: {
        title: 'Persuasiveness of Conversational AI Agents',
        image: './images/01.svg',
        context: 'A Fortune 500 company needed to modernize their legacy enterprise dashboard that was causing frustration and inefficiency among 5,000+ users.',
        role: 'Lead UX Researcher',
        duration: '4 months',
        team: 'UX Researcher, 2 Designers, 3 Developers',
        methods: [
            'User Interviews (30 participants)',
            'Contextual Inquiry in office settings',
            'Usability Testing (5 rounds)',
            'Survey with 200+ responses',
            'Analytics Analysis'
        ],
        findings: [
            'Users spent 40% of time searching for features buried in menus',
            'Critical information was often overlooked due to poor visual hierarchy',
            'Frequent context-switching caused cognitive overload',
            'Mobile users (25% of traffic) had severe usability issues'
        ],
        insights: [
            'Implement a search-first interface design',
            'Create customizable widget-based dashboard',
            'Introduce progressive disclosure for advanced features',
            'Optimize for mobile-first responsive design'
        ],
        impact: [
            '45% increase in task completion rate',
            '60% reduction in time-to-complete common tasks',
            '35% decrease in support tickets',
            '4.2/5 user satisfaction score (up from 2.8)'
        ],
        visuals: ['Wireframes', 'User Journey Maps', 'Before/After Comparisons', 'Heatmaps']
    },
    project2: {
        title: 'Secure Email Adoption',
        image: './images/02.svg',
        context: 'We know a lot about non-adoption, but what works?Why do people voluntarily adopt secure email services like ProtonMail and Tutanota? This research explored the motivations, experiences, and challenges of users who actively chose privacy-preserving email platforms.',
        role: 'Lead Researcher',
        duration: '6 months',
        team: 'UX Researcher, Security Researcher, Academic Advisors',
        methods: [
            'Semi-structured interviews (25 participants)',
            'Thematic analysis of user motivations',
            'Comparative analysis of adoption patterns',
            'Exploration of user mental models and threat models',
            'Privacy behavior assessment'
        ],
        findings: [
            'Distrust of big tech companies was the primary driver for adoption',
            'Users valued privacy as a fundamental right, not just a feature',
            'Snowden revelations and data breaches triggered security awareness',
            'Users faced significant challenges with usability and interoperability',
            'Social stigma and explaining choices to contacts was difficult'
        ],
        insights: [
            'Privacy adoption is driven by values and distrust, not just features',
            'Usability barriers prevent wider secure email adoption',
            'Users need better tools to communicate privacy choices to contacts',
            'Knowledge of and education about threats is necessary, but often not sufficient',
            'Secure services must balance privacy features with trust-building with users'
        ],
        impact: [
            'Published at SOUPS 2023 (top-tier security conference)',
            'Framework for understanding privacy tool adoption',
            'Design recommendations for secure communication tools',
            'Insights inform privacy-by-design principles',
            'Contributed to academic understanding of user privacy motivations'
        ],
        visuals: ['User Journey Maps', 'Motivation Framework', 'Adoption Barriers', 'Thematic Analysis Results']
    },
    project3: {
        title: 'B2B',
        image: './images/03.svg',
        context: 'Users were hesitant to adopt AI-powered features due to lack of understanding and trust in algorithmic decision-making.',
        role: 'Principal UX Researcher',
        duration: '6 months',
        team: 'UX Researcher, ML Engineer, 2 Product Designers, Ethics Advisor',
        methods: [
            'Longitudinal Diary Study (40 participants, 8 weeks)',
            'Semi-structured Interviews',
            'Analytics and Log Analysis',
            'Trust Surveys (pre/post)',
            'Expert Reviews with AI ethics board'
        ],
        findings: [
            'Users wanted to know "why" behind AI recommendations',
            'Lack of control options reduced trust by 45%',
            'Technical explanations alienated non-expert users',
            'Inconsistent AI behavior eroded confidence'
        ],
        insights: [
            'Provide layered explanations (simple to technical)',
            'Allow users to provide feedback on AI outputs',
            'Show confidence levels and limitations clearly',
            'Enable manual override options'
        ],
        impact: [
            '60% increase in AI feature trust scores',
            '50% higher adoption rate of AI recommendations',
            '3 design principles published in CHI 2024',
            'Framework adopted across 5 product teams'
        ],
        visuals: ['Trust Framework', 'Explanation Patterns', 'Before/After Screenshots', 'Survey Results']
    },
    project4: {
        title: 'Cyberbullying Advice and Education on TikTok',
        image: './images/04.svg',
        context: 'Users experienced friction when switching between mobile, desktop, and tablet versions of the product, leading to task abandonment.',
        role: 'Lead UX Researcher',
        duration: '5 months',
        team: 'UX Researcher, 3 Designers, Platform Engineers',
        methods: [
            'Contextual Inquiry (home, office, commute)',
            'Cross-device Usage Tracking',
            'Task Analysis Workshops',
            'Prototype Testing',
            'Card Sorting for Feature Prioritization'
        ],
        findings: [
            'Users accessed different features based on device context',
            'Data synchronization delays caused frustration',
            'UI inconsistencies created re-learning burden',
            'Mobile users needed quick access to core functions'
        ],
        insights: [
            'Prioritize seamless state synchronization',
            'Create platform-specific optimizations',
            'Maintain consistent mental models across devices',
            'Design for interrupted workflows'
        ],
        impact: [
            '35% increase in user satisfaction',
            '50% reduction in cross-device task abandonment',
            '28% increase in mobile engagement',
            'Unified design system adopted company-wide'
        ],
        visuals: ['Journey Maps', 'Device Ecosystem Map', 'Interaction Patterns', 'Sync Architecture']
    },
    project5: {
        title: 'Security & Privacy Experiences of Pakistani Immigrants',
        image: './images/05.svg',
        context: 'How do cultural backgrounds and immigration experiences shape security and privacy behaviors? This research explored the unique challenges faced by first- and second-generation Pakistani immigrants in the United States.',
        role: 'Lead UX Researcher',
        duration: '8 months',
        team: 'UX Researcher, Security Researcher, Cultural Anthropologist, Academic Advisors',
        methods: [
            'In-depth semi-structured interviews (30 participants)',
            'Cross-generational comparative analysis',
            'Thematic coding and analysis',
            'Cultural contextualization of security behaviors',
            'Threat modeling from immigrant perspectives'
        ],
        findings: [
            '1st Gen: Relied heavily on informal networks and distrust of formal institutions due to surveillance concerns from home country',
            '1st Gen: Language barriers led to dependency on family members for account management, creating shared security vulnerabilities',
            '1st Gen: Avoided sharing personal information online due to fears of cross-border monitoring and impact on family back home',
            '2nd Gen: Experienced pressure to manage technology for entire family while balancing Western privacy norms',
            '2nd Gen: Struggled with explaining American privacy practices to parents while respecting cultural values of family transparency',
            '2nd Gen: Faced identity verification challenges when systems didn\'t recognize non-Western naming conventions or travel patterns',
            'Both generations: Threat models included family safety concerns that U.S.-centric security tools don\'t address'
        ],
        insights: [
            'Provide multilingual security education materials that respect cultural communication styles, not just translated text',
            'Design account recovery and verification systems that accommodate non-Western naming conventions and family structures',
            'Create privacy controls that support collective family decision-making rather than assuming individual autonomy',
            'Develop security advice that acknowledges cross-border threats and surveillance from multiple governments',
            'Build tools that help second-generation immigrants educate family members without creating dependency relationships',
            'Consider family-level threat models in addition to individual risk assessments',
            'Address the unique challenges of transnational digital lives in security tool design'
        ],
        impact: [
            'Published at IEEE Security & Privacy 2025 (Oakland)',
            'Framework for understanding immigrant security experiences',
            'Design recommendations for culturally-aware security tools',
            'Highlighted gaps in current security and privacy research',
            'Informed inclusive design practices for vulnerable populations'
        ],
        visuals: ['Threat Model Framework', 'Cross-Generational Analysis', 'Cultural Context Mapping', 'Interview Themes']
    },
    project6: {
        title: 'Human-Centered Threat Modeling Framework',
        image: './images/06.svg',
        context: 'Traditional threat modeling in security research focuses on technical vulnerabilities while often overlooking the human element. This systematization of knowledge (SoK) paper developed a comprehensive framework for integrating user perspectives, behaviors, and contexts into security threat modeling processes.',
        role: 'Lead Researcher & Framework Developer',
        duration: '18 months',
        team: 'Security Researchers, UX Researchers, Academic Advisors',
        methods: [
            'Systematic literature review of 200+ security papers',
            'Comparative analysis of threat modeling approaches',
            'Framework design and validation',
            'Case study applications across different domains',
            'Expert consultation and refinement'
        ],
        findings: [
            'Existing threat modeling frameworks rarely consider user mental models and behaviors',
            'Security researchers lack structured guidance for incorporating human factors',
            'User-centered security research often misses systematic threat analysis',
            'Gap between traditional technical threat modeling and human-computer interaction research',
            'Need for interdisciplinary approach bridging security and HCI communities'
        ],
        insights: [
            'Integrate user research methods into early-stage threat identification',
            'Consider diverse user populations and their unique threat landscapes',
            'Balance technical security requirements with user capabilities and constraints',
            'Document human-centered threat considerations throughout the research process',
            'Use framework to identify gaps in existing security solutions'
        ],
        impact: [
            'Published at IEEE S&P 2025 (top-tier security conference)',
            'First comprehensive framework for human-centered threat modeling',
            'Adopted by researchers for designing security studies',
            'Bridge between security and HCI research communities',
            'Methodology guide for future security research'
        ],
        visuals: ['Framework Diagram', 'Process Flow', 'Case Study Examples', 'Threat Model Templates']
    }
};

function openProjectModal(projectId) {
    const project = projectData[projectId];
    
    modalBody.innerHTML = `
        <div style="padding: 2rem;">
            <div style="margin-bottom: 2rem;">
                <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 400px; object-fit: cover; border-radius: 1rem; margin-bottom: 2rem;">
                <h2 style="font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem; color: var(--color-text-primary);">${project.title}</h2>
                <div style="display: flex; gap: 2rem; flex-wrap: wrap; margin-bottom: 2rem; padding: 1.5rem; background-color: var(--color-bg-secondary); border-radius: 1rem;">
                    <div>
                        <strong style="color: var(--color-primary);">Role:</strong> ${project.role}
                    </div>
                    <div>
                        <strong style="color: var(--color-primary);">Duration:</strong> ${project.duration}
                    </div>
                    <div>
                        <strong style="color: var(--color-primary);">Team:</strong> ${project.team}
                    </div>
                </div>
            </div>
            
            <div style="margin-bottom: 2.5rem;">
                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--color-text-primary);">📋 Context</h3>
                <p style="color: var(--color-text-secondary); line-height: 1.8; font-size: 1.1rem;">${project.context}</p>
            </div>
            
            <div style="margin-bottom: 2.5rem;">
                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--color-text-primary);">🔬 Research Methods</h3>
                <ul style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
                    ${project.methods.map(method => `
                        <li style="padding: 1rem; background-color: var(--color-bg-secondary); border-radius: 0.5rem; border-left: 3px solid var(--color-primary);">
                            <span style="color: var(--color-text-primary);">✓ ${method}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
            
            <div style="margin-bottom: 2.5rem;">
                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--color-text-primary);">🔍 Key Findings</h3>
                <ul style="display: flex; flex-direction: column; gap: 1rem;">
                    ${project.findings.map(finding => `
                        <li style="padding: 1rem; background-color: var(--color-bg-secondary); border-radius: 0.5rem; color: var(--color-text-secondary); line-height: 1.7;">
                            ${finding}
                        </li>
                    `).join('')}
                </ul>
            </div>
            
            <div style="margin-bottom: 2.5rem;">
                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: var(--color-text-primary);">💡 Insights & Recommendations</h3>
                <ul style="display: flex; flex-direction: column; gap: 1rem;">
                    ${project.insights.map(insight => `
                        <li style="padding: 1rem; background-color: var(--color-bg-secondary); border-radius: 0.5rem; color: var(--color-text-secondary); line-height: 1.7;">
                            ${insight}
                        </li>
                    `).join('')}
                </ul>
            </div>
            
            <div style="margin-bottom: 2rem; padding: 2rem; background: linear-gradient(135deg, var(--color-primary), var(--color-secondary)); border-radius: 1rem; color: white;">
                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1.5rem;">📈 Impact & Outcomes</h3>
                <ul style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem;">
                    ${project.impact.map(item => `
                        <li style="display: flex; flex-direction: column; align-items: center; text-align: center; padding: 1rem; background-color: rgba(255, 255, 255, 0.1); border-radius: 0.5rem; backdrop-filter: blur(10px);">
                            <strong style="font-size: 1.8rem; margin-bottom: 0.5rem;">✅</strong>
                            <span style="line-height: 1.6;">${item}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
            
            <div style="padding: 1.5rem; background-color: var(--color-bg-secondary); border-radius: 1rem; border: 2px dashed var(--color-border);">
                <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem; color: var(--color-text-primary);">📊 Research Artifacts</h3>
                <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                    ${project.visuals.map(visual => `
                        <span style="padding: 0.5rem 1rem; background-color: var(--color-bg-card); border-radius: 2rem; color: var(--color-text-secondary); font-size: 0.875rem; border: 1px solid var(--color-border);">
                            ${visual}
                        </span>
                    `).join('')}
                </div>
                <p style="margin-top: 1rem; color: var(--color-text-tertiary); font-size: 0.875rem; font-style: italic;">
                    * Detailed artifacts available under NDA
                </p>
            </div>
        </div>
    `;
    
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Reset scroll position after content is loaded
    setTimeout(() => {
        const modalContent = projectModal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.scrollTop = 0;
        }
    }, 0);
}

function closeProjectModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal when clicking outside
projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        closeProjectModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.classList.contains('active')) {
        closeProjectModal();
    }
});

// ==========================================
// PDF Viewer Modal
// ==========================================
const pdfModal = document.getElementById('pdfModal');
const pdfViewer = document.getElementById('pdfViewer');
const pdfTitle = document.getElementById('pdfTitle');
const pdfDownloadBtn = document.getElementById('pdfDownloadBtn');

function openPDFViewer(pdfPath, title) {
    pdfTitle.textContent = title;
    pdfViewer.src = pdfPath;
    pdfDownloadBtn.href = pdfPath;
    pdfDownloadBtn.download = pdfPath.split('/').pop(); // Get filename from path
    
    pdfModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Reset scroll position after modal is displayed
    setTimeout(() => {
        const modalContent = pdfModal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.scrollTop = 0;
        }
    }, 0);
    
    // Track PDF view
    trackEvent('Publication', 'View', title);
}

function closePDFViewer() {
    pdfModal.classList.remove('active');
    document.body.style.overflow = '';
    pdfViewer.src = ''; // Clear the PDF to stop loading
}

// Close PDF modal when clicking outside
pdfModal.addEventListener('click', (e) => {
    if (e.target === pdfModal) {
        closePDFViewer();
    }
});

// Close PDF modal with Escape key (updated to handle both modals)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (pdfModal.classList.contains('active')) {
            closePDFViewer();
        }
    }
});

// ==========================================
// Story Modal
// ==========================================
const storyModal = document.getElementById('storyModal');
const storyModalBody = document.getElementById('storyModalBody');

const storyData = {
    'phd-journey': {
        image: './images/soonvalley.jpg',
        title: '🌄 My Journey from Pakistan',
        content: [
            'I come from a very humble background, and belong from a small, beautiful village located in Soon Valley, Pakistan. Growing up in this serene valley, surrounded by natural beauty and a close-knit community, instilled in me values of perseverance, gratitude, and the importance of education.',
            'In 2019, I got my undergraduate degree in Computer and Information Sciences from Pakistan Institute of Engineering and Applied Sciences (PIEAS). This achievement was a culmination of years of dedication and support from my family and community, who believed in the power of education to transform lives.',
            'In 2020, I started my PhD in Computer Science at Brigham Young University. This transition from a small village in Pakistan to a research institution in the United States was both exhilarating and challenging. The cultural adjustment, academic rigor, and being far from home tested my resilience in ways I never imagined.',
            'Being in Pakistan while applying to grad schools in the United States, I struggled with finding advice on how to go about the application process. The lack of mentorship, limited resources, and unfamiliarity with the system made the journey incredibly daunting. I spent countless hours researching, reaching out to professors, and preparing applications with minimal guidance.',
            'If you are considering applying for CS grad schools in the United States, you are welcome to glance through my PhD Application Guide. I created this resource to help others who might be in similar situations—to provide the guidance I wished I had during my application journey. I hope it makes your path a little smoother.'
        ],
        cta: {
            title: '📚 Ready to Start Your Journey?',
            button: 'Read PhD Application Guide',
            link: 'phd-advice'
        }
    },
    'phd-advice': {
        image: './images/soonvalley.jpg',
        title: '📚 PhD Application Advice',
        content: [
            'A lot of my juniors have asked me for advice on how to apply for graduate school in the United States so I decided to put all of the information I give them publicly available here. All of this advice is from my personal experience and describes what the process looked like for me. This is not the only way you can get admission into a grad school. If you have specific questions that I do not address here, please reach out and I\'ll do my best to answer your questions! 😊',
            '<strong>Thinking It Through!</strong><br>My first advice to any student planning to apply for a PhD would be to think it through and explore what it really entails. Getting a PhD is a huge commitment, and before you dive in head-first, it\'s a good idea to test the waters. While the idea of grad school might sound all fun and rewarding, we should know that it requires some serious work, and research can be sometimes a bit dull -- reading tens if not hundreds of papers is not something that everyone enjoys. Read a few papers, try to understand them, see if you enjoy doing that, and then proceed.',
            'If you made it through the first paragraph, still wanting to go for a PhD, you have passed the first barrier! 🎉 Another thing to be really sure of is to know what area interests you the most. Computer Science is so vast and offers so much variety in the areas you can have your research in. Make sure to be at least familiar with most, if not all, the areas that could be of your interest and make a list. Go through the list once or twice, revise, and narrow it down to two or three areas for you.',
            '<strong>Getting Your Documents Together</strong><br>Before you apply for a Ph.D. program, make sure that you are aware of the requirements that have been set by the university you are applying to. Be aware that most universities in the states have two different types of requirements: university level and department level. It is important that you browse some universities you plan to apply and see what departmental requirements have been set. Once you have checked the requirements make sure you are eligible to apply to that department or program by viewing their eligibility requirements.',
            '<strong>Finding a Supervisor</strong><br>You can apply for a PhD without having a supervisor in advance. However, it\'s always a good idea to see what kind of research is happening in the department and whether or not it\'s a good fit for you. Another benefit to having a supervisor in advance is that it majorly increases your chances to get into the program, as there\'s someone available to guide you already.',
            'Browse the department\'s website and find a potential supervisor. This is one of the most challenging parts. The professors are sometimes (read: often) to the maximum capacity and some might only be just hiring one student. Once you find a professor who has common research interests with you, start reading their research, their bio, their past and current projects, and how (and if) it all aligns with your goals. After you have read their research papers, make sure you write down what you have learned because after reading 5-6 papers, you will not remember the bits and pieces.',
            '<strong>Emailing the Professor</strong><br>Once you have done your homework of reading the profile and papers, constructing an email should be fairly easy. In your email, you should:<br><br>1. Introduce yourself and state the purpose of your email<br>2. Briefly explain your education, interests, and relevant experience<br>3. Address how your goals align with their lab\'s research<br>4. Attach your CV/Resume (and transcript if relevant)<br><br><strong>Avoid these fatal blunders:</strong><br>❌ Having a bizarre/empty subject line<br>❌ Grammatical/spelling errors<br>❌ Misspelling the professor\'s name<br>❌ Spamming with unnecessary attachments',
            '<strong>Constructing a CV/Resume</strong><br>If you intend to apply for grad school and are still in your undergrad, ensure you start accumulating experience very early on. The more the experience, the better the CV. However, even if you don\'t have much relevant experience, make sure your CV accurately defines you and highlights your potential, capabilities, and achievements. You must have done something to be introduced to the field—mention those things on your resume.',
            'Once you have sent an email, wait for about a week to receive a response. If you don\'t hear back, send a follow-up email. If they refuse or still do not respond, do not be disheartened and continue the process again. Remember, the journey to a PhD is one of persistence and resilience. Good luck! 🚀'
        ],
        cta: {
            title: '🌄 Background Story',
            button: 'Read My Journey from Pakistan',
            link: 'phd-journey'
        }
    },
    'dei-work': {
        image: './images/csideteam.jpg',
        title: '🤝 Building Inclusive Communities',
        content: [
            'I feel very passionately about our goal to build a Zion community grounded in unity, mutual respect, and charity toward all. This vision extends beyond mere words—it\'s about creating tangible change in how we support and uplift one another in our academic and professional journeys.',
            'We commit to nurturing an environment where the full realization of human potential can be pursued as we strive to bless and assist individuals in their quest for perfection and eternal life. This commitment means actively working to remove barriers, challenge biases, and create spaces where everyone feels valued and heard.',
            'My role is to guide and train other mentors about how to better help our fellow friends in the computer science department. Through structured training programs, I work with peer mentors to develop skills in active listening, cultural sensitivity, and inclusive communication. We focus on understanding the diverse challenges students face—whether they\'re international students, first-generation college students, or from underrepresented groups.',
            'Through active listening, empathy, and creating inclusive spaces, I work to ensure every voice is heard and valued. This involves organizing regular check-ins, creating safe spaces for difficult conversations, and implementing feedback mechanisms that allow everyone to contribute to our community\'s growth.',
            'Our DEI initiatives include mentorship programs, cultural awareness workshops, and community-building events that celebrate diversity. By fostering genuine connections and understanding, we\'re building not just a department, but a family that supports each member\'s success and well-being.'
        ],
        cta: {
            title: '💙 Want to Get Involved?',
            button: 'Learn About DEI Initiatives',
            link: '#'
        }
    }
};

function openStoryModal(storyId) {
    const story = storyData[storyId];
    
    // Check if the link is an internal story link or external
    const isInternalLink = storyData[story.cta.link];
    const linkAttribute = isInternalLink ? 
        `onclick="openStoryModal('${story.cta.link}'); return false;"` : 
        `href="${story.cta.link}" target="_blank"`;
    
    storyModalBody.innerHTML = `
        <div style="padding: 2rem;">
            <img src="${story.image}" alt="${story.title}" class="story-hero">
            <div class="story-content">
                <h2>${story.title}</h2>
                ${story.content.map(paragraph => `
                    <p>${paragraph}</p>
                `).join('')}
                <div class="story-cta">
                    <h3>${story.cta.title}</h3>
                    <a href="javascript:void(0);" ${linkAttribute} class="btn btn-primary">${story.cta.button}</a>
                </div>
            </div>
        </div>
    `;
    
    storyModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Reset scroll position after content is loaded
    setTimeout(() => {
        const modalContent = storyModal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.scrollTop = 0;
        }
    }, 0);
    
    // Track story view
    trackEvent('Story', 'View', story.title);
}

function closeStoryModal() {
    storyModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close story modal when clicking outside
storyModal.addEventListener('click', (e) => {
    if (e.target === storyModal) {
        closeStoryModal();
    }
});

// Close story modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && storyModal.classList.contains('active')) {
        closeStoryModal();
    }
});

// ==========================================
// Contact Form
// ==========================================
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // In production, this would send data to a backend
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    console.log('Form submitted:', data);
    
    // Show success message
    contactForm.style.display = 'none';
    formSuccess.style.display = 'flex';
    
    // Reset form after 5 seconds
    setTimeout(() => {
        contactForm.reset();
        contactForm.style.display = 'block';
        formSuccess.style.display = 'none';
    }, 5000);
});

// ==========================================
// Back to Top Button
// ==========================================
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==========================================
// Smooth Scroll for Anchor Links
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Don't prevent default for modal triggers or empty anchors
        if (href === '#' || this.hasAttribute('onclick')) {
            return;
        }
        
        e.preventDefault();
        
        const target = document.querySelector(href);
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// Lazy Loading for Images
// ==========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==========================================
// Animate Elements on Scroll
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const elementObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements with animation
document.querySelectorAll('.project-card, .method-card, .stat-card, .publication-card').forEach(el => {
    elementObserver.observe(el);
});

// ==========================================
// Preload Critical Images
// ==========================================
const criticalImages = [
    './images/WardaUsman.jpg',
    './images/csideteam.jpg',
    './images/soonvalley.jpg',
    './images/mainphoto.jpg'
];

criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
});

// ==========================================
// Analytics (Placeholder)
// ==========================================
function trackPageView() {
    // In production, integrate with Google Analytics or Plausible
    console.log('Page view tracked:', window.location.pathname);
}

function trackEvent(category, action, label) {
    // In production, track events
    console.log('Event tracked:', { category, action, label });
}

// Track initial page view
trackPageView();

// ==========================================
// Performance Monitoring
// ==========================================
window.addEventListener('load', () => {
    if ('performance' in window) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page loaded in ${pageLoadTime}ms`);
    }
});

// ==========================================
// Console Message
// ==========================================
console.log('%c👋 Welcome to my portfolio!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%c🔍 Looking for a UX Researcher? Let\'s connect!', 'font-size: 14px; color: #ec4899;');
console.log('%c💼 Check out the code: https://github.com/wardausman', 'font-size: 12px; color: #6b7280;');
