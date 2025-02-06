import React from 'react';
import logo from './assets/logo-dark (2).png'
import menuBtn from './assets/menu (2).png'
import reject from './assets/reject.png'
import search from './assets/search-interface-symbol.png'
import cart from './assets/add-to-basket.png'
import call from './assets/telephone.png'

function Header(props) {
    const [isPressed, setIsPressed] = React.useState(false);
    const [screenSize, setScreenSize] = React.useState(window.innerWidth)

    const [link, setLink] = React.useState(
        [
            {
                position: false,
                id: "home",
            },
            {
                position: false,
                id: "menu",
            },
            {
                position: false,
                id: "pages",
            },
            {
                position: false,
                id: "blog",
            },
            {
                position: false,
                id: "shop",
            },
        ]
    )

    const linkBtn = (id) => {
        setLink(prev => {
            return prev.map(data => {
                return data.id === id ? 
                {
                    position: true,
                    id: data.id,
                } : {position: false, id: data.id,}
            })
        })
    }

    React.useEffect(() => {
        const handle = () => {
            setScreenSize(window.innerWidth)

            if (window.innerWidth > 1023) {
                setIsPressed(false)
                document.body.style.overflow = "auto"
            }
        }

        window.addEventListener("resize", handle)

        return () => {
            window.removeEventListener("resize", handle)
        }
    }, [])

    const menu = () => {
        setIsPressed(prev => !prev)
        document.body.style.overflow = isPressed ? "auto" : "hidden"
        setLink(prev => {
            return prev.map(data => {
                return {position: false, id: data.id}
            })
        })
    }

    let linkStyle = `font-medium text-gray-950 cursor-pointer active:opacity-70`
    
    const linkFunction = (name, num, title) => {
        return (
            <div onClick={() => {
                linkBtn(name)
            }} className={`border-2 lg:border-0 border-borderColor ${link[num].position ? "bg-active lg:bg-inherit" : null} flex justify-between p-2`}>
                <a className={`${linkStyle} ${link[num].position ? "text-textColor" : null } lg:text-inherit`} href="#">{title}</a>
                <p className={`lg:hidden ${link[num].position ? "text-textColor" : null } font-medium text-xl`}>+</p>
            </div>
        )
    }

    const options = () => {
        return (
            <>
                <div className={` ${!isPressed ? "-translate-y-full" : "translate-y-0"}  fixed left-0 right-0 transition-transform ease-in-out duration-300 -z-20 flex flex-col
                bg-bgColor
                
                lg:relative
                lg:translate-y-0
                lg:left-auto
                lg:right-auto
                lg:z-auto
                lg:flex-row
                lg:bg-transparent
                lg:border-0

                `}>
                    {linkFunction("home", 0, "HOME")}
                    {linkFunction("menu", 1, "MENU")}
                    {linkFunction("pages", 2, "PAGES")}
                    {linkFunction("blog", 3, "BLOG")}
                    {linkFunction("shop", 4, "SHOP")}
                </div>
            </>
        )
    }

    const logoIcon = () => {
        return (
            <>
                <div className='flex items-center justify-between z-20 bg-background p-2

                lg:bg-background
                lg:flex
                lg:w-3/12
                lg:max-w-52
                lg:p-0
                lg:items-center
                lg:justify-center
                '>
                    <img
                    className='w-4/12
                    max-w-32
                    lg:w-full
                    lg:max-w-none
                    '
                    src={logo} />

                    <div className='flex lg:hidden items-center justify-end gap-3.5 w-24'>
                        <img  className='w-3/12 max-w-16 cursor-pointer active:opacity-70 lg:hidden' src={search} />
                        <button onClick={menu} className='w-4/12 max-w-16  lg:hidden'>
                            <img src={isPressed ? reject : menuBtn} />
                        </button>
                    </div>

                </div>
            </>
        )
    }

    const HeaderSide = () => {
        return (
            <div className=' 
            flex
            items-center
            justify-between
            gap-4
            '>
                <div className='flex gap-2 items-center'>
                    <div className='flex items-center justify-end'>
                        <img  className='w-6/12 cursor-pointer active:opacity-70 max-w-16' src={call} />
                    </div>
                    <div>
                        <p
                        className='text-gray-600 font-semibold'
                        >HOTLINE:</p>
                        <p
                        className='font-bold'
                        >+304-779-645</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <img  className='w-1/4 cursor-pointer active:opacity-70 max-w-16' src={cart} />
                    <img  className='w-1/5 max-w-10 ml-3 cursor-pointer active:opacity-70' src={search} />
                </div>
            </div>
        )
    }

    return (
        <>
        <div className='sticky top-0 left-0 right-0 bg-background
    
        lg:flex
        lg:items-center
        lg:justify-around
        lg:gap-2
        lg:py-5
        z-50
        border-b-[1px]
        border-[#ff6803]
        border-opacity-20
        '>

            {/* <p className='fixed text-2xl font-bold bg-white p-2 px-4 rounded-xl border-2 border-gray-950 bottom-2 left-2'>{screenSize}</p> */}

        

            {screenSize < 1024 ? 
                <>{logoIcon()}{options()}</> :
                <div className=' bg-background w-full flex items-center justify-around max-w-screen-2xl'>
                    {options()}
                    {logoIcon()}
                    {HeaderSide()}
                </div>
            }
        </div>
        </>
    );
}

export default Header;