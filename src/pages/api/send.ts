/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from 'next'
import email from '../../../emails'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function PostEmail(req: NextApiRequest, res: NextApiResponse) {
  console.log('send function started')

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'delivered@resend.dev',
      subject: 'Hello world',
      html: '<strong>It works!</strong>',
      react: email(),
    })

    res.status(200).json(data)
  } catch (error) {
    res.status(400).json(error)
  }
}
