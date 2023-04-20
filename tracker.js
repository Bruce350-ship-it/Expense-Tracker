// Define an array to hold the expenses
const expenses = [];

// Function to add an expense
function addExpense() {
	// Get the input values for the name, amount, and date
	const name = document.getElementById('name').value;
	const amount = Number(document.getElementById('amount').value);
	const date = document.getElementById('date').value;

	// Create an expense object with the input values
	const expense = {name, amount, date};

	// Add the expense object to the expenses array
	expenses.push(expense);

	// Update the expense list and total
	updateExpenseList();
	updateTotal();
}

// Function to update the expense list in the HTML
function updateExpenseList() {
	// Get the expense list element from the HTML
	const expenseList = document.getElementById('expense-list');

	// Clear the existing content of the expense list
	expenseList.innerHTML = '';

	// Loop through the expenses array and add each expense to the HTML
	expenses.forEach(expense => {
		const row = document.createElement('tr');
		row.innerHTML = `
			<td>${expense.name}</td>
			<td>${expense.amount}</td>
			<td>${expense.date}</td>
		`;
		expenseList.appendChild(row);
	});
}

// Function to update the total amount in the HTML
function updateTotal() {
	// Get the total element from the HTML
	const total = document.getElementById('total');

	// Create an array of amounts from the expenses array
	const amountArray = expenses.map(expense => expense.amount);

	// Calculate the total amount by adding up the amounts in the array
	const totalAmount = amountArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

	// Update the total element in the HTML with the calculated total amount
	total.textContent = totalAmount;
}

// Add an event listener to the form to call the addExpense function when the form is submitted
document.querySelector('form').addEventListener('submit', function(event) {
	event.preventDefault();
	addExpense();
});