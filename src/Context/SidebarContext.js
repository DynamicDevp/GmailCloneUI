import React, { useState , createContext, useContext } from 'react'

const SidebarContext = createContext({
    sidebar: false,
    setSidebar: () => {}
})

const SidebarProvider = ({children}) => {
    const[sidebar, setSidebar] = useState(false)
    const ShowSidebar = () => setSidebar(!sidebar)
    const state = {
        sidebar,
        setSidebar,
        ShowSidebar
    }
    return (
        <SidebarContext.Provider value = {state}>
            {children}
        </SidebarContext.Provider>
    )
}

const useSidebar = () => {
    const context = useContext(SidebarContext)
    return context
}

export { SidebarProvider , useSidebar } 