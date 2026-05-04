/**
 * KGOTLA AI - Mining Operations Demo
 * Interactive JavaScript Functionality
 * Version: 1.0.0
 * Focus: Safety, Downtime Reduction, Compliance
 */

// ============================================
// GLOBAL STATE & CONFIGURATION
// ============================================

const KgotlaMining = {
    // Configuration
    config: {
        processingDelay: 1500,
        animationDuration: 600,
        apiEndpoint: '/api/mining',
    },
    
    // State management
    state: {
        isProcessing: false,
        selectedEquipment: null,
        maintenanceOrders: [],
        complianceStatus: {},
    },
    
    // Mock data for realistic demo
    mockData: {
        equipment: [
            {
                id: 'DRILL-RIG-001',
                type: 'Drill Rig',
                status: 'critical',
                failureProbability: 87,
                lastMaintenance: '2026-03-15',
                operatingHours: 2847,
                temperature: 92,
                vibration: 'High',
                location: 'Shaft 3, Level 42',
                estimatedDowntime: '4-6 hours',
                costImpact: 'R450,000'
            },
            {
                id: 'DRILL-RIG-003',
                type: 'Drill Rig',
                status: 'warning',
                failureProbability: 62,
                lastMaintenance: '2026-04-01',
                operatingHours: 1923,
                temperature: 78,
                vibration: 'Medium',
                location: 'Shaft 2, Level 38',
                estimatedDowntime: '2-3 hours',
                costImpact: 'R280,000'
            },
            {
                id: 'DRILL-RIG-002',
                type: 'Drill Rig',
                status: 'ok',
                failureProbability: 18,
                lastMaintenance: '2026-04-28',
                operatingHours: 456,
                temperature: 65,
                vibration: 'Low',
                location: 'Shaft 1, Level 35',
                estimatedDowntime: 'N/A',
                costImpact: 'R0'
            }
        ],
        
        maintenanceOrders: [
            {
                id: 'MO-2026-0847',
                equipment: 'DRILL-RIG-001',
                issue: 'Hydraulic pressure loss in main drilling arm',
                reporter: 'Thabo Mokoena',
                reporterPhone: '+27821234567',
                priority: 'Critical',
                status: 'Open',
                timestamp: '2 hours ago',
                estimatedCost: 'R45,000',
                safetyRisk: 'High'
            },
            {
                id: 'MO-2026-0846',
                equipment: 'DRILL-RIG-003',
                issue: 'Overheating in motor assembly, temperature exceeding 85°C',
                reporter: 'Sarah van der Merwe',
                reporterPhone: '+27821234568',
                priority: 'High',
                status: 'In Progress',
                timestamp: '1 day ago',
                estimatedCost: 'R32,000',
                safetyRisk: 'Medium'
            }
        ],
        
        complianceMetrics: {
            mhsaCompliance: 94,
            dmreCompliance: 97,
            inspectionsDue: 3,
            inspectionsOverdue: 1,
            incidentsThisMonth: 2,
            safetyScore: 92
        },
        
        whatsappMessages: [
            {
                type: 'incoming',
                text: 'Urgent: DRILL-RIG-001 hydraulic failure. Need immediate attention.',
                time: '14:23',
                sender: 'Thabo Mokoena'
            },
            {
                type: 'outgoing',
                text: 'Order logged: MO-2026-0847. Technician dispatched. ETA: 15 minutes.',
                time: '14:24'
            },
            {
                type: 'incoming',
                text: 'Confirmed. Shutting down equipment now for safety.',
                time: '14:25',
                sender: 'Thabo Mokoena'
            },
            {
                type: 'outgoing',
                text: 'Safety protocol activated. Estimated repair time: 4-6 hours. Cost: R45,000.',
                time: '14:26'
            }
        ]
    }
};

// ============================================
// MINING ROI CALCULATOR
// ============================================

class MiningROICalculator {
    constructor() {
        this.form = document.getElementById('mining-roi-form');
        this.resultsContainer = document.getElementById('mining-roi-results');
        this.init();
    }
    
    init() {
        if (!this.form) return;
        
        const inputs = this.form.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('input', () => this.calculate());
        });
        
        this.calculate();
    }
    
    calculate() {
        // Get input values
        const downtimeHours = parseInt(document.getElementById('downtimeHours')?.value) || 0;
        const costPerHour = parseInt(document.getElementById('costPerHour')?.value) || 0;
        const equipmentCount = parseInt(document.getElementById('equipmentCount')?.value) || 0;
        
        if (downtimeHours <= 0 || costPerHour <= 0 || equipmentCount <= 0) {
            this.hideResults();
            return;
        }
        
        // Calculate current state
        const monthlyDowntime = downtimeHours * equipmentCount;
        const currentMonthlyCost = monthlyDowntime * costPerHour;
        const currentAnnualCost = currentMonthlyCost * 12;
        
        // Calculate with Kgotla (35% downtime reduction)
        const downtimeReduction = 0.35;
        const newMonthlyDowntime = monthlyDowntime * (1 - downtimeReduction);
        const newMonthlyCost = newMonthlyDowntime * costPerHour;
        const newAnnualCost = newMonthlyCost * 12;
        
        // Calculate savings
        const monthlySavings = currentMonthlyCost - newMonthlyCost;
        const annualSavings = currentAnnualCost - newAnnualCost;
        const hoursSaved = monthlyDowntime - newMonthlyDowntime;
        
        // Calculate ROI
        const implementationCost = 150000; // R150k for mining solution
        const roi = ((annualSavings / implementationCost) * 100).toFixed(0);
        const paybackMonths = (implementationCost / monthlySavings).toFixed(1);
        
        // Additional benefits
        const safetyIncidents = Math.round(equipmentCount * 0.15); // 15% reduction
        const complianceImprovement = 25; // 25% improvement
        
        this.displayResults({
            monthlySavings,
            annualSavings,
            hoursSaved,
            roi,
            paybackMonths,
            currentMonthlyCost,
            newMonthlyCost,
            safetyIncidents,
            complianceImprovement
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
                
                <div class="result-highlight text-center" style="font-size: 2rem; color: var(--primary-color);">
                    R${this.formatNumber(data.annualSavings)}/year
                </div>
                
                <div class="result-item">
                    <span class="result-label">Downtime Hours Saved:</span>
                    <span class="result-value"><strong>${Math.round(data.hoursSaved)} hours/month</strong></span>
                </div>
                
                <div class="result-item">
                    <span class="result-label">Current Monthly Cost:</span>
                    <span class="result-value">R${this.formatNumber(data.currentMonthlyCost)}</span>
                </div>
                
                <div class="result-item">
                    <span class="result-label">New Monthly Cost:</span>
                    <span class="result-value">R${this.formatNumber(data.newMonthlyCost)}</span>
                </div>
                
                <div class="result-item">
                    <span class="result-label">ROI:</span>
                    <span class="result-value"><strong>${data.roi}%</strong></span>
                </div>
                
                <div class="result-item">
                    <span class="result-label">Payback Period:</span>
                    <span class="result-value"><strong>${data.paybackMonths} months</strong></span>
                </div>
                
                <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 2px solid rgba(0,0,0,0.1);">
                    <h4 style="color: var(--primary-color); margin-bottom: 1rem;">Additional Benefits</h4>
                    
                    <div class="result-item">
                        <span class="result-label">Safety Incidents Prevented:</span>
                        <span class="result-value"><strong>${data.safetyIncidents}/year</strong></span>
                    </div>
                    
                    <div class="result-item">
                        <span class="result-label">Compliance Improvement:</span>
                        <span class="result-value"><strong>+${data.complianceImprovement}%</strong></span>
                    </div>
                </div>
                
                <div class="text-center mt-4">
                    <button class="btn btn-primary btn-large" onclick="KgotlaMining.bookDemo()">
                        Book Executive Demo
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
// PREDICTIVE MAINTENANCE DASHBOARD
// ============================================

class PredictiveMaintenanceDashboard {
    constructor() {
        this.container = document.getElementById('predictive-dashboard');
        this.init();
    }
    
    init() {
        if (!this.container) return;
        this.renderDashboard();
    }
    
    renderDashboard() {
        const equipment = KgotlaMining.mockData.equipment;
        
        let html = '<div class="dashboard-grid">';
        
        equipment.forEach(item => {
            const statusClass = item.status === 'critical' ? 'status-critical' : 
                               item.status === 'warning' ? 'status-warning' : 'status-ok';
            
            html += `
                <div class="equipment-card fade-in">
                    <div class="equipment-header">
                        <div class="equipment-id">${item.id}</div>
                        <span class="status-badge ${statusClass}">${item.status.toUpperCase()}</span>
                    </div>
                    
                    <div style="margin: 1rem 0;">
                        <div style="font-size: 0.875rem; color: var(--text-light); margin-bottom: 0.5rem;">
                            Failure Probability
                        </div>
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <div style="flex: 1; height: 8px; background: #e5e7eb; border-radius: 4px; overflow: hidden;">
                                <div style="width: ${item.failureProbability}%; height: 100%; background: ${
                                    item.failureProbability > 70 ? '#dc2626' : 
                                    item.failureProbability > 40 ? '#f59e0b' : '#10b981'
                                }; transition: width 1s ease;"></div>
                            </div>
                            <div style="font-size: 1.5rem; font-weight: 700; color: ${
                                item.failureProbability > 70 ? '#dc2626' : 
                                item.failureProbability > 40 ? '#f59e0b' : '#10b981'
                            };">${item.failureProbability}%</div>
                        </div>
                    </div>
                    
                    <div class="equipment-metrics">
                        <div class="metric-item">
                            <span class="metric-label">Operating Hours</span>
                            <span class="metric-value">${item.operatingHours.toLocaleString()}</span>
                        </div>
                        <div class="metric-item">
                            <span class="metric-label">Temperature</span>
                            <span class="metric-value">${item.temperature}°C</span>
                        </div>
                        <div class="metric-item">
                            <span class="metric-label">Vibration</span>
                            <span class="metric-value">${item.vibration}</span>
                        </div>
                        <div class="metric-item">
                            <span class="metric-label">Location</span>
                            <span class="metric-value" style="font-size: 0.875rem;">${item.location}</span>
                        </div>
                    </div>
                    
                    ${item.status !== 'ok' ? `
                        <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-color);">
                            <div style="font-size: 0.875rem; color: var(--text-light); margin-bottom: 0.5rem;">
                                <strong>Recommended Action:</strong> Schedule maintenance within 48 hours
                            </div>
                            <div style="font-size: 0.875rem; color: var(--text-light);">
                                <strong>Est. Downtime:</strong> ${item.estimatedDowntime}<br>
                                <strong>Cost Impact:</strong> ${item.costImpact}
                            </div>
                        </div>
                    ` : ''}
                    
                    <button class="btn btn-primary btn-block mt-3" onclick="predictiveDashboard.scheduleMainten ance('${item.id}')">
                        ${item.status !== 'ok' ? 'Schedule Urgent Maintenance' : 'View Details'}
                    </button>
                </div>
            `;
        });
        
        html += '</div>';
        this.container.innerHTML = html;
    }
    
    scheduleMaintenance(equipmentId) {
        alert(`Maintenance scheduled for ${equipmentId}. Technician will be notified via WhatsApp.`);
    }
}

// ============================================
// WHATSAPP INCIDENT REPORTING DEMO
// ============================================

class WhatsAppDemo {
    constructor() {
        this.container = document.getElementById('whatsapp-demo');
        this.init();
    }
    
    init() {
        if (!this.container) return;
        this.renderMessages();
    }
    
    renderMessages() {
        const messages = KgotlaMining.mockData.whatsappMessages;
        
        let html = `
            <div class="whatsapp-demo">
                <div class="whatsapp-header">
                    <div style="width: 40px; height: 40px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; color: #075e54;">
                        KA
                    </div>
                    <div>
                        <div style="font-weight: 600;">Kgotla AI Mining</div>
                        <div style="font-size: 0.875rem; opacity: 0.9;">Online</div>
                    </div>
                </div>
                
                <div class="whatsapp-messages">
        `;
        
        messages.forEach(msg => {
            html += `
                <div class="message message-${msg.type}">
                    <div class="message-bubble">
                        ${msg.sender ? `<div style="font-weight: 600; font-size: 0.875rem; color: var(--primary-color); margin-bottom: 0.25rem;">${msg.sender}</div>` : ''}
                        <div>${msg.text}</div>
                        <div class="message-time">${msg.time}</div>
                    </div>
                </div>
            `;
        });
        
        html += `
                </div>
                
                <div style="margin-top: 1rem; text-align: center;">
                    <button class="btn btn-success btn-block" onclick="whatsappDemo.simulateReport()">
                        Simulate New Incident Report
                    </button>
                </div>
            </div>
        `;
        
        this.container.innerHTML = html;
    }
    
    simulateReport() {
        alert('In production: Worker sends WhatsApp message → AI logs order → Technician notified → Real-time tracking');
    }
}

// ============================================
// COMPLIANCE MONITORING
// ============================================

class ComplianceMonitor {
    constructor() {
        this.container = document.getElementById('compliance-monitor');
        this.init();
    }
    
    init() {
        if (!this.container) return;
        this.renderCompliance();
    }
    
    renderCompliance() {
        const metrics = KgotlaMining.mockData.complianceMetrics;
        
        const html = `
            <div class="grid grid-3">
                <div class="stat-card">
                    <div class="stat-value">${metrics.mhsaCompliance}%</div>
                    <div class="stat-label">MHSA Compliance</div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-value">${metrics.dmreCompliance}%</div>
                    <div class="stat-label">DMRE Compliance</div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-value">${metrics.safetyScore}</div>
                    <div class="stat-label">Safety Score</div>
                </div>
            </div>
            
            <div class="grid grid-2 mt-4">
                <div class="alert-card" style="border-left-color: ${metrics.inspectionsOverdue > 0 ? 'var(--status-critical)' : 'var(--status-ok)'};">
                    <div class="alert-header">
                        <h4 class="alert-title" style="color: ${metrics.inspectionsOverdue > 0 ? 'var(--status-critical)' : 'var(--status-ok)'};">
                            Equipment Inspections
                        </h4>
                    </div>
                    <p class="alert-description">
                        <strong>${metrics.inspectionsDue}</strong> inspections due this week<br>
                        <strong>${metrics.inspectionsOverdue}</strong> overdue (requires immediate attention)
                    </p>
                </div>
                
                <div class="alert-card" style="border-left-color: var(--status-info);">
                    <div class="alert-header">
                        <h4 class="alert-title" style="color: var(--status-info);">
                            Safety Incidents
                        </h4>
                    </div>
                    <p class="alert-description">
                        <strong>${metrics.incidentsThisMonth}</strong> incidents reported this month<br>
                        All incidents logged and investigated per MHSA requirements
                    </p>
                </div>
            </div>
        `;
        
        this.container.innerHTML = html;
    }
}

// ============================================
// LEAD CAPTURE FORM
// ============================================

class MiningLeadForm {
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
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData.entries());
        
        if (!this.validate(data)) {
            return;
        }
        
        console.log('Mining lead captured:', data);
        this.showSuccess();
        this.form.reset();
    }
    
    validate(data) {
        if (!data.name || !data.email || !data.company) {
            alert('Please fill in all required fields.');
            return false;
        }
        
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
        successMessage.style.cssText = 'background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border: 2px solid var(--primary-color); margin-top: 1rem;';
        successMessage.innerHTML = `
            <h3 style="color: var(--primary-color); text-align: center;">
                ✓ Thank You!
            </h3>
            <p style="text-align: center;">
                Our mining solutions specialist will contact you within 24 hours to schedule an executive demo.
            </p>
        `;
        
        this.form.parentNode.insertBefore(successMessage, this.form.nextSibling);
        
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

KgotlaMining.bookDemo = function() {
    const contactForm = document.getElementById('mining-contact-form');
    if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
        const firstInput = contactForm.querySelector('input');
        if (firstInput) {
            setTimeout(() => firstInput.focus(), 600);
        }
    } else {
        window.open('https://calendly.com/kgotlaai/mining-demo', '_blank');
    }
};

KgotlaMining.scrollToSection = function(sectionId) {
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

let miningROICalculator, predictiveDashboard, whatsappDemo, complianceMonitor, miningLeadForm;

document.addEventListener('DOMContentLoaded', () => {
    // Initialize ROI Calculator
    if (document.getElementById('mining-roi-form')) {
        miningROICalculator = new MiningROICalculator();
    }
    
    // Initialize Predictive Maintenance Dashboard
    if (document.getElementById('predictive-dashboard')) {
        predictiveDashboard = new PredictiveMaintenanceDashboard();
    }
    
    // Initialize WhatsApp Demo
    if (document.getElementById('whatsapp-demo')) {
        whatsappDemo = new WhatsAppDemo();
    }
    
    // Initialize Compliance Monitor
    if (document.getElementById('compliance-monitor')) {
        complianceMonitor = new ComplianceMonitor();
    }
    
    // Initialize Lead Form
    if (document.getElementById('mining-contact-form')) {
        miningLeadForm = new MiningLeadForm('mining-contact-form');
    }
    
    // Add fade-in animation to elements
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
    
    document.querySelectorAll('.card, .section').forEach(el => {
        observer.observe(el);
    });
    
    console.log('Kgotla Mining Demo initialized successfully!');
});

// ============================================
// EXPORT FOR GLOBAL ACCESS
// ============================================

window.KgotlaMining = KgotlaMining;
window.miningROICalculator = miningROICalculator;
window.predictiveDashboard = predictiveDashboard;
window.whatsappDemo = whatsappDemo;
window.complianceMonitor = complianceMonitor;

// Made with Bob
