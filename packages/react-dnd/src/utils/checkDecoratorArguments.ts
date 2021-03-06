declare var process: any

export default function checkDecoratorArguments(
	functionName: string,
	signature: string,
	...args: any[]
) {
	if (process.env.NODE_ENV !== 'production') {
		for (const arg of args) {
			if (arg && arg.prototype && arg.prototype.render) {
				// tslint:disable-next-line no-console
				console.error(
					'You seem to be applying the arguments in the wrong order. ' +
						`It should be ${functionName}(${signature})(Component), not the other way around. ` +
						'Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#you-seem-to-be-applying-the-arguments-in-the-wrong-order',
				)
				return
			}
		}
	}
}
