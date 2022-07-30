
interface ErrorMessageProps {
    error: string
}

export function ErrorMessage({error}: ErrorMessageProps) {
    return (
        <h1 className='text-center text-red-600' >{error}</h1>
    )
}
