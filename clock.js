document.addEventListener('DOMContentLoaded', function() {
var clock = document.getElementById('clock');
if (!clock) return;
function update() {
var now = new Date();
var moscow = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Moscow' }));
var h = String(moscow.getHours()).padStart(2, '0');
var m = String(moscow.getMinutes()).padStart(2, '0');
var s = String(moscow.getSeconds()).padStart(2, '0');
clock.textContent = h + ':' + m + ':' + s;
}
update();
setInterval(update, 1000);
});