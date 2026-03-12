// EDA Website JavaScript

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const courseCards = document.querySelectorAll('.course-card');
const loginForm = document.getElementById('loginForm');
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

// Sample course data
const courses = [
    {
        id: 1,
        title: 'AI剧本创作实务',
        instructor: '陈俊铭',
        students: 2092,
        lessons: 2,
        rating: 4.8,
        category: '人工智能',
        description: '学习如何使用AI工具进行剧本创作，掌握实用技巧和方法。'
    },
    {
        id: 2,
        title: 'Midjourney 图像生成高级技术',
        instructor: '武瑶',
        students: 2036,
        lessons: 9,
        rating: 4.9,
        category: '人工智能',
        description: '深入学习Midjourney图像生成技术，掌握高级提示词技巧。'
    },
    {
        id: 3,
        title: '设计策展：策划元宇宙',
        instructor: '程可槑',
        students: 4368,
        lessons: 1,
        rating: 4.7,
        category: '产品设计',
        description: '探索元宇宙设计策展的前沿理念和实践方法。'
    },
    {
        id: 4,
        title: '电子商务基础课程',
        instructor: '陈光巨',
        students: 132,
        lessons: 32,
        rating: 4.5,
        category: '职场技能',
        description: '全面了解电子商务的基础知识和运营策略。'
    },
    {
        id: 5,
        title: '设计与学习',
        instructor: '陈俊铭',
        students: 472,
        lessons: 71,
        rating: 4.6,
        category: '教育知识',
        description: '探讨设计思维在学习过程中的应用和价值。'
    },
    {
        id: 6,
        title: 'AI资讯（EDA）',
        instructor: '武瑶',
        students: 4333,
        lessons: 111,
        rating: 4.8,
        category: '人工智能',
        description: '最新的AI资讯和行业动态，保持技术前沿。'
    }
];

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    // Initialize search functionality
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
        displayAllCourses();
    }
    
    // Password toggle functionality
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', togglePasswordVisibility);
    }
    
    // Login form submission
    if (loginForm) {
        loginFormattribute('submit', function(e) {
            e.preventDefault();
            handleLogin();
        });
    }
    
    // Course card click handlers
    courseCards.forEach(card => {
        card.addEventListener('click', function() {
            const courseId = this.dataset.courseId;
            window.location.href = `course-detail.html?id=${courseId}`;
        });
    });
    
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
});

// Search functionality
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredCourses = courses.filter(course => 
        course.title.toLowerCase().includes(searchTerm) ||
        course.instructor.toLowerCase().includes(searchTerm) ||
        course.category.toLowerCase().includes(searchTerm)
    );
    
    displayCourses(filteredCourses);
}

function displayAllCourses() {
    displayCourses(courses);
}

function displayCourses(coursesToShow) {
    if (!searchResults) return;
    
    if (coursesToShow.length === 0) {
        searchResults.innerHTML = `
            <div class="no-results">
                <h3>没有找到相关课程</h3>
                <p>尝试使用不同的关键词进行搜索</p>
            </div>
        `;
        return;
    }
    
    const courseHTML = coursesToShow.map(course => `
        <div class="course-card" data-course-id="${course.id}">
            <div class="course-image">
                <img src="https://via.placeholder.com/300x169/1890ff/ffffff?text=${encodeURIComponent(course.title)}" alt="${course.title}">
            </div>
            <div class="course-content">
                <h3>${course.title}</h3>
                <p class="course-description">${course.description}</p>
                <div class="course-meta">
                    <span><i class="icon-user"></i> ${course.students}</span>
                    <span><i class="icon-clock"></i> 共${course.lessons}课时</span>
                </div>
                <div class="course-rating">
                    ${generateStars(course.rating)}
                </div>
            </div>
        </div>
    `).join('');
    
    searchResults.innerHTML = courseHTML;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<span class="star filled">★</span>';
    }
    
    if (hasHalfStar) {
        starsHTML += '<span class="star half">★</span>';
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<span class="star">★</span>';
    }
    
    return starsHTML;
}

// Password toggle
function togglePasswordVisibility() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePassword.textContent = type === 'password' ? '显示' : '隐藏';
}

// Login handling
function handleLogin() {
    const email = document.getElementById('email').value;
    const password = passwordInput.value;
    
    // Simple validation
    if (!email || !password) {
        alert('请填写所有字段');
        return;
    }
    
    // In a real application, this would make an API call
    // For demo purposes, we'll just show a success message
    alert('登录成功！正在跳转到首页...');
    window.location.href = 'index.html';
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to top button
const backToTopButton = document.getElementById('backToTop');
if (backToTopButton) {
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.remove('hidden');
        } else {
            backToTopButton.classList.add('hidden');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}