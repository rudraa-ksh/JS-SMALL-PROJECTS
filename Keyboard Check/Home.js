const insert = document.querySelector("div")
window.addEventListener("keydown",function (e) {
    insert.innerHTML = `
    <div class="color">
        <table>
        <tr>
            <th>Key</th>
            <th>Keycode</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>${e.key === " " ? "Space":e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
        </table>
    </div>
    `
})