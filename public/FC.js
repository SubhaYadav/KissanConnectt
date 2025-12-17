// Global Variables
let currentUser = null
let allCrops = []
let filteredCrops = []
let userCrops = []
let currentImageIndex = 0
let imageRotationInterval
let storeItems = []
let filteredStoreItems = []



// Nepal Districts Data
const nepalDistricts = [
  "Achham",
  "Arghakhanchi",
  "Baglung",
  "Baitadi",
  "Bajhang",
  "Bajura",
  "Banke",
  "Bara",
  "Bardiya",
  "Bhaktapur",
  "Bhojpur",
  "Chitwan",
  "Dadeldhura",
  "Dailekh",
  "Dang",
  "Darchula",
  "Dhading",
  "Dhankuta",
  "Dhanusa",
  "Dolakha",
  "Dolpa",
  "Doti",
  "Gorkha",
  "Gulmi",
  "Humla",
  "Ilam",
  "Jajarkot",
  "Jhapa",
  "Jumla",
  "Kailali",
  "Kalikot",
  "Kanchanpur",
  "Kapilvastu",
  "Kaski",
  "Kathmandu",
  "Kavrepalanchok",
  "Khotang",
  "Lalitpur",
  "Lamjung",
  "Mahottari",
  "Makwanpur",
  "Manang",
  "Morang",
  "Mugu",
  "Mustang",
  "Myagdi",
  "Nawalparasi",
  "Nuwakot",
  "Okhaldhunga",
  "Palpa",
  "Panchthar",
  "Parbat",
  "Parsa",
  "Pyuthan",
  "Ramechhap",
  "Rasuwa",
  "Rautahat",
  "Rolpa",
  "Rukum",
  "Rupandehi",
  "Salyan",
  "Sankhuwasabha",
  "Saptari",
  "Sarlahi",
  "Sindhuli",
  "Sindhupalchok",
  "Siraha",
  "Solukhumbu",
  "Sunsari",
  "Surkhet",
  "Syangja",
  "Tanahu",
  "Taplejung",
  "Terhathum",
  "Udayapur",
]

// Sample Crops Data
const sampleCrops = [
  {
    id: "crop_001",
    name: "Organic Rice",
    price: 45,
    quantity: 500,
    location: "Chitwan",
    farmer: "Ram Bahadur",
    phone: "9841234567",
    icon: "🌾",
    category: "vegetables",
    sellerDetails: {
      name: "Ram Bahadur",
      phone: "9841234567",
      location: "Chitwan",
      preferredContact: "Phone",
    },
  },
  {
    id: "crop_002",
    name: "Fresh Carrots",
    price: 80,
    quantity: 200,
    location: "Kathmandu",
    farmer: "Sita Devi",
    phone: "9845678901",
    icon: "🥕",
    category: "vegetables",
    sellerDetails: {
      name: "Sita Devi",
      phone: "9845678901",
      location: "Kathmandu",
      preferredContact: "WhatsApp",
    },
  },
  {
    id: "crop_003",
    name: "Sweet Corn",
    price: 35,
    quantity: 300,
    location: "Pokhara",
    farmer: "Krishna Thapa",
    phone: "9849876543",
    icon: "🌽",
    category: "vegetables",
    sellerDetails: {
      name: "Krishna Thapa",
      phone: "9849876543",
      location: "Pokhara",
      preferredContact: "Phone",
    },
  },
  {
    id: "crop_004",
    name: "Organic Cabbage",
    price: 60,
    quantity: 150,
    location: "Lalitpur",
    farmer: "Maya Gurung",
    phone: "9851234567",
    icon: "🥬",
    category: "vegetables",
    sellerDetails: {
      name: "Maya Gurung",
      phone: "9851234567",
      location: "Lalitpur",
      preferredContact: "WhatsApp",
    },
  },
  {
    id: "crop_005",
    name: "Fresh Cauliflower",
    price: 70,
    quantity: 100,
    location: "Bhaktapur",
    farmer: "Hari Shrestha",
    phone: "9847654321",
    icon: "🥦",
    category: "vegetables",
    sellerDetails: {
      name: "Hari Shrestha",
      phone: "9847654321",
      location: "Bhaktapur",
      preferredContact: "Phone",
    },
  },
  {
    id: "crop_006",
    name: "Organic Tomatoes",
    price: 90,
    quantity: 250,
    location: "Chitwan",
    farmer: "Laxmi Thapa",
    phone: "9843456789",
    icon: "🍅",
    category: "vegetables",
    sellerDetails: {
      name: "Laxmi Thapa",
      phone: "9843456789",
      location: "Chitwan",
      preferredContact: "WhatsApp",
    },
  },
]

// Store Items Data
const sampleStoreItems = [
  {
    name: "Hybrid Tomato Seeds",
    price: 450,
    unit: "packet",
    category: "seeds",
    icon: "🍅",
    description: "High yield hybrid tomato seeds, disease resistant",
    supplier: "Nepal Seeds Company",
  },
  {
    name: "Organic Fertilizer",
    price: 1200,
    unit: "25kg bag",
    category: "fertilizers",
    icon: "🌱",
    description: "100% organic compost fertilizer for all crops",
    supplier: "Green Earth Fertilizers",
  },
  {
    name: "Hand Cultivator",
    price: 850,
    unit: "piece",
    category: "tools",
    icon: "🔧",
    description: "Durable steel hand cultivator for soil preparation",
    supplier: "Farm Tools Nepal",
  },
  {
    name: "Neem Oil Pesticide",
    price: 320,
    unit: "500ml bottle",
    category: "pesticides",
    icon: "🧴",
    description: "Natural neem oil based organic pesticide",
    supplier: "Bio Pesticides Ltd",
  },
  {
    name: "Cauliflower Seeds",
    price: 380,
    unit: "packet",
    category: "seeds",
    icon: "🥦",
    description: "Premium quality cauliflower seeds for winter season",
    supplier: "Nepal Seeds Company",
  },
  {
    name: "NPK Fertilizer",
    price: 2800,
    unit: "50kg bag",
    category: "fertilizers",
    icon: "⚗️",
    description: "Balanced NPK fertilizer 20:20:20 for all crops",
    supplier: "Everest Fertilizers",
  },
  {
    name: "Sprayer Pump",
    price: 3500,
    unit: "piece",
    category: "tools",
    icon: "💦",
    description: "16L capacity knapsack sprayer for pesticide application",
    supplier: "Farm Equipment Co.",
  },
  {
    name: "Carrot Seeds",
    price: 280,
    unit: "packet",
    category: "seeds",
    icon: "🥕",
    description: "Orange carrot seeds suitable for Nepali climate",
    supplier: "Himalayan Seeds",
  },
]

// Learning Content Data
const learningContent = {
  organic: `
        <div class="learning-content">
            <h3>🌱 Organic Farming Complete Guide</h3>
            
            <h4>What is Organic Farming? (जैविक खेती के हो?)</h4>
            <p>Organic farming is a method of crop and livestock production that involves much more than choosing not to use pesticides, fertilizers, genetically modified organisms, antibiotics and growth hormones.</p>
            <p>जैविक खेती भनेको रासायनिक मल, कीटनाशक र अन्य हानिकारक पदार्थहरू प्रयोग नगरी प्राकृतिक तरिकाले खेती गर्ने विधि हो।</p>
            
            <div class="highlight">
                <h4>🎯 Key Principles (मुख्य सिद्धान्तहरू):</h4>
                <ul>
                    <li><strong>Health:</strong> Sustain and enhance the health of soil, plant, animal, human and planet</li>
                    <li><strong>Ecology:</strong> Based on living ecological systems and cycles</li>
                    <li><strong>Fairness:</strong> Built on relationships that ensure fairness</li>
                    <li><strong>Care:</strong> Managed in a precautionary and responsible manner</li>
                </ul>
            </div>
            
            <h4>🌿 Organic Farming Methods (जैविक खेती का तरिकाहरू):</h4>
            
            <h5>1. Soil Management (माटो व्यवस्थापन):</h5>
            <ul>
                <li>Crop rotation (फसल अदलबदल)</li>
                <li>Cover cropping (ढाक्ने बाली)</li>
                <li>Composting (कम्पोस्ट बनाउने)</li>
                <li>Green manuring (हरित मल)</li>
            </ul>
            
            <h5>2. Pest Management (कीरा नियन्त्रण):</h5>
            <ul>
                <li>Beneficial insects (फाइदाजनक कीराहरू)</li>
                <li>Companion planting (साथी बिरुवा रोप्ने)</li>
                <li>Natural pesticides (प्राकृतिक कीटनाशक)</li>
                <li>Physical barriers (भौतिक अवरोध)</li>
            </ul>
            
            <div class="tip">
                <h4>💡 Pro Tips for Beginners:</h4>
                <ul>
                    <li>Start small with a kitchen garden</li>
                    <li>Focus on soil health first</li>
                    <li>Learn about local beneficial insects</li>
                    <li>Keep detailed records of what works</li>
                    <li>Connect with other organic farmers</li>
                </ul>
            </div>
        </div>
    `,
  mushroom: `
        <div class="learning-content">
            <h3>🍄 Complete Mushroom Cultivation Guide</h3>
            
            <h4>Why Mushroom Farming? (च्याउ खेती किन गर्ने?)</h4>
            <p>Mushroom cultivation is one of the most profitable agricultural businesses with minimal investment and space requirements.</p>
            <p>च्याउ खेती कम लगानी र कम ठाउँमा गर्न सकिने धेरै नाफामुलक व्यवसाय हो।</p>
            
            <div class="highlight">
                <h4>🏆 Popular Mushroom Varieties in Nepal:</h4>
                <ul>
                    <li><strong>Oyster Mushroom (सिप च्याउ):</strong> Easiest to grow, high yield</li>
                    <li><strong>Shiitake (शिताके):</strong> Premium variety, medicinal properties</li>
                    <li><strong>Button Mushroom (बटन च्याउ):</strong> Most common, good market demand</li>
                    <li><strong>Reishi (रेशी):</strong> Medicinal mushroom, high value</li>
                </ul>
            </div>
            
            <h4>🏗️ Infrastructure Requirements:</h4>
            
            <h5>1. Growing Room (उत्पादन कोठा):</h5>
            <ul>
                <li>Size: 10x12 feet minimum</li>
                <li>Height: 8-10 feet</li>
                <li>Ventilation: Proper air circulation</li>
                <li>Temperature control: 15-25°C</li>
                <li>Humidity: 80-90%</li>
            </ul>
            
            <div class="tip">
                <h4>💰 Economic Analysis (आर्थिक विश्लेषण):</h4>
                <ul>
                    <li><strong>Initial Investment:</strong> Rs. 50,000 - 1,00,000</li>
                    <li><strong>Production Cycle:</strong> 45-60 days</li>
                    <li><strong>Yield:</strong> 15-20 kg per 100 kg substrate</li>
                    <li><strong>Market Price:</strong> Rs. 200-400 per kg</li>
                    <li><strong>Profit Margin:</strong> 40-60%</li>
                </ul>
            </div>
        </div>
    `,
  dairy: `
        <div class="learning-content">
            <h3>🐄 Modern Dairy Farming Techniques</h3>
            
            <h4>Introduction to Dairy Farming (दुग्ध उत्पादनको परिचय)</h4>
            <p>Dairy farming is the practice of raising female cattle, goats, or other livestock for the production of milk, which is processed into dairy products.</p>
            <p>दुग्ध उत्पादन भनेको दूध उत्पादनको लागि गाई, भैंसी, बाख्रा आदि पशुहरू पालन गर्ने व्यवसाय हो।</p>
            
            <div class="highlight">
                <h4>🐮 Best Dairy Breeds for Nepal:</h4>
                <ul>
                    <li><strong>Jersey:</strong> High milk fat content, heat tolerant</li>
                    <li><strong>Holstein Friesian:</strong> High milk yield, good for commercial farming</li>
                    <li><strong>Local breeds:</strong> Disease resistant, adapted to local climate</li>
                    <li><strong>Crossbreds:</strong> Combination of high yield and local adaptation</li>
                </ul>
            </div>
            
            <h4>🌾 Feeding Management:</h4>
            
            <h5>Daily Feed Requirements (per 400kg cow):</h5>
            <ul>
                <li><strong>Dry matter:</strong> 8-12 kg (2-3% of body weight)</li>
                <li><strong>Green fodder:</strong> 25-30 kg</li>
                <li><strong>Concentrate:</strong> 1 kg per 2.5 liters of milk</li>
                <li><strong>Water:</strong> 70-100 liters per day</li>
            </ul>
            
            <div class="tip">
                <h4>🥛 Milking Best Practices:</h4>
                <ul>
                    <li>Maintain regular milking schedule (2-3 times daily)</li>
                    <li>Clean udder before milking</li>
                    <li>Use proper milking technique</li>
                    <li>Cool milk immediately after milking</li>
                    <li>Maintain hygiene throughout the process</li>
                </ul>
            </div>
        </div>
    `,
  greenhouse: `
        <div class="learning-content">
            <h3>🏠 Protected Cultivation Methods</h3>
            
            <h4>What is Greenhouse Farming? (ग्रीनहाउस खेती के हो?)</h4>
            <p>Greenhouse farming is a method of growing crops in a controlled environment where temperature, humidity, light, and other factors can be regulated.</p>
            <p>ग्रीनहाउस खेती भनेको नियन्त्रित वातावरणमा तापक्रम, आर्द्रता, प्रकाश आदि नियन्त्रण गरेर बाली उत्पादन गर्ने विधि हो।</p>
            
            <div class="highlight">
                <h4>🌟 Benefits of Greenhouse Farming:</h4>
                <ul>
                    <li><strong>Year-round production:</strong> Independent of seasons</li>
                    <li><strong>Higher yields:</strong> 3-10 times more than open field</li>
                    <li><strong>Quality produce:</strong> Better size, color, and taste</li>
                    <li><strong>Water efficiency:</strong> 90% less water usage</li>
                    <li><strong>Pest protection:</strong> Reduced pesticide use</li>
                </ul>
            </div>
            
            <h4>🏗️ Types of Greenhouse Structures:</h4>
            
            <h5>1. Based on Material:</h5>
            <ul>
                <li><strong>Polyhouse:</strong> Plastic covering, cost-effective</li>
                <li><strong>Glass house:</strong> Glass covering, durable but expensive</li>
                <li><strong>Shade net house:</strong> Net covering, for leafy vegetables</li>
                <li><strong>Tunnel house:</strong> Low-cost option for small farmers</li>
            </ul>
            
            <div class="tip">
                <h4>🌱 Best Crops for Greenhouse:</h4>
                <ul>
                    <li><strong>Vegetables:</strong> Tomato, cucumber, capsicum, lettuce</li>
                    <li><strong>Flowers:</strong> Rose, carnation, gerbera, orchids</li>
                    <li><strong>Herbs:</strong> Basil, mint, parsley, cilantro</li>
                    <li><strong>Fruits:</strong> Strawberry, grapes (in some regions)</li>
                </ul>
            </div>
        </div>
    `,
}

// Insurance Companies Data
const insuranceCompanies = [
  {
    name: "Nepal Insurance Company",
    phone: "01-4228906",
    website: "https://www.nic.com.np",
    services: ["Crop Insurance", "Livestock Insurance", "Farm Structure"],
  },
  {
    name: "Rastriya Beema Company",
    phone: "01-4220767",
    website: "https://www.rastriyabeema.com",
    services: ["Agricultural Insurance", "Livestock Insurance"],
  },
  {
    name: "National Life Insurance",
    phone: "01-4444481",
    website: "https://www.nlic.com.np",
    services: ["Crop Insurance", "Farm Equipment Insurance"],
  },
  {
    name: "Oriental Insurance",
    phone: "01-4444482",
    website: "https://www.oicl.com.np",
    services: ["Agricultural Insurance", "Weather Insurance"],
  },
]

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  initializeApp()
  startImageRotation()
  toggleMobileMenuSetup()
})

function initializeApp() {
  populateDistricts()
  loadUserSession()
  initializeCrops()
  initializeStore()
  loadUserCrops()
  loadWeatherData()
}

// Image Rotation for Hero Section
function startImageRotation() {
  const backgrounds = document.querySelectorAll(".hero-background")
  if (backgrounds.length === 0) return

  imageRotationInterval = setInterval(() => {
    // Hide current image
    backgrounds[currentImageIndex].classList.remove("active")

    // Move to next image
    currentImageIndex = (currentImageIndex + 1) % backgrounds.length

    // Show next image
    backgrounds[currentImageIndex].classList.add("active")
  }, 5000) // Change every 5 seconds
}

// Populate Districts
function populateDistricts() {
  const districtSelects = ["district", "districtFilter", "cropLocation", "subsidyDistrict", "weatherDistrict"]
  districtSelects.forEach((selectId) => {
    const select = document.getElementById(selectId)
    if (select) {
      // Clear existing options except the first one
      while (select.children.length > 1) {
        select.removeChild(select.lastChild)
      }

      nepalDistricts.forEach((district) => {
        const option = document.createElement("option")
        option.value = district.toLowerCase()
        option.textContent = district
        select.appendChild(option)
      })
    }
  })
}

function loadUserSession() {
  const savedUser = localStorage.getItem("kisanConnectUser")
  if (savedUser) {
    try {
      currentUser = JSON.parse(savedUser)
      updateUserInterface()
    } catch (error) {
      console.error("Error loading user session:", error)
      localStorage.removeItem("kisanConnectUser")
    }
  }
}

function updateUserInterface() {
  if (currentUser) {
    document.getElementById("authButtons").classList.add("hidden")
    document.getElementById("userInfo").classList.remove("hidden")
    document.getElementById("userName").textContent = currentUser.name
    document.getElementById("userAvatar").textContent = currentUser.name.charAt(0).toUpperCase()

    const dashboardName = document.getElementById("dashboardName")
    const farmerID = document.getElementById("farmerID")
    if (dashboardName) dashboardName.textContent = currentUser.name
    if (farmerID) {
      farmerID.textContent = `NP-${currentUser.district.toUpperCase().substring(0, 3)}-${currentUser.id}`
    }

    loadUserCrops()
    updateDashboardStats()
  }
}

// Update Dashboard Statistics
function updateDashboardStats() {
  if (!currentUser) return

  const userCropsCount = userCrops.length
  const totalEarnings = userCrops.reduce((total, crop) => {
    return total + crop.price * crop.quantity * 0.1 // Assume 10% sold
  }, 0)

  const cropsListedElement = document.getElementById("cropsListedCount")
  const totalEarningsElement = document.getElementById("totalEarnings")
  const subsidiesElement = document.getElementById("subsidiesClaimed")

  if (cropsListedElement) cropsListedElement.textContent = userCropsCount
  if (totalEarningsElement) totalEarningsElement.textContent = `Rs. ${totalEarnings.toLocaleString()}`
  if (subsidiesElement) subsidiesElement.textContent = Math.floor(userCropsCount / 2) // Mock calculation
}

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault()

  const phone = document.getElementById("loginPhone").value.trim()
  const password = document.getElementById("loginPassword").value.trim()

  // Validation
  if (!phone || !password) {
    showMessage("loginMessage", "❌ Please fill in all fields.", "error")
    return
  }

  if (phone.length < 10) {
    showMessage("loginMessage", "❌ Please enter a valid phone number.", "error")
    return
  }

  // Show loading state
  const submitBtn = e.target.querySelector('button[type="submit"]')
  const originalText = submitBtn.textContent
  submitBtn.textContent = "Logging in..."
  submitBtn.disabled = true

  // Simulate API call
  setTimeout(() => {
    const savedUsers = JSON.parse(localStorage.getItem("kisanConnectUsers") || "[]")
    const user = savedUsers.find((u) => u.phone === phone && u.password === password)

    if (user) {
      currentUser = user
      localStorage.setItem("kisanConnectUser", JSON.stringify(currentUser))
      updateUserInterface()
      showMessage("loginMessage", "✅ Login successful! Welcome back.", "success")

      // Reset form
      document.getElementById("loginForm").reset()

      // Redirect to dashboard
      setTimeout(() => {
        showPage("dashboard")
      }, 1500)
    } else {
      showMessage("loginMessage", "❌ Invalid phone number or password. Please try again.", "error")
    }

    submitBtn.textContent = originalText
    submitBtn.disabled = false
  }, 1000)
})

document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault()

  const name = document.getElementById("fullName").value.trim()
  const phone = document.getElementById("regPhone").value.trim()
  const district = document.getElementById("district").value
  const password = document.getElementById("regPassword").value.trim()

  // Validation
  if (!name || !phone || !district || !password) {
    showMessage("registerMessage", "❌ Please fill in all fields.", "error")
    return
  }

  if (name.length < 2) {
    showMessage("registerMessage", "❌ Name must be at least 2 characters long.", "error")
    return
  }

  if (phone.length < 10) {
    showMessage("registerMessage", "❌ Please enter a valid phone number (at least 10 digits).", "error")
    return
  }

  if (password.length < 4) {
    showMessage("registerMessage", "❌ Password must be at least 4 characters long.", "error")
    return
  }

  // Show loading state
  const submitBtn = e.target.querySelector('button[type="submit"]')
  const originalText = submitBtn.textContent
  submitBtn.textContent = "Creating Account..."
  submitBtn.disabled = true

  setTimeout(() => {
    const savedUsers = JSON.parse(localStorage.getItem("kisanConnectUsers") || "[]")

    // Check if user exists
    if (savedUsers.find((u) => u.phone === phone)) {
      showMessage(
        "registerMessage",
        "❌ Phone number already registered. Please login or use a different number.",
        "error",
      )
      submitBtn.textContent = originalText
      submitBtn.disabled = false
      return
    }

    // Create new user
    const newUser = {
      id: Date.now().toString().slice(-6),
      name: name,
      phone: phone,
      district: district,
      password: password,
      registeredAt: new Date().toISOString(),
    }

    // Save user
    savedUsers.push(newUser)
    localStorage.setItem("kisanConnectUsers", JSON.stringify(savedUsers))

    // Auto login
    currentUser = newUser
    localStorage.setItem("kisanConnectUser", JSON.stringify(currentUser))
    updateUserInterface()

    showMessage("registerMessage", "✅ Registration successful! Welcome to KisanConnect.", "success")
    document.getElementById("registerForm").reset()

    setTimeout(() => {
      showPage("dashboard")
    }, 1500)

    submitBtn.textContent = originalText
    submitBtn.disabled = false
  }, 1000)
})

// Logout Function
function logout() {
  if (confirm("Are you sure you want to logout?")) {
    localStorage.removeItem("kisanConnectUser")
    currentUser = null

    document.getElementById("authButtons").classList.remove("hidden")
    document.getElementById("userInfo").classList.add("hidden")

    showPage("home")
  }
}

// Show Message Helper
function showMessage(elementId, message, type) {
  const element = document.getElementById(elementId)
  if (!element) return

  element.className = `message ${type}`
  element.textContent = message
  element.style.display = "block"

  setTimeout(() => {
    element.style.display = "none"
  }, 5000)
}

// Page Navigation
function showPage(pageName) {
  // Hide all pages
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active")
  })

  // Show selected page
  const selectedPage = document.getElementById(pageName)
  if (selectedPage) {
    selectedPage.classList.add("active")

    // Scroll to top
    window.scrollTo(0, 0)

    // Load page-specific content
    if (pageName === "cropDisease") {
      window.location.href = "crop-disease-detector.html"
    } else if (pageName === "nasa") {
      window.location.href = "nasa.html"
    }
  }
}

function showAddCropForm() {
  if (!currentUser) {
    alert("⚠️ Please login to list your crops.")
    showPage("login")
    return
  }

  document.getElementById("addCropModal").style.display = "block"
}

function closeAddCropModal() {
  document.getElementById("addCropModal").style.display = "none"
  document.getElementById("addCropForm").reset()
}

// Initialize Crops
function initializeCrops() {
  // Load crops from localStorage or use sample crops
  const savedCrops = localStorage.getItem("kisanConnectCrops")
  if (savedCrops) {
    try {
      allCrops = JSON.parse(savedCrops)
    } catch (error) {
      console.error("Error loading crops:", error)
      allCrops = [...sampleCrops]
      localStorage.setItem("kisanConnectCrops", JSON.stringify(allCrops))
    }
  } else {
    allCrops = [...sampleCrops]
    localStorage.setItem("kisanConnectCrops", JSON.stringify(allCrops))
  }

  filteredCrops = [...allCrops]
  renderCrops()
}

// Add Crop Form Handler
document.getElementById("addCropForm").addEventListener("submit", (e) => {
  e.preventDefault()

  if (!currentUser) {
    alert("⚠️ Please login first.")
    showPage("login")
    return
  }

  const cropName = document.getElementById("cropName").value.trim()
  const cropPrice = Number.parseFloat(document.getElementById("cropPrice").value)
  const cropQuantity = Number.parseFloat(document.getElementById("cropQuantity").value)
  const cropLocation = document.getElementById("cropLocation").value
  const cropDescription = document.getElementById("cropDescription").value.trim()
  const cropIcon = document.getElementById("cropIcon").value

  // Validation
  if (!cropName || !cropPrice || !cropQuantity || !cropLocation || !cropIcon) {
    alert("❌ Please fill in all required fields.")
    return
  }

  const newCrop = {
    id: `crop_${Date.now()}`,
    name: cropName,
    price: cropPrice,
    quantity: cropQuantity,
    location: cropLocation,
    description: cropDescription,
    icon: cropIcon,
    farmer: currentUser.name,
    phone: currentUser.phone,
    category: "vegetables",
    listedAt: new Date().toISOString(),
    // CRITICAL: Seller details stored with the listing
    sellerDetails: {
      name: currentUser.name,
      phone: currentUser.phone,
      location: cropLocation,
      preferredContact: currentUser.preferredContact || "Phone",
    },
  }

  // Add to all crops
  allCrops.push(newCrop)
  localStorage.setItem("kisanConnectCrops", JSON.stringify(allCrops))

  // Refresh display
  filterCrops()
  loadUserCrops()
  updateDashboardStats()

  // Close modal and show success
  closeAddCropModal()
  alert("✅ Your crop has been listed successfully!")
})

// Load User Crops
function loadUserCrops() {
  if (!currentUser) {
    userCrops = []
    return
  }

  userCrops = allCrops.filter((crop) => crop.phone === currentUser.phone)
  renderUserCrops()
}

// Render User Crops in Dashboard
function renderUserCrops() {
  const cropList = document.getElementById("userCropList")
  if (!cropList) return

  if (userCrops.length === 0) {
    cropList.innerHTML = `
      <div class="empty-state">
        <div class="icon">📦</div>
        <p>You haven't listed any crops yet.</p>
        <button class="btn btn-primary" onclick="showPage('marketplace'); showAddCropForm();">List Your First Crop</button>
      </div>
    `
    return
  }

  cropList.innerHTML = userCrops
    .map(
      (crop) => `
    <div class="crop-card">
      <div class="crop-image">${crop.icon}</div>
      <div class="crop-info">
        <h4>${crop.name}</h4>
        <p class="crop-price">Rs. ${crop.price}/kg</p>
        <p>Quantity: ${crop.quantity} kg</p>
        <p>Location: ${crop.location}</p>
        <button class="btn btn-danger" onclick="deleteCrop('${crop.id}')">Delete</button>
      </div>
    </div>
  `,
    )
    .join("")
}

// Delete Crop
function deleteCrop(cropId) {
  if (!confirm("Are you sure you want to delete this listing?")) return

  allCrops = allCrops.filter((crop) => crop.id !== cropId)
  localStorage.setItem("kisanConnectCrops", JSON.stringify(allCrops))

  filterCrops()
  loadUserCrops()
  updateDashboardStats()
}

// Filter Crops
function filterCrops() {
  const searchTerm = document.getElementById("cropSearch")?.value.toLowerCase() || ""
  const districtFilter = document.getElementById("districtFilter")?.value || ""

  filteredCrops = allCrops.filter((crop) => {
    const matchesSearch = crop.name.toLowerCase().includes(searchTerm)
    const matchesDistrict = !districtFilter || crop.location.toLowerCase() === districtFilter
    return matchesSearch && matchesDistrict
  })

  renderCrops()
}

// Render Crops
function renderCrops() {
  const cropGrid = document.getElementById("cropGrid")
  if (!cropGrid) return

  if (filteredCrops.length === 0) {
    cropGrid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <div class="icon">🔍</div>
        <p>No crops found matching your search.</p>
      </div>
    `
    return
  }

  cropGrid.innerHTML = filteredCrops
    .map(
      (crop) => `
    <div class="crop-card">
      <div class="crop-image">${crop.icon}</div>
      <div class="crop-info">
        <h4>${crop.name}</h4>
        <p class="crop-price">Rs. ${crop.price}/kg</p>
        <p>Quantity: ${crop.quantity} kg</p>
        <p>Location: ${crop.location}</p>
        <p style="font-size: 0.85rem; color: #666;">Seller: ${crop.farmer}</p>
        <button class="btn btn-success" onclick="contactSeller('${crop.id}')">Contact Seller</button>
      </div>
    </div>
  `,
    )
    .join("")
}

function contactSeller(cropId) {
  const crop = allCrops.find((c) => c.id === cropId)
  if (!crop || !crop.sellerDetails) {
    alert("❌ Seller information not available.")
    return
  }

  const seller = crop.sellerDetails

  // Create modal content
  const modalHTML = `
    <div class="modal" id="contactSellerModal" style="display: block;">
      <div class="modal-content">
        <span class="close" onclick="closeContactSellerModal()">&times;</span>
        <h3>📞 Contact Seller</h3>
        
        <div style="background: #f5f5f5; padding: 1.5rem; border-radius: 10px; margin: 1rem 0;">
          <p style="margin-bottom: 1rem;"><strong>Product:</strong> ${crop.name}</p>
          <p style="margin-bottom: 1rem;"><strong>Seller Name:</strong> ${seller.name}</p>
          <p style="margin-bottom: 1rem;"><strong>Phone:</strong> 
            <a href="tel:${seller.phone}" style="color: var(--primary-green); font-weight: bold;">${seller.phone}</a>
          </p>
          <p style="margin-bottom: 1rem;"><strong>Location:</strong> ${seller.location}</p>
          <p><strong>Preferred Contact:</strong> ${seller.preferredContact}</p>
        </div>
        
        <div style="display: flex; gap: 1rem; margin-top: 1.5rem;">
          <a href="tel:${seller.phone}" class="btn btn-primary" style="flex: 1; text-decoration: none; text-align: center;">
            📞 Call Now
          </a>
          <a href="https://wa.me/${seller.phone.replace(/[^0-9]/g, "")}" target="_blank" class="btn btn-success" style="flex: 1; text-decoration: none; text-align: center;">
            💬 WhatsApp
          </a>
        </div>
      </div>
    </div>
  `

  // Remove existing modal if any
  const existingModal = document.getElementById("contactSellerModal")
  if (existingModal) {
    existingModal.remove()
  }

  // Add to body
  document.body.insertAdjacentHTML("beforeend", modalHTML)
}

function closeContactSellerModal() {
  const modal = document.getElementById("contactSellerModal")
  if (modal) {
    modal.remove()
  }
}

// Initialize Store
function initializeStore() {
  storeItems = [...sampleStoreItems]
  filteredStoreItems = [...storeItems]
  renderStoreItems()
}

// Filter Store Items
function filterStoreItems() {
  const searchTerm = document.getElementById("storeSearch")?.value.toLowerCase() || ""
  const categoryFilter = document.getElementById("storeCategory")?.value || ""

  filteredStoreItems = storeItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm)
    const matchesCategory = !categoryFilter || item.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  renderStoreItems()
}

// Render Store Items
function renderStoreItems() {
  const storeGrid = document.getElementById("storeGrid")
  if (!storeGrid) return

  if (filteredStoreItems.length === 0) {
    storeGrid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <div class="icon">🔍</div>
        <p>No products found matching your search.</p>
      </div>
    `
    return
  }

  storeGrid.innerHTML = filteredStoreItems
    .map(
      (item) => `
    <div class="store-item">
      <div class="store-item-image">${item.icon}</div>
      <div class="store-item-info">
        <h4>${item.name}</h4>
        <p class="store-item-price">Rs. ${item.price}/${item.unit}</p>
        <p style="font-size: 0.85rem; color: #666;">${item.description}</p>
        <p style="font-size: 0.8rem; color: #999; margin-top: 0.5rem;">Supplier: ${item.supplier}</p>
        <button class="btn btn-primary" style="width: 100%; margin-top: 1rem;" onclick="orderItem('${item.name}')">Order Now</button>
      </div>
    </div>
  `,
    )
    .join("")
}

// Order Item
function orderItem(itemName) {
  alert(`📦 To order ${itemName}, please contact the supplier directly. Visit our Store page for contact details.`)
}

// Weather Data
function loadWeatherData() {
  const weatherDistrict = document.getElementById("weatherDistrict")?.value || "kathmandu"

  // Mock weather data
  const mockWeather = {
    current: {
      temp: Math.floor(Math.random() * 10) + 20,
      condition: "Partly Cloudy",
      humidity: Math.floor(Math.random() * 30) + 50,
      windSpeed: Math.floor(Math.random() * 10) + 5,
    },
    forecast: [
      { day: "Today", temp: "25/18°C", condition: "Sunny", icon: "☀️" },
      { day: "Tomorrow", temp: "24/17°C", condition: "Cloudy", icon: "☁️" },
      { day: "Day 3", temp: "23/16°C", condition: "Rain", icon: "🌧️" },
      { day: "Day 4", temp: "26/19°C", condition: "Sunny", icon: "☀️" },
      { day: "Day 5", temp: "25/18°C", condition: "Partly Cloudy", icon: "⛅" },
    ],
  }

  renderWeather(mockWeather)
}

// Render Weather
function renderWeather(weather) {
  const weatherCurrent = document.getElementById("weatherCurrent")
  const weatherForecastDiv = document.getElementById("weatherForecast")

  if (weatherCurrent) {
    weatherCurrent.innerHTML = `
      <div class="weather-current">
        <h3>Current Weather</h3>
        <p class="temp">${weather.current.temp}°C</p>
        <p>${weather.current.condition}</p>
        <p>Humidity: ${weather.current.humidity}% | Wind: ${weather.current.windSpeed} km/h</p>
      </div>
    `
  }

  if (weatherForecastDiv) {
    weatherForecastDiv.innerHTML = weather.forecast
      .map(
        (day) => `
      <div class="forecast-day">
        <div style="font-size: 2rem;">${day.icon}</div>
        <h4>${day.day}</h4>
        <p>${day.temp}</p>
        <p>${day.condition}</p>
      </div>
    `,
      )
      .join("")
  }
}

// Learning Functions
function showLearningContent(topic) {
  const contentDiv = document.getElementById("learningContentDiv")
  if (!contentDiv) return

  if (learningContent[topic]) {
    contentDiv.innerHTML = learningContent[topic]
    contentDiv.style.display = "block"
  }
}

// Subsidy Calculator
function calculateSubsidy() {
  const cropType = document.getElementById("subsidyCrop")?.value
  const landSize = Number.parseFloat(document.getElementById("subsidyLand")?.value || 0)
  const district = document.getElementById("subsidyDistrict")?.value

  if (!cropType || !landSize || !district) {
    alert("❌ Please fill in all fields.")
    return
  }

  // Mock subsidy calculation
  const subsidyRate = {
    rice: 5000,
    wheat: 4500,
    maize: 4000,
    vegetables: 6000,
    fruits: 7000,
  }

  const totalSubsidy = (subsidyRate[cropType] || 5000) * landSize

  const resultDiv = document.getElementById("subsidyResult")
  if (resultDiv) {
    resultDiv.innerHTML = `
      <div class="calculator-result">
        <h3>Estimated Subsidy</h3>
        <p class="amount">Rs. ${totalSubsidy.toLocaleString()}</p>
        <p>For ${landSize} hectares of ${cropType} in ${district}</p>
        <p style="margin-top: 1rem; font-size: 0.9rem;">
          📋 Required Documents: Land ownership certificate, citizenship, bank details
        </p>
      </div>
    `
    resultDiv.style.display = "block"
  }
}

// Insurance Functions
function openInsuranceLink(type) {
  const links = {
    crop: "https://moald.gov.np/",
    livestock: "https://www.rbcl.gov.np/",
    structure: "https://www.pmamp.gov.np",
  }

  if (links[type]) {
    window.open(links[type], "_blank")
  }
}

function showInsuranceCompanies() {
  const companiesHTML = insuranceCompanies
    .map(
      (company) => `
    <div class="insurance-info-card">
      <h4>${company.name}</h4>
      <p><strong>Phone:</strong> <a href="tel:${company.phone}">${company.phone}</a></p>
      <p><strong>Website:</strong> <a href="${company.website}" target="_blank">${company.website}</a></p>
      <p><strong>Services:</strong> ${company.services.join(", ")}</p>
    </div>
  `,
    )
    .join("")

  const modalHTML = `
    <div class="modal" id="insuranceCompaniesModal" style="display: block;">
      <div class="modal-content">
        <span class="close" onclick="closeInsuranceCompaniesModal()">&times;</span>
        <h3>Insurance Companies</h3>
        <div style="display: grid; gap: 1rem; margin-top: 1rem;">
          ${companiesHTML}
        </div>
      </div>
    </div>
  `

  document.body.insertAdjacentHTML("beforeend", modalHTML)
}

function closeInsuranceCompaniesModal() {
  const modal = document.getElementById("insuranceCompaniesModal")
  if (modal) modal.remove()
}

// Close modals when clicking outside
window.onclick = (event) => {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none"
  }
}

// Mobile Menu Toggle Function
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu")
  const toggleButton = document.querySelector(".mobile-menu-toggle")

  if (mobileMenu && toggleButton) {
    mobileMenu.classList.toggle("active")
    toggleButton.classList.toggle("active")
  }
}

// Setup for Mobile Menu Toggle
function toggleMobileMenuSetup() {
  const navMenuItems = document.querySelectorAll(".nav-menu li")
  const mobileMenu = document.getElementById("mobileMenu")
  const toggleButton = document.querySelector(".mobile-menu-toggle")

  navMenuItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        if (mobileMenu) mobileMenu.classList.remove("active")
        if (toggleButton) toggleButton.classList.remove("active")
      }
    })
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    if (window.innerWidth <= 768) {
      const isClickInsideNav = event.target.closest(".nav-container")
      if (!isClickInsideNav && mobileMenu && mobileMenu.classList.contains("active")) {
        mobileMenu.classList.remove("active")
        if (toggleButton) toggleButton.classList.remove("active")
      }
    }
  })
}
function updateAuthUI() {
  const authButtons = document.getElementById("authButtons")
  const userInfo = document.getElementById("userInfo")

  if (currentUser) {
    // Logged IN
    authButtons.classList.add("hidden")
    userInfo.classList.remove("hidden")

    document.getElementById("userName").textContent = currentUser.name
    document.getElementById("userAvatar").textContent =
      currentUser.name.charAt(0).toUpperCase()
  } else {
    // Logged OUT
    authButtons.classList.remove("hidden")
    userInfo.classList.add("hidden")
  }
}

