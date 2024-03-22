export const useArray = () => {
    const newArray = (lenght: number) => {
        return Array.from({ length: lenght }, (_, i) => i + 1)
    }
    return { newArray }
}
