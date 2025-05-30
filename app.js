// Events data
const eventsData = [
  {
    "event_name": "AWS Summit Bangalore 2025",
    "company": "Amazon Web Services (AWS)",
    "date": "2025-05-07",
    "end_date": "2025-05-08",
    "location": "KTPO Exhibition Center, Whitefield, Bangalore",
    "city": "Bangalore",
    "state": "Karnataka",
    "topic": "Cloud Computing, Generative AI, Machine Learning",
    "registration_deadline": "2025-05-01",
    "suitable_for_students": true,
    "description": "Free hybrid conference for innovative builders and leaders",
    "event_type": "Conference",
    "is_free": true,
    "virtual_option": true
  },
  {
    "event_name": "AWS Summit India Online",
    "company": "Amazon Web Services (AWS)",
    "date": "2025-06-26",
    "end_date": "2025-06-26",
    "location": "Virtual/Online",
    "city": "Online",
    "state": "Virtual",
    "topic": "Cloud Computing, Generative AI, Amazon Q, Amazon Bedrock",
    "registration_deadline": "2025-06-20",
    "suitable_for_students": true,
    "description": "India's premier virtual cloud computing event with 40+ sessions",
    "event_type": "Conference",
    "is_free": true,
    "virtual_option": true
  },
  {
    "event_name": "Google I/O Extended Bangalore",
    "company": "Google",
    "date": "2025-05-20",
    "end_date": "2025-05-20",
    "location": "Bangalore",
    "city": "Bangalore",
    "state": "Karnataka",
    "topic": "Android, Web Development, AI, Google Technologies",
    "registration_deadline": "2025-05-15",
    "suitable_for_students": true,
    "description": "Experience the magic of Google I/O Connect in Bangalore",
    "event_type": "Community Event",
    "is_free": true,
    "virtual_option": false
  },
  {
    "event_name": "Google Cloud Community Days 2025",
    "company": "Google",
    "date": "2025-06-28",
    "end_date": "2025-06-28",
    "location": "New Delhi",
    "city": "New Delhi",
    "state": "Delhi",
    "topic": "Google Cloud, AI/ML, Data, Infrastructure, App Development",
    "registration_deadline": "2025-06-25",
    "suitable_for_students": true,
    "description": "Cloud enthusiasts, developers, and industry experts gathering",
    "event_type": "Community Event",
    "is_free": true,
    "virtual_option": false
  },
  {
    "event_name": "Global Azure 2025 Chennai",
    "company": "Microsoft",
    "date": "2025-05-10",
    "end_date": "2025-05-10",
    "location": "Chennai",
    "city": "Chennai",
    "state": "Tamil Nadu",
    "topic": "Microsoft Azure, AI, Data, DevOps, Security",
    "registration_deadline": "2025-05-05",
    "suitable_for_students": true,
    "description": "Full-day conference on Microsoft Stack with MVPs and experts",
    "event_type": "Conference",
    "is_free": true,
    "virtual_option": false
  },
  {
    "event_name": "Microsoft Fabric Introduction",
    "company": "Microsoft",
    "date": "2025-05-09",
    "end_date": "2025-05-09",
    "location": "Virtual Event",
    "city": "Online",
    "state": "Virtual",
    "topic": "Microsoft Fabric, Data Integration, Analytics",
    "registration_deadline": "2025-05-05",
    "suitable_for_students": true,
    "description": "Hands-on learning experience for Microsoft Fabric",
    "event_type": "Workshop",
    "is_free": true,
    "virtual_option": true
  },
  {
    "event_name": "ETCIO Annual Conclave 2025",
    "company": "Economic Times",
    "date": "2025-05-29",
    "end_date": "2025-06-01",
    "location": "Grand Hyatt, Goa",
    "city": "Goa",
    "state": "Goa",
    "topic": "Enterprise Technology, AI, Digital Transformation",
    "registration_deadline": "2025-05-20",
    "suitable_for_students": false,
    "description": "4-day residential summit for CIOs and tech leaders",
    "event_type": "Conference",
    "is_free": false,
    "virtual_option": false
  },
  {
    "event_name": "HackIndia 2025",
    "company": "SingularityNET",
    "date": "2025-09-01",
    "end_date": "2025-09-30",
    "location": "15 cities across India (Delhi for finals)",
    "city": "Multiple Cities",
    "state": "Multiple States",
    "topic": "Web3, AI, Blockchain, Decentralized AI",
    "registration_deadline": "2025-08-15",
    "suitable_for_students": true,
    "description": "India's biggest Web3 & AI hackathon with $150k prize pool",
    "event_type": "Hackathon",
    "is_free": true,
    "virtual_option": false
  },
  {
    "event_name": "Inspire India 2025",
    "company": "Multiple Sponsors",
    "date": "2025-12-05",
    "end_date": "2025-12-07",
    "location": "Pragati Maidan, New Delhi",
    "city": "New Delhi",
    "state": "Delhi",
    "topic": "Technology Innovation, Startups, AI",
    "registration_deadline": "2025-11-30",
    "suitable_for_students": true,
    "description": "World's largest tech event with 1,50,000 attendees expected",
    "event_type": "Conference",
    "is_free": false,
    "virtual_option": false
  },
  {
    "event_name": "Flipkart Glam Up Fest 2025",
    "company": "Flipkart",
    "date": "2025-06-06",
    "end_date": "2025-06-07",
    "location": "NESCO, Goregaon, Mumbai",
    "city": "Mumbai",
    "state": "Maharashtra",
    "topic": "E-commerce Technology, AI-driven solutions, Virtual Try-On",
    "registration_deadline": "2025-06-01",
    "suitable_for_students": true,
    "description": "Two-day tech and beauty celebration with 100+ brands",
    "event_type": "Exhibition",
    "is_free": true,
    "virtual_option": false
  },
  {
    "event_name": "Paytm Developer Conference 2025",
    "company": "Paytm",
    "date": "2025-07-10",
    "end_date": "2025-07-10",
    "location": "Noida",
    "city": "Noida",
    "state": "Uttar Pradesh",
    "topic": "Fintech, Digital Payments, Mini Apps",
    "registration_deadline": "2025-07-05",
    "suitable_for_students": true,
    "description": "Developer conference focused on fintech innovations",
    "event_type": "Conference",
    "is_free": true,
    "virtual_option": true
  },
  {
    "event_name": "Zomato Tech Meetup",
    "company": "Zomato",
    "date": "2025-08-15",
    "end_date": "2025-08-15",
    "location": "Gurgaon",
    "city": "Gurgaon",
    "state": "Haryana",
    "topic": "Food Tech, Logistics, Mobile Development",
    "registration_deadline": "2025-08-10",
    "suitable_for_students": true,
    "description": "Tech meetup on food delivery and logistics technology",
    "event_type": "Meetup",
    "is_free": true,
    "virtual_option": false
  },
  {
    "event_name": "Swiggy Engineering Conference",
    "company": "Swiggy",
    "date": "2025-09-20",
    "end_date": "2025-09-20",
    "location": "Bangalore",
    "city": "Bangalore",
    "state": "Karnataka",
    "topic": "Delivery Technology, Scalability, Mobile Apps",
    "registration_deadline": "2025-09-15",
    "suitable_for_students": true,
    "description": "Engineering conference on delivery platform technologies",
    "event_type": "Conference",
    "is_free": true,
    "virtual_option": false
  },
  {
    "event_name": "NVIDIA Developer Day India",
    "company": "NVIDIA",
    "date": "2025-07-25",
    "end_date": "2025-07-25",
    "location": "Bangalore",
    "city": "Bangalore",
    "state": "Karnataka",
    "topic": "GPU Computing, AI, Machine Learning, Deep Learning",
    "registration_deadline": "2025-07-20",
    "suitable_for_students": true,
    "description": "NVIDIA technologies for AI and high-performance computing",
    "event_type": "Conference",
    "is_free": true,
    "virtual_option": false
  },
  {
    "event_name": "Intel Innovation Summit India",
    "company": "Intel",
    "date": "2025-08-05",
    "end_date": "2025-08-05",
    "location": "New Delhi",
    "city": "New Delhi",
    "state": "Delhi",
    "topic": "Processors, Edge Computing, IoT, 5G",
    "registration_deadline": "2025-07-30",
    "suitable_for_students": true,
    "description": "Intel's latest innovations in computing technology",
    "event_type": "Conference",
    "is_free": true,
    "virtual_option": false
  },
  {
    "event_name": "Oracle Developer Meetup",
    "company": "Oracle",
    "date": "2025-06-15",
    "end_date": "2025-06-15",
    "location": "Hyderabad",
    "city": "Hyderabad",
    "state": "Telangana",
    "topic": "Database Technologies, Cloud, Enterprise Applications",
    "registration_deadline": "2025-06-10",
    "suitable_for_students": true,
    "description": "Oracle database and cloud technologies meetup",
    "event_type": "Meetup",
    "is_free": true,
    "virtual_option": false
  },
  {
    "event_name": "Cisco Networking Academy Conference",
    "company": "Cisco Systems",
    "date": "2025-10-15",
    "end_date": "2025-10-15",
    "location": "Mumbai",
    "city": "Mumbai",
    "state": "Maharashtra",
    "topic": "Networking, Cybersecurity, IoT",
    "registration_deadline": "2025-10-10",
    "suitable_for_students": true,
    "description": "Networking and cybersecurity conference for students",
    "event_type": "Conference",
    "is_free": true,
    "virtual_option": false
  },
  {
    "event_name": "Adobe Creative Conference India",
    "company": "Adobe",
    "date": "2025-11-10",
    "end_date": "2025-11-10",
    "location": "Bangalore",
    "city": "Bangalore",
    "state": "Karnataka",
    "topic": "Creative Technologies, Design, Digital Marketing",
    "registration_deadline": "2025-11-05",
    "suitable_for_students": true,
    "description": "Adobe's creative and design technologies showcase",
    "event_type": "Conference",
    "is_free": true,
    "virtual_option": false
  },
  {
    "event_name": "Salesforce Trailhead Event",
    "company": "Salesforce",
    "date": "2025-08-30",
    "end_date": "2025-08-30",
    "location": "Pune",
    "city": "Pune",
    "state": "Maharashtra",
    "topic": "CRM, Cloud Computing, AI in Sales",
    "registration_deadline": "2025-08-25",
    "suitable_for_students": true,
    "description": "Salesforce platform and CRM technologies",
    "event_type": "Workshop",
    "is_free": true,
    "virtual_option": false
  },
  {
    "event_name": "5G Innovation Hackathon 2025",
    "company": "Department of Telecommunications",
    "date": "2025-07-01",
    "end_date": "2025-08-31",
    "location": "100 institutes across India",
    "city": "Multiple Cities",
    "state": "Multiple States",
    "topic": "5G Technology, IoT, AI-driven networks, Smart Healthcare",
    "registration_deadline": "2025-06-15",
    "suitable_for_students": true,
    "description": "Students, startups, and professionals developing 5G solutions",
    "event_type": "Hackathon",
    "is_free": true,
    "virtual_option": false
  },
  {
    "event_name": "TCS TechBytes Conference",
    "company": "Tata Consultancy Services (TCS)",
    "date": "2025-09-10",
    "end_date": "2025-09-10",
    "location": "Chennai",
    "city": "Chennai",
    "state": "Tamil Nadu",
    "topic": "Enterprise Technology, Digital Transformation, AI",
    "registration_deadline": "2025-09-05",
    "suitable_for_students": true,
    "description": "TCS technology innovations and career opportunities",
    "event_type": "Conference",
    "is_free": true,
    "virtual_option": false
  },
  {
    "event_name": "Infosys Developer Summit",
    "company": "Infosys",
    "date": "2025-10-20",
    "end_date": "2025-10-20",
    "location": "Bangalore",
    "city": "Bangalore",
    "state": "Karnataka",
    "topic": "Software Development, AI, Cloud, Digital Services",
    "registration_deadline": "2025-10-15",
    "suitable_for_students": true,
    "description": "Infosys technology platforms and innovation showcase",
    "event_type": "Conference",
    "is_free": true,
    "virtual_option": false
  },
  {
    "event_name": "Wipro WILP Tech Fair",
    "company": "Wipro",
    "date": "2025-11-25",
    "end_date": "2025-11-25",
    "location": "Hyderabad",
    "city": "Hyderabad",
    "state": "Telangana",
    "topic": "Enterprise Solutions, Cloud, AI, Automation",
    "registration_deadline": "2025-11-20",
    "suitable_for_students": true,
    "description": "Wipro technologies and career fair for students",
    "event_type": "Career Fair",
    "is_free": true,
    "virtual_option": false
  },
  {
    "event_name": "Pragyan 2025 - NIT Trichy",
    "company": "NIT Tiruchirappalli",
    "date": "2025-02-15",
    "end_date": "2025-02-18",
    "location": "NIT Trichy, Tamil Nadu",
    "city": "Tiruchirappalli",
    "state": "Tamil Nadu",
    "topic": "Engineering, Technology, Innovation",
    "registration_deadline": "2025-02-10",
    "suitable_for_students": true,
    "description": "One of India's largest technical festivals",
    "event_type": "Tech Fest",
    "is_free": true,
    "virtual_option": false
  }
];

// Global variables
let filteredEvents = [...eventsData];
let charts = {};

// DOM elements
const searchInput = document.getElementById('searchInput');
const locationFilter = document.getElementById('locationFilter');
const companyFilter = document.getElementById('companyFilter');
const sortFilter = document.getElementById('sortFilter');
const eventsGrid = document.getElementById('eventsGrid');
const noResults = document.getElementById('noResults');
const resultsCount = document.getElementById('resultsCount');
const resetFiltersBtn = document.getElementById('resetFilters');
const exportBtn = document.getElementById('exportBtn');
const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const addToCalendarBtn = document.getElementById('addToCalendarBtn');

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
  initializeFilters();
  setupEventListeners();
  renderEvents();
  updateStatistics();
  createCharts();
});

// Initialize filter options
function initializeFilters() {
  // Populate location filter
  const cities = [...new Set(eventsData.map(event => event.city))].sort();
  cities.forEach(city => {
    const option = document.createElement('option');
    option.value = city;
    option.textContent = city;
    locationFilter.appendChild(option);
  });

  // Populate company filter
  const companies = [...new Set(eventsData.map(event => event.company))].sort();
  companies.forEach(company => {
    const option = document.createElement('option');
    option.value = company;
    option.textContent = company;
    companyFilter.appendChild(option);
  });

  // Populate topic filters
  const allTopics = eventsData.flatMap(event => 
    event.topic.split(',').map(topic => topic.trim())
  );
  const uniqueTopics = [...new Set(allTopics)].sort();
  const topicFiltersContainer = document.getElementById('topicFilters');
  
  uniqueTopics.forEach(topic => {
    const label = document.createElement('label');
    label.innerHTML = `
      <input type="checkbox" value="${topic}" class="topic-filter">
      ${topic}
    `;
    topicFiltersContainer.appendChild(label);
  });

  // Populate event type filters
  const eventTypes = [...new Set(eventsData.map(event => event.event_type))].sort();
  const eventTypeFiltersContainer = document.getElementById('eventTypeFilters');
  
  eventTypes.forEach(type => {
    const label = document.createElement('label');
    label.innerHTML = `
      <input type="checkbox" value="${type}" class="event-type-filter">
      ${type}
    `;
    eventTypeFiltersContainer.appendChild(label);
  });
}

// Setup event listeners
function setupEventListeners() {
  // Search and filter listeners
  searchInput.addEventListener('input', debounce(applyFilters, 300));
  locationFilter.addEventListener('change', applyFilters);
  companyFilter.addEventListener('change', applyFilters);
  sortFilter.addEventListener('change', applyFilters);
  
  // Topic and event type filters
  document.addEventListener('change', function(e) {
    if (e.target.classList.contains('topic-filter') || 
        e.target.classList.contains('event-type-filter')) {
      applyFilters();
    }
  });

  // Quick filters
  document.getElementById('studentFriendlyFilter').addEventListener('change', applyFilters);
  document.getElementById('freeEventsFilter').addEventListener('change', applyFilters);
  document.getElementById('virtualEventsFilter').addEventListener('change', applyFilters);
  document.getElementById('upcomingDeadlineFilter').addEventListener('change', applyFilters);

  // Reset filters
  resetFiltersBtn.addEventListener('click', resetFilters);

  // Export
  exportBtn.addEventListener('click', exportEvents);

  // Modal
  modalClose.addEventListener('click', closeModal);
  modalCloseBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', function(e) {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // Add to calendar
  addToCalendarBtn.addEventListener('click', addToCalendar);

  // Escape key to close modal
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modalOverlay.style.display !== 'none') {
      closeModal();
    }
  });
}

// Apply all filters
function applyFilters() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedLocation = locationFilter.value;
  const selectedCompany = companyFilter.value;
  const selectedTopics = Array.from(document.querySelectorAll('.topic-filter:checked')).map(cb => cb.value);
  const selectedEventTypes = Array.from(document.querySelectorAll('.event-type-filter:checked')).map(cb => cb.value);
  const studentFriendly = document.getElementById('studentFriendlyFilter').checked;
  const freeEvents = document.getElementById('freeEventsFilter').checked;
  const virtualEvents = document.getElementById('virtualEventsFilter').checked;
  const upcomingDeadline = document.getElementById('upcomingDeadlineFilter').checked;

  filteredEvents = eventsData.filter(event => {
    // Search filter
    if (searchTerm && !event.event_name.toLowerCase().includes(searchTerm) &&
        !event.company.toLowerCase().includes(searchTerm) &&
        !event.topic.toLowerCase().includes(searchTerm) &&
        !event.description.toLowerCase().includes(searchTerm)) {
      return false;
    }

    // Location filter
    if (selectedLocation && event.city !== selectedLocation) {
      return false;
    }

    // Company filter
    if (selectedCompany && event.company !== selectedCompany) {
      return false;
    }

    // Topic filter
    if (selectedTopics.length > 0) {
      const eventTopics = event.topic.split(',').map(topic => topic.trim());
      if (!selectedTopics.some(topic => eventTopics.includes(topic))) {
        return false;
      }
    }

    // Event type filter
    if (selectedEventTypes.length > 0 && !selectedEventTypes.includes(event.event_type)) {
      return false;
    }

    // Quick filters
    if (studentFriendly && !event.suitable_for_students) {
      return false;
    }

    if (freeEvents && !event.is_free) {
      return false;
    }

    if (virtualEvents && !event.virtual_option) {
      return false;
    }

    if (upcomingDeadline && !isRegistrationOpen(event.registration_deadline)) {
      return false;
    }

    return true;
  });

  // Apply sorting
  const sortBy = sortFilter.value;
  filteredEvents.sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(a.date) - new Date(b.date);
      case 'name':
        return a.event_name.localeCompare(b.event_name);
      case 'deadline':
        return new Date(a.registration_deadline) - new Date(b.registration_deadline);
      case 'city':
        return a.city.localeCompare(b.city);
      default:
        return 0;
    }
  });

  renderEvents();
  updateStatistics();
}

// Check if registration is still open
function isRegistrationOpen(deadline) {
  const today = new Date();
  const deadlineDate = new Date(deadline);
  return deadlineDate >= today;
}

// Get deadline urgency
function getDeadlineUrgency(deadline) {
  const today = new Date();
  const deadlineDate = new Date(deadline);
  const diffTime = deadlineDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays < 0) return 'expired';
  if (diffDays <= 3) return 'urgent';
  if (diffDays <= 7) return 'soon';
  return 'normal';
}

// Render events
function renderEvents() {
  resultsCount.textContent = `${filteredEvents.length} events found`;
  
  if (filteredEvents.length === 0) {
    eventsGrid.style.display = 'none';
    noResults.style.display = 'block';
    return;
  }

  eventsGrid.style.display = 'grid';
  noResults.style.display = 'none';

  eventsGrid.innerHTML = filteredEvents.map(event => createEventCard(event)).join('');

  // Add click listeners to event cards
  document.querySelectorAll('.event-card').forEach((card, index) => {
    card.addEventListener('click', () => showEventDetails(filteredEvents[index]));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        showEventDetails(filteredEvents[index]);
      }
    });
  });
}

// Create event card HTML
function createEventCard(event) {
  const deadlineUrgency = getDeadlineUrgency(event.registration_deadline);
  const isRegistrationOpenFlag = isRegistrationOpen(event.registration_deadline);
  
  return `
    <div class="event-card" tabindex="0" role="button" aria-label="View details for ${event.event_name}">
      <div class="event-header">
        <h3 class="event-title">${event.event_name}</h3>
        <span class="event-type-badge event-type-badge--${getEventTypeBadgeClass(event.event_type)}">
          ${event.event_type}
        </span>
      </div>
      
      <div class="event-company">${event.company}</div>
      
      <div class="event-meta">
        <div class="event-meta-item">
          <span class="event-meta-icon">📅</span>
          <span>${formatDate(event.date)}${event.end_date !== event.date ? ' - ' + formatDate(event.end_date) : ''}</span>
        </div>
        <div class="event-meta-item">
          <span class="event-meta-icon">📍</span>
          <span>${event.city}, ${event.state}</span>
        </div>
      </div>
      
      <div class="event-description">${event.description}</div>
      
      <div class="event-badges">
        ${event.is_free ? '<span class="event-badge event-badge--free">Free</span>' : ''}
        ${event.virtual_option ? '<span class="event-badge event-badge--virtual">Virtual</span>' : ''}
        ${event.suitable_for_students ? '<span class="event-badge event-badge--student">Student Friendly</span>' : ''}
      </div>
      
      <div class="event-topics">${event.topic}</div>
      
      <div class="event-deadline ${deadlineUrgency === 'urgent' ? 'deadline-urgent' : deadlineUrgency === 'soon' ? 'deadline-soon' : ''}">
        ${isRegistrationOpenFlag ? 
          `Registration deadline: ${formatDate(event.registration_deadline)}` : 
          'Registration closed'
        }
      </div>
    </div>
  `;
}

// Get event type badge class
function getEventTypeBadgeClass(eventType) {
  const type = eventType.toLowerCase().replace(/\s+/g, '-');
  const validTypes = ['conference', 'hackathon', 'workshop', 'meetup', 'exhibition'];
  return validTypes.includes(type) ? type : 'default';
}

// Format date
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

// Show event details modal
function showEventDetails(event) {
  modalTitle.textContent = event.event_name;
  
  modalBody.innerHTML = `
    <div class="modal-detail-item">
      <span class="modal-detail-label">Company:</span>
      <div class="modal-detail-value">${event.company}</div>
    </div>
    
    <div class="modal-detail-item">
      <span class="modal-detail-label">Date:</span>
      <div class="modal-detail-value">${formatDate(event.date)}${event.end_date !== event.date ? ' - ' + formatDate(event.end_date) : ''}</div>
    </div>
    
    <div class="modal-detail-item">
      <span class="modal-detail-label">Location:</span>
      <div class="modal-detail-value">${event.location}</div>
    </div>
    
    <div class="modal-detail-item">
      <span class="modal-detail-label">Event Type:</span>
      <div class="modal-detail-value">${event.event_type}</div>
    </div>
    
    <div class="modal-detail-item">
      <span class="modal-detail-label">Topics:</span>
      <div class="modal-detail-value">${event.topic}</div>
    </div>
    
    <div class="modal-detail-item">
      <span class="modal-detail-label">Registration Deadline:</span>
      <div class="modal-detail-value">${formatDate(event.registration_deadline)}</div>
    </div>
    
    <div class="modal-detail-item">
      <span class="modal-detail-label">Description:</span>
      <div class="modal-detail-value">${event.description}</div>
    </div>
    
    <div class="modal-detail-item">
      <span class="modal-detail-label">Cost:</span>
      <div class="modal-detail-value">${event.is_free ? 'Free' : 'Paid'}</div>
    </div>
    
    <div class="modal-detail-item">
      <span class="modal-detail-label">Virtual Option:</span>
      <div class="modal-detail-value">${event.virtual_option ? 'Yes' : 'No'}</div>
    </div>
    
    <div class="modal-detail-item">
      <span class="modal-detail-label">Student Friendly:</span>
      <div class="modal-detail-value">${event.suitable_for_students ? 'Yes' : 'No'}</div>
    </div>
  `;
  
  // Store current event for calendar export
  addToCalendarBtn.dataset.eventData = JSON.stringify(event);
  
  modalOverlay.style.display = 'flex';
  modalTitle.focus();
}

// Close modal
function closeModal() {
  modalOverlay.style.display = 'none';
}

// Add to calendar
function addToCalendar() {
  const event = JSON.parse(addToCalendarBtn.dataset.eventData);
  
  const startDate = new Date(event.date);
  const endDate = new Date(event.end_date || event.date);
  
  // Format dates for calendar
  const formatCalendarDate = (date) => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };
  
  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.event_name)}&dates=${formatCalendarDate(startDate)}/${formatCalendarDate(endDate)}&details=${encodeURIComponent(event.description + '\n\nCompany: ' + event.company + '\nTopics: ' + event.topic)}&location=${encodeURIComponent(event.location)}`;
  
  window.open(calendarUrl, '_blank');
}

// Update statistics
function updateStatistics() {
  const totalEvents = filteredEvents.length;
  const freeEvents = filteredEvents.filter(event => event.is_free).length;
  const virtualEvents = filteredEvents.filter(event => event.virtual_option).length;
  const upcomingEvents = filteredEvents.filter(event => 
    new Date(event.date) >= new Date()
  ).length;

  document.getElementById('totalEventsCount').textContent = totalEvents;
  document.getElementById('freeEventsCount').textContent = freeEvents;
  document.getElementById('virtualEventsCount').textContent = virtualEvents;
  document.getElementById('upcomingEventsCount').textContent = upcomingEvents;
}

// Create charts
function createCharts() {
  createCityChart();
  createMonthChart();
  createTypeChart();
}

// Create city chart
function createCityChart() {
  const ctx = document.getElementById('cityChart').getContext('2d');
  const cityData = {};
  
  filteredEvents.forEach(event => {
    cityData[event.city] = (cityData[event.city] || 0) + 1;
  });
  
  const cities = Object.keys(cityData).sort((a, b) => cityData[b] - cityData[a]).slice(0, 10);
  const counts = cities.map(city => cityData[city]);
  
  if (charts.cityChart) {
    charts.cityChart.destroy();
  }
  
  charts.cityChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: cities,
      datasets: [{
        label: 'Events',
        data: counts,
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1
          }
        }
      }
    }
  });
}

// Create month chart
function createMonthChart() {
  const ctx = document.getElementById('monthChart').getContext('2d');
  const monthData = {};
  
  filteredEvents.forEach(event => {
    const date = new Date(event.date);
    const month = date.toLocaleDateString('en-IN', { month: 'short', year: 'numeric' });
    monthData[month] = (monthData[month] || 0) + 1;
  });
  
  const months = Object.keys(monthData).sort();
  const counts = months.map(month => monthData[month]);
  
  if (charts.monthChart) {
    charts.monthChart.destroy();
  }
  
  charts.monthChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: months,
      datasets: [{
        label: 'Events',
        data: counts,
        borderColor: '#1FB8CD',
        backgroundColor: 'rgba(31, 184, 205, 0.1)',
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1
          }
        }
      }
    }
  });
}

// Create type chart
function createTypeChart() {
  const ctx = document.getElementById('typeChart').getContext('2d');
  const typeData = {};
  
  filteredEvents.forEach(event => {
    typeData[event.event_type] = (typeData[event.event_type] || 0) + 1;
  });
  
  const types = Object.keys(typeData);
  const counts = types.map(type => typeData[type]);
  
  if (charts.typeChart) {
    charts.typeChart.destroy();
  }
  
  charts.typeChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: types,
      datasets: [{
        data: counts,
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}

// Reset filters
function resetFilters() {
  searchInput.value = '';
  locationFilter.value = '';
  companyFilter.value = '';
  sortFilter.value = 'date';
  
  document.querySelectorAll('.topic-filter').forEach(cb => cb.checked = false);
  document.querySelectorAll('.event-type-filter').forEach(cb => cb.checked = false);
  document.getElementById('studentFriendlyFilter').checked = false;
  document.getElementById('freeEventsFilter').checked = false;
  document.getElementById('virtualEventsFilter').checked = false;
  document.getElementById('upcomingDeadlineFilter').checked = false;
  
  applyFilters();
}

// Export events to CSV
function exportEvents() {
  const headers = ['Event Name', 'Company', 'Date', 'End Date', 'City', 'State', 'Event Type', 'Topics', 'Registration Deadline', 'Description', 'Is Free', 'Virtual Option', 'Student Friendly'];
  
  const csvContent = [
    headers.join(','),
    ...filteredEvents.map(event => [
      `"${event.event_name}"`,
      `"${event.company}"`,
      event.date,
      event.end_date,
      `"${event.city}"`,
      `"${event.state}"`,
      `"${event.event_type}"`,
      `"${event.topic}"`,
      event.registration_deadline,
      `"${event.description}"`,
      event.is_free,
      event.virtual_option,
      event.suitable_for_students
    ].join(','))
  ].join('\n');
  
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'tech-events-india-2025.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}

// Debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Update charts when filters change
function updateCharts() {
  setTimeout(() => {
    createCharts();
  }, 100);
}

// Override applyFilters to update charts
const originalApplyFilters = applyFilters;
applyFilters = function() {
  originalApplyFilters();
  updateCharts();
};