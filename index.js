const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");
const item4 = document.getElementById("item4");
const item5 = document.getElementById("item5");

const hex1 = document.getElementById("hex1");
const hex2 = document.getElementById("hex2");
const hex3 = document.getElementById("hex3");
const hex4 = document.getElementById("hex4");
const hex5 = document.getElementById("hex5");
       
document.getElementById("getColor-btn").addEventListener("click", fetchData = (e) =>
     {  
        e.preventDefault();
        const colorType = document.getElementById("colorType").value;
        const colorPicker = document.getElementById("colorPicker").value.slice(1,7);
        
        fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker}&mode=${colorType}&count=5` , {method: "GET"})
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const hexValues = data.colors.map(val => val.name.closest_named_hex)
            
            item1.style.backgroundColor = hexValues[0];
            item2.style.backgroundColor = hexValues[1];
            item3.style.backgroundColor = hexValues[2];
            item4.style.backgroundColor = hexValues[3];
            item5.style.backgroundColor = hexValues[4];
            hex1.innerText = hexValues[0];
            hex2.innerText = hexValues[1];
            hex3.innerText = hexValues[2];
            hex4.innerText = hexValues[3];
            hex5.innerText = hexValues[4];
            })
        })   
