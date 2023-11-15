const id = new URLSearchParams(window.location.search).get("id");
const container = document.querySelector('.body');


const renderBody = async () => {
    const res = await fetch('http://localhost:3000/posts/' + id)
    const post = await res.json();

    const template = `
    <h1>${post.title}</h1>
    `

    container.innerHTML = template;


}

window.addEventListener('DOMContentLoaded', () => renderBody() );