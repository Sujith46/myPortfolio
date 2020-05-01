import React from 'react' 

const Container = ({children}) => {
    return (
        <div className="container" style={{
            maxWidth: `800px`,
            margin: `0 auto`

        }}>
            {children}
        </div>
    )
}

export default Container;
