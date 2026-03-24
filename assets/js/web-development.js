// Web Development Projects Data and renderer for portfolio details pages

// Web Development Projects data
const webDevelopmentProjects = [
    {
        id: 1,
        title: 'Montanature',
        client: 'Thomas from MontanaNature',
        category: 'Web Development',
        date: '20 November, 2025',
        url: 'https://montanature.com/',
        description: `MontaNature is a fully customizable, full-stack web platform developed for a French environmental organization. The website allows administrators to manage and update all content dynamically through a dedicated admin panel, eliminating the need for manual code changes. It supports content editing, media management, and structured sections for environmental education, nature management, and ecological certification.`,
        features: [
            'Fully dynamic and customizable website via admin dashboard',
            'CRUD operations for content, cards, images, and sections',
            'Role-based access control (admin and public users)',
            'Responsive UI built with Bootstrap, HTML, and CSS',
            'JavaScript-based frontend interactions and validations',
            'MongoDB-backed content management system',
            'REST API integration for real-time data updates',
            'Secure admin authentication and content control',
            'Optimized for performance and maintainability'
        ],
        images: [
            `${ENV.ASSETS_BASE}/assets/img/portfolio/monta1.png`,
            `${ENV.ASSETS_BASE}/assets/img/portfolio/monta2.png`,
            `${ENV.ASSETS_BASE}/assets/img/portfolio/monta3.png`
        ],
        video: null,
        videoDuration: 0
    },
    /////////////////////////////////////////////////////////////////////////////////////////////
    {
        id: 2,
        title: 'Car Insurance Management System',
        client: 'University project',
        category: 'Desktop Application',
        date: '01 June, 2022',
        url: '----------------',
        description: `A Microsoft Windows–based desktop application developed using C# and SQL to manage the operations of a car insurance company. The system streamlines customer, vehicle, policy, claims, and payment management through a centralized database-driven platform, improving data accuracy, operational efficiency, and reporting.`,
        features: [
            'Customer and vehicle information management',
            'Insurance policy creation and management',
            'Claims registration and processing system',
            'Payment and renewal tracking',
            'SQL-based centralized database management',
            'Search, filter, and reporting functionalities',
            'User-friendly Windows desktop interface',
            'Role-based access for staff operations',
            'Data validation and error handling'
        ],
        images: [
            `${ENV.ASSETS_BASE}/assets/img/portfolio/CarInsure1.png`,
            `${ENV.ASSETS_BASE}/assets/img/portfolio/carInsure2.png`,
            `${ENV.ASSETS_BASE}/assets/img/portfolio/carInsure3.png`,
            `${ENV.ASSETS_BASE}/assets/img/portfolio/carInsure4.png`
        ],
        video: null,
        videoDuration: 0
    },

    {
        id: 3,
        title: 'Circuit Crafts – PCB Design & Prototyping Platform',
        client: 'University Project',
        category: 'Web Application',
        date: '01 March, 2021',
        url: '----------------',
        description: `Circuit Crafts is a web-based application developed using C# (.NET Web Forms) and MySQL to support PCB design prototyping for university students. The platform allows users to submit PCB design requests, manage project details, and track prototype status through a centralized web interface, simplifying the academic prototyping workflow.`,
        features: [
            'PCB design and prototyping request management',
            'Student and project information handling',
            'Order and prototype status tracking',
            'Admin panel for request and workflow management',
            'MySQL database integration for structured data storage',
            'Responsive UI using HTML, CSS, and Bootstrap',
            'Form validation and data integrity handling',
            'Designed specifically for academic and student use'
        ],
        images: [
            `${ENV.ASSETS_BASE}/assets/img/portfolio/CC1.png`,
            `${ENV.ASSETS_BASE}/assets/img/portfolio/CC2.png`,
            `${ENV.ASSETS_BASE}/assets/img/portfolio/CC3.png`,
            `${ENV.ASSETS_BASE}/assets/img/portfolio/CC4.png`
        ],
        video: null,
        videoDuration: 0
    },

    {
        id: 4,
        title: 'Task Manager (MySql DB + Java spring boot + React)',
        client: 'Personal Project',
        category: 'Web Application / Full Stack Development',
        date: '15 Feb, 2026',
        url: '----------------',

        description: `A full-stack task management web application designed to help users efficiently organize, track, and manage their daily tasks. The system provides real-time updates, intuitive UI interactions, and secure data handling. It supports CRUD operations, task filtering, and responsive design for seamless use across devices.`,

        features: [
            'User-friendly interface for managing daily tasks',
            'Full CRUD functionality (Create, Read, Update, Delete tasks)',
            'Real-time task updates with dynamic UI rendering',
            'Task status management (pending, in-progress, completed)',
            'Search and filter functionality for quick task access',
            'Responsive design optimized for mobile, tablet, and desktop',
            'Form validation with user feedback alerts',
            'REST API integration for data handling',
            'Secure data storage using database (MongoDB / SQL)',
            'Modular architecture with service layer integration',
            'Loading animations and smooth UI transitions',
            'Deployed application with production-ready configuration'
        ],
        images: [
            `${ENV.ASSETS_BASE}/assets/img/portfolio/taskmanager1.png`,
            `${ENV.ASSETS_BASE}/assets/img/portfolio/taskmanager2.png`,
            `${ENV.ASSETS_BASE}/assets/img/portfolio/taskmanager3.png`,
            `${ENV.ASSETS_BASE}/assets/img/portfolio/taskmanager4.png`
        ],
        video: `${ENV.ASSETS_BASE}/assets/vid/taskmanager.mp4`,
        videoDuration: 72.6
    },

    {
        id: 5,
        title: 'FITNESS SPORT (React.js + Tailwind CSS + SweetAlert2)',
        client: 'personal project',
        category: 'Web Design / Frontend Development',
        date: '10 Mar, 2026',
        url: 'https://kavindulakmal2000.github.io/gym-promotional-site/',

        description: `A fully responsive promotional website developed for a fitness brand to attract and engage potential gym members. The site highlights services, membership plans, and trainers while providing a seamless user experience with modern UI design, interactive elements, and optimized performance across all devices.`,

        features: [
            'Responsive hero section with modern UI design',
            'About section presenting brand identity and mission',
            'Services and features section showcasing gym offerings',
            'Membership plans with dynamic data integration',
            'Trainer section with filtering functionality',
            'Contact form with validation and success feedback',
            'Smooth animations and interactive UI elements',
            'Dark mode support for enhanced user experience',
            'Search and filter functionality for better navigation',
            'Reusable component-based architecture (React)',
            'API integration for dynamic content loading',
            'Clean folder structure and maintainable codebase',
            'Version-controlled project with proper GitHub commit history'
        ],
        images: [
            `${ENV.ASSETS_BASE}/assets/img/portfolio/fitnessSport1.png`,
            `${ENV.ASSETS_BASE}/assets/img/portfolio/fitnessSport2.png`,
            `${ENV.ASSETS_BASE}/assets/img/portfolio/fitnessSport3.png`,
            `${ENV.ASSETS_BASE}/assets/img/portfolio/fitnessSport4.png`,
            `${ENV.ASSETS_BASE}/assets/img/portfolio/fitnessSport5.jpeg`
        ],
        video: null,
        videoDuration: 0
    },
];

// Expose for other scripts
window.webDevelopmentProjects = webDevelopmentProjects;

function getQueryParam(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
}

function parseCustomId(customId) {
    // Parse custom ID format: w1 -> 1, w2 -> 2, etc.
    if (!customId) return '1';
    const match = customId.match(/^w(\d+)$/);
    return match ? match[1] : '1';
}

function renderProject(projectId, projectsArray, projectType) {
    const numericId = parseCustomId(projectId);
    const projects = projectsArray || [];
    const project = projects.find(p => String(p.id) === String(numericId)) || projects[0];
    if (!project) return;

    // Slides
    const swiperWrapper = document.querySelector('.portfolio-details-slider .swiper-wrapper');
    if (swiperWrapper) {
        swiperWrapper.innerHTML = '';

        // If there's a video, render it first so it plays on load
        if (project.video) {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';
            slide.innerHTML = `
        <video autoplay muted playsinline class="img-fluid" preload="metadata">
          <source src="${project.video}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      `;
            swiperWrapper.appendChild(slide);
        }

        // images after video
        if (project.images && Array.isArray(project.images)) {
            project.images.forEach(src => {
                const slide = document.createElement('div');
                slide.className = 'swiper-slide';
                slide.innerHTML = `<img src="${src}" alt="${project.title}" class="img-fluid" loading="lazy">`;
                swiperWrapper.appendChild(slide);
            });
        }
    }

    // Info list
    const infoList = document.querySelector('.portfolio-info ul');
    if (infoList) {
        infoList.innerHTML = '';
        const infoItems = [
            { label: 'Category', value: project.category },
            { label: 'Client', value: project.client },
            { label: 'Project date', value: project.date },
            { label: 'Project URL', value: `<a href="${project.url}" target="_blank">${project.url}</a>` }
        ];
        infoItems.forEach(i => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${i.label}</strong>: ${i.value}`;
            infoList.appendChild(li);
        });
    }

    // Description and features
    const desc = document.querySelector('.portfolio-description');
    if (desc) {
        const featuresHtml = (project.features || []).map(f => `
          <div class="col-md-6">
            <div class="feature-item" data-aos="fade-up">
              <i class="bi bi-check-circle-fill"></i>
              <h4>${f}</h4>
              <p>Feature detail for ${f}.</p>
            </div>
          </div>`).join('');

        desc.innerHTML = `
      <h2>${project.title} — Project Overview</h2>
      <p>${project.description}</p>
      <div class="features mt-4">
        <h3>Key Features</h3>
        <div class="row gy-3">
          ${featuresHtml}
        </div>
      </div>
    `;
    }

    // expose current project for load-time behavior
    window.currentProject = project;
}

document.addEventListener('DOMContentLoaded', function () {
    const id = getQueryParam('id') || '1';
    renderProject(id, window.webDevelopmentProjects, 'web');
});

// After all resources load and the site initializes the Swiper, ensure video-first behavior
window.addEventListener('load', function () {
    const slider = document.querySelector('.portfolio-details-slider');
    if (!slider) return;
    const video = slider.querySelector('video');

    // Poll for swiper instance since init order may vary
    let attempts = 0;
    const getSwiper = function (resolve) {
        attempts++;
        const sw = slider.swiper;
        if (sw || attempts > 20) {
            resolve(sw);
        } else {
            setTimeout(() => getSwiper(resolve), 150);
        }
    };

    new Promise(getSwiper).then(function (swiper) {
        if (!video || !swiper) return;

        // Ensure swiper starts on the video slide (index 0)
        try { swiper.slideTo(0, 0); } catch (e) { }

        // Stop automatic autoplay while video plays
        if (swiper.autoplay && swiper.autoplay.running) {
            swiper.autoplay.stop();
        }

        // Play video (muted to allow autoplay)
        video.play().catch(() => { });

        // Start slideshow after configured duration (seconds), otherwise fallback to 'ended' event.
        const configured = (window.currentProject && window.currentProject.videoDuration) || 0;
        if (configured > 0) {
            setTimeout(function () {
                try { swiper.slideNext(); } catch (e) { }
                if (swiper.autoplay) swiper.autoplay.start();
            }, configured * 1000);
        } else {
            // fallback: when video ends, go to next and start autoplay
            if (video) {
                video.addEventListener('ended', function () {
                    try { swiper.slideNext(); } catch (e) { }
                    if (swiper.autoplay) swiper.autoplay.start();
                });
            }
        }
    });
});
