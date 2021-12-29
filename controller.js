const tweeter = Tweeter()
const renderer = Renderer()

const refresh = () => renderer.renderPosts(tweeter.getPosts())
refresh()

$('#twit-button').on('click', function() {
    const postText = $('#new-post-input').val()
    if (postText.replace(/\s/g, '')) {
        $('#new-post-input').val('')
        tweeter.addPost(postText)
    }
    refresh()
})

$('.main-posts-container').on('click', '.comment-button', function() {
    const commentText = $(this).closest('.add-comment-container').find('.new-comment-input').val()
    if (commentText.replace(/\s/g, '')) {
        tweeter.addComment(commentText, $(this).closest('.post-container').data('id'))
    }

    refresh()
})

$('.main-posts-container').on('click', '.comment-x', function() {
    const postID = $(this).closest('.post-container').data('id')
    const commentID = $(this).closest('.comment-container').data('id')
    tweeter.removeComment(postID, commentID)

    refresh()
})

$('.main-posts-container').on('click', '.delete-button', function() {
    const postID = $(this).closest('.post-container').data('id')
    tweeter.removePost(postID)

    refresh()
})