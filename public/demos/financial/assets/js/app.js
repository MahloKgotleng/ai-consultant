/**
 * KGOTLA AI - Financial Services Demo
 * Interactive JavaScript Functionality
 * Version: 1.0.0
 */

// ============================================
// GLOBAL STATE & CONFIGURATION
// ============================================

const KgotlaDemo = {
    // Configuration
    config: {
        processingDelay: 2000, // Simulated processing time in ms
        animationDuration: 600,
        apiEndpoint: '/api/process', // For future backend integration
    },
    
    // State management
    state: {
        isProcessing: false,
        uploadedFile: null,
        extractedData: null,
    },
    
    // Mock data for demo
    mockData: {
        idDocuments: [
            {
                name: "Thabo Mokoena",
                idNumber: "8506125432089",
                address: "123 Main Street, Johannesburg, 2001",
                dateOfBirth: "1985-06-12",
                nationality: "South African",
                valid: true,
                confidence: 98.5
            },
            {
                name: "Sarah van der Merwe",
                idNumber: "9203158765432",
                address: "456 Oak Avenue, Cape Town, 8001",
                dateOfBirth: "1992-03-15",
                nationality: "South African",
                valid: true,
                confidence: 97.2
            }
        ]
    }
};

// ============================================
// ROI CALCULATOR
// ============================================

class ROICalculator {
    constructor() {
        this.form = document.getElementById('roi-form');
        this.resultsContainer = document.getElementById('roi-results');
        this.init();
    }
    
    init() {
        if (!this.form) return;
        
        // Add input event listeners for real-time calculation
        const inputs = this.form.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('input', () => this.calculate());
        });
        
        // Initial calculation
        this.calculate();
    }
    
    calculate() {
        // Get input values
        const applications = parseInt(document.getElementById('applications')?.value) || 0;
        const hoursPerApp = parseFloat(document.getElementById('hoursPerApp')?.value) || 0;
        const hourlyCost = parseInt(document.getElementById('hourlyCost')?.value) || 0;
        
        // Validate inputs
        if (applications <= 0 || hoursPerApp <= 0 || hourlyCost <= 0) {
            this.hideResults();
            return;
        }
        
        // Calculate current state
        const currentHours = applications * hoursPerApp;
        const currentCost = currentHours * hourlyCost;
        
        // Calculate with automation (83% time reduction)
        const automationEfficiency = 0.83;
        const newHours = currentHours * (1 - automationEfficiency);
        const newCost = newHours * hourlyCost;
        
        // Calculate savings
        const monthlySavings = currentCost - newCost;
        const annualSavings = monthlySavings * 12;
        const timeSaved = currentHours - newHours;
        
        // Calculate ROI (assuming R50,000 implementation cost)
        const implementationCost = 50000;
        const roi = ((annualSavings / implementationCost) * 100).toFixed(0);
        const paybackMonths = (implementationCost / monthlySavings).toFixed(1);
        
        // Display results
        this.displayResults({
            monthlySavings,
            annualSavings,
            timeSaved,
            roi,
            paybackMonths,
            currentCost,
            newCost
        });
    }
    
    displayResults(data) {
        if (!this.resultsContainer) return;
        
        this.resultsContainer.innerHTML = `
            <div class="calculator-results fade-in">
                <h3 class="text-center mb-3">Your Potential Savings</h3>
                
                <div class="result-highlight text-center">
                    R${this.formatNumber(data.monthlySavings)}/month
                </div>
                
                <div class="result-highlight text-center" style="font-size: 2rem; color: var(--success);">
                    R${this.formatNumber(data.annualSavings)}/year
                </div>
                
                <div class="result-item">
                    <span class="result-label">Time Saved:</span>
                    <span class="result-value"><strong>${Math.round(data.timeSaved)} hours/month</strong></span>
                </div>
                
                <div class="result-item">
                    <span class="result-label">Current Monthly Cost:</span>
                    <span class="result-value">R${this.formatNumber(data.currentCost)}</span>
                </div>
                
                <div class="result-item">
                    <span class="result-label">New Monthly Cost:</span>
                    <span class="result-value">R${this.formatNumber(data.newCost)}</span>
                </div>
                
                <div class="result-item">
                    <span class="result-label">ROI:</span>
                    <span class="result-value"><strong>${data.roi}%</strong></span>
                </div>
                
                <div class="result-item">
                    <span class="result-label">Payback Period:</span>
                    <span class="result-value"><strong>${data.paybackMonths} months</strong></span>
                </div>
                
                <div class="text-center mt-4">
                    <button class="btn btn-primary btn-large" onclick="KgotlaDemo.bookDemo()">
                        Book Free Demo
                    </button>
                </div>
            </div>
        `;
        
        this.resultsContainer.classList.remove('hidden');
    }
    
    hideResults() {
        if (this.resultsContainer) {
            this.resultsContainer.classList.add('hidden');
        }
    }
    
    formatNumber(num) {
        return num.toLocaleString('en-ZA', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
    }
}

// ============================================
// KYC DEMO - DOCUMENT UPLOAD & PROCESSING
// ============================================

class KYCDemo {
    constructor() {
        this.uploadArea = document.getElementById('upload-area');
        this.fileInput = document.getElementById('file-input');
        this.resultsContainer = document.getElementById('demo-results');
        this.processingContainer = document.getElementById('processing');
        this.init();
    }
    
    init() {
        if (!this.uploadArea || !this.fileInput) return;
        
        // Click to upload
        this.uploadArea.addEventListener('click', () => {
            this.fileInput.click();
        });
        
        // File selection
        this.fileInput.addEventListener('change', (e) => {
            this.handleFileSelect(e.target.files[0]);
        });
        
        // Drag and drop
        this.uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            this.uploadArea.classList.add('dragover');
        });
        
        this.uploadArea.addEventListener('dragleave', () => {
            this.uploadArea.classList.remove('dragover');
        });
        
        this.uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            this.uploadArea.classList.remove('dragover');
            this.handleFileSelect(e.dataTransfer.files[0]);
        });
    }
    
    handleFileSelect(file) {
        if (!file) return;
        
        // Validate file type
        const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
        if (!validTypes.includes(file.type)) {
            alert('Please upload a valid image (JPG, PNG) or PDF file.');
            return;
        }
        
        // Validate file size (max 10MB)
        if (file.size > 10 * 1024 * 1024) {
            alert('File size must be less than 10MB.');
            return;
        }
        
        KgotlaDemo.state.uploadedFile = file;
        this.processDocument(file);
    }
    
    processDocument(file) {
        // Show processing state
        this.showProcessing();
        
        // Simulate processing delay
        setTimeout(() => {
            this.extractData(file);
        }, KgotlaDemo.config.processingDelay);
    }
    
    showProcessing() {
        if (this.uploadArea) this.uploadArea.style.display = 'none';
        if (this.resultsContainer) this.resultsContainer.classList.add('hidden');
        if (this.processingContainer) {
            this.processingContainer.classList.remove('hidden');
            this.processingContainer.innerHTML = `
                <div class="processing">
                    <div class="spinner"></div>
                    <h3>Processing Document...</h3>
                    <p>Extracting information using AI-powered OCR</p>
                </div>
            `;
        }
    }
    
    extractData(file) {
        // In production, this would call your backend API
        // For demo, we use mock data
        const mockResult = KgotlaDemo.mockData.idDocuments[
            Math.floor(Math.random() * KgotlaDemo.mockData.idDocuments.length)
        ];
        
        // Add processing time
        const processingTime = (KgotlaDemo.config.processingDelay / 1000).toFixed(1);
        
        KgotlaDemo.state.extractedData = {
            ...mockResult,
            processingTime,
            fileName: file.name,
            fileSize: this.formatFileSize(file.size)
        };
        
        this.displayResults(KgotlaDemo.state.extractedData);
    }
    
    displayResults(data) {
        if (this.processingContainer) this.processingContainer.classList.add('hidden');
        
        if (this.resultsContainer) {
            this.resultsContainer.innerHTML = `
                <div class="results-container fade-in">
                    <h3 class="text-center mb-3">
                        <span style="color: var(--success);">✓</span> Document Processed Successfully
                    </h3>
                    
                    <div class="card mb-3">
                        <h4>Extracted Information</h4>
                        
                        <div class="result-row">
                            <span class="result-label">Full Name:</span>
                            <span class="result-value"><strong>${data.name}</strong></span>
                        </div>
                        
                        <div class="result-row">
                            <span class="result-label">ID Number:</span>
                            <span class="result-value"><strong>${data.idNumber}</strong></span>
                        </div>
                        
                        <div class="result-row">
                            <span class="result-label">Date of Birth:</span>
                            <span class="result-value">${this.formatDate(data.dateOfBirth)}</span>
                        </div>
                        
                        <div class="result-row">
                            <span class="result-label">Nationality:</span>
                            <span class="result-value">${data.nationality}</span>
                        </div>
                        
                        <div class="result-row">
                            <span class="result-label">Address:</span>
                            <span class="result-value">${data.address}</span>
                        </div>
                        
                        <div class="result-row">
                            <span class="result-label">Validation Status:</span>
                            <span class="result-value">
                                <span class="validation-badge ${data.valid ? 'validation-success' : 'validation-error'}">
                                    ${data.valid ? '✓ Valid' : '✗ Invalid'}
                                </span>
                            </span>
                        </div>
                        
                        <div class="result-row">
                            <span class="result-label">Confidence Score:</span>
                            <span class="result-value"><strong>${data.confidence}%</strong></span>
                        </div>
                    </div>
                    
                    <div class="card" style="background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); border: 2px solid var(--success);">
                        <h4>Processing Metrics</h4>
                        
                        <div class="result-row">
                            <span class="result-label">Processing Time:</span>
                            <span class="result-value"><strong>${data.processingTime} seconds</strong></span>
                        </div>
                        
                        <div class="result-row">
                            <span class="result-label">Manual Time Saved:</span>
                            <span class="result-value"><strong>2.5 hours</strong></span>
                        </div>
                        
                        <div class="result-row">
                            <span class="result-label">Cost Saved:</span>
                            <span class="result-value"><strong>R1,250</strong></span>
                        </div>
                        
                        <div class="result-row">
                            <span class="result-label">Accuracy:</span>
                            <span class="result-value"><strong>98.5%</strong></span>
                        </div>
                    </div>
                    
                    <div class="text-center mt-4">
                        <button class="btn btn-primary" onclick="kycDemo.reset()">
                            Process Another Document
                        </button>
                        <button class="btn btn-secondary" onclick="KgotlaDemo.bookDemo()">
                            Book Full Demo
                        </button>
                    </div>
                </div>
            `;
            
            this.resultsContainer.classList.remove('hidden');
        }
    }
    
    reset() {
        KgotlaDemo.state.uploadedFile = null;
        KgotlaDemo.state.extractedData = null;
        
        if (this.uploadArea) this.uploadArea.style.display = 'block';
        if (this.resultsContainer) this.resultsContainer.classList.add('hidden');
        if (this.processingContainer) this.processingContainer.classList.add('hidden');
        if (this.fileInput) this.fileInput.value = '';
    }
    
    formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
    }
    
    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-ZA', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
}

// ============================================
// LEAD CAPTURE FORM
// ============================================

class LeadCaptureForm {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.init();
    }
    
    init() {
        if (!this.form) return;
        
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
    }
    
    handleSubmit() {
        // Get form data
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData.entries());
        
        // Validate
        if (!this.validate(data)) {
            return;
        }
        
        // In production, send to backend
        console.log('Lead captured:', data);
        
        // Show success message
        this.showSuccess();
        
        // Reset form
        this.form.reset();
    }
    
    validate(data) {
        // Basic validation
        if (!data.name || !data.email || !data.company) {
            alert('Please fill in all required fields.');
            return false;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Please enter a valid email address.');
            return false;
        }
        
        return true;
    }
    
    showSuccess() {
        const successMessage = document.createElement('div');
        successMessage.className = 'card fade-in';
        successMessage.style.cssText = 'background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); border: 2px solid var(--success); margin-top: 1rem;';
        successMessage.innerHTML = `
            <h3 style="color: var(--success); text-align: center;">
                ✓ Thank You!
            </h3>
            <p style="text-align: center;">
                We'll contact you within 24 hours to schedule your personalized demo.
            </p>
        `;
        
        this.form.parentNode.insertBefore(successMessage, this.form.nextSibling);
        
        // Remove after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

KgotlaDemo.bookDemo = function() {
    // Scroll to contact form or open booking link
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Focus on first input
        const firstInput = contactForm.querySelector('input');
        if (firstInput) {
            setTimeout(() => firstInput.focus(), 600);
        }
    } else {
        // Open Calendly or booking link
        window.open('https://calendly.com/kgotlaai/demo', '_blank');
    }
};

KgotlaDemo.scrollToSection = function(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================

let roiCalculator, kycDemo, leadForm;

document.addEventListener('DOMContentLoaded', () => {
    // Initialize ROI Calculator
    if (document.getElementById('roi-form')) {
        roiCalculator = new ROICalculator();
    }
    
    // Initialize KYC Demo
    if (document.getElementById('upload-area')) {
        kycDemo = new KYCDemo();
    }
    
    // Initialize Lead Capture Forms
    if (document.getElementById('contact-form')) {
        leadForm = new LeadCaptureForm('contact-form');
    }
    
    // Add fade-in animation to elements as they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe cards and sections
    document.querySelectorAll('.card, .section').forEach(el => {
        observer.observe(el);
    });
    
    console.log('Kgotla AI Demo initialized successfully!');
});

// ============================================
// EXPORT FOR GLOBAL ACCESS
// ============================================

window.KgotlaDemo = KgotlaDemo;
window.roiCalculator = roiCalculator;
window.kycDemo = kycDemo;

// Made with Bob
