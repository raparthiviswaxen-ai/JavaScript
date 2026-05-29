

// string template literals : the alternate for actual concatination 

// USE OF (``): `string content with ${concating text}`

let product = "Iphone"
let model = "14 pro max"
let price = "$700"
let stock = 100
let features = "Key features of the iPhone 14 Pro Max include a 6.7” Super Retina XDR display with ProMotion technology, an Apple A16 Bionic chip, up to 1TB of storage, and 5G cellular connectivity"

let output = `The whole new Apple ${product} ${model}, you can get the ${features} only for ${price}`

let productCard = `
<div class="card">
    <h2>${product}</h2>
    <p>Price: $${price}</p>
    <p>Status: ${stock}</p>
</div>`

console.log(productCard)
