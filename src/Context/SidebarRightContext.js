import React, { useState , createContext, useContext } from 'react'

const SidebarRightContext = createContext({
    sidebar: false,
    setSidebar: () => {}
})

const SidebarRightProvider = ({children}) => {
    const[sidebar, setSidebar] = useState(false)
    const ShowSidebarR = () => setSidebar(!sidebar)
    const state = {
        sidebar,
        setSidebar,
        ShowSidebarR
    }
    return (
        <SidebarRightContext.Provider value = {state}>
            {children}
        </SidebarRightContext.Provider>
    )
}

const useSidebarRight = () => {
    const context = useContext(SidebarRightContext)
    return context
}

export { SidebarRightProvider , useSidebarRight } 