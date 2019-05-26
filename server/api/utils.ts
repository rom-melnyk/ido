import express from 'express';

export function sendError(res: express.Response, options: { message?: string; debug?: any; status?: number } = {}) {
  const { status, message, debug } = { status: 500, message: 'Server error', debug: undefined, ...options };
  res.status(status).send({ error: true, message, debug });
}
