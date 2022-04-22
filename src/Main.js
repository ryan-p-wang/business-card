export default function Main() {
    return (
        <main>
            <h1 className="main-title">Ryan Wang</h1>
            <h3 className="main-subtitle">Incoming First-Year Student @ Yale</h3>
            
            <div className="contacts">
                <a href="mailto: ryan.wang.mi@gmail.com" target="_blank">
                    <button type="button">
                        <img src={require("./email.png")} width="20px" />
                        <h4>Email</h4>
                    </button>
                </a>

                <a href="https://www.linkedin.com/in/ryan-wang-a818211b1/" target="_blank">
                    <button type="button" className="linkedin">
                        <img src={require("./linkedin.png")} width="20px" />
                        <h4>LinkedIn</h4>
                    </button>
                </a>
            </div>

            <h2>About</h2>
            <p>
                I'm an incoming first-year student currently learning web development.
                 As of right now, I plan on double majoring in computer science + economics 
                 and applied mathematics. I'm deeply interested in finance and public policy 
                 and am considering pursuing a career related to these fields. In my free 
                 time, I love playing tennis and binge-watching sci-fi shows.
            </p>
        </main>
    )
}