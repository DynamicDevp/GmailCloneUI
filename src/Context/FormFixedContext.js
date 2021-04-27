import React, { useState , createContext, useContext } from 'react'

const FormContext = createContext({
    show: false,
    setShow: () => {}
})

const FormProvider = ({children}) => {
    const[show, setShow] = useState(false)
    const ShowForm= () => setShow(!show)
    const state = {
        show,
        setShow,
        ShowForm
    }
    return (
        <FormContext.Provider value = {state}>
            {children}
        </FormContext.Provider>
    )
}

const useForm = () => {
    const context = useContext(FormContext)
    return context
}

export { FormProvider , useForm } 