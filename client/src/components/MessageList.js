import React from 'react'
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_MESSAGES = gql`
    {
        messages{
            author
            title
            content
            _id
        }
    }
`

const MessageList = () => {

    const {loading, error, data} = useQuery(GET_MESSAGES)
    if(loading) return <p>Loading....</p>
    if(error) return <p>Error</p>
    console.log(data)
    return (
        <div className="row">
            <div className = "col-md-6 offset-md-3">
                {
                    data.messages.map(({_id, author, title, content}) => (
                        <div key= {_id} className = "card m-2">
                            <div className = "card-body">
                                <h4>{title}</h4>
                                <p>{content}</p>
                                <p>{author}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export default MessageList