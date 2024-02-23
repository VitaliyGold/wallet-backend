import { AppError } from "./types";

const errorConstructor = (title: string, message: string): AppError => {
    return {
        title,
        message,
    }
}

export {
    errorConstructor,
}