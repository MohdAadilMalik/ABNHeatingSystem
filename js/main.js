// Main JavaScript file for A.B.N Heating System website

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize product page functionality
    initProductPage();
    
    // Initialize quantity selectors
    initQuantitySelectors();
    
    // Initialize price range slider if it exists
    const priceRange = document.getElementById('priceRange');
    if (priceRange) {
        initPriceRangeSlider();
    }
    
    // Add event listeners for product detail page
    const productThumbnails = document.querySelectorAll('.thumbnail');
    if (productThumbnails.length > 0) {
        initProductImageGallery();
    }
});

// Function to initialize product page functionality
function initProductPage() {
    // Get URL parameters to load specific product details
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    // If on product details page and has product ID, load product details
    if (window.location.pathname.includes('product-details.html') && productId) {
        // In a real application, you would fetch product details from a server
        console.log('Loading product details for ID:', productId);
        
        // For demonstration, we're using the data already in the HTML
        // In a real application, you would update the page content based on the product ID
    }
}

// Function to initialize quantity selectors
function initQuantitySelectors() {
    const decreaseButtons = document.querySelectorAll('[id^="decrease-quantity"]');
    const increaseButtons = document.querySelectorAll('[id^="increase-quantity"]');
    
    decreaseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.nextElementSibling;
            let value = parseInt(input.value);
            if (value > 1) {
                input.value = value - 1;
            }
        });
    });
    
    increaseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.previousElementSibling;
            let value = parseInt(input.value);
            input.value = value + 1;
        });
    });
}

// Function to initialize price range slider
function initPriceRangeSlider() {
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    
    priceRange.addEventListener('input', function() {
        const value = this.value;
        priceValue.textContent = `₹0 - ₹${value}`;
    });
}

// Function to initialize product image gallery
function initProductImageGallery() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('main-product-image');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Remove active class from all thumbnails
            thumbnails.forEach(item => {
                item.classList.remove('active');
            });
            
            // Add active class to clicked thumbnail
            this.classList.add('active');
            
            // Update main image source
            const newImageSrc = this.querySelector('img').src;
            mainImage.src = newImageSrc;
        });
    });
}

// Function to handle form submissions
function handleFormSubmit(event, formId) {
    event.preventDefault();
    const form = document.getElementById(formId);
    
    // In a real application, you would send the form data to a server
    console.log('Form submitted:', formId);
    
    // Show success message
    alert('Form submitted successfully!');
    
    // Reset form
    form.reset();
}

// Add to cart functionality
function addToCart(productId, productName, price, quantity, size) {
    // In a real application, you would add the product to a shopping cart
    console.log('Adding to cart:', {
        productId,
        productName,
        price,
        quantity,
        size
    });
    
    // Show success message
    alert(`${productName} added to cart!`);
}

// Buy now functionality
function buyNow(productId, productName, price, quantity, size) {
    // In a real application, you would redirect to checkout page
    console.log('Buy now:', {
        productId,
        productName,
        price,
        quantity,
        size
    });
    
    // Show message
    alert(`Proceeding to checkout for ${productName}`);
}