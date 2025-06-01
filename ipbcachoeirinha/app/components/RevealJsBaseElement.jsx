export function RevealJsBaseElement({ children, ref }) {
    return <div className="reveal" ref={ref}>
        <div className="slides">
            {children}
        </div>
    </div>
}