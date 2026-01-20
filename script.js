let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

const list = document.getElementById("list");
const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");
const balanceEl = document.getElementById("balance");

function addTransaction() {
  const title = document.getElementById("title").value;
  const amount = +document.getElementById("amount").value;
  const type = document.getElementById("type").value;

  if (!title || !amount) return alert("Fill all fields");

  transactions.push({ title, amount, type });
  localStorage.setItem("transactions", JSON.stringify(transactions));

  document.getElementById("title").value = "";
  document.getElementById("amount").value = "";

  render();
}

function render() {
  list.innerHTML = "";
  let income = 0, expense = 0;

  transactions.forEach(t => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <span>${t.title}</span>
      <span>₹${t.amount}</span>
    `;
    list.appendChild(div);

    t.type === "income" ? income += t.amount : expense += t.amount;
  });

  incomeEl.innerText = income;
  expenseEl.innerText = expense;
  balanceEl.innerText = income - expense;
}

render();
