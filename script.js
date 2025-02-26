document.addEventListener("DOMContentLoaded", function () {
    const transactions = [
        { date: "2025-02-25", description: "Groceries", amount: "$150", type: "Expense" },
        { date: "2025-02-24", description: "Salary", amount: "$3000", type: "Income" }
    ];

    const tableBody = document.querySelector(".transactions table tbody");

    transactions.forEach(trx => {
        const row = `<tr>
            <td>${trx.date}</td>
            <td>${trx.description}</td>
            <td>${trx.amount}</td>
            <td>${trx.type}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
});
