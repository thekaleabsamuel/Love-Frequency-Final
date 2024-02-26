const songs = [
    {
        artwork : "https://i.postimg.cc/ZqPBhrJT/sparkle-3.png",
        title : "01. Road Rage",
        MP3 : "https://dl.sndup.net/b9px/ROAD%20RAGE.mp3",
        artist : "Produced By Reezy Keys"

    },
    
    {artwork : "https://i.postimg.cc/Bn4P841t/jaded.png",
        title : "02. Jaded",
        MP3 : "https://dl.sndup.net/ywvy/JADED.mp3",
        artist : "Produced By Reezy Keys"
    },

        {artwork : "https://i.postimg.cc/XYLLq2XS/unknown.png",
        title : "03. Unknown",
        MP3 : "https://dl.sndup.net/syqp/UNKNOWN.mp3",
        artist : "Produced By Reezy Keys",

        },

        {artwork : "https://i.postimg.cc/j5y40KwT/sometimes.png",
        title : "04. Sometimes",
        MP3 : "https://dl.sndup.net/nv84/SOMETIMES.mp3",
        artist : "Produced By Reezy Keys",

        },

        {artwork : "https://i.postimg.cc/zv6V4ytF/honest-bear-full-gradient.png",
        title : "05. Honest ",
        MP3 : "https://dl.sndup.net/q7g2/HONEST.mp3",
        artist : "Produced By Reezy Keys",

        },

        {artwork : "https://i.postimg.cc/T1yfZG4V/pretty-pls-cover.png",
        title : "06. Higher ",
        MP3 : "https://dl.sndup.net/h96k/HIGHER.mp3",
        artist : "Produced By Reezy Keys",

        },

        {artwork : "https://i.postimg.cc/Yqg063Gv/Serious.png",
        title : "07. Serious ",
        MP3 : "https://dl.sndup.net/czdp/SERIOUS.mp3",
        artist : "Produced By Reezy Keys",

        },

        {artwork : "https://i.postimg.cc/76TpXCW0/gorgous-cover.png",
        title : "08. Gorgeous ",
        MP3 : "https://dl.sndup.net/czdp/SERIOUS.mp3",
        artist : "Produced By Reezy Keys",
    

        },

        {artwork : "https://i.postimg.cc/8cdh0VKY/respond.png",
        title : "09. Respond ",
        MP3 : "https://dl.sndup.net/g87y/RESPOND.mp3",
        artist : "Produced By Reezy Keys",

        },


]

const main = document.querySelector("#blog-posts")

console.log (main)

songs.forEach (
    (song)=>{
        console.log (song)
        const div = document.createElement ("div")
        const h1 = document.createElement ("h1")
        const p = document.createElement ("p")
        const img = document.createElement ("img")
        const mp3 = document.createElement ("audio")
        mp3.controls = true
        mp3.src = song.MP3
        h1.textContent = song.title
        p.textContent = song.artist
        img.src = song.artwork
        div.append (h1, p, img, mp3)
        main.append (div)
    }
)





// document.addEventListener('DOMContentLoaded', function() {
//     const uploadButton = document.getElementById('upload-button');

//     uploadButton.addEventListener('click', function() {
//         const titleInput = document.getElementById('post-title');
//         const imageInput = document.getElementById('post-image');

//         const title = titleInput.value.trim();
//         const imageLink = imageInput.value.trim();

//         if (title && imageLink) {
//             addPostToHomePage(title, imageLink);
//             alert('Post uploaded successfully!');
//         } else {
//             alert('Please fill in both title and image link fields.');
//         }
//     });

//     function addPostToHomePage(title, imageLink) {
//         const blogPostsContainer = document.getElementById('blog-posts');

//         const postElement = document.createElement('div');
//         postElement.classList.add('blog-post');

//         postElement.innerHTML = `
//             <h1>${title}</h1>
//             <img src="${imageLink}" alt="${title}">
//         `;

//         blogPostsContainer.appendChild(postElement);
//     }
// });
