import { email, minLength, object, string } from 'valibot';

export const contactForm = object({
	email: string([email()]),
	subject: string([minLength(5)]),
	message: string([minLength(10)])
});