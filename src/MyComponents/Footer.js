import React from 'react'

export const Footer = () => {
    let footerStyle={
        position: "absolute",
        width:"100%",
        backgroundColor: "#595f5d",

    }
    return (
        <div className =" text-light py-3 my-3" style={footerStyle}>
            <p className="text-center">
            Copyright &copy; MYTODOS.com
            </p>
        </div>
    )
}
