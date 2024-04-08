export interface EventJS {
	defaultExitValue(): any

	mapExitValue(value?: any): any

	/**
	 * Cancels the event with default exit value. Execution will be stopped **immediately**.
	 * `cancel` denotes a `false` outcome.
	 * */
	cancel(): any

	/**
	 * Stops the event with default exit value. Execution will be stopped **immediately**.
	 * `success` denotes a `true` outcome.
	 * */
	success(): any

	/**
	 * Stops the event with default exit value. Execution will be stopped **immediately**.
	 * `exit` denotes a `default` outcome.
	 * */
	exit(): any

	/**
	 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
	 * `cancel` denotes a `false` outcome.
	 * */
	cancel(value?: any): any

	/**
	 * Stops the event with the given exit value. Execution will be stopped **immediately**.
	 * `success` denotes a `true` outcome.
	 * */
	success(value?: any): any

	/**
	 * Stops the event with the given exit value. Execution will be stopped **immediately**.
	 * `exit` denotes a `default` outcome.
	 */
	exit(value?: any): any
}

export type EventHandler<T extends EventJS> = (event: T) => void