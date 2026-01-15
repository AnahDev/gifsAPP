
interface PropsI {
    title: string,
    description?: string
}

export const CustomHeader = ({ title, description }: PropsI) => {
    return (
        <div className="content-center">
            <h1>{title}</h1>
            {/* condicional , si la desc... existe  */}
            {
                description && <p>{description}</p>
            }
        </div>
    )
}

