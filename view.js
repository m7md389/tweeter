const Renderer = function() {

    const renderPosts = function(posts) {
        $('.main-posts-container').empty()
        const postsElement = addPosts(posts)
        $('.main-posts-container').append(postsElement)

    }

    const addPosts = function(posts) {
        let postElement = ``

        for (post of posts) {
            postElement += `<div class="post-container" data-id=${post['id']}>` //// open <post-container>

            postElement += `<h4 class="post-text">${post['text']}</h4>`

            postElement += `<div class="main-comments-container">` //// open <main-comments-container>
            for (comment of post['comments']) {
                postElement += `<div class="comment-container" data-id=${comment['id']}>` //// open <comment-container>
                postElement += `<img class="comment-x" src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Red_x.svg">`
                postElement += `<p class="comment-text">${comment['text']}</p>`
                postElement += `</div>` //// close <comment-container>
            }
            postElement += `</div>` //// close <main-comments-container>

            postElement += `<div class="add-comment-container">` //// open <add-comment-container>
            postElement += `<input class="new-comment-input" type="text" name="post" placeholder="Got something to say?">`
            postElement += `<input class="comment-button" type="submit" value="Comment">`
            postElement += `</div>` //// close <add-comment-container>

            postElement += `<input type="submit" class="delete-button" value="Delete Post">`
            postElement += `</div>` //// close <post-container>
        }

        return postElement
    }

    return {
        renderPosts: renderPosts
    }
}