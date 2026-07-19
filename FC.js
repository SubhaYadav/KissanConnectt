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
    name: "Organic Rice",
    price: 45,
    quantity: 500,
    location: "Chitwan",
    farmer: "Ram Bahadur",
    icon: "🌾",
    category: "grains",
  },
  {
    name: "Fresh Carrots",
    price: 80,
    quantity: 200,
    location: "Kathmandu",
    farmer: "Sita Devi",
    icon: "🥕",
    category: "vegetables",
  },
  {
    name: "Sweet Corn",
    price: 35,
    quantity: 300,
    location: "Pokhara",
    farmer: "Krishna Thapa",
    icon: "🌽",
    category: "vegetables",
  },
  {
    name: "Organic Cabbage",
    price: 60,
    quantity: 150,
    location: "Lalitpur",
    farmer: "Maya Gurung",
    icon: "🥬",
    category: "vegetables",
  },
  {
    name: "Fresh Cauliflower",
    price: 70,
    quantity: 100,
    location: "Bhaktapur",
    farmer: "Hari Shrestha",
    icon: "🥦",
    category: "vegetables",
  },
  {
    name: "Organic Tomatoes",
    price: 90,
    quantity: 250,
    location: "Chitwan",
    farmer: "Laxmi Thapa",
    icon: "🍅",
    category: "vegetables",
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
})

function initializeApp() {
  populateDistricts()
  initializeTestUsers() // Add this line
  loadUserSession()
  initializeCrops()
  initializeStore()
  loadUserCrops()
  loadWeatherData()
}

// Image Rotation for Hero Section
function startImageRotation() {
  const backgrounds = document.querySelectorAll(".hero-background")

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

// User Session Management
function loadUserSession() {
  const savedUser = localStorage.getItem("kisanConnectUser")
  if (savedUser) {
    currentUser = JSON.parse(savedUser)
    updateUserInterface()
  }
}

function updateUserInterface() {
  if (currentUser) {
    document.getElementById("authButtons").classList.add("hidden")
    document.getElementById("userInfo").classList.remove("hidden")
    document.getElementById("userName").textContent = currentUser.name
    document.getElementById("userAvatar").textContent = currentUser.name.charAt(0).toUpperCase()
    document.getElementById("dashboardName").textContent = currentUser.name
    document.getElementById("farmerID").textContent =
      `NP-${currentUser.district.toUpperCase().substring(0, 3)}-${currentUser.id}`

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

  document.getElementById("cropsListedCount").textContent = userCropsCount
  document.getElementById("totalEarnings").textContent = `Rs. ${totalEarnings.toLocaleString()}`
  document.getElementById("subsidiesClaimed").textContent = Math.floor(userCropsCount / 2) // Mock calculation
}

// Login Form Handler - FIXED VERSION
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault()

  const phone = document.getElementById("loginPhone").value.trim()
  const password = document.getElementById("loginPassword").value.trim()

  // Basic validation
  if (!phone || !password) {
    showMessage("loginMessage", "Please fill in all fields.", "error")
    return
  }

  if (phone.length < 10) {
    showMessage("loginMessage", "Please enter a valid phone number.", "error")
    return
  }

  // Show loading state
  const submitBtn = e.target.querySelector('button[type="submit"]')
  const originalText = submitBtn.textContent
  submitBtn.textContent = "Logging in..."
  submitBtn.disabled = true

  // Simulate API call with timeout
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

      // Redirect to dashboard after success
      setTimeout(() => {
        showPage("dashboard")
      }, 1500)
    } else {
      showMessage("loginMessage", "❌ Invalid phone number or password. Please try again.", "error")
    }

    // Reset button state
    submitBtn.textContent = originalText
    submitBtn.disabled = false
  }, 1000)
})

// Register Form Handler - FIXED VERSION
document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault()

  const name = document.getElementById("fullName").value.trim()
  const phone = document.getElementById("regPhone").value.trim()
  const district = document.getElementById("district").value
  const password = document.getElementById("regPassword").value.trim()

  // Enhanced validation
  if (!name || !phone || !district || !password) {
    showMessage("registerMessage", "Please fill in all fields.", "error")
    return
  }

  if (name.length < 2) {
    showMessage("registerMessage", "Name must be at least 2 characters long.", "error")
    return
  }

  if (phone.length < 10) {
    showMessage("registerMessage", "Please enter a valid phone number (at least 10 digits).", "error")
    return
  }

  if (password.length < 4) {
    showMessage("registerMessage", "Password must be at least 4 characters long.", "error")
    return
  }

  // Show loading state
  const submitBtn = e.target.querySelector('button[type="submit"]')
  const originalText = submitBtn.textContent
  submitBtn.textContent = "Creating Account..."
  submitBtn.disabled = true

  // Simulate API call with timeout
  setTimeout(() => {
    const savedUsers = JSON.parse(localStorage.getItem("kisanConnectUsers") || "[]")

    // Check if user already exists
    if (savedUsers.find((u) => u.phone === phone)) {
      showMessage(
        "registerMessage",
        "❌ Phone number already registered. Please use a different number or login.",
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

    // Save to users list
    savedUsers.push(newUser)
    localStorage.setItem("kisanConnectUsers", JSON.stringify(savedUsers))

    // Set as current user
    currentUser = newUser
    localStorage.setItem("kisanConnectUser", JSON.stringify(currentUser))
    updateUserInterface()

    // Show success message
    showMessage("registerMessage", "✅ Registration successful! Welcome to KisanConnect.", "success")

    // Reset form
    document.getElementById("registerForm").reset()

    // Redirect to dashboard after success
    setTimeout(() => {
      showPage("dashboard")
    }, 1500)

    // Reset button state
    submitBtn.textContent = originalText
    submitBtn.disabled = false
  }, 1000)
})

// Logout Function
function logout() {
  currentUser = null
  localStorage.removeItem("kisanConnectUser")
  document.getElementById("authButtons").classList.remove("hidden")
  document.getElementById("userInfo").classList.add("hidden")
  showPage("home")
}

// Enhanced Show Message Function
function showMessage(elementId, message, type) {
  const element = document.getElementById(elementId)
  element.innerHTML = `<div class="message ${type}" style="margin: 1rem 0; padding: 1rem; border-radius: 8px; font-weight: 500;">${message}</div>`

  // Auto-clear success messages, keep error messages longer
  const clearTime = type === "success" ? 3000 : 6000
  setTimeout(() => {
    element.innerHTML = ""
  }, clearTime)
}

// Initialize Crops with Persistence
function initializeCrops() {
  allCrops = [...sampleCrops]
  loadPersistedCrops()
  filteredCrops = [...allCrops]
  displayCrops()
}

// Initialize Store
function initializeStore() {
  storeItems = [...sampleStoreItems]
  filteredStoreItems = [...storeItems]
  displayStoreItems()
}

// Load Persisted Crops from localStorage
function loadPersistedCrops() {
  const persistedCrops = JSON.parse(localStorage.getItem("allMarketplaceCrops") || "[]")
  // Add persisted crops to allCrops if they don't already exist
  persistedCrops.forEach((crop) => {
    if (!allCrops.find((c) => c.name === crop.name && c.farmer === crop.farmer)) {
      allCrops.push(crop)
    }
  })
}

// Save Crops to localStorage
function savePersistedCrops() {
  localStorage.setItem("allMarketplaceCrops", JSON.stringify(allCrops))
}

// Display Crops
function displayCrops() {
  const cropGrid = document.getElementById("cropGrid")
  if (!cropGrid) return

  cropGrid.innerHTML = ""

  filteredCrops.forEach((crop) => {
    const cropCard = document.createElement("div")
    cropCard.className = "crop-card"
    cropCard.innerHTML = `
            <div class="crop-image">${crop.icon}</div>
            <div class="crop-info">
                <div class="crop-price">Rs. ${crop.price}/kg</div>
                <h3>${crop.name}</h3>
                <p><strong>Quantity:</strong> ${crop.quantity} kg</p>
                <p><strong>Location:</strong> ${crop.location}</p>
                <p><strong>Farmer:</strong> ${crop.farmer}</p>
                <button class="btn btn-primary mt-2" onclick="contactSeller('${crop.farmer}')">Contact Seller</button>
            </div>
        `
    cropGrid.appendChild(cropCard)
  })
}

// Display Store Items
function displayStoreItems() {
  const storeGrid = document.getElementById("storeGrid")
  if (!storeGrid) return

  storeGrid.innerHTML = ""

  filteredStoreItems.forEach((item) => {
    const itemCard = document.createElement("div")
    itemCard.className = "store-item"
    itemCard.innerHTML = `
            <div class="store-item-image">${item.icon}</div>
            <div class="store-item-info">
                <div class="store-item-price">Rs. ${item.price}/${item.unit}</div>
                <h3>${item.name}</h3>
                <p><strong>Category:</strong> ${item.category}</p>
                <p><strong>Supplier:</strong> ${item.supplier}</p>
                <p style="font-size: 0.9rem; color: #666; margin: 0.5rem 0;">${item.description}</p>
                <button class="btn btn-primary mt-2" onclick="orderItem('${item.name}')">Order Now</button>
            </div>
        `
    storeGrid.appendChild(itemCard)
  })
}

// Filter Crops
function filterCrops() {
  const districtFilter = document.getElementById("districtFilter").value.toLowerCase()
  const cropSearch = document.getElementById("cropSearch").value.toLowerCase()

  filteredCrops = allCrops.filter((crop) => {
    const matchesDistrict = !districtFilter || crop.location.toLowerCase().includes(districtFilter)
    const matchesCrop = !cropSearch || crop.name.toLowerCase().includes(cropSearch)
    return matchesDistrict && matchesCrop
  })

  displayCrops()
}

// Filter Store Items
function filterStoreItems() {
  const categoryFilter = document.getElementById("storeCategory").value.toLowerCase()
  const storeSearch = document.getElementById("storeSearch").value.toLowerCase()

  filteredStoreItems = storeItems.filter((item) => {
    const matchesCategory = !categoryFilter || item.category.toLowerCase() === categoryFilter
    const matchesSearch = !storeSearch || item.name.toLowerCase().includes(storeSearch)
    return matchesCategory && matchesSearch
  })

  displayStoreItems()
}

// Contact Seller
function contactSeller(farmerName) {
  alert(`Contacting ${farmerName}... Phone call feature will be implemented here.`)
}

// Order Item
function orderItem(itemName) {
  if (!currentUser) {
    alert("Please login first to place orders.")
    showPage("login")
    return
  }
  alert(`Order placed for ${itemName}! You will receive confirmation via SMS.`)
}

// Add Crop Functions
function showAddCropForm() {
  if (!currentUser) {
    alert("Please login first to list your crops.")
    showPage("login")
    return
  }
  document.getElementById("addCropModal").style.display = "block"
}

function closeAddCropModal() {
  document.getElementById("addCropModal").style.display = "none"
  document.getElementById("addCropForm").reset()
}

// Add Crop Form Handler
document.getElementById("addCropForm").addEventListener("submit", (e) => {
  e.preventDefault()

  if (!currentUser) {
    alert("Please login first.")
    return
  }

  const cropData = {
    name: document.getElementById("cropName").value,
    price: Number.parseInt(document.getElementById("cropPrice").value),
    quantity: Number.parseInt(document.getElementById("cropQuantity").value),
    location:
      document.getElementById("cropLocation").options[document.getElementById("cropLocation").selectedIndex].text,
    farmer: currentUser.name,
    icon: document.getElementById("cropIcon").value,
    description: document.getElementById("cropDescription").value,
    userId: currentUser.id,
    listedAt: new Date().toISOString(),
  }

  // Add to user crops
  userCrops.push(cropData)
  localStorage.setItem(`userCrops_${currentUser.id}`, JSON.stringify(userCrops))

  // Add to all crops for marketplace
  allCrops.push(cropData)
  filteredCrops = [...allCrops]

  // Save to persistent storage
  savePersistedCrops()

  // Update displays
  displayCrops()
  loadUserCrops()
  updateDashboardStats()

  closeAddCropModal()
  alert("Crop listed successfully!")
})

// Load User Crops
function loadUserCrops() {
  if (!currentUser) return

  userCrops = JSON.parse(localStorage.getItem(`userCrops_${currentUser.id}`) || "[]")
  displayUserCrops()
  updateDashboardStats()
}

// Display User Crops
function displayUserCrops() {
  const userCropsList = document.getElementById("userCropsList")
  if (!userCropsList) return

  if (userCrops.length === 0) {
    userCropsList.innerHTML = `
            <div class="empty-state">
                <div class="icon">🌾</div>
                <p>No crops listed yet</p>
                <small>Click "Add New Crop" to list your first crop</small>
            </div>
        `
    return
  }

  userCropsList.innerHTML = ""
  userCrops.forEach((crop, index) => {
    const cropDiv = document.createElement("div")
    cropDiv.style.cssText =
      "border-bottom: 1px solid #e0e0e0; padding: 1rem 0; background: linear-gradient(135deg, #e8f5e8, #d4edda); margin-bottom: 0.5rem; border-radius: 8px; padding: 1rem;"
    cropDiv.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="color: var(--primary-green);">
                    <strong>${crop.icon} ${crop.name}</strong><br>
                    <small style="color: var(--light-green);">${crop.quantity} kg - Rs. ${crop.price}/kg</small><br>
                    <small style="color: #666;">${crop.location}</small>
                </div>
                <button class="btn btn-danger" onclick="removeCrop(${index})" style="padding: 0.3rem 0.8rem; font-size: 0.8rem;">Remove</button>
            </div>
        `
    userCropsList.appendChild(cropDiv)
  })
}

// Remove Crop
function removeCrop(index) {
  if (confirm("Are you sure you want to remove this crop?")) {
    const removedCrop = userCrops[index]
    userCrops.splice(index, 1)
    localStorage.setItem(`userCrops_${currentUser.id}`, JSON.stringify(userCrops))

    // Remove from allCrops as well
    const allCropIndex = allCrops.findIndex(
      (crop) =>
        crop.name === removedCrop.name && crop.farmer === removedCrop.farmer && crop.listedAt === removedCrop.listedAt,
    )
    if (allCropIndex !== -1) {
      allCrops.splice(allCropIndex, 1)
      filteredCrops = [...allCrops]
      savePersistedCrops()
      displayCrops()
    }

    displayUserCrops()
    updateDashboardStats()
  }
}

// Learning Page Functions
function showCategoryContent(category) {
  const content = learningContent[category]
  if (content) {
    const learningContentDiv = document.getElementById("learningContent")
    learningContentDiv.innerHTML = content
    learningContentDiv.style.display = "block"

    // Scroll to content
    learningContentDiv.scrollIntoView({ behavior: "smooth" })
  }
}

// Insurance Functions
function openInsuranceLink(type) {
  const links = {
    crop: "https://moald.gov.np/",
    livestock: "https://moald.gov.np/",
    structure: "https://moald.gov.np/",
  }

  const url = links[type]
  if (url) {
    // Open the link in a new tab
    window.open(url, "_blank")

    // Also show helpful information
    setTimeout(() => {
      alert(
        `Redirected to Ministry of Agriculture website.\n\nFor ${type} insurance:\n1. Look for "Insurance" or "बीमा" section\n2. Contact local agricultural office\n3. Call: 01-4211025\n\nRequired documents:\n- Land ownership certificate\n- Citizenship certificate\n- Bank account details`,
      )
    }, 1000)
  } else {
    alert("Insurance application link will be available soon. Please contact your nearest agricultural office.")
  }
}

function showInsuranceCompanies() {
  let companyList = "🏢 Insurance Companies in Nepal:\n\n"
  const workingCompanies = [
    {
      name: "Nepal Insurance Company Ltd",
      phone: "01-4228906",
      website: "https://www.nic.com.np",
      services: ["Crop Insurance", "Livestock Insurance"],
    },
    {
      name: "Rastriya Beema Company",
      phone: "01-4220767",
      website: "https://www.rbcl.com.np",
      services: ["Agricultural Insurance", "Livestock Insurance"],
    },
    {
      name: "National Life Insurance",
      phone: "01-4444481",
      website: "https://www.nlic.com.np",
      services: ["Crop Insurance", "Farm Equipment Insurance"],
    },
    {
      name: "Shikhar Insurance Company",
      phone: "01-4444482",
      website: "https://www.shikharinsurance.com",
      services: ["Agricultural Insurance", "Weather Insurance"],
    },
  ]

  workingCompanies.forEach((company, index) => {
    companyList += `${index + 1}. ${company.name}\n`
    companyList += `   📞 Phone: ${company.phone}\n`
    companyList += `   🌐 Website: ${company.website}\n`
    companyList += `   📋 Services: ${company.services.join(", ")}\n\n`
  })

  companyList +=
    "💡 Tip: Call the companies directly for the most up-to-date insurance information and application procedures."

  alert(companyList)
}

function startInsuranceApplication() {
  if (!currentUser) {
    alert("Please login first to apply for insurance.")
    showPage("login")
    return
  }

  const insuranceTypes = [
    "Crop Insurance (बाली बीमा)",
    "Livestock Insurance (पशु बीमा)",
    "Farm Structure Insurance (कृषि संरचना बीमा)",
  ]

  const selection = prompt(
    `Select Insurance Type:\n1. ${insuranceTypes[0]}\n2. ${insuranceTypes[1]}\n3. ${insuranceTypes[2]}\n\nEnter 1, 2, or 3:`,
  )

  if (selection && selection >= 1 && selection <= 3) {
    const selectedType = insuranceTypes[selection - 1]
    alert(
      `Application started for ${selectedType}.\n\nNext steps:\n1. Prepare required documents\n2. Visit nearest insurance office\n3. Complete application form\n4. Pay premium\n\nYou will receive SMS confirmation with application number.\n\nFor more information, visit: https://www.moad.gov.np`,
    )
  }
}

// Page Navigation
function showPage(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll(".page")
  pages.forEach((page) => {
    page.classList.remove("active")
  })

  // Show selected page
  const targetPage = document.getElementById(pageId)
  if (targetPage) {
    targetPage.classList.add("active")

    // Special handling for certain pages
    if (pageId === "marketplace") {
      filterCrops()
    } else if (pageId === "store") {
      filterStoreItems()
    } else if (pageId === "dashboard") {
      if (!currentUser) {
        showPage("login")
        return
      }
      loadUserCrops()
    } else if (pageId === "weather") {
      loadWeatherData()
    }
  }
}

// Close modal when clicking outside
window.onclick = (event) => {
  const modals = document.querySelectorAll(".modal")
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = "none"
    }
  })
}

// Weather Data Functions
async function loadWeatherData() {
  const selectedDistrict = document.getElementById("weatherDistrict")?.value || "kathmandu"
  loadDistrictWeather(selectedDistrict)
}

function loadDistrictWeather(district = null) {
  const selectedDistrict = district || document.getElementById("weatherDistrict").value

  // Mock weather data for different districts
  const weatherData = {
    kathmandu: { name: "Kathmandu", temp: 24, humidity: 65, wind: 12, description: "partly cloudy" },
    chitwan: { name: "Chitwan", temp: 28, humidity: 70, wind: 8, description: "sunny" },
    pokhara: { name: "Pokhara", temp: 22, humidity: 75, wind: 15, description: "cloudy" },
    lalitpur: { name: "Lalitpur", temp: 23, humidity: 68, wind: 10, description: "clear" },
    bhaktapur: { name: "Bhaktapur", temp: 25, humidity: 62, wind: 14, description: "partly cloudy" },
  }

  const data = weatherData[selectedDistrict] || {
    name: selectedDistrict.charAt(0).toUpperCase() + selectedDistrict.slice(1),
    temp: 25,
    humidity: 65,
    wind: 10,
    description: "partly cloudy",
  }

  // Add some randomness
  data.temp += Math.floor(Math.random() * 6) - 3
  data.humidity += Math.floor(Math.random() * 10) - 5
  data.wind += Math.floor(Math.random() * 6) - 3

  updateWeatherDisplay(data)
  generateWeatherForecast()
  generateWeatherAlerts()
}

function updateWeatherDisplay(data) {
  document.getElementById("weatherLocation").textContent = data.name + " District"
  document.getElementById("currentTemp").textContent = `${data.temp}°C`
  document.getElementById("weatherDescription").textContent = data.description
  document.getElementById("weatherDetails").textContent = `Humidity: ${data.humidity}% | Wind: ${data.wind} km/h`
}

function generateWeatherForecast() {
  const forecastContainer = document.getElementById("weatherForecast")
  const days = ["Today", "Tomorrow", "Day 3", "Day 4", "Day 5"]
  const icons = ["☀️", "⛅", "🌧️", "🌦️", "☀️"]

  forecastContainer.innerHTML = ""

  days.forEach((day, index) => {
    const forecastDay = document.createElement("div")
    forecastDay.className = "forecast-day"
    const highTemp = Math.floor(Math.random() * 10) + 25
    const lowTemp = highTemp - Math.floor(Math.random() * 10) - 5

    forecastDay.innerHTML = `
            <h4>${day}</h4>
            <div style="font-size: 2rem;">${icons[index]}</div>
            <p>${highTemp}°/${lowTemp}°</p>
        `
    forecastContainer.appendChild(forecastDay)
  })
}

function generateWeatherAlerts() {
  const alertsContainer = document.getElementById("weatherAlerts")
  const alerts = [
    {
      type: "warning",
      title: "Heavy Rain Alert",
      message: "Expected heavy rainfall in Chitwan district for next 2 days. Protect your crops and avoid field work.",
      color: "#ffc107",
    },
    {
      type: "info",
      title: "Frost Warning",
      message: "Temperature may drop below 5°C in mountain regions. Cover sensitive plants.",
      color: "#17a2b8",
    },
  ]

  alertsContainer.innerHTML = ""

  alerts.forEach((alert) => {
    const alertDiv = document.createElement("div")
    alertDiv.style.cssText = `
            background: ${alert.type === "warning" ? "#fff3cd" : "#d1ecf1"};
            padding: 1rem;
            border-radius: 10px;
            margin-bottom: 1rem;
            border-left: 4px solid ${alert.color};
        `
    alertDiv.innerHTML = `
            <strong>${alert.title}</strong><br>
            ${alert.message}
        `
    alertsContainer.appendChild(alertDiv)
  })
}

// Subsidy Calculator Functions
function calculateSubsidy() {
  const district = document.getElementById("subsidyDistrict").value
  const crop = document.getElementById("subsidyCrop").value
  const landSize = document.getElementById("landSize").value

  if (!district || !crop || !landSize) {
    alert("Please fill all fields to calculate subsidy.")
    return
  }

  // Mock calculation based on crop and land size
  const subsidyRates = {
    rice: 2000,
    wheat: 1800,
    maize: 1500,
    vegetables: 2500,
    fruits: 3000,
  }

  const baseAmount = subsidyRates[crop] || 2000
  const totalSubsidy = baseAmount * Number.parseFloat(landSize)

  const resultDiv = document.getElementById("subsidyResult")
  resultDiv.innerHTML = `
        <div class="calculator-result">
            <h3>Estimated Subsidy Amount</h3>
            <div class="amount">Rs. ${totalSubsidy.toLocaleString()}</div>
            <p>For ${landSize} Ropani of ${crop} in ${district}</p>
            <p style="font-size: 0.9rem; margin-top: 1rem;">
                *This is an estimated amount. Actual subsidy may vary based on government policies and verification.
            </p>
            <button class="btn btn-primary mt-2" onclick="applySubsidy('calculated')">Apply for This Subsidy</button>
        </div>
    `
}

function applySubsidy(type) {
  if (!currentUser) {
    alert("Please login first to apply for subsidies.")
    showPage("login")
    return
  }

  alert(`Subsidy application for ${type} has been submitted. You will receive confirmation via SMS.`)
}

// Add this function to initialize some test users (call it in initializeApp)
function initializeTestUsers() {
  const existingUsers = JSON.parse(localStorage.getItem("kisanConnectUsers") || "[]")

  // Only add test users if no users exist
  if (existingUsers.length === 0) {
    const testUsers = [
      {
        id: "123456",
        name: "Test Farmer",
        phone: "9876543210",
        district: "kathmandu",
        password: "test123",
        registeredAt: new Date().toISOString(),
      },
      {
        id: "789012",
        name: "Demo User",
        phone: "9812345678",
        district: "chitwan",
        password: "demo123",
        registeredAt: new Date().toISOString(),
      },
    ]

    localStorage.setItem("kisanConnectUsers", JSON.stringify(testUsers))
    console.log("Test users created:")
    console.log("Phone: 9876543210, Password: test123")
    console.log("Phone: 9812345678, Password: demo123")
  }
}
