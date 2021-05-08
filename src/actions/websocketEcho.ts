import { WSECHO_SEND_MESSAGE, WSECHO_GET_RESPONSE } from '@/constants/actionTypes';

export const sendMessage = (message: string) => ({
	type: WSECHO_SEND_MESSAGE,
	message,
});

export const getResponse = (message: string) => ({
	type: WSECHO_GET_RESPONSE,
	message,
});