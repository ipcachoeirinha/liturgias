export function RevealJsBaseElement({ children }) {
    return <div className="reveal">
        <div className="slides">
            {children}
        </div>
    </div>
}