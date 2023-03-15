// const URL = 'https://picsum.photos/id/1084/536/354?grayscale'

// document.getElementById("id-of-img-tag").src = URL;
// Dummy Data

const blogData = [
    {
    "author": "Anmol Sharma",
    "content": "The ICC on Wednesday released the latest rankings for Test batters, with India's Virat Kohli jumping seven spots following his first hundred after 1,204 days. Kohli is now ranked 13th. Rishabh Pant (ninth) and Rohit Sharma (10th) are the only Indian players ahead of him in the rankings. Axar Patel also jumped eight spots and is now ranked 44th.",
    "date": "15 Mar 2023,Wednesday",
    "id": "20e59a9dcdd440598a4c2a1bdb293fb9",
    "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/03_mar/15_wed/img_1678870368832_567.jpg?",
    "readMoreUrl": "https://www.icc-cricket.com/news/3110638?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
    "time": "02:50 pm",
    "title": "Latest rankings for Test batters released, Virat Kohli jumps 7 spots",
    "url": "https://www.inshorts.com/en/news/latest-rankings-for-test-batters-released-virat-kohli-jumps-7-spots-1678872040246"
    },
    {
    "author": "Ankush Verma",
    "content": "Reacting to a tweet about OpenAI's GPT-4 passing various exams, Elon Musk wrote, \"What will be left for us humans to do?\" OpenAI on Tuesday announced the launch of a more powerful version of the artificial intelligence-based chatbot. OpenAI's Co-founder Sam Altman said it was the \"most capable and aligned model yet\".",
    "date": "15 Mar 2023,Wednesday",
    "id": "0e5d713bba584aff980d9e2e3bac60ac",
    "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/03_mar/15_wed/img_1678869048387_2.jpg?",
    "readMoreUrl": "https://twitter.com/elonmusk/status/1635694914930614272?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
    "time": "02:34 pm",
    "title": "What will be left for us humans to do?: Elon Musk on AI chatbot GPT-4 passing exams",
    "url": "https://www.inshorts.com/en/news/what-will-be-left-for-us-humans-to-do-elon-musk-on-ai-chatbot-gpt4-passing-exams-1678871086915"
    },
    {
    "author": "Nidhi Sinha",
    "content": "An RJD MLA offered ladoos to BJP MLAs after RJD supremo Lalu Prasad Yadav and his wife Rabri Devi were granted bail in the land-for-jobs scam. A video showed sweets being thrown outside Bihar Assembly as leaders of the two parties engaged in an altercation. \"On the pretext of offering ladoos, they [were]...throwing things,\" BJP MLA Vijay Kumar Sinha alleged.",
    "date": "15 Mar 2023,Wednesday",
    "id": "a12abeda1be14ebc9ba0f851110f74f5",
    "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/03_mar/15_wed/img_1678868219753_612.jpg?",
    "readMoreUrl": "https://www.latestly.com/socially/india/news/watch-bihar-ladoos-were-thrown-as-rjd-bjp-mlas-enter-into-a-scuffle-at-the-state-latest-tweet-by-ani-4949150.html/amp?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
    "time": "02:10 pm",
    "title": "Video shows ladoos being thrown as BJP, RJD MLAs clash outside Bihar Assembly",
    "url": "https://www.inshorts.com/en/news/video-shows-ladoos-being-thrown-as-bjp-rjd-mlas-clash-outside-bihar-assembly-1678869647118"
    },
    {
    "author": "Subhangi Singh",
    "content": "Leaders of several opposition parties took out a protest march on Wednesday from Parliament to Enforcement Directorate (ED) office demanding a probe into the Adani issue. However, NCP and TMC did not participate in the march. Meanwhile, Delhi Police beefed up security outside the ED office and warned leaders of action if they do not call off the protest.",
    "date": "15 Mar 2023,Wednesday",
    "id": "2e2113ab608047ec966b9b10db96f7e8",
    "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/03_mar/15_wed/img_1678868796132_41.jpg?",
    "readMoreUrl": "https://aninews.in/news/national/politics/opposition-leaders-take-out-protest-march-from-parliament-to-ed-office-on-adani-issue20230315130604/?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
    "time": "02:14 pm",
    "title": "Opposition MPs march from Parliament to ED office over Adani issue",
    "url": "https://www.inshorts.com/en/news/opposition-mps-march-from-parliament-to-ed-office-over-adani-issue-1678869879304"
    },
    {
        "author": "Ankush Verma",
        "content": "Jailed gangster Lawrence Bishnoi has asked actor Salman Khan to apologise for killing a blackbuck, saying the actor \"humiliated his community\". \"There is anger in my mind for him since childhood. Will break his ego sooner or later. He should come to our deity's temple and apologise. If our society forgives, then I will not say anything,\" Bishnoi said.",
        "date": "15 Mar 2023,Wednesday",
        "id": "620c2045a8b84e04bffe499bae17ca6f",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/03_mar/15_wed/img_1678870328452_957.jpg?",
        "readMoreUrl": "https://www.hindustantimes.com/entertainment/bollywood/salman-khan-told-to-apologise-or-be-ready-for-consequences-as-lawrence-bishnoi-issues-threat-to-actor-101678862290684-amp.html?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
        "time": "02:42 pm",
        "title": "Salman should apologise or I will break his ego sooner or later: Gangster Lawrence",
        "url": "https://www.inshorts.com/en/news/salman-should-apologise-or-i-will-break-his-ego-sooner-or-later-gangster-lawrence-1678871537961"
        }
]
console.log(blogData)

function displayTitle() {
    let title =  document.querySelector('.title')
    title.innerHTML = blogData[0].title
    console.log(title)
}
function displayImage() {
    let imageUrl =  document.querySelector('.id-image')
    imageUrl.src = blogData[0].imageUrl
    console.log(imageUrl)
}
function displayContent() {
    let content =  document.querySelector('.content')
    content.innerHTML = blogData[0].content
    console.log(content)
}
function displayAuthor() {
    let author =  document.querySelector('.author')
    author.innerHTML = "Author : " + blogData[0].author
    console.log(author)
}

function displayDate() {
    let date =  document.querySelector('.date')
    date.innerHTML = "Posted Date : " + blogData[0].date
    console.log(date)
}

displayDate()
displayAuthor()
displayContent()
displayImage()
displayTitle()


// const URL = "https://inshortsapi.vercel.app/news?category=all"


// fetch(URL)
//     .then((response) => { // Extract JSON from the response
//         return response.json(); 
//     })
//     .then((data) => {
//         displayAuthor(data.data);
//         displayTitle(data.data);
//         displayContent(data.data);
//         displayDate(data.data);
//         displayImage(data.data);
//     })

// const blogContainer = document.querySelector('blog-container')

// const displayAuthor = (authorResults) => {
//     for (let i = 0; i < 7; i++) {
//         // console.log(authorResults[i].author)
//         const author = document.querySelector('.author')
//         author.innerHTML = authorResults[i].author
         
//     }
// }

// let displayTitle = (titleResults) => {
//     for (let i = 0; i < 7; i++) {
//         // console.log(titleResults[i].title)
//         const title = document.querySelector('.title')
//         console.log(title)
//         title.innerHTML = titleResults[i].title
//         blogContainer.appendChild(title)
//     }
// }

// let displayContent = (contentResult) => {
//     for (let i = 0; i < 7; i++) {
//         // console.log(contentResult[i].content)
//         const content = document.querySelector('.content')
//         content.innerHTML = contentResult[i].content
//         blogContainer.appendChild(content)
//     }
// }

// let displayDate = (dateResult) => {
//     for (let i = 0; i < 7; i++) {
//         console.log(dateResult[i].date)
//     }
// }

// let displayImage = (dateResult) => {
//     for (let i = 0; i < 7; i++) {
//         // console.log(dateResult[i].imageUrl)
//         const blogImage = document.querySelector('.blog-image')
//         blogImage.innerHTML = dateResult[i].imageUrl
//         blogContainer.appendChild(imageUrl)
//     }
// }

// // 
