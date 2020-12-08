type Error = null | {
	code: number
	message: string
}

type Payload<T> = null | {
	data: T
}

export type { Error, Payload }