const posts = [{
    id: 0,
    title: 'Title text 1',
    text: 'Some text 1',
    user: {
        id: 0,
        name: 'user 1',
    },
}, {
    id: 1,
    title: 'Title text 2',
    text: 'Some text 2',
    user: {
        id: 1,
        name: 'user 2',
    },
}, {
    id: 2,
    title: 'Title text 3',
    text: 'Some text 3',
    user: {
        id: 0,
        name: 'user 1',
    },
}, {
    id: 3,
    title: 'Title text 4',
    text: 'Some text 4',
    user: {
        id: 2,
        name: 'user 3',
    },
}, {
    id: 4,
    title: 'Title text 5',
    text: 'Some text 5',
    user: {
        id: 0,
        name: 'user 1',
    },
}]

let groupedPosts = [];
let processedUserId = [];

for (let i = 0; i < posts.length; i++) {
    const { id } = posts[i].user

    if (!processedUserId.includes(id)) {
        groupedPosts.push({
            id: posts[i].user.id,
            name: posts[i].user.name,
            posts: []
        })

        for (let j = 0; j < posts.length; j++) {
            if (posts[j].user.id == id) {
                groupedPosts[groupedPosts.length - 1].posts.push({ id: posts[j].id, title: posts[j].title, text: posts[j].text })
            }
        }
        processedUserId.push(id);
    }
}

console.log("Было: ")
console.log(posts)
console.log("Стало: ")
console.log(groupedPosts)

document.body.innerHTML += "<b>Было</b>: <br>" + JSON.stringify(posts) + "<br>"
document.body.innerHTML += "<b>Стало</b>: <br>" + JSON.stringify(groupedPosts)