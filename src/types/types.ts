export type Course = {
    number: string,
    title: string,
    content: Content[]
}

export type Content = {
    number:string,
    description: string,
    images: ImageData[]
}
