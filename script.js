// HobbyFinder JavaScript

// Hobby data with icons and descriptions
const hobbies = [
    { name: 'Cooking', icon: 'fas fa-utensils', description: 'Master culinary arts and explore world cuisines', category: 'creative' },
    { name: 'Rock Climbing', icon: 'fas fa-mountain', description: 'Challenge yourself with indoor and outdoor climbing', category: 'physical' },
    { name: 'Photography', icon: 'fas fa-camera', description: 'Capture moments and express your artistic vision', category: 'creative' },
    { name: 'Dancing', icon: 'fas fa-music', description: 'Express yourself through movement and rhythm', category: 'physical' },
    { name: 'Pilates', icon: 'fas fa-dumbbell', description: 'Strengthen your core and improve flexibility', category: 'physical' },
    { name: 'Book Club', icon: 'fas fa-book', description: 'Dive into literature and discuss with fellow readers', category: 'intellectual' },
    { name: 'Pottery', icon: 'fas fa-hands', description: 'Shape clay into beautiful functional art', category: 'creative' },
    { name: 'Gardening', icon: 'fas fa-seedling', description: 'Grow your own plants and connect with nature', category: 'nature' },
    { name: 'Yoga', icon: 'fas fa-leaf', description: 'Find balance through mindful movement', category: 'physical' },
    { name: 'Painting', icon: 'fas fa-palette', description: 'Express creativity through colors and brushstrokes', category: 'creative' },
    { name: 'Chess', icon: 'fas fa-chess', description: 'Master strategy and tactical thinking', category: 'intellectual' },
    { name: 'Hiking', icon: 'fas fa-hiking', description: 'Explore trails and enjoy outdoor adventures', category: 'nature' },
    { name: 'Knitting', icon: 'fas fa-mitten', description: 'Create cozy items with yarn and needles', category: 'creative' },
    { name: 'Martial Arts', icon: 'fas fa-fist-raised', description: 'Learn discipline and self-defense techniques', category: 'physical' },
    { name: 'Astronomy', icon: 'fas fa-star', description: 'Explore the wonders of the night sky', category: 'intellectual' },
    { name: 'Surfing', icon: 'fas fa-water', description: 'Ride the waves and connect with the ocean', category: 'nature' }
];

// Personality test questions
const personalityQuestions = [
    {
        question: "How do you prefer to spend your free time?",
        answers: [
            { text: "Being active and moving around", category: "physical" },
            { text: "Creating something with my hands", category: "creative" },
            { text: "Learning something new", category: "intellectual" },
            { text: "Being outdoors in nature", category: "nature" }
        ]
    },
    {
        question: "What motivates you most?",
        answers: [
            { text: "Physical challenges and fitness goals", category: "physical" },
            { text: "Expressing my creativity", category: "creative" },
            { text: "Solving problems and gaining knowledge", category: "intellectual" },
            { text: "Connecting with the natural world", category: "nature" }
        ]
    },
    {
        question: "In a group setting, you usually:",
        answers: [
            { text: "Lead physical activities or games", category: "physical" },
            { text: "Share creative ideas and projects", category: "creative" },
            { text: "Facilitate discussions and share knowledge", category: "intellectual" },
            { text: "Suggest outdoor activities", category: "nature" }
        ]
    },
    {
        question: "Your ideal weekend would include:",
        answers: [
            { text: "A challenging workout or sport", category: "physical" },
            { text: "Working on an art project", category: "creative" },
            { text: "Reading or attending a lecture", category: "intellectual" },
            { text: "Camping or hiking", category: "nature" }
        ]
    },
    {
        question: "What type of achievement makes you proudest?",
        answers: [
            { text: "Reaching a fitness milestone", category: "physical" },
            { text: "Completing a creative masterpiece", category: "creative" },
            { text: "Mastering a complex skill", category: "intellectual" },
            { text: "Discovering a beautiful natural spot", category: "nature" }
        ]
    }
];

let currentQuestion = 0;
let testAnswers = [];

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    loadHobbies();
    initializePersonalityTest();
});

// Load hobbies grid
function loadHobbies() {
    const grid = document.getElementById('hobbiesGrid');
    grid.innerHTML = '';
    
    hobbies.forEach(hobby => {
        const hobbyCard = createHobbyCard(hobby);
        grid.appendChild(hobbyCard);
    });
}

// Create hobby card element
function createHobbyCard(hobby) {
    const col = document.createElement('div');
    col.className = 'col-md-3 col-sm-6 mb-4';
    
    col.innerHTML = `
        <div class="card hobby-card" onclick="selectHobby('${hobby.name}')">
            <div class="card-body">
                <div class="hobby-icon">
                    <i class="${hobby.icon}"></i>
                </div>
                <h5 class="card-title">${hobby.name}</h5>
                <p class="card-text">${hobby.description}</p>
                <span class="badge bg-secondary">${hobby.category}</span>
            </div>
        </div>
    `;
    
    return col;
}

// Search hobbies functionality
function searchHobbies() {
    const searchTerm = document.getElementById('hobbySearch').value.toLowerCase();
    const grid = document.getElementById('hobbiesGrid');
    
    if (!searchTerm) {
        loadHobbies();
        return;
    }
    
    const filteredHobbies = hobbies.filter(hobby => 
        hobby.name.toLowerCase().includes(searchTerm) ||
        hobby.description.toLowerCase().includes(searchTerm) ||
        hobby.category.toLowerCase().includes(searchTerm)
    );
    
    grid.innerHTML = '';
    
    if (filteredHobbies.length === 0) {
        grid.innerHTML = '<div class="col-12 text-center"><p class="text-muted">No hobbies found. Try a different search term.</p></div>';
        return;
    }
    
    filteredHobbies.forEach(hobby => {
        const hobbyCard = createHobbyCard(hobby);
        grid.appendChild(hobbyCard);
    });
}

// Handle hobby selection
function selectHobby(hobbyName) {
    const hobby = hobbies.find(h => h.name === hobbyName);
    alert(`Great choice! ${hobby.name} - ${hobby.description}\n\nFeatures coming soon:\n• Find local classes\n• Connect with community\n• Book sessions\n• Track progress`);
}

// Initialize personality test
function initializePersonalityTest() {
    const testContainer = document.getElementById('personalityTest');
    showQuestion();
}

// Show current question
function showQuestion() {
    const testContainer = document.getElementById('personalityTest');
    
    if (currentQuestion >= personalityQuestions.length) {
        showResults();
        return;
    }
    
    const question = personalityQuestions[currentQuestion];
    
    testContainer.innerHTML = `
        <div class="question-card fade-in-up">
            <h4>Question ${currentQuestion + 1} of ${personalityQuestions.length}</h4>
            <p class="lead">${question.question}</p>
            <div class="answers">
                ${question.answers.map((answer, index) => `
                    <div class="answer-option" onclick="selectAnswer('${answer.category}', ${index})">
                        ${answer.text}
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="progress mt-4">
            <div class="progress-bar" style="width: ${(currentQuestion / personalityQuestions.length) * 100}%"></div>
        </div>
    `;
}

// Handle answer selection
function selectAnswer(category, answerIndex) {
    // Visual feedback
    const options = document.querySelectorAll('.answer-option');
    options.forEach(option => option.classList.remove('selected'));
    options[answerIndex].classList.add('selected');
    
    // Store answer
    testAnswers.push(category);
    
    // Move to next question after a short delay
    setTimeout(() => {
        currentQuestion++;
        showQuestion();
    }, 500);
}

// Show personality test results
function showResults() {
    const testContainer = document.getElementById('personalityTest');
    
    // Count categories
    const categoryCount = {};
    testAnswers.forEach(category => {
        categoryCount[category] = (categoryCount[category] || 0) + 1;
    });
    
    // Get top 3 categories
    const sortedCategories = Object.entries(categoryCount)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 3);
    
    // Get recommended hobbies
    const recommendations = [];
    sortedCategories.forEach(([category]) => {
        const categoryHobbies = hobbies.filter(h => h.category === category);
        recommendations.push(...categoryHobbies.slice(0, 2)); // Top 2 from each category
    });
    
    testContainer.innerHTML = `
        <div class="result-card fade-in-up">
            <h3 class="text-center mb-4">🎉 Your Personality Results!</h3>
            <p class="text-center">Based on your answers, here are your top hobby recommendations:</p>
            
            <div class="row mt-4">
                ${recommendations.slice(0, 3).map(hobby => `
                    <div class="col-md-4 mb-3">
                        <div class="result-hobby text-center">
                            <div class="hobby-icon">
                                <i class="${hobby.icon}"></i>
                            </div>
                            <h5>${hobby.name}</h5>
                            <p class="small">${hobby.description}</p>
                            <button class="btn btn-sm btn-primary" onclick="selectHobby('${hobby.name}')">
                                Explore This Hobby
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="text-center mt-4">
                <button class="btn btn-outline-primary me-2" onclick="restartTest()">
                    <i class="fas fa-redo me-2"></i>Retake Test
                </button>
                <button class="btn btn-primary" onclick="scrollToSection('classes')">
                    <i class="fas fa-calendar me-2"></i>Find Classes
                </button>
            </div>
        </div>
    `;
}

// Restart personality test
function restartTest() {
    currentQuestion = 0;
    testAnswers = [];
    showQuestion();
}

// Utility functions
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ 
        behavior: 'smooth' 
    });
}

function showLogin() {
    const modal = new bootstrap.Modal(document.getElementById('loginModal'));
    modal.show();
}

function showSignup() {
    const modal = new bootstrap.Modal(document.getElementById('signupModal'));
    modal.show();
}

function showProviderSignup() {
    showSignup();
    setTimeout(() => {
        setSignupType('provider');
    }, 500);
}

function setSignupType(type) {
    const providerFields = document.getElementById('providerFields');
    const buttons = document.querySelectorAll('#signupModal .btn-outline-primary, #signupModal .btn-outline-success');
    
    buttons.forEach(btn => {
        btn.classList.remove('active');
        btn.classList.add('btn-outline-primary');
        btn.classList.remove('btn-outline-success');
    });
    
    if (type === 'provider') {
        providerFields.style.display = 'block';
        event.target.classList.add('active', 'btn-outline-success');
        event.target.classList.remove('btn-outline-primary');
    } else {
        providerFields.style.display = 'none';
        event.target.classList.add('active');
    }
}

// Add search functionality on Enter key
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('hobbySearch');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchHobbies();
            }
        });
    }
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Add some interactive feedback for buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});
