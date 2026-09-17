import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import constants from '$lib/constants';

export const GET: RequestHandler = () => {
	redirect(302, constants.RESUME_URL);
};
