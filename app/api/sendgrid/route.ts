import sendgrid from "@sendgrid/mail";
import { NextResponse } from 'next/server';

const {SENDGRID_API_KEY, SEND_TO, FROM } = process.env

if (!SENDGRID_API_KEY) {
  throw new Error("Unexpected error: Missing API key");
}

sendgrid.setApiKey(SENDGRID_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  try {
    await sendgrid.send({
      to: `${SEND_TO}`,
      from: `${FROM}`, 
      subject: `${body.subject}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      </head>
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
            <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from ${body.fullname}, their email is: ✉️${body.email} </h3>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${body.message}</p>
              <br>
              </div>
            </div>
        </div>
      </body>
      </html>`,
    });
  } catch (error) {
    // console.log(error);
    return NextResponse.json({ error: (error as Error).message });
  }

  return NextResponse.json({ error: "" });
}
