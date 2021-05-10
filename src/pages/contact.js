import * as React from "react"

const Contact = () => {
    return (
        <>
            <div>
                <div>
                    <h1>Contact</h1>
                    <p>お気軽にご連絡ください</p>
                    <form>
                        <labe htmlFor="name">お名前</labe>
                        <input type="text" name="name" id="name"></input>
                        <textarea name="message" row="10" id="text"></textarea>
                        <button type="submit">送信</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact