import React, { useState } from 'react'

function Article ({ articleKey, title, date = "January 1, 1970", preview, time }) {
    console.log(time)
    function emojiTime (time) {
        let emoji = ""
        if (time <= 30) {
            let emojiCount = time/5
            for (let x=0;x<emojiCount;x++) {
                emoji = emoji + "☕️";
            }
            return emoji;

        } else {
            let emojiCount = time/10
            for (let x=0;x<emojiCount;x++) {
                emoji = emoji + "🍱"
            }
            return emoji;
        }
    
        }

    return (
        <article key={articleKey}>
            <h3>{title}</h3>
            <small>{date}----{time}{emojiTime(time)}</small>
            <p>{preview}</p>
        </article>
    )

}

export default Article