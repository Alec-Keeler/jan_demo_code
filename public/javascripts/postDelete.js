console.log('Hello from script file')

const deleteBtns = document.querySelectorAll('.delete-btn')

for (let i = 0; i < deleteBtns.length; i++) {
    const btn = deleteBtns[i];
    btn.addEventListener('click', async(e) => {
        console.log(e.target.id)
        const postId = e.target.id.split('-')[2]
        const res = await fetch(`/posts/${postId}`, {
            method: 'DELETE'
        })

        const data = await res.json()
        console.log(data)
        if (data.message === 'Success') {
            const container = document.getElementById(`post-container-${postId}`)
            container.remove()
        }
    })
}