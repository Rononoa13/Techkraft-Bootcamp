const URL = "https://inshortsapi.vercel.app/news?category=all"


fetch(URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        displayAuthor(data.data);
        displayTitle(data.data);
        displayContent(data.data);
        displayDate(data.data);
        displayImage(data.data);
    })

const blogContainer = document.querySelector('blog-container')

const displayAuthor = (authorResults) => {
    for (let i = 0; i < 7; i++) {
        // console.log(authorResults[i].author)
        const author = document.querySelector('.author')
        author.innerHTML = authorResults[i].author
         
    }
}

let displayTitle = (titleResults) => {
    for (let i = 0; i < 7; i++) {
        // console.log(titleResults[i].title)
        const title = document.querySelector('.title')
        title.innerHTML = titleResults[i].title
        blogContainer.appendChild(title)
    }
}

let displayContent = (contentResult) => {
    for (let i = 0; i < 7; i++) {
        // console.log(contentResult[i].content)
        const content = document.querySelector('.content')
        content.innerHTML = contentResult[i].content
        blogContainer.appendChild(content)
    }
}

let displayDate = (dateResult) => {
    for (let i = 0; i < 7; i++) {
        console.log(dateResult[i].date)
    }
}

let displayImage = (dateResult) => {
    for (let i = 0; i < 7; i++) {
        // console.log(dateResult[i].imageUrl)
        const blogImage = document.querySelector('.blog-image')
        blogImage.innerHTML = dateResult[i].imageUrl
        blogContainer.appendChild(imageUrl)
    }
}

// 
