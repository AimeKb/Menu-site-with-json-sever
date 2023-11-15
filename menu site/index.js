const container = document.querySelector ('.blogs');

const renderPosts = async () => {
let uri = 'http://localhost:3000/posts';

const res = await fetch(uri); 
    const posts = await res.json();
    
    let template = '';
    posts.forEach(post => {
        template += `
        <div class="post">
        <h4>${post.title}</h4>
        <p>${post.body.slice(0, 200)} </p>
        <p>${post.price} </p>
        <p><small><u>${post.orders} orders</u> </small></p>
        <a href="/details.html?id=${post.id}">Order here </a>
        </div>
        `   
    }

    )

container.innerHTML = template;

}


window.addEventListener('DOMContentLoaded', () => renderPosts());
    