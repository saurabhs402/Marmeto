// Function to fetch data from the API
function fetchData() {
    fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json?v=1701948448')
        .then(response => response.json()) // Parse JSON response
        .then(data => {
            // Once data is fetched, you can access it here
            console.log(data); // Log the data to see the structure

            // Example: Accessing product details
            const product = data.product;
            console.log("Product ID:", product.id);
            console.log("Product Title:", product.title);
            console.log("Product Description:", product.description);
            console.log("Product Vendor:", product.vendor);
            console.log("Product Type:", product.product_type);
            console.log("Product Price:", product.price);
            console.log("Product Compare at Price:", product.compare_at_price);
            console.log("Product Options:", product.options);
            console.log("Product Images:", product.images);

            // Example: Accessing options
            const options = product.options;
            options.forEach(option => {
                console.log("Option Name:", option.name);
                console.log("Option Values:", option.values);
            });

            // Example: Accessing images
            const images = product.images;
            images.forEach(image => {
                console.log("Image Source:", image.src);
            });

            const vendor = document.getElementById('vendor');
            vendor.textContent=product.vendor


            const heading = document.getElementById('heading');
            heading.textContent = product.title

            const price = document.getElementById('price');
            price.textContent = product.price+".00"

            const MRP = document.getElementById('MRP');
            MRP.textContent = product.compare_at_price+".00"
            const description = document.getElementById('description');
            

            // Set the innerHTML of the div to the paragraph HTML string
            description.innerHTML = product.description;

            var paragraph = description.querySelector("p");

            // Add a class to the paragraph element
            paragraph.classList.add("the-embrace-sideboard");

            description.appendChild




            // You can perform further operations with the data as needed
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

   


        
}


let colorValue='Yellow'


// Get all color elements
const colorElements = document.querySelectorAll('.rectangle-div');

// Add click event listener to each color element
colorElements.forEach(colorElement => {
    colorElement.addEventListener('click', function () {
        // Remove border from previously selected color
        const previouslySelected = document.querySelector('.selected-color');
        if (previouslySelected) {
            previouslySelected.classList.remove('selected-color');
        }

        // Add border to the clicked color
        colorElement.classList.add('selected-color');

        // Get the color value from the data-color attribute
        const selectedColor = colorElement.getAttribute('data-color');

        colorValue=colorElement.getAttribute('color')
   

        

        // You can perform further operations with the selected color if needed
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const colorRectangles = document.querySelectorAll(".rectangle-div");

    colorRectangles.forEach(rectangle => {
        rectangle.addEventListener("click", function () {
            // Remove border from all color rectangles
            colorRectangles.forEach(rect => {
                rect.style.border = "none";
            });

            // Get the color from data-color attribute
            const selectedColor = this.getAttribute("data-color");

            // Add border with matching color and spacing
            this.style.border = `4px solid ${selectedColor}`;
             this.style.padding = "5px"; // Adjust spacing as needed
        });
    });
});

let valueElement = document.getElementById("value");

function increment() {
    let value = parseInt(valueElement.textContent);
    value++;
    valueElement.textContent = value;
}

function decrement() {
    let value = parseInt(valueElement.textContent);
    if (value > 1) {
        value--;
        valueElement.textContent = value;
    }
}


// Get the "Add To Cart" button element
const addToCartButton = document.getElementById('addToCartButton');

// Add event listener to the "Add To Cart" button
addToCartButton.addEventListener('click', () => {
    const selectedSize = document.querySelector('input[name="size"]:checked');
    const selectedSizeValue = selectedSize ? selectedSize.value : 'None';

    // Get the quantity value
    const quantity = document.getElementById('value').textContent;

    // Display the message (for demonstration purposes)

    const heading = document.getElementById('heading').textContent;
    const showcase = document.getElementById('showcase');
    const message = `${heading} with Color ${colorValue}, Size ${selectedSizeValue}, and Quantity ${quantity} added to the cart`;
    showcase.textContent=message
    showcase.style.backgroundColor='#e7f8b7';
    //alert(message);
});


// Call the fetchData function to initiate the request
fetchData();