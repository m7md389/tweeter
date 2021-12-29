const Tweeter = function() {

    const _posts = [{
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    let _postIdCounter = 2

    let _commentIdCounter = 6

    const getPosts = () => _posts

    const addPost = function(twitText) {
        const twit = { 'text': twitText, 'id': `p${++_postIdCounter}`, 'comments': [] }
        _posts.push(twit)
        _postIdCounter++
    }

    const addComment = function(commentText, postID) {
        const comment = { 'id': `c${++_commentIdCounter}`, 'text': commentText }
        for (post of _posts) {
            if (post['id'] === postID) {
                post['comments'].push(comment)
            }
        }
    }

    const removePost = function(postID) {
        for (index in _posts) {
            if (_posts[index]['id'] === postID) {
                _posts.splice(index, 1)
            }
        }
    }

    const removeComment = function(postID, commentID) {
        for (post of _posts) {
            if (post['id'] === postID) {
                for (index in post['comments']) {
                    if (post['comments'][index]['id'] === commentID) {
                        post['comments'].splice(index, 1)
                    }
                }
            }
        }
    }

    return {
        getPosts: getPosts,
        addPost: addPost,
        addComment: addComment,
        removePost: removePost,
        removeComment: removeComment
    }

}



//