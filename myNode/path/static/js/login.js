let username = document.getElementById('username')
let password = document.getElementById('password')
let get = document.getElementById('get')
let post = document.getElementById('post')
get.onclick = () => {
    fetch(`/api/getLogin?username=${username.value}&password=${password.value}`)
        .then(res => res.json())
        .then(res => {
            console.log(res)
        })
}
post.onclick = () => {
    fetch(`/api/postLogin`,{
        method: 'POST',
        body: JSON.stringify({
            username: username.value,
            password: password.value
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.text()).then(res => {
        console.log(JSON.stringify(res))
    })
    //     .catch((error) => {
    //     console.error('Error:', error);
    // });
}
