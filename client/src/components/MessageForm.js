import React, { useState } from 'react';
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const NEW_MESSAGE = gql`
    mutation post_message($title: String!, $content: String!, $author: String!){
        newMessage(title: $title, content: $content, author: $author){
            author
            _id
        }
    }
`

const MessageForm = () => {
    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [post_message] = useMutation(NEW_MESSAGE)

    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit = {async e => {
                            e.preventDefault();
                            await post_message({variables: {
                                title,
                                content,
                                author
                            }})
                            window.location.href = "/"
                        }}>
                            <div className="form-group">
                                <input type="text"
                                    placeholder="Author"
                                    className="form-control"
                                    value = {author}
                                    onChange = {e => setAuthor (e.target.value)} />
                            </div>
                            <div className="form-group">
                                <input type="text"
                                    placeholder="Title"
                                    className="form-control" 
                                    value = {title}
                                    onChange = {e => setTitle (e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <input type="text"
                                    placeholder="Content"
                                    className="form-control" 
                                    value = {content}
                                    onChange = {e => setContent (e.target.value)}/>
                            </div>
                            <button className="btn btn-primary btn-block">
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MessageForm