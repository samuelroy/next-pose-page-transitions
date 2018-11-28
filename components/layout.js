import Link from 'next/link'
  
export default({children}) => (
    <div id="site-container">
        <style jsx global>{`
            *
                padding: 0
                margin: 0
                font-family: 'PT Sans', sans-serif
                box-sizing: border-box

            body
                margin: 0
                padding: 10px
                background-image: linear-gradient(#7669dc,#00f690)
                min-height: 150vh

            header
                margin-bottom: 40px

            #site-container
                background: white
                padding: 20px
                min-height: calc(100vh - 20px)

            #content-container
                display: flex
                flex-direction: row

            ul
                list-style: none

            ul#site-nav
                flex: 0 0 120px

            li
                margin-bottom: 10px

            h2
                margin-bottom: 30px

            p
                margin-bottom: 20px
            
            a
                font-weight bold
        `}</style>
        <header>
            <h1>Page transitions with Pose and Next.js</h1>
        </header>
        <div id="content-container">
            <ul id="site-nav">
                <li>
                <Link href="/"><a>Home</a></Link>
                </li>
                <li>
                <Link href="/about"><a>About</a></Link>
                </li>
            </ul>
            <div>
                {children}
            </div>
        </div>
    </div>
)
  