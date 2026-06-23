/* ============================================
   DOM REFS
   ============================================ */
const cursorDot = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const mobileNav = document.getElementById('mobileNav');
const preloader = document.getElementById('preloader');
const typingEl = document.getElementById('typingText');
const projectModal = document.getElementById('projectModal');
const certModal = document.getElementById('certModal');

/* ============================================
   PROJECT DATA
   ============================================ */
const projects = {
    phoneiq: {
        title: 'PhoneIQ — AI-Powered Mobile Explorer',
        image: 'images/UI-1.png',
        desc: 'An intelligent smartphone research platform powered by a 3-agent AI pipeline built with FastAPI and Groq LLM. Users search any brand to discover all available models, then dive deep into 35+ specification fields including display, processor, camera, battery, and repairability scores. The auto-compare engine intelligently identifies 5 rival phones, scores all 6 on a weighted 100-point scale across Display (20pts), Processor (30pts), Camera (25pts), Battery (15pts), and Price Value (10pts), delivering a ranked comparison table with AI-generated narrative analysis. Features a floating AI chat assistant available on every screen.',
        tech: ['Python', 'FastAPI', 'Groq LLM', 'HTML/CSS/JS', 'Docker'],
        github: 'https://github.com/chandureddy031/AI-POWERED-PHONE-RESEARCH-AGENT.git',
        linkedin: null,
        demo: null
    },
    trading: {
        title: 'AI-Powered Trading Agent',
        image: 'images/s1.png',
        desc: 'An intelligent stock analysis agent that orchestrates multiple analysis tools to deliver comprehensive market research and trading insights. Input any stock symbol and receive technical analysis, sentiment evaluation, and actionable recommendations through an interactive web dashboard. Built with agentic AI architecture for autonomous decision-making, the system processes real-time market data and generates structured reports.',
        tech: ['Python', 'AI Agents', 'Financial APIs', 'Railway'],
        github: 'https://github.com/chandureddy031/AI-POWERED-PHONE-RESEARCH-AGENT.git',
        linkedin: 'https://www.linkedin.com/posts/kalava-chandrakanth-reddy-451232389_ai-machinelearning-agenticai-ugcPost-7449453700579844096-x_sr',
        demo: 'https://trading-agent-production-feab.up.railway.app'
    },
    talentai: {
        title: 'TalentAI — AI-Powered Recruitment System',
        image: 'images/c.png',
        desc: 'An autonomous recruitment platform replacing manual resume screening with a 7-stage AI agent pipeline. Parses resumes from PDF, matches against 10+ job descriptions, scores candidates 0–100 with AI reasoning, detects bias across 4 dimensions (age, gender, educational prestige, name), makes hiring decisions, and sends personalized emails — all without human intervention. Borderline candidates route to a Human-in-the-Loop queue for single-click HR review.',
        tech: ['Python', 'Flask', 'OpenRouter API', 'PyPDF2', 'Gmail SMTP'],
        github: 'https://github.com/chandureddy031/Resume_screening_pro.git',
        linkedin: 'https://www.linkedin.com/posts/kalava-chandrakanth-reddy-451232389_i-built-an-ai-powered-recruitment-system-ugcPost-7453800864873361408-rdLm',
        demo: null
    },
    kitchen: {
        title: 'Smart Kitchen AI — Intelligent Kitchen Agent',
        image: null,
        desc: 'An AI-powered kitchen management agent built with LangGraph and Groq\'s Llama model. Tell the app what groceries you have, how many people are in your family, and how much each person eats — the AI analyzes your inventory, estimates daily consumption, calculates how many days your food will last, and generates a complete meal plan with breakfast, lunch, and dinner for each day. When you pick a meal to cook, it walks you through each recipe step one at a time with built-in timers and a Done/Not-Yet flow so the app waits for you. Supports up to 10 separate kitchens per account, each with its own groceries, family setup, and meal plan. After cooking, you can rate recipes and leave comments, building a community board where everyone sees what meals others enjoyed. The LangGraph pipeline runs as a graph of nodes — inventory analysis, consumption estimation, meal planning — with fallback logic so the app never breaks if an AI call fails.',
        tech: ['Python', 'FastAPI', 'LangGraph', 'Groq Llama', 'Jinja2', 'JSON Storage'],
        github: 'https://github.com/chandureddy031/KITCHEN-AGENT.git',
        linkedin: 'https://www.linkedin.com/posts/kalava-chandrakanth-reddy-451232389_ai-langgraph-fastapi-ugcPost-7457045576585760768-UVex',
        demo: null
    },
    churn: {
        title: 'Telecom Customer Churn Prediction',
        image: null,
        desc: 'A production-grade ML pipeline predicting telecom customer churn with complete MLOps automation. DVC manages the end-to-end pipeline from data ingestion through preprocessing, feature engineering, model training, and evaluation. MLflow tracks all experiments, metrics, and model versions. A Random Forest Classifier achieves 80.9% accuracy and 0.86 AUC, deployed via an interactive Streamlit dashboard with confusion matrix and ROC curve visualization.',
        tech: ['Python', 'Scikit-learn', 'DVC', 'MLflow', 'Streamlit', 'Docker'],
        github: 'https://github.com/chandureddy031/Customer_Churn_MlPipeline_Dvc_Mlflow.git',
        linkedin: 'https://www.linkedin.com/posts/kalava-chandrakanth-reddy-451232389_telecom-customer-churn-prediction-end-to-end-activity-7393997913082884096-Ngs2',
        demo: 'https://customerchurnmlpipelinedvcmlflow-jqzis8eacgadsmsmczq4bm.streamlit.app/'
    },
    diabetes: {
        title: 'Diabetes Prediction using Neural Networks',
        image: null,
        desc: 'An artificial neural network built with TensorFlow/Keras to predict diabetes risk from clinical health indicators. The model processes patient data through multiple dense layers with dropout regularization and delivers real-time predictions through an interactive Streamlit application. Includes data visualization, feature distribution analysis, and probability-based risk assessment for individual patient profiles.',
        tech: ['Python', 'TensorFlow', 'Keras', 'Streamlit', 'Pandas'],
        github: 'https://github.com/chandureddy031/Diabetes_Related_Ml_Ai_Agent.git',
        linkedin: 'https://www.linkedin.com/posts/kalava-chandrakanth-reddy-451232389_machinelearning-deeplearning-artificialintelligence-activity-7387753015602110464-WkiV',
        demo: 'https://diabetes-project-one.streamlit.app/'
    },
    movie: {
        title: 'Movie Recommendation System',
        image: null,
        desc: 'A content-based movie recommendation engine using cosine similarity on movie feature vectors. Integrated with TMDb REST API for real-time poster fetching, ratings, descriptions, and genre metadata. Features robust error handling and retry logic for stable API connections. Users input any movie title and receive 5 personalized recommendations with live poster images in an interactive Streamlit web app.',
        tech: ['Python', 'Pandas', 'Scikit-learn', 'TMDb API', 'Streamlit'],
        github: 'https://github.com/chandureddy031/Movie_Recommendation_System.git',
        linkedin: 'https://www.linkedin.com/posts/kalava-chandrakanth-reddy-451232389_movie-recommendation-system-using-tmdb-activity-7384280757273497600-MERA',
        demo: null
    },
    loki: {
        title: 'Loki CLI — AI-Powered Code Analysis Tool',
        image: null,
        desc: 'A zero-cost, local-only AI code analysis CLI published on PyPI that scans entire multi-language codebases and detects errors using language-specific linters and AST parsing across 18+ programming languages. Builds a FAISS vector index for RAG-powered chat so you can ask questions about your code in natural language. Features 11 CLI commands — scan projects, detect errors, get AI explanations, auto-fix code, capture runtime errors from any process, and open a dark-themed web UI. Includes a 5-layer security system with OS keychain API key storage, Fernet-encrypted cache, 3-pass secure file deletion, sensitive data redaction before sending to AI, and package integrity verification. Supports 4 AI providers (Groq, OpenAI, Anthropic, OpenRouter) with guardrails against prompt injection and training data leaks. Everything runs locally on the user\'s machine — no data leaves your laptop.',
        tech: ['Python', 'Click CLI', 'FastAPI', 'FAISS', 'sentence-transformers', 'Groq', 'cryptography', 'keyring'],
        github: null,
        linkedin: null,
        demo: 'https://pypi.org/project/LOKK/'
    },
    postgres: {
        title: 'Event Sourcing Inventory — PostgreSQL + RAG AI',
        image: null,
        desc: 'A full Event Sourcing + CQRS inventory management system built entirely on PostgreSQL — no EventStoreDB, no Kafka Streams, no specialized databases. Every state change (create, stock adjust, reserve, transfer, delete) is stored as an immutable event in an append-only log. Current state is computed by replaying all events. Implements the transactional outbox pattern using pg_current_xact_id() and pg_snapshot_xmin() for transaction-aware polling to Kafka without losing events from concurrent transactions. Uses optimistic concurrency control with version-based UPDATE WHERE clauses, FOR UPDATE SKIP LOCKED for horizontal scaling across multiple backend instances, LISTEN/NOTIFY triggers for near-instant event delivery, and synchronous projections so the read model is always consistent with the write model. Includes a RAG AI pipeline with FAISS vector search, sentence-transformers for embeddings, and Groq Llama for answering inventory questions in natural language. 17 REST API endpoints with stock reservations, transfers between products, full audit trail timeline, QR code generation, CSV export, and a Chart.js dashboard with doughnut charts and 30-day trend lines. Dark-themed responsive frontend.',
        tech: ['Python', 'FastAPI', 'asyncpg', 'PostgreSQL', 'FAISS', 'sentence-transformers', 'Groq', 'Kafka', 'Chart.js'],
        github: null,
        linkedin: null,
        demo: null
    }
};

/* ============================================
   CERTIFICATE DATA
   ============================================ */
const certs = {
    sql: {
        title: 'SQL Certification',
        issuer: 'Euron',
        image: 'images/SQL.png',
        icon: 'fas fa-database',
        desc: 'Comprehensive SQL certification covering relational database design, complex query writing, joins, subqueries, window functions, stored procedures, and performance optimization. This certification validates proficiency in writing production-grade SQL queries for data extraction, transformation, and reporting across large-scale databases.',
        skills: ['SQL Queries', 'Joins & Subqueries', 'Window Functions', 'Database Design', 'Performance Tuning', 'Stored Procedures']
    },
    python: {
        title: 'Python Certification',
        issuer: 'Euron',
        image: 'images/PYTHON.png',
        icon: 'devicon-python-plain',
        desc: 'Professional Python programming certification covering core language fundamentals, object-oriented programming, data structures, file handling, exception management, and advanced topics like decorators, generators, and context managers. Includes practical applications in data processing and automation scripting.',
        skills: ['Core Python', 'OOP', 'Data Structures', 'File I/O', 'Decorators', 'Generators', 'Exception Handling']
    },
    java: {
        title: 'Java Certification',
        issuer: 'Euron',
        image: 'images/JAVA.png',
        icon: 'devicon-java-plain',
        desc: 'Java programming certification demonstrating proficiency in core Java concepts including OOP principles, multithreading, collections framework, exception handling, and JDBC. Covers both foundational and intermediate concepts essential for building robust enterprise applications.',
        skills: ['Core Java', 'OOP Principles', 'Collections Framework', 'Multithreading', 'Exception Handling', 'JDBC']
    },
    genai: {
        title: 'Generative AI Certification',
        issuer: 'Euron',
        image: 'images/GENAI.png',
        icon: 'fas fa-robot',
        desc: 'Certification in Generative AI covering large language models (LLMs), prompt engineering, fine-tuning techniques, RAG architectures, and building AI-powered applications. Includes hands-on experience with API integrations, token management, and deploying generative AI solutions in production environments.',
        skills: ['LLMs', 'Prompt Engineering', 'RAG Architecture', 'Fine-Tuning', 'API Integration', 'AI Application Development']
    },
    fsds: {
        title: 'Full Stack Data Science Certification',
        issuer: 'Euron',
        image: 'images/FSDS.png',
        icon: 'fas fa-chart-bar',
        desc: 'End-to-end data science certification spanning the complete data lifecycle — from data collection and cleaning through exploratory analysis, feature engineering, model building, evaluation, and deployment. Covers statistical analysis, machine learning algorithms, data visualization, and MLOps fundamentals.',
        skills: ['Data Cleaning', 'EDA', 'Feature Engineering', 'ML Algorithms', 'Model Evaluation', 'Data Visualization', 'MLOps']
    },
    oracle: {
        title: 'Oracle Cloud Infrastructure — Generative AI',
        issuer: 'Oracle',
        image: 'images/ORACLE.jpeg',
        icon: 'fas fa-cloud',
        desc: 'Oracle Cloud certification in Generative AI covering OCI AI Services, building and deploying generative AI models on Oracle Cloud Infrastructure, working with pre-built AI APIs, and understanding responsible AI practices. Validates ability to integrate Oracle AI services into enterprise applications.',
        skills: ['Oracle Cloud (OCI)', 'AI Services', 'Generative AI Deployment', 'AI APIs', 'Responsible AI', 'Enterprise Integration']
    }
};

/* ============================================
   PRELOADER
   ============================================ */
window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.classList.add('done');
        startTyping();
    }, 1000);
});

/* ============================================
   BACKGROUND CANVAS
   ============================================ */
(function () {
    const c = document.getElementById('bgCanvas');
    const ctx = c.getContext('2d');
    let pts = [], mouse = { x: null, y: null, r: 150 };

    function resize() { c.width = innerWidth; c.height = innerHeight; }
    function create() {
        pts = [];
        const n = Math.min(80, Math.floor(innerWidth / 16));
        for (let i = 0; i < n; i++) pts.push({
            x: Math.random() * c.width, y: Math.random() * c.height,
            vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35,
            r: Math.random() * 1.6 + .6, o: Math.random() * .35 + .1
        });
    }
    function draw() {
        ctx.clearRect(0, 0, c.width, c.height);
        pts.forEach(p => {
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > c.width) p.vx *= -1;
            if (p.y < 0 || p.y > c.height) p.vy *= -1;
            if (mouse.x !== null) {
                const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.sqrt(dx * dx + dy * dy);
                if (d < mouse.r) { const f = (mouse.r - d) / mouse.r; p.x += dx * f * .015; p.y += dy * f * .015; }
            }
            ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0,229,255,${p.o})`; ctx.fill();
        });
        for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
            const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = Math.sqrt(dx * dx + dy * dy);
            if (d < 130) {
                ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
                ctx.strokeStyle = `rgba(0,229,255,${(1 - d / 130) * .1})`; ctx.lineWidth = .5; ctx.stroke();
            }
        }
        requestAnimationFrame(draw);
    }
    resize(); create(); draw();
    addEventListener('resize', () => { resize(); create(); });
    addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
    addEventListener('mouseout', () => { mouse.x = null; mouse.y = null; });
})();

/* ============================================
   CUSTOM CURSOR
   ============================================ */
(function () {
    let dx = 0, dy = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => { dx = e.clientX; dy = e.clientY; });
    (function loop() {
        rx += (dx - rx) * .14; ry += (dy - ry) * .14;
        cursorDot.style.left = dx + 'px'; cursorDot.style.top = dy + 'px';
        cursorRing.style.left = rx + 'px'; cursorRing.style.top = ry + 'px';
        requestAnimationFrame(loop);
    })();
    document.querySelectorAll('a,button,.project-card,.cert-card,.magnetic,.skill-card,.contact-card').forEach(el => {
        el.addEventListener('mouseenter', () => { cursorDot.classList.add('hover'); cursorRing.classList.add('hover'); });
        el.addEventListener('mouseleave', () => { cursorDot.classList.remove('hover'); cursorRing.classList.remove('hover'); });
    });
})();

/* ============================================
   NAVIGATION
   ============================================ */
addEventListener('scroll', () => { navbar.classList.toggle('shrink', scrollY > 50); });
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('on');
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
});
document.querySelectorAll('.mobile-link').forEach(a => a.addEventListener('click', () => {
    navToggle.classList.remove('on'); mobileNav.classList.remove('open'); document.body.style.overflow = '';
}));
const secs = document.querySelectorAll('section[id]');
const nLinks = document.querySelectorAll('.nav-link');
addEventListener('scroll', () => {
    let cur = '';
    secs.forEach(s => { if (scrollY >= s.offsetTop - 120) cur = s.id; });
    nLinks.forEach(l => l.classList.toggle('active', l.dataset.section === cur));
});

/* ============================================
   TYPING
   ============================================ */
function startTyping() {
    const t = ['AI/ML Engineer', 'Deep Learning Enthusiast', 'Agentic AI Builder', 'Data Science Practitioner', 'MLOps Engineer'];
    let ti = 0, ci = 0, del = false;
    (function go() {
        const w = t[ti];
        typingEl.textContent = del ? w.substring(0, ci - 1) : w.substring(0, ci + 1);
        del ? ci-- : ci++;
        let s = del ? 40 : 80;
        if (!del && ci === w.length) { s = 2000; del = true; }
        else if (del && ci === 0) { del = false; ti = (ti + 1) % t.length; s = 350; }
        setTimeout(go, s);
    })();
}

/* ============================================
   3D TILT
   ============================================ */
document.querySelectorAll('.project-card').forEach(card => {
    const inner = card.querySelector('.card-3d');
    if (!inner) return;
    card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const x = e.clientX - r.left, y = e.clientY - r.top;
        const cx = r.width / 2, cy = r.height / 2;
        inner.style.transform = `rotateX(${((y - cy) / cy) * -6}deg) rotateY(${((x - cx) / cx) * 6}deg) scale3d(1.02,1.02,1.02)`;
    });
    card.addEventListener('mouseleave', () => { inner.style.transform = 'rotateX(0) rotateY(0) scale3d(1,1,1)'; });
});

/* ============================================
   SCROLL REVEAL
   ============================================ */
(function () {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sibs = Array.from(entry.target.parentElement.querySelectorAll('.reveal'));
                entry.target.style.transitionDelay = `${sibs.indexOf(entry.target) * .07}s`;
                entry.target.classList.add('show');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: .1, rootMargin: '0px 0px -30px 0px' });
    els.forEach(e => obs.observe(e));
})();

/* ============================================
   COUNTERS
   ============================================ */
document.querySelectorAll('.stat-num').forEach(el => {
    const obs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) {
            const tgt = parseInt(el.dataset.count); let cur = 0;
            (function go() {
                cur += tgt / 90;
                if (tgt === 8) {
                    el.textContent = cur >= tgt ? '8.8' : cur.toFixed(1);
                } else {
                    el.textContent = cur >= tgt ? tgt + '+' : Math.floor(cur);
                }
                if (cur < tgt) requestAnimationFrame(go);
            })();
            obs.unobserve(el);
        }
    }, { threshold: .5 });
    obs.observe(el);
});

/* ============================================
   SCORE RINGS (EDUCATION)
   ============================================ */
(function () {
    const svgDefs = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgDefs.setAttribute('width', '0'); svgDefs.setAttribute('height', '0');
    svgDefs.style.position = 'absolute';
    svgDefs.innerHTML = '<defs><linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#00e5ff"/><stop offset="100%" stop-color="#8b5cf6"/></linearGradient></defs>';
    document.body.appendChild(svgDefs);

    document.querySelectorAll('.score-ring').forEach(ring => {
        const score = parseInt(ring.dataset.score);
        const circle = ring.querySelector('.score-fill');
        const circ = 2 * Math.PI * 35;
        circle.style.strokeDasharray = circ;
        circle.style.strokeDashoffset = circ;
        circle.style.stroke = 'url(#scoreGrad)';
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) {
                setTimeout(() => { circle.style.strokeDashoffset = circ - (circ * score / 100); }, 300);
                obs.unobserve(ring);
            }
        }, { threshold: .5 });
        obs.observe(ring);
    });
})();

/* ============================================
   MAGNETIC BUTTONS
   ============================================ */
document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', e => {
        const r = btn.getBoundingClientRect();
        btn.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .2}px,${(e.clientY - r.top - r.height / 2) * .2}px)`;
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transition = 'transform .4s'; btn.style.transform = 'translate(0,0)';
        setTimeout(() => { btn.style.transition = ''; }, 400);
    });
});

/* ============================================
   PROJECT MODAL
   ============================================ */
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', e => {
        if (e.target.closest('.clink')) return;
        const d = projects[card.dataset.project];
        if (!d) return;
        const img = document.getElementById('modalImg');
        if (d.image) { img.src = d.image; img.alt = d.title; img.style.display = 'block'; }
        else { img.style.display = 'none'; }
        document.getElementById('modalTitle').textContent = d.title;
        document.getElementById('modalDesc').textContent = d.desc;
        document.getElementById('modalTechs').innerHTML = d.tech.map(t => `<span class="modal-tag">${t}</span>`).join('');
        let h = '';
        if (d.github) h += `<a href="${d.github}" target="_blank" rel="noopener" class="modal-link"><i class="fab fa-github"></i> GitHub</a>`;
        if (d.linkedin) h += `<a href="${d.linkedin}" target="_blank" rel="noopener" class="modal-link"><i class="fab fa-linkedin"></i> LinkedIn</a>`;
        if (d.demo) h += `<a href="${d.demo}" target="_blank" rel="noopener" class="modal-link"><i class="fas fa-external-link-alt"></i> ${d.demo.includes('pypi.org') ? 'PyPI' : 'Live Demo'}</a>`;
        document.getElementById('modalLinks').innerHTML = h;
        projectModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

function closeProjectModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
}
document.getElementById('modalX').addEventListener('click', closeProjectModal);
document.getElementById('modalBg').addEventListener('click', closeProjectModal);

/* ============================================
   CERTIFICATE MODAL
   ============================================ */
document.querySelectorAll('.cert-card').forEach(card => {
    card.addEventListener('click', () => {
        const d = certs[card.dataset.cert];
        if (!d) return;
        document.getElementById('certModalImg').src = d.image;
        document.getElementById('certModalImg').alt = d.title;
        document.getElementById('certModalIcon').innerHTML = `<i class="${d.icon}"></i>`;
        document.getElementById('certModalTitle').textContent = d.title;
        document.getElementById('certModalIssuer').textContent = `Issued by: ${d.issuer}`;
        document.getElementById('certModalDesc').textContent = d.desc;
        document.getElementById('certModalSkills').innerHTML = d.skills.map(s => `<span class="cert-skill-tag">${s}</span>`).join('');
        certModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

function closeCertModal() {
    certModal.classList.remove('active');
    document.body.style.overflow = '';
}
document.getElementById('certX').addEventListener('click', closeCertModal);
document.getElementById('certBg').addEventListener('click', closeCertModal);

/* ============================================
   ESCAPE KEY CLOSES MODALS
   ============================================ */
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeProjectModal(); closeCertModal(); }
});

/* ============================================
   SMOOTH SCROLL
   ============================================ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
        e.preventDefault();
        const t = document.querySelector(this.getAttribute('href'));
        if (t) window.scrollTo({ top: t.offsetTop - 75, behavior: 'smooth' });
    });
});