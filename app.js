const tabs = document.querySelectorAll('.tab');
const content = document.getElementById('tab-content');

const texts = [
  "A light scan with the Website Vulnerability Scanner runs...",
  "A deep scan performs a full vulnerability assessment...",
  "Use CLI scan to automate tasks via terminal..."
];

function showContent(index) {
  tabs.forEach(tab => tab.classList.remove('active'));
  tabs[index].classList.add('active');
  content.textContent = texts[index];
}
