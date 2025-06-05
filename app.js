// Q1...
// var userAge = prompt("Enter you age : ")
// if(userAge >= 18 )
//     alert("you are an adult")
// else
//     alert("You are a minor")
// ============================================
// Q2...
// var num = prompt("Enter a number")
// if(num >= 0)
// console.log("Positive number");    
// else
//     console.log("Not Positive");
// =============================================
// Q3...
// var num = prompt("Enter a number")
// if(num % 2 === 0)
//     alert("Even number")
// else
//     alert("Odd number")
// ==============================================
// Q4...
// var username = prompt("Enter username ")
// if(username === "admin")
//     console.log("Welcome, admin!");
// else
//     console.log("Access denied");
// ==========================================
// Q5...
// var num1 = prompt("Enter 1st number : ")
// var num2 = prompt("Enter 2nd number :")
// if(num1 === num2)
//     console.log("Both numbers are the same");
// else 
//     console.log("The numbers are different");
// ==============================================
// Q6...
// var num1 = prompt("1st number ")
// var num2 = prompt("2nd number ")
// if(num1 > num2)
//     console.log("1st number is greater");
// else
//     console.log(2nd number is greater);
// ==============================================
// Q7...
// var num = prompt("enter number")
// if(num > 100)
//     console.log("too big");
// else
//     console.log("with in range");
// ==============================================
// Q8...
// var num = prompt("enter score")
// if(num > 50)
//     console.log("you passed");
// else
//     console.log("you failed");
// ==============================================
// Q9...
// var num = prompt("enter temperature")
// if(num > 30)
//     alert("Its hot")
// else
//     alert("not hot")
// ==============================================
// Q10...
// var num = prompt("enter number")
// if(num === 0)
//     alert("Zero")
// else
//     alert("not zero")
// ==============================================
// Q11...
// var num = prompt("enter age")
// if(num >= 60)
//     console.log("you are a senior citizen");
// else
//     console.log("you are not senior)
// ==============================================
// Q12...
// var username = prompt("enter your name ")
// if(username === "alice")
//     alert("Hi, Alice")
// else
//     alert("You are not alice")
// ==============================================
// Q13...
// var password = prompt("Enter your password:");
// if (password === "12345") {
//   console.log("Correct password");
// } else {
//   console.log("Wrong password");
// }
// ==============================================
// Q14...
// var hour = prompt("Enter the current hour:")
// if (hour < 12) {
//   alert("Good morning!");
// } else {
//   alert("Good afternoon!");
// }
// ==============================================

// Q15...
// var number = prompt("Enter a number:")
// if (number % 5 === 0) {
//   console.log("Divisible by 5");
// } else {
//   console.log("Not divisible by 5");
// }
// ==============================================

// Q16...
// var play = prompt("Do you want to play a game? (yes/no)");
// if (play.toLowerCase() === "yes") {
//   alert("Let's play!");
// } else {
//   alert("Maybe next time!");
// }
// ==============================================

// Q17...
// var color = prompt("Enter a color:");
// if (color.toLowerCase() === "blue") {
//   console.log("Cool choice!");
// } else {
//   console.log("Interesting color!");
// }
// ==============================================

// Q18...
// var day = prompt("Enter the day of the week:");
// if (day.toLowerCase() === "sunday") {
//   alert("Weekend!");
// } else {
//   alert("Weekday");
// }
// ==============================================

// Q19...
// var fruit = prompt("Enter a fruit:");
// if (fruit.toLowerCase() === "banana" || fruit.toLowerCase() === "apple") {
//   alert("We have that!");
// } else {
//   alert("Sorry, out of stock.");
// }
// ==============================================

// Q20...
// var start = prompt('Type "start" to begin:');
// if (start.toLowerCase() === "start") {
//   alert("Game started!");
// } else {
//   alert("Waiting for input...");
// }
// ==============================================
// ==if-else-if=================================
// Q1...
// var marks = parseInt(prompt("Enter marks:"));
// if (marks >= 80 && marks <= 100) {
//   console.log("Distinction");
// } else if (marks >= 50 && marks < 80) {
//   console.log("Pass");
// } else if (marks >= 0 && marks < 50) {
//   console.log("Fail");
// } else {
//   console.log("Invalid Marks");
// }
// ==============================================
// Q2...
// var age = parseInt(prompt("Enter your age:"));
// var isPremiumMember = confirm("Are you a premium member?");
// if (age >= 60 && isPremiumMember) {
//   console.log("Senior Premium Discount");
// } else if (age >= 60) {
//   console.log("Senior Discount");
// } else if (isPremiumMember) {
//   console.log("Premium Discount");
// } else {
//   console.log("No Discount");
// }
// ==============================================
// Q3...
// var isLoggedIn = confirm("Are you logged in?");
// var isEmailVerified = confirm("Is your email verified?");
// if (isLoggedIn && isEmailVerified) {
//   console.log("Access granted");
// } else if (isLoggedIn && !isEmailVerified) {
//   console.log("Please verify your email");
// } else {
//   console.log("Please log in");
// }
// ==============================================
// Q4...
// var age = parseInt(prompt("Enter your age:"));
// var country = prompt("Enter your country:");
// var isBanned = confirm("Are you banned?");
// if (age >= 18 && age <= 35 && (country === "Pakistan" || country === "India") && !isBanned) {
//   console.log("You are eligible for the contest.");
// } else if (age < 18 || age > 35) {
//   console.log("Age issue: Not eligible");
// } else if (country !== "Pakistan" && country !== "India") {
//   console.log("Region issue: Not eligible");
// } else if (isBanned) {
//   console.log("Ban issue: Not eligible");
// }
// ==============================================
// Q5...
// var plan = prompt("Enter your subscription plan (free/premium):");
// var isLoggedIn = confirm("Are you logged in?");
// if (plan === "premium" && isLoggedIn) {
//   console.log("Welcome Premium User");
// } else if (plan === "free" && isLoggedIn) {
//   console.log("Welcome Free User");
// } else if (!isLoggedIn) {
//   console.log("Please log in to continue");
// } else {
//   console.log("Invalid subscription");
// }
// ==============================================
// Q6...
// var price = parseFloat(prompt("Enter the product price:"));
// var stock = parseInt(prompt("Enter the stock quantity:"));
// var inStock = stock > 0;
// var isMember = confirm("Are you a member?");
// if (price > 1000 && inStock && isMember) {
//   console.log("Buy now with discount");
// } else if (inStock) {
//   console.log("Buy now");
// } else if (stock === 0) {
//   console.log("Out of stock");
// } else {
//   console.log("Invalid product");
// }
// ==============================================
// Q7...
// var hours = parseInt(prompt("Enter hours worked:"));
// var isWeekend = confirm("Is it the weekend?");
// if (hours > 40 && !isWeekend) {
//   console.log("Overtime");
// } else if (hours > 0 && isWeekend) {
//   console.log("Weekend work");
// } else if (hours <= 40 && hours > 0) {
//   console.log("Regular hours");
// } else if (hours === 0) {
//   console.log("No work");
// }
// ==============================================
// Q8...
// var age = parseInt(prompt("Enter age:"));
// var gender = prompt("Enter gender (male/female):");
// if (age >= 13 && age <= 19 && gender === "male") {
//   console.log("Teen Male");
// } else if (age >= 13 && age <= 19 && gender === "female") {
//   console.log("Teen Female");
// } else if (age >= 20) {
//   console.log("Adult");
// } else if (age < 13) {
//   console.log("Child");
// }

// ==============================================
// Q9...
// var temp = parseFloat(prompt("Enter temperature:"));
// var humidity = parseFloat(prompt("Enter humidity:"));
// if (temp >= 40 && humidity >= 60) {
//   console.log("Heatwave Alert");
// } else if (temp >= 40 && humidity < 60) {
//   console.log("Hot and Dry");
// } else if (temp <= 20) {
//   console.log("Cool Weather");
// } else {
//   console.log("Moderate");
// }

// ==============================================
// Q10...
// var score = parseInt(prompt("Enter score (0-100):"));
// if (score >= 90 && score <= 100) {
//   console.log("Excellent");
// } else if (score >= 70 && score < 90) {
//   console.log("Good");
// } else if (score >= 50 && score < 70) {
//   console.log("Average");
// } else if (score >= 30 && score < 50) {
//   console.log("Poor");
// } else if (score >= 0 && score < 30) {
//   console.log("Fail");
// } else {
//   console.log("Invalid Score");
// }

// ==============================================
// Q11...
// var isLoggedIn = confirm("Are you logged in?");
// var isEnrolled = confirm("Are you enrolled?");
// var isBanned = confirm("Are you banned?");
// if (!isLoggedIn) {
//   console.log("Please log in");
// } else if (isBanned) {
//   console.log("User is banned");
// } else if (!isEnrolled) {
//   console.log("Enroll in course first");
// } else {
//   console.log("Access granted");
// }

// ==============================================
// Q12...
// var speed = parseInt(prompt("Enter your speed:"));
// var hasLicense = confirm("Do you have a driving license?");
// if (speed > 120) {
//   console.log("License suspended");
// } else if (speed >= 100 && speed <= 120) {
//   console.log("Warning");
// } else if (speed <= 100 && hasLicense) {
//   console.log("Normal driving");
// } else {
//   console.log("Driving without license");
// }

// ==============================================
// Q13...
// var paymentComplete = confirm("Is the payment complete?");
// var isShipped = confirm("Is the order shipped?");
// var paymentPending = confirm("Is the payment pending?");
// var transactionFailed = confirm("Did the transaction fail?");
// if (paymentComplete && isShipped) {
//   console.log("Order on the way");
// } else if (paymentComplete && !isShipped) {
//   console.log("Preparing your order");
// } else if (paymentPending) {
//   console.log("Awaiting payment");
// } else if (transactionFailed) {
//   console.log("Payment failed");
// }

// ==============================================
// Q14...
// var level = parseInt(prompt("Enter battery level (0–100):"));
// var charging = confirm("Is it charging?");
// if (level === 100) {
//   console.log("Fully Charged");
// } else if (level < 100 && charging) {
//   console.log("Charging...");
// } else if (level < 20 && !charging) {
//   console.log("Low Battery");
// } else {
//   console.log("Battery OK");
// }

// ==============================================
// Q15...
// var browser = prompt("Enter your browser:");
// var device = prompt("Enter your device (Desktop/Mobile):");
// if (browser === "Chrome" && device === "Desktop") {
//   console.log("Full features enabled");
// } else if (browser === "Chrome" && device === "Mobile") {
//   console.log("Limited mobile features");
// } else {
//   console.log("Please switch to Chrome");
// }

    
    
    
    
    


    
    